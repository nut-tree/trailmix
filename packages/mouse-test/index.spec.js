"use strict";

const {Button, jestMatchers, mouse, straightTo, centerOf, randomPointIn, Region, right, down, left, up} = require("@nut-tree/nut-js");

expect.extend(jestMatchers);

describe("Mouse test", () => {
    describe("movment", () => {
        it("should demonstrate relative movement", async () => {
            jest.setTimeout(10000);
            await mouse.move(right(500));
            await mouse.move(down(500));
            await mouse.move(left(500));
            await mouse.move(up(500));
        });

        it("should demo straight movement to a Region's center point", async () => {
            // GIVEN
            const targetRegion = new Region(500, 500, 100, 100);

            // WHEN
            await mouse.move(straightTo(centerOf(targetRegion)));

            // THEN
            await expect(mouse).toBeIn(targetRegion);
        });

        it("should demo straight movement to a random Point within a Region", async () => {
            // GIVEN
            const targetRegion = new Region(500, 500, 100, 100);

            // WHEN
            await mouse.move(straightTo(randomPointIn(targetRegion)));

            // THEN
            await expect(mouse).toBeIn(targetRegion);
        });
    });

    describe("scroll", () => {
        it("should demonstrate mouse scroll", async () => {
            await mouse.scrollUp(10);
            await mouse.scrollDown(10);
            await mouse.scrollLeft(5);
            await mouse.scrollRight(5);
        });
    });

    describe("drag", () => {
        it("should perform mouse drag by using 'drag", async () => {
            // GIVEN
            const targetRegion = new Region(500, 500, 100, 100);

            // WHEN
            await mouse.drag(straightTo(randomPointIn(targetRegion)));

            // THEN
            await expect(mouse).toBeIn(targetRegion);
        });

        it("should perform mouse drag by pressing and holding the left mouse button", async () => {
            // GIVEN
            const targetRegion = new Region(500, 500, 100, 100);

            // WHEN
            await mouse.pressButton(Button.LEFT);
            await mouse.move(straightTo(randomPointIn(targetRegion)));
            await mouse.releaseButton(Button.LEFT);

            // THEN
            await expect(mouse).toBeIn(targetRegion);
        });
    });
});
