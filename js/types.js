// Shared JSDoc types. This file has no import or export on purpose: editors
// and the type checker then read it as a script, so every type declared here
// is global and is written as just `{Clock}` anywhere in the project. The
// browser never loads it.
//
// Write each description as the block's leading text, not as a @description
// tag between @typedef and @property: TypeScript then drops the properties
// and the type becomes an empty Object.

/**
 * Port: where the domain reads the current time from. The browser's clock
 * lives in an adapter (`js/adapters/system-clock.js`); tests pass a fixed one.
 * @typedef {Object} Clock
 * @property {() => Date} now - Returns the current date and time.
 */
