import {it, expect} from "vitest";

import {add} from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 2];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  expect(result).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 2];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of contains string representations of numbers", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);
  const expectedResult = numbers.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);

  expect(result).toBe(expectedResult);
});

it("should yield 0 if empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no value is passed into function - solution #1", () => {
  try {
    const result = add();
  } catch (error) {
    expect(error).toBeDefined();
  }
});

it("should throw an error if no value is passed into function - solution #2", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow(/numbers is not iterable/);
});

it("should throw an error if provided with multiple arguments instead of array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/numbers is not iterable/);
});
