import { describe, it, expect } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string, no matter what value is passed in', () => {
    const val1 = 1;
    const val2 = 'invalid';
    const val3 = true;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf('string');
    expect(result2).toBeTypeOf('string');
    expect(result3).toBeTypeOf('string');
  });

  it('should return a string if I pass in a number', () => {
    const param = 1;

    const functionOutput = generateResultText(param);

    expect(functionOutput).toContain(param.toString());
  });

  it('should provide an empty string if "no-calc" is passed in', () => {
    const param = 'no-calc';

    const output = generateResultText(param);

    expect(output).toBe('');
  });

  it('should return a string containing "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const output = generateResultText(result);

    expect(output).toContain('Invalid');
  });
});
