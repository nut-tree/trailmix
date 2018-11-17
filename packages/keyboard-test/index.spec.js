"use strict";

const native = require("@nut-tree/nut-js");

const openLauncher = async (control) => {
    await control.keyboard.type(native.Key.LeftSuper);
}

describe("Keyboard test", () => {
    it("should open Nautilus", async () => {
        const config = new native.Config();
        const control = new native.Controller(config);

        await openLauncher(control);
        await control.keyboard.type("nautilus");
        await control.keyboard.type(native.Key.Return);
    });
});
