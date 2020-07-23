const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://qhacks.io',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const allowCrawling = {
  policy: [{ userAgent: '*' }],
  sitemap: null
};

const disallowCrawling = {
  policy: [{ userAgent: '*', disallow: ['/'] }],
  sitemap: null,
  host: null
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl,
    title: "QHacks Website"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-glamor",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-72429502-3",
        head: false,
        anonymize: false,
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "QHacks",
        short_name: "QHacks",
        start_url: "/",
        background_color: "#00205b",
        theme_color: "#c81c2e",
        display: "minimal-ui",
        icon: "src/assets/img/logo/qhacksAppIcon.png"
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: allowCrawling,
          development: disallowCrawling,
          'branch-deploy': disallowCrawling,
          'deploy-preview': disallowCrawling
        }
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT, // string; add your MC list endpoint here
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ]
};