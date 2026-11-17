import { PrismaClient } from '@prisma/client'
import { copyFileSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'

/**
 * Database URL resolution for local dev AND read-only serverless hosts.
 *
 * SQLite needs a writable database file AND a writable directory next to
 * it (it writes a rollback journal / WAL there on every transaction).
 * Serverless platforms such as Vercel mount the deployed bundle on a
 * read-only filesystem, so the bundled repository database can never be
 * opened for writes there — every INSERT (register, login session,
 * progress, …) would fail.
 *
 * Resolution order:
 *
 *  1. `DATABASE_URL` is honoured as-is — except `file:` URLs on Vercel
 *     that do not already point into /tmp: those are redirected to a
 *     per-instance copy of the bundled seed database (step 2).
 *  2. On Vercel (`process.env.VERCEL === "1"`) the bundled
 *     `db/custom.db` is copied to `/tmp/talksy/custom.db` once per
 *     lambda instance and used from there.
 *
 *     /tmp is ephemeral: data written on a serverless deployment
 *     (registrations, progress, CMS edits) resets when the instance
 *     recycles. This keeps a public demo fully functional; for durable
 *     data use a self-hosted deployment or a hosted database
 *     (docs/DEPLOYMENT.md §7).
 *
 *  3. Local default: the repository's SQLite file, resolved from the
 *     working directory, so local dev works even without a .env entry.
 */

const SEED_DB_RELATIVE_PATH = path.join('db', 'custom.db')

function copySeedToTmp(): string | null {
  const source = path.resolve(process.cwd(), SEED_DB_RELATIVE_PATH)
  const targetDir = '/tmp/talksy'
  const target = path.join(targetDir, 'custom.db')

  if (existsSync(target)) return `file:${target}`
  if (!existsSync(source)) {
    console.error(
      `[db] Bundled seed database not found at ${source}. ` +
        'On serverless hosts it must ship inside the function bundle — ' +
        'check `outputFileTracingIncludes` in next.config.ts.',
    )
    return null
  }

  try {
    mkdirSync(targetDir, { recursive: true })
    copyFileSync(source, target)
    return `file:${target}`
  } catch (error) {
    console.error('[db] Failed to stage the seed database in /tmp:', error)
    return null
  }
}

function resolveDatabaseUrl(): string {
  const configured = process.env.DATABASE_URL?.trim()
  const onVercel = process.env.VERCEL === '1'

  if (configured) {
    const isFileUrl = configured.startsWith('file:')
    const alreadyWritable = configured.startsWith('file:/tmp')
    // Honour the explicit configuration, unless it is a `file:` URL on a
    // read-only serverless filesystem — those get redirected below.
    if (!onVercel || !isFileUrl || alreadyWritable) return configured
  }

  if (onVercel) {
    const staged = copySeedToTmp()
    if (staged) return staged
    // Fall through with a clear error already logged — Prisma will then
    // surface the underlying failure rather than a confusing wrong path.
  }

  return (
    configured ?? `file:${path.resolve(process.cwd(), SEED_DB_RELATIVE_PATH)}`
  )
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const resolvedUrl = resolveDatabaseUrl()

// Guard: `bun test` sets NODE_ENV=test. The test suite is only ever meant
// to run against db/test.db (see the `test` script in package.json, which
// points DATABASE_URL there). A bare `bun test` would otherwise pick up
// the development database from .env and silently corrupt db/custom.db —
// the very file that ships inside serverless deployments.
if (
  process.env.NODE_ENV === 'test' &&
  resolvedUrl.includes('custom.db')
) {
  throw new Error(
    '[db] Refusing to run tests against the development database ' +
      `(db/custom.db, resolved: ${resolvedUrl}). ` +
      'Run tests via `bun run test`, which points DATABASE_URL at db/test.db.',
  )
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: resolvedUrl,
    log: ["error"],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
