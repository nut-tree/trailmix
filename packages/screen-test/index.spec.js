"use strict";

const { screen, Region, imageResource } = require("@nut-tree/nut-js");
require("@nut-tree/template-matcher");

describe("Screen test", () => {
    describe("dimensions", () => {
        it("should log screen height", async () => {
            console.log(await screen.height());
        });

        it("should log screen width", async () => {
            console.log(await screen.width());
        });
    });

    describe("highlight", () => {
        it("should highlight a given Region", async () => {
            await screen.highlight(new Region(100, 100, 500, 500));
        })
    })

    describe("find", () => {
        it("should log region of match", async () => {
            jest.setTimeout(10000);
            screen.config.resourceDirectory = "../../e2e/assets";

            console.log(await screen.find(imageResource("mouse.png")));
        });

        it("should report region with highest match when no match with sufficient confidence is found", async () => {
            jest.setTimeout(10000);
            screen.config.resourceDirectory = "../../e2e/assets";

            try {
                await screen.find(imageResource("calculator.png"));
            } catch (e) {
                console.log(e);
            }
        });
    })

    describe("waitFor", () => {
        it("should wait for a match", async () => {
            jest.setTimeout(10000);
            screen.config.resourceDirectory = "../../e2e/assets";

            await screen.waitFor(imageResource("mouse.png"), 2500);
        });
    })

    describe("on hook", () => {
        it("should trigger hook on match", async () => {
            screen.config.resourceDirectory = "../../e2e/assets";
            screen.config.confidence = 0.1;

            const needle = await imageResource("mouse.png");
            screen.on(needle, target => console.log(`Match found! ${JSON.stringify(target)}`));
            await screen.find(needle);
        });
    })
});
