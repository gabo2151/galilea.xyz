// Types for the part of the vendored Vue build this site uses, so type
// checking stops at this file instead of reading Vue's minified source.
// Add declarations here as more of Vue gets used.

export interface App {
  mount(selector: string | Element): unknown;
}

export function createApp(rootComponent: object): App;
