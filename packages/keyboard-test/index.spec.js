"use strict";

const { keyboard, Key } = require("@nut-tree/nut-js");

const openLauncher = async () => {
  await keyboard.type(Key.LeftAlt, Key.F2);
};

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

describe("Keyboard test", () => {
  it("should open Thunar", async () => {
    await openLauncher();
    await keyboard.type("thunar");
    await keyboard.type(Key.Return);
    await sleep(1000);
    await keyboard.type(Key.LeftAlt, Key.F4);
  });
});
