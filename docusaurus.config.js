// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  // or, if you want to specify options:

  // ...
  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //       // Options here
  //     },
  //   ],
  // ],
  plugins: [
    require.resolve('docusaurus-lunr-search') ,
    require.resolve('./plugins/katex.js'),
  // {
  //   position: 'left',
  // },
 ],


  
  title: 'Knowledge Base',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/mo_logo.png',

  // Set the production url of your site here
  url: 'https://itsays-zqc.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itsays-zqc', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mo_logo.jpg',

      customCss: [require.resolve('./src/css/custom.css')],



      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
  
      //   indexName: 'YOUR_INDEX_NAME',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: '/docs/', // or as RegExp: /\/docs\//
      //     to: '/',
      //   },
  
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
  
      //   //... other Algolia params
      // },
  
      // 导航
      navbar: {
        title: 'Max-Optics',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mo_logo.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'faqSidebar',
            position: 'left',
            label: 'FAQ',
            // items: [{ label: 'faq1', to:'faq'} ,],  
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'howdoiSidebar',
          //   position: 'left',
          //   label: 'How do I',
          // },
          {
            type: 'docSidebar',
            sidebarId: 'examplesSidebar',
            position: 'left',
            label: 'Example Library',
          },

          // {
          //   type: 'docSidebar',
          //   sidebarId: 'sdkSidebar',
          //   position: 'left',
          //   label: 'sdk',
          // },

          {
            type: 'docSidebar',
            sidebarId: 'testSidebar',
            position: 'left',
            label: 'Max-Optics SDK',
          },

          {
            href: 'https://max-optics.com/?lang=zh-cn',
            label: 'Support',
            position: 'right',
          },
          {
            label:'Release Log',
            to:'blog',
            position:'left'
          },
          
        ],
      },


      // 底部
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {
                label: 'FDTD',
                to: '/docs/intro',
              },
              {
                label: 'MODE',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Terms of Service',
                to: '/blog',
              },
              {
                label: 'Cookie Policy',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Privacy',
                to: '/blog',
              },
              {
                label: 'Legal Notices',
                to: '/blog',
              },
              {
                label: 'Sitemap',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shanghai Max-Optics Information Technology Co.,Ltd`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: undefined,
      },

    }),
};

module.exports = config;
