const fs = require('fs');

const inputValues = fs
  .readFileSync('day10/day10-input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((n) => parseInt(n));

const sampleValues = fs
  .readFileSync('day10/day10-sample-input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((n) => parseInt(n));

describe('Day 10', function () {
  describe('Part 1', function () {
    const { findJoltDifference } = require('./day10-1');

    it('should produce correct result for sample data', function () {
      expect(findJoltDifference(sampleValues)).toBe(220);
    });

    it('should produce correct result', function () {
      expect(findJoltDifference(inputValues)).toBe(1820);
    });
  });

  describe('Part 2', function () {
    const { findAdapterPermutations } = require('./day10-2');

    it('should produce correct result for sample data', function () {
      expect(findAdapterPermutations(sampleValues)).toBe(19208);
    });

    it('should produce correct result', function () {
      expect(findAdapterPermutations(inputValues)).toBe(3454189699072);
    });
  });
});
