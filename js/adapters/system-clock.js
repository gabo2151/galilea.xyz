/**
 * Adapter: the device's own clock.
 *
 * @type {Clock}
 */
export const systemClock = {
  now: () => new Date(),
};
