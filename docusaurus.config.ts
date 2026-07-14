import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Core Deploy',
  tagline: 'Apple Enterprise & Education Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ramadan0608.github.io',
  baseUrl: '/coredeploy/',

  organizationName: 'Ramadan0608',
  projectName: 'coredeploy',

  onBrokenLinks: 'throw',

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
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Core Deploy',

      logo: {
        alt: 'Core Deploy',
        src: 'img/logo.svg',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Documentation',
          position: 'left',
        },

        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },

        {
          href: 'https://github.com/Ramadan0608/coredeploy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Apple',
              to: '/docs/apple/apple-business/overview',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Ramadan0608/coredeploy',
            },
          ],
        },

        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],

      copyright: `© ${new Date().getFullYear()} Core Deploy`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;