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
    sidebarDepth: 2,
    lastUpdated: true,
    nav: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
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
        title: 'Introduction',
        path: '/introduction/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Reference Architecture',
        path: '/refarch/',      // optional, link of the title, which should be an absolute path and must exist
        // collapsable: false, // optional, defaults to true
        // sidebarDepth: 1,    // optional, defaults to 1
        initialOpenGroupIndex: 1, // optional, defaults to 0, defines the index of initially opened subgroup,
        children: [
          {
            title: 'Reference Architecture Overview',
            path: '/refarch/',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
          {
            title: 'Bounded Contexts',
            path: '/refarch/Bounded Context/BC_Intro.md',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
         {
            title: 'Interfaces',
            path: '/refarch/Interfaces',      // optional, link of the title, which should be an absolute path and must exist
            // children: [ /* ... */ ],
          },
        ]
     },
      {
        title: 'How to Implement',
        path: '/how_to_implement/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Glossary',
        path: '/glossary/',      // optional, link of the title, which should be an absolute path and must exist
        // children: [ /* ... */ ],
      },
      {
        title: 'Further Reading',
        path: '/further_reading/',      // optional, link of the title, which should be an absolute path and must exist
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
