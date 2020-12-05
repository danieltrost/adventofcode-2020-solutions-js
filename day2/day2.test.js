const fs = require('fs');

const inputValues = fs
  .readFileSync('day2/day2-input.txt', { encoding: 'utf-8' })
  .split('\n');

describe('Day 2', function () {
  describe('Part 1', function () {
    const { validPasswords } = require('./day2-1');

    it('should produce correct result for sample data', function () {
      const values = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
      expect(validPasswords(values)).toBe(2);
    });

    it('should produce correct result', function () {
      expect(validPasswords(inputValues)).toBe(493);
    });
  });

  describe('Part 2', function () {
    const { validPasswords } = require('./day2-2');

    it('should produce correct result for sample data', function () {
      const values = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
      expect(validPasswords(values)).toBe(1);
    });

    it('should produce correct result', function () {
      expect(validPasswords(inputValues)).toBe(593);
    });
  });
});
