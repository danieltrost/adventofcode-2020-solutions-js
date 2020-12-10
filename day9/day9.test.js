const fs = require('fs');

const inputValues = fs
  .readFileSync('day9/day9-input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((n) => parseInt(n));

const sampleValues = fs
  .readFileSync('day9/day9-sample-input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((n) => parseInt(n));

describe('Day 9', function () {
  describe('Part 1', function () {
    const { findFirstBreak } = require('./day9-1');

    it('should produce correct result for sample data', function () {
      expect(findFirstBreak(sampleValues, 5)).toBe(127);
    });

    it('should produce correct result', function () {
      expect(findFirstBreak(inputValues, 25)).toBe(177777905);
    });
  });

  describe('Part 2', function () {
    const { findEncryptionWeakness } = require('./day9-2');

    it('should produce correct result for sample data', function () {
      expect(findEncryptionWeakness(sampleValues, 127)).toBe(62);
    });

    it('should produce correct result', function () {
      expect(findEncryptionWeakness(inputValues, 177777905)).toBe(23463012);
    });
  });
});
