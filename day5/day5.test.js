const fs = require('fs');

const inputValues = fs
  .readFileSync('day5/day5-input.txt', { encoding: 'utf-8' })
  .split('\n');

describe('Day 5', function () {
  describe('Part 1', function () {
    const { getHighestSeat } = require('./day5-1');

    it('should produce correct result for sample data', function () {
      const values = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
      expect(getHighestSeat(values)).toBe(820);
    });

    it('should produce correct result', function () {
      expect(getHighestSeat(inputValues)).toBe(864);
    });
  });

  describe('Part 2', function () {
    const { getMissingSeat } = require('./day5-2');

    it('should produce correct result', function () {
      expect(getMissingSeat(inputValues)).toBe(739);
    });
  });
});
