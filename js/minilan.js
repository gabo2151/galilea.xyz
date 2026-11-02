// Composition root of Pocket LAN Party's page: same horizon as the home
// page, with a button per store and the privacy policy on the floor.
import { createApp } from './vendor/vue.esm-browser.prod.js';

import { systemClock } from './adapters/system-clock.js';
import { copyrightNotice } from './domain/copyright.js';
import { minilan } from './domain/minilan.js';
import { site } from './domain/site.js';
import StoreButton from './ui/StoreButton.js';
import SiteFooter from './ui/SiteFooter.js';
import SiteTitle from './ui/SiteTitle.js';

createApp({
  components: { SiteTitle, SiteFooter, StoreButton },
  setup() {
    return {
      app: minilan,
      notice: copyrightNotice({ holder: site.holder, clock: systemClock }),
    };
  },
  template: `
    <main class="stage">
      <site-title class="site-title--long" :text="app.title" />
    </main>
    <nav class="app-links">
      <store-button
        v-for="listing in app.stores"
        :key="listing.store"
        :store="listing.store"
        :url="listing.url"
      />
      <a class="quiet-link" :href="app.privacyUrl">Privacy policy</a>
    </nav>
    <site-footer :notice="notice" />
  `,
}).mount('#app');
