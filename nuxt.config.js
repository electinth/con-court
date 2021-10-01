const BASE_URL = 'https://elect.in.th/con-court/'
// const BASE_URL = 'https://electinth.github.io/con-court/'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: '/con-court/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ศาลรัฐธรรมนูญกับการเมือง',

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "หลากหลายการวินิจฉัยของศาลรัฐธรรมนูญสร้างผลลัพธ์สำคัญต่อการเมืองไทย",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "ศาลรัฐธรรมนูญกับการเมือง",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "หลากหลายการวินิจฉัยของศาลรัฐธรรมนูญสร้างผลลัพธ์สำคัญต่อการเมืองไทย",
      },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: BASE_URL + "og_image.jpg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: BASE_URL,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "ศาลรัฐธรรมนูญกับการเมือง",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "หลากหลายการวินิจฉัยของศาลรัฐธรรมนูญสร้างผลลัพธ์สำคัญต่อการเมืองไทย",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:image",
        name: "twitter:image:src",
        content: BASE_URL + "og_image.jpg",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: BASE_URL,
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/con-court/favicon.ico',
      },
      { rel: 'stylesheet', href: 'https://assets.elect.in.th/typography.css' },
    ],
    script: [
      {
        src: "https://analytics.punchup.world/js/plausible.js",
        async: true,
        defer: true,

      },
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/elect.client.js',
    '@/plugins/smoothscroll.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-mq', 'vue-plausible'],

  plausible: {
    domain: 'elect.in.th/con-court',
    apiHost: 'https://plausible.anyon.ml',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  mq: {
    defaultBreakpoint: 'desktop',
    breakpoints: {
      mobile: 767,
      tablet: 1023,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity,
    },
  },
}
