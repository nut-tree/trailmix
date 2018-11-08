"use strict";

const native = require("native-ui-toolkit");

const square = async (control) => {
    await control.mouse.move(control.movement.right(500));
    await control.mouse.move(control.movement.down(500));
    await control.mouse.move(control.movement.left(500));
    await control.mouse.move(control.movement.up(500));
};

const openSpotlight = async (control) => {
    await control.keyboard.pressKey(native.Key.LeftSuper);
    await control.keyboard.pressKey(native.Key.Space);
    await control.keyboard.releaseKey(native.Key.Space);
    await control.keyboard.releaseKey(native.Key.LeftSuper);
}

describe("Basic test", () => {
    it("Should run a simple test", async () => {
        const config = new native.Config();
        const control = new native.Controller(config);

        await square(control);
        await openSpotlight(control);
        await control.keyboard.type("calculator");
        await control.keyboard.type(native.Key.Return);
    });
});
