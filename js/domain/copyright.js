/**
 * The footer's copyright line, always with the current year.
 *
 * @param {Object} options
 * @param {string} options.holder Who holds the copyright.
 * @param {Clock} options.clock
 * @returns {string} e.g. "© 2026 Gabriel Galilea"
 */
export function copyrightNotice({ holder, clock }) {
  return `© ${clock.now().getFullYear()} ${holder}`;
}
