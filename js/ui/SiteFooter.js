/**
 * The quiet line at the bottom of the page.
 */
export default {
  name: 'SiteFooter',
  props: {
    /** The copyright line, e.g. "© 2026 Gabriel Galilea". */
    notice: { type: String, required: true },
  },
  template: `<footer class="site-footer">{{ notice }}</footer>`,
};
