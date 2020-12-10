const fs = require('fs');

const inputValues = fs
  .readFileSync('day7/day7-input.txt', { encoding: 'utf-8' })
  .split('\n');

const sampleValues = fs
  .readFileSync('day7/day7-sample-input.txt', { encoding: 'utf-8' })
  .split('\n');

describe('Day 7', function () {
  describe('Part 1', function () {
    const { findValidBags } = require('./day7-1');

    it('should produce correct result for sample data', function () {
      expect(findValidBags(sampleValues)).toBe(4);
    });

    it('should produce correct result', function () {
      expect(findValidBags(inputValues)).toBe(142);
    });
  });

  describe('Part 2', function () {
    const { findBagCount } = require('./day7-2');

    it('should produce correct result for sample data', function () {
      expect(findBagCount(sampleValues)).toBe(32);
    });

    it('should produce correct result', function () {
      expect(findBagCount(inputValues)).toBe(10219);
    });
  });
});
