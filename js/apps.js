// Composition root of the apps index: same horizon as the home page, with
// the list of apps in a box on the floor.
import { createApp } from './vendor/vue.esm-browser.prod.js';

import { systemClock } from './adapters/system-clock.js';
import { apps } from './domain/apps.js';
import { copyrightNotice } from './domain/copyright.js';
import { site } from './domain/site.js';
import SiteFooter from './ui/SiteFooter.js';
import SiteTitle from './ui/SiteTitle.js';

createApp({
  components: { SiteTitle, SiteFooter },
  setup() {
    return {
      apps,
      notice: copyrightNotice({ holder: site.holder, clock: systemClock }),
    };
  },
  template: `
    <main class="stage">
      <site-title text="APPS" />
    </main>
    <nav class="app-list">
      <ul>
        <li v-for="app in apps" :key="app.url">
          <a :href="app.url">{{ app.name }}</a>
        </li>
      </ul>
    </nav>
    <site-footer :notice="notice" />
  `,
}).mount('#app');
