import test from 'node:test';
import assert from 'node:assert/strict';
const validSeats = n => Number.isInteger(n) && n >= 1 && n <= 8;
test('accepts a valid booking', () => assert.equal(validSeats(2), true));
test('rejects zero seats', () => assert.equal(validSeats(0), false));
test('rejects fractional seats', () => assert.equal(validSeats(1.5), false));
