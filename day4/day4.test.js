const fs = require('fs');

const inputValues = fs
  .readFileSync('day4/day4-input.txt', { encoding: 'utf-8' })
  .split('\n\n');

describe('Day 4', function () {
  describe('Part 1', function () {
    const { validPassports } = require('./day4-1');

    it('should produce correct result', function () {
      expect(validPassports(inputValues)).toBe(237);
    });
  });

  describe('Part 2', function () {
    const { validPassports } = require('./day4-2');

    it('should produce correct result', function () {
      expect(validPassports(inputValues)).toBe(172);
    });
  });
});
