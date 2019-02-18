"use strict";

const { mouse, movement } = require("@nut-tree/nut-js");

const square = async () => {
  await mouse.move(movement.right(500));
  await mouse.move(movement.down(500));
  await mouse.move(movement.left(500));
  await mouse.move(movement.up(500));
};

describe("Basic mouse test", () => {
    it("should move the mouse in square shape", async () => {
        await square();
    });
});
