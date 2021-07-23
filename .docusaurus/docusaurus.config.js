export default {
  "title": "SANA Ant Client",
  "tagline": "Welcome to the Sana",
  "url": "https://docs.ethsana.org",
  "baseUrl": "/",
  "plugins": [
    "E:\\sana\\sana-docs\\node_modules\\docusaurus-lunr-search\\src\\index.js"
  ],
  "onBrokenLinks": "error",
  "onBrokenMarkdownLinks": "error",
  "onDuplicateRoutes": "error",
  "favicon": "img/favicon.ico",
  "organizationName": "Sana",
  "projectName": "ant",
  "themeConfig": {
    "colourMode": {
      "defaultMode": "dark"
    },
    "navbar": {
      "title": "Sana Ant",
      "logo": {
        "alt": "Sana Logo",
        "src": "img/sana-logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Get Started",
          "position": "left"
        },
        {
          "href": "https://github.com/ethsana/sana",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "SNANA",
          "items": [
            {
              "label": "SNAN",
              "to": "https://www.ethsana.org/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/c72mpR7Erf"
            },
            {
              "label": "Telegram",
              "href": "https://t.me/ethereumsana"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/ethereumsana"
            },
            {
              "label": "Medium",
              "href": "https://ethswarm.medium.com/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/ethsana"
            }
          ]
        }
      ],
      "copyright": "Copyleft © 2021."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "E:\\sana\\sana-docs\\sidebars.js",
          "editUrl": "https://github.com/ethsana/sana-docs/blob/master/sidebars.js"
        },
        "theme": {
          "customCss": "E:\\sana\\sana-docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};