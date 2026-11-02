// Composition root of Pocket LAN Party's page: same horizon as the home
// page, with a link to the store and the privacy policy on the floor.
import { createApp } from './vendor/vue.esm-browser.prod.js';

import { systemClock } from './adapters/system-clock.js';
import { copyrightNotice } from './domain/copyright.js';
import { minilan } from './domain/minilan.js';
import { site } from './domain/site.js';
import SiteFooter from './ui/SiteFooter.js';
import SiteTitle from './ui/SiteTitle.js';

createApp({
  components: { SiteTitle, SiteFooter },
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
      <a class="store-button" :href="app.storeUrl">Descárgalo en Google Play</a>
      <a class="quiet-link" :href="app.privacyUrl">Política de privacidad</a>
    </nav>
    <site-footer :notice="notice" />
  `,
}).mount('#app');
