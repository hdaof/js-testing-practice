import {it, expect, describe} from "vitest";
import {validateStringNotEmpty, validateNumber} from "./validation";

describe("validateStringNotEmpty()", () => {
  it("should validate string is not empty", () => {
    // Arrange
    const input = "string";

    // Act
    const result = validateStringNotEmpty(input);

    // Assert
    expect(result).not.toBeNull;
  });

  it("should return an error if input is empty", () => {
    const emptyInput = "";
    const errorMessage = "must not be empty.";

    const resultFn = () => validateStringNotEmpty(emptyInput);

    expect(resultFn).toThrow(errorMessage);
  });
});

describe("validateNumber()", () => {
  it("should not throw error if input is a number", () => {
    const input = 1;

    const resultFn = () => validateNumber(input);

    expect(resultFn).not.toThrowError();
  });

  it("should throw error if input is not a number", () => {
    const input = "1";

    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrowError("Invalid number input.");
  });
});
