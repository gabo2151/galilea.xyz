/**
 * The site's name standing on the horizon, with its reflection below
 * (drawn in CSS from `data-text`).
 */
export default {
  name: 'SiteTitle',
  props: {
    /** The word shown, also mirrored as the reflection. */
    text: { type: String, required: true },
  },
  template: `<h1 class="site-title" :data-text="text">{{ text }}</h1>`,
};
