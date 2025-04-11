import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'drand',
  tagline: 'Distributed randomness beacon',
  favicon: 'img/favicon.ico',

  url: 'https://docs.drand.love',
  baseUrl: '/',

  staticDirectories: ['static'],

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
          docItemComponent: '@theme/ApiItem',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          blogTitle: 'drand Blog',
          blogDescription: 'The latest news from the drand project',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/drand/drand-docs/tree/master',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        
        gtag: {
          trackingID: 'G-PH6HJ6ECV2'
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/blog-sidebar.css',
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/drand-logo.png',
    navbar: {
      logo: {
        alt: 'drand Logo',
        src: 'img/logo-drand-text-right-dark.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: "docSidebar",
          sidebarId: "aboutSidebar",
          position: "left",
          label: "About",
        },
        {
          type: "docSidebar",
          sidebarId: "conceptsSidebar",
          position: "left",
          label: "Concepts",
        },
        {
          type: "docSidebar",
          sidebarId: "devsSidebar",
          position: "left",
          label: "Devs",
        },
        {
          type: "docSidebar",
          sidebarId: "opsSidebar",
          position: "left",
          label: "Ops",
        },
        {
          type: "docSidebar",
          sidebarId: "communitySidebar",
          position: "left",
          label: "Community",
        },
        // adding links to the right
        {to: '/blog', label: 'Blog', position: 'right'},
        {href: 'https://drand.love/', label: 'drand.love', position: 'right'},
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
            {
              label: 'HTTP API Docs',
              to: '/docs/dev-guide/API%20Documentation%20v2/drand-http-api/',
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
              href: 'https://drand.love/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/drand/drand',
            },
            {
              label: 'A Randamu, Inc.™ Creation',
              href: 'https://randa.mu',
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
    languageTabs: [
      {
        highlight: 'bash',
        language: 'curl',
        logoClass: 'curl',
      },
      {
        highlight: 'go',
        language: 'go',
        logoClass: 'go',
      },
      {
        highlight: 'rust',
        language: 'rust',
        logoClass: 'rust',
      },
      {
        highlight: 'python',
        language: 'python',
        logoClass: 'python',
      },
      {
        highlight: 'nodejs',
        language: 'nodejs',
        logoClass: 'nodejs',
      },
    ],
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          drand: {
            specPath: "src/drand-api.yaml",
            outputDir: "docs/dev-guide/API Documentation v1",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          drandV2: {
            specPath: "src/drand-api-v2.yaml",
            outputDir: "docs/dev-guide/API Documentation v2",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      }
    ]
  ],
  themes: [
    'docusaurus-theme-openapi-docs',
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
