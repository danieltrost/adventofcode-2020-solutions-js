const fs = require('fs');

const inputValues = fs
  .readFileSync('day6/day6-input.txt', { encoding: 'utf-8' })
  .split('\n\n');

describe('Day 6', function () {
  describe('Part 1', function () {
    const { getYesAnswers } = require('./day6-1');

    it('should produce correct result for sample data', function () {
      const values = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b'];
      expect(getYesAnswers(values)).toBe(11);
    });

    it('should produce correct result', function () {
      expect(getYesAnswers(inputValues)).toBe(6903);
    });
  });

  describe('Part 2', function () {
    const { getYesAnswers } = require('./day6-2');

    it('should produce correct result for sample data', function () {
      const values = ['abc', 'a\nb\nc', 'ab\nac', 'a\na\na\na', 'b'];
      expect(getYesAnswers(values)).toBe(6);
    });

    it('should produce correct result', function () {
      expect(getYesAnswers(inputValues)).toBe(3493);
    });
  });
});
