import { computed } from '../vendor/vue.esm-browser.prod.js';

/**
 * Each store's name and icon (a 24×24 path drawn in the text's colour).
 * Icons from Material Design Icons (Apache 2.0): google-play, apple.
 * AppGallery has none yet: its button shows the name alone until an icon
 * is added here.
 *
 * @type {Readonly<Record<Store, {label: string, icon?: string}>>}
 */
const stores = Object.freeze({
  play: {
    label: 'Google Play',
    icon: 'M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z',
  },
  appstore: {
    label: 'App Store',
    icon: 'M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.3 14.9,5.14C14.21,5.99 13.07,6.65 11.95,6.56C11.8,5.41 12.36,4.22 13,3.5Z',
  },
  appgallery: { label: 'AppGallery' },
});

/**
 * A quiet outlined button to an app's listing in one store.
 */
export default {
  name: 'StoreButton',
  props: {
    /** Which store: 'play', 'appstore' or 'appgallery'. */
    store: {
      type: String,
      required: true,
      validator: (/** @type {string} */ value) => value in stores,
    },
    /** The app's listing in that store. */
    url: { type: String, required: true },
  },
  /** @param {{store: string}} props */
  setup(props) {
    return {
      details: computed(() => stores[/** @type {Store} */ (props.store)]),
    };
  },
  template: `
    <a class="store-button" :href="url">
      <svg v-if="details.icon" class="store-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" :d="details.icon"/></svg>
      {{ details.label }}
    </a>
  `,
};
