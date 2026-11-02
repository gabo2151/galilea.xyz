/**
 * Pocket LAN Party's page. The static fallback in apps/minilan/index.html
 * repeats these values: keep both in sync.
 */
export const minilan = Object.freeze({
  title: 'POCKET LAN PARTY',
  /** One button per store, in this order. @type {readonly StoreListing[]} */
  stores: Object.freeze([
    {
      store: 'play',
      url: 'https://play.google.com/store/apps/details?id=xyz.galilea.games.minilan',
    },
  ]),
  privacyUrl: '/apps/minilan/privacy-policy/',
});
