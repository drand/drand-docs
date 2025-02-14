import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'drand',
  tagline: 'Distributed randomness beacon',
  favicon: 'img/favicon.ico',

  url: 'https://docs.drand.love',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'drand', // GitHub org/user name.
  projectName: 'drand-docs', // GitHub repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/drand/drand-docs/tree/master',
        },
        blog: false,
       // {
       //   blogTitle: 'drand Blog',
       //   blogDescription: 'The latest news from the drand project',
       //   blogSidebarTitle: 'All posts',
       //   blogSidebarCount: 'ALL',
       //   showReadingTime: true,
       //   readingTime: ({content, frontMatter, defaultReadingTime}) =>
       //     defaultReadingTime({content, options: {wordsPerMinute: 300}}),
       //   feedOptions: {
       //     type: ['rss', 'atom'],
       //     xslt: true,
       //   },
       //   editUrl:
       //     'https://github.com/drand/drand-docs/tree/master',
       //   // Useful options to enforce blogging best practices
       //   onInlineTags: 'warn',
       //   onInlineAuthors: 'warn',
       //   onUntruncatedBlogPosts: 'warn',
       // },
        gtag: {
          trackingID: 'G-PH6HJ6ECV2'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/drand-logo.png',
    navbar: {
      title: 'drand',
      logo: {
        alt: 'drand Logo',
        src: 'img/drand-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: 'https://drand.love/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/drand/drand-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Dev Docs',
              to: '/docs/home',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/drand',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/drandworkspace/shared_invite/zt-2p00bn43o-qALTK5RZEIK3I4fIO9h8dQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://drand.love/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/drand/drand',
            },
          ],
        },
      ],
      copyright: `Apache 2.0 and/or MIT Licensed ${new Date().getFullYear()} Randamu, Inc.™ Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity', 'java', 'rust', 'jsx', 'bash', 'protobuf']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
