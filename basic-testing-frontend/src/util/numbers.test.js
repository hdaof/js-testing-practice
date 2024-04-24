import {it, expect} from "vitest";
import {transformToNumber} from "./numbers";

it("should transform a string number to a number of type number", () => {
  // Arrange
  const input = "1";

  // Act
  const result = transformToNumber(input);

  // Assert
  expect(result).toBe(1);
  // more tests
  expect(result).toBe(+input);
  expect(result).toBeTypeOf("number");
});

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});

it.skip("should throw an error if value is already an integer", () => {
  //  TODO update function to throw error
  const input = 1;

  const resultFn = () => {
    transformToNumber(input);
  };

  expect(resultFn).toThrow();
});
