"use strict";

const { mouse, right, down, left, up } = require("@nut-tree/nut-js");

const square = async () => {
  await mouse.move(right(500));
  await mouse.move(down(500));
  await mouse.move(left(500));
  await mouse.move(up(500));
};

describe("Basic mouse test", () => {
    it("should move the mouse in square shape", async () => {
        jest.setTimeout(10000);
        await square();
    });
});
