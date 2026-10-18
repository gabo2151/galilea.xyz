// Composition root: the one place that wires adapters into the domain and
// hands the results to the UI.
import { createApp } from './vendor/vue.esm-browser.prod.js';

import { systemClock } from './adapters/system-clock.js';
import { copyrightNotice } from './domain/copyright.js';
import { site } from './domain/site.js';
import SiteFooter from './ui/SiteFooter.js';
import SiteTitle from './ui/SiteTitle.js';

createApp({
  components: { SiteTitle, SiteFooter },
  setup() {
    return {
      title: site.title,
      notice: copyrightNotice({ holder: site.holder, clock: systemClock }),
    };
  },
  template: `
    <main class="stage">
      <site-title :text="title" />
    </main>
    <site-footer :notice="notice" />
  `,
}).mount('#app');
