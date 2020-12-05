const fs = require('fs');

const inputValues = fs
  .readFileSync('day3/day3-input.txt', { encoding: 'utf-8' })
  .split('\n');

describe('Day 3', function () {
  describe('Part 1', function () {
    const { calculateTreesHit } = require('./day3-1');

    it('should produce correct result for sample data', function () {
      const values = [
        '..##.......',
        '#...#...#..',
        '.#....#..#.',
        '..#.#...#.#',
        '.#...##..#.',
        '..#.##.....',
        '.#.#.#....#',
        '.#........#',
        '#.##...#...',
        '#...##....#',
        '.#..#...#.#',
      ];
      expect(calculateTreesHit(values)).toBe(7);
    });

    it('should produce correct result', function () {
      expect(calculateTreesHit(inputValues)).toBe(187);
    });
  });

  describe('Part 2', function () {
    const { calculateSlopeResults } = require('./day3-2');

    it('should produce correct result for sample data', function () {
      const values = [
        '..##.......',
        '#...#...#..',
        '.#....#..#.',
        '..#.#...#.#',
        '.#...##..#.',
        '..#.##.....',
        '.#.#.#....#',
        '.#........#',
        '#.##...#...',
        '#...##....#',
        '.#..#...#.#',
      ];
      expect(calculateSlopeResults(values)).toBe(336);
    });

    it('should produce correct result', function () {
      expect(calculateSlopeResults(inputValues)).toBe(4723283400);
    });
  });
});
