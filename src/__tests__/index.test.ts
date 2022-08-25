import { describe, expect, it } from "vitest";

describe("foobar()", () => {
  describe("given two positive integers", () => {
    const first = 1;
    const second = 2;

    describe("when called", () => {
      it("returns the sum of them multiplied by 3", () => {
        expect(first + second).toEqual(3);
      });
    });
  });
});
