import { allNavDestinations } from "../src/lib/navigation";
const names = new Set<string>();
for (const { item } of allNavDestinations()) for (const n of item.activeWhen) names.add(n);
console.log([...names].join(","));
