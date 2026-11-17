"""Renders the curriculum dependency diagram HTML to PNG via Playwright.

Follows the charts skill Playwright+CSS rules: device_scale_factor=2,
auto-fit viewport to the #root bounding box, element screenshot.
"""

import asyncio
import os
from playwright.async_api import async_playwright

HTML = os.path.join(os.path.dirname(__file__), "curriculum-dependency-graph.html")
OUT = os.path.join(os.path.dirname(__file__), "../docs/assets/curriculum-dependency-graph.png")


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(
            viewport={"width": 1300, "height": 900}, device_scale_factor=2
        )
        await page.goto(f"file://{os.path.abspath(HTML)}", wait_until="networkidle")
        await page.wait_for_timeout(400)

        el = page.locator("#root")
        bbox = await el.bounding_box()
        if bbox:
            fit_w = max(1300, int(bbox["width"] + 80))
            fit_h = int(bbox["height"] + 80)
            await page.set_viewport_size({"width": fit_w, "height": fit_h})
            await page.wait_for_timeout(200)
        await el.screenshot(path=os.path.abspath(OUT))
        await browser.close()
        print(f"rendered {OUT} ({os.path.getsize(OUT)/1024:.0f}KB, bbox={bbox})")


asyncio.run(main())
