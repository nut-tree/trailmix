"use strict";

const native = require("@nut-tree/nut-js");

const square = async (control) => {
    await control.mouse.move(control.movement.right(500));
    await control.mouse.move(control.movement.down(500));
    await control.mouse.move(control.movement.left(500));
    await control.mouse.move(control.movement.up(500));
};

describe("Basic mouse test", () => {
    it("should move the mouse in square shape", async () => {
        const config = new native.Config();
        const control = new native.Controller(config);

        await square(control);
    });
});
