import { test } from 'node:test';
import assert from 'node:assert/strict';

import { copyrightNotice } from '../../js/domain/copyright.js';

/**
 * A clock stopped at the given date.
 * @param {string} iso
 * @returns {Clock}
 */
const fixedClock = (iso) => ({ now: () => new Date(iso) });

test('shows the current year and the holder', () => {
  const notice = copyrightNotice({
    holder: 'Gabriel Galilea',
    clock: fixedClock('2026-10-18T12:00:00'),
  });

  assert.equal(notice, '© 2026 Gabriel Galilea');
});

test('follows the clock into a new year', () => {
  const notice = copyrightNotice({
    holder: 'Gabriel Galilea',
    clock: fixedClock('2031-01-01T00:00:01'),
  });

  assert.equal(notice, '© 2031 Gabriel Galilea');
});
