const fs = require('fs');

const inputValues = fs
  .readFileSync('day8/day8-input.txt', { encoding: 'utf-8' })
  .split('\n');

const sampleValues = fs
  .readFileSync('day8/day8-sample-input.txt', { encoding: 'utf-8' })
  .split('\n');

describe('Day 8', function () {
  describe('Part 1', function () {
    const { findAccumulator } = require('./day8-1');

    it('should produce correct result for sample data', function () {
      expect(findAccumulator(sampleValues)).toBe(5);
    });

    it('should produce correct result', function () {
      expect(findAccumulator(inputValues)).toBe(1217);
    });
  });

  describe('Part 2', function () {
    const { findFinishedAccumulator } = require('./day8-2');

    it('should produce correct result for sample data', function () {
      expect(findFinishedAccumulator(sampleValues)).toBe(8);
    });

    it('should produce correct result', function () {
      expect(findFinishedAccumulator(inputValues)).toBe(501);
    });
  });
});
