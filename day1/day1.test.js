const fs = require('fs');

const inputValues = fs
  .readFileSync('day1/day1-input.txt', { encoding: 'utf-8' })
  .split('\n')
  .map((v) => parseInt(v));

describe('Day 1', function () {
  describe('Part 1', function () {
    const { find2020 } = require('./day1-1');

    it('should produce correct result for sample data', function () {
      const values = [1721, 979, 366, 299, 675, 1456];
      expect(find2020(values)).toEqual(514579);
    });

    it('should produce correct result', function () {
      expect(find2020(inputValues)).toEqual(964875);
    });
  });

  describe('Part 2', function () {
    const { find2020 } = require('./day1-2');

    it('should produce correct result for sample data', function () {
      const values = [1721, 979, 366, 299, 675, 1456];
      expect(find2020(values)).toEqual(241861950);
    });

    it('should produce correct result', function () {
      expect(find2020(inputValues)).toEqual(158661360);
    });
  });
});
