"use strict";

const {jestMatchers, mouse, screen, Point, Region} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Basic test with custom Jest matchers", () => {
    it("should verify that cursor is at a certain position", async () => {
        // GIVEN
        const targetPoint = new Point(10, 10);
        const targetRegion = new Region(20, 20, 30, 30);

        // WHEN
        await mouse.setPosition(targetPoint);

        // THEN
        await expect(mouse).toBeAt(targetPoint);
        await expect(mouse).not.toBeIn(targetRegion);
    });

    it("should verify that the screen shows a certain image", async () => {
        // GIVEN
        screen.config.resourceDirectory = "../../e2e/assets";

        // WHEN

        // THEN
        await expect(screen).toShow("mouse.png");
    });
});
