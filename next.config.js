const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  images: {
    domains: [ "cdn.discordapp.com" ]
},
i18n: {
    locales: Object.keys(require(`${process.cwd()}/locales.config.js`)),
    defaultLocale: 'en',
    localeDetection: false,
}
});