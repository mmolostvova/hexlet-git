import { strict as assert } from 'assert';

import { capitalize } from '../src/capitalize.js'

assert.deepStrictEqual(capitalize('hello'), 'Hello');
assert.deepStrictEqual(capitalize(''), '');

console.log('Все тесты пройдены!');