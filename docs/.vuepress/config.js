const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Mojaloop Reference Architecture Docs 1.0',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/reference-architecture-doc/',

  /**
   * Customize Markdown
   */
  markdown: {
    /// Options for markdown-it
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       true,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    // linkify:      false,        // Autoconvert URL-like text to links
  
    /// Enable some language-neutral replacement + quotes beautification
    /// For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
    typographer:  true,
  
    /// Double + single quotes replacement pairs, when typographer enabled,
    /// and smartquotes on. Could be either a String or an Array.
    ///
    /// For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    /// and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    // quotes: '“”‘’',
  
    /// Highlighter function. Should return escaped HTML,
    /// or '' if the source string is not changed and should be escaped externally.
    /// If result starts with <pre... internal wrapper is skipped.
    // highlight: function (/*str, lang*/) { return ''; }
    
    extendMarkdown: md => {
      md.use(require('markdown-it'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-multimd-table'), {
        /// Options for markdown-it-multimd-table
        multiline:  true,
        rowspan:    true,
        headerless: true,
      })
    }
  },

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
    sidebarDepth: 1,
    lastUpdated: true,
    nav: [
      {
        text: 'Introduction',
        link: '/introduction/',
      },
      {
        text: 'Mojaloop',
        link: 'https://mojaloop.io/'
      }
    ],
    sidebar: [
      {
        title: 'Introduction',
        path: '/introduction/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
 
          {
            title: 'Reference Architecture Overview',
            path: '/refarch/',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
          {
            title: 'Bounded Contexts',
            path: '/boundedContexts/intro',      // optional, link of the title, which should be an absolute path and must exist
            children: [
              {
                title: 'Account Lookup & Discovery',
                path: '/boundedContexts/accountLookupAndDiscovery/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Accounts & Balances',
                path: '/boundedContexts/accountsAndBalances/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Quoting/Agreements',
                path: '/boundedContexts/quotingAgreement/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Auditing',
                path: '/boundedContexts/auditing/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'FSP Interop API',
                path: '/boundedContexts/fspInteropApi/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Logging',
                path: '/boundedContexts/logging/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Notifications And Alerts',
                path: '/boundedContexts/notificationsAndAlerts/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Participant Lifecycle Management',
                path: '/boundedContexts/participantLifecycleManagement/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Platform Monitoring',
                path: '/boundedContexts/platformMonitoring/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Reporting',
                path: '/boundedContexts/reporting/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Scheduling',
                path: '/boundedContexts/scheduling/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Security',
                path: '/boundedContexts/security/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Settlements',
                path: '/boundedContexts/settlements/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Third Party API',
                path: '/boundedContexts/thirdPartyApi/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
              {
                title: 'Transfers',
                path: '/boundedContexts/transfers/',      // optional, link of the title, which should be an absolute path and must exist
                // children: [ /* ... */ ],
              },
            ],
          },
         {
            title: 'Common Interface List',
            path: '/refarch/commonInterfaces',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
 
     
      {
        title: 'How to Implement',
        path: '/howToImplement/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Glossary',
        path: '/glossary/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Further Reading',
        path: '/furtherReading/',      // optional, link of the title, which should be an absolute path and must exist
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
