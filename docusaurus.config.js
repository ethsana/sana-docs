module.exports = {
  title: "SANA Ant Client",
  tagline: "Welcome to the Sana",
  url: "https://docs.ethsana.org",
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  baseUrl: "/",
  plugins: [require.resolve("docusaurus-lunr-search")],
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  onDuplicateRoutes: "error",
  favicon: "img/favicon.ico",
  organizationName: "Sana", // Usually your GitHub org/user name.
  projectName: "ant", // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Sana Ant",
      logo: {
        alt: "Sana Logo",
        src: "img/sana-logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Get Started",
          position: "left",
        },
        // {
        //   to: 'docs/installation/quick-start',
        //   activeBasePath: 'docs',
        //   label: 'Installation',
        //   position: 'left',
        // },
        // {
        //   to: 'docs/getting-started/start-your-node',
        //   activeBasePath: 'docs',
        //   label: 'Start Your Node',
        //   position: 'left',
        // },
        // {
        //   to: "docs/api-reference/api-reference",
        //   activeBasePath: "docs",
        //   label: "API Reference",
        //   position: "left",
        // },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: "https://github.com/ethsana/sana",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "SNANA",
          items: [
            {
              label: "SNAN",
              to: "https://www.ethsana.org/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/c72mpR7Erf",
            },
            {
              label: "Telegram",
              href: "https://t.me/ethereumsana",
            },
            // {
            //   label: "Mattermost",
            //   href: "https://beehive.ethsana.org/",
            // },
            // {
            //   label: "Reddit",
            //   href: "https://www.reddit.com/r/ethsana",
            // },
            {
              label: "Twitter",
              href: "https://twitter.com/ethereumsana",
            },
            {
              label: "Medium",
              href: "https://ethsana.medium.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   href: "https://medium.com/ethereum-sana",
            // },
            {
              label: "GitHub",
              href: "https://github.com/ethsana",
            },
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       href: 'https://medium.com/ethereum-sana',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/ethersphere/ant',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()}.`,
    },
    // announcementBar: {
    //   id: 'ant_announcements',
    //   content:
    //     '🐝 v0.5.0 is released feat. Sana Feeds! Update your Ants now! 🐝',
    //   backgroundColor: '#dd7200', // Defaults to `#fff`.
    //   textColor: '#242424', // Defaults to `#000`.
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/ethsana/sana-docs/blob/master",
        },
        // blog: {
        //   showReadingTime: false,
        //   // Please change this to your repo.
        //   editUrl: "https://github.com/ethersphere/docs.github.io",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
