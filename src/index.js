// addons, panels and events get unique names using a prefix
export const ADDON_ID = 'storybook-addon-usage';
export const PANEL_ID = `${ADDON_ID}/usage-panel`;
export const EVENT_ID = `${ADDON_ID}/usage-event`;

export { register } from './manager';
export { Usage } from './preview';
