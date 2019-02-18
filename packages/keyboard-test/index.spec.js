"use strict";

const { keyboard, Key } = require("@nut-tree/nut-js");

const openLauncher = async () => {
  await keyboard.type(Key.LeftSuper);
};

describe("Keyboard test", () => {
  it("should open Nautilus", async () => {
    await openLauncher();
    await keyboard.type("nautilus");
    await keyboard.type(Key.Return);
  });
});
