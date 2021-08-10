const { description } = require('../../package')


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Reference Architecture Docs 1.0',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#00a3ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: 'titanium',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: 'Edit this page on GitHub',
    smoothScroll: true,
    logo: '/mojaloop_logo_med.png',
    sidebarDepth: 2,
    lastUpdated: true,
    nav: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
      },
      {
        text: 'Title 1',
        link: '/title1/'
      },
      {
        text: 'Title 2',
        link: '/title2/'
      },
      {
        text: 'Title 3',
        link: '/title3/'
      },
      {
        text: 'Mojaloop',
        link: 'https://mojaloop.io/'
      }
    ],
    sidebar: [
      {
        title: 'Getting Started',   // required
        path: '/getting-started/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        initialOpenGroupIndex: -1, // optional, defaults to 0, defines the index of initially opened subgroup,
        children: [
          {
            title: 'Home',
            path: '/',      // optional, link of the title, which should be an absolute path and must exist
          },
          {
            title: 'Sub Menu',
            path: '/getting-started/sub-menu/',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
        ]
      },
      {
        title: 'Title 1',
        path: '/title1/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Title 2',
        path: '/title2/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Title 3',
        path: '/title3/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'versioning'
  ]
}
