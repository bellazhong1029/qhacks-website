const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://qhacks.io",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const allowCrawling = {
  policy: [{ userAgent: "*" }],
  sitemap: null
};

const disallowCrawling = {
  policy: [{ userAgent: "*", disallow: ["/"] }],
  sitemap: null,
  host: null
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

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
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: allowCrawling,
          development: disallowCrawling,
          "branch-deploy": disallowCrawling,
          "deploy-preview": disallowCrawling
        }
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        // endpoint: process.env.MAILCHIMP_ENDPOINT,
        endpoint:
          "https://qhacks.us14.list-manage.com/subscribe/post?u=f9a860635bf0e397ab5f86761&amp;id=56b784ad6b",
        timeout: 3500
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Disable the loading spinner.
        showSpinner: true
      }
    }
  ]
};
