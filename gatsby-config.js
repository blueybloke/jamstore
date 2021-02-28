module.exports = {
  siteMetadata: {
    title: "JamStore",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3rkidlhl",
        dataset: "store",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-FEH53ZQR1H",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        icon: "src/images/icon.png",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-preact",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-snipcart-advanced",
      options: {
        publicApiKey:
          "NDU2NWQzYTgtYzE0ZS00MGRlLWI5YTMtNjE2ZTIyMjgyNDZlNjM3NTAwODE0NDM3OTAwMzc1",
        defaultLang: "",
        currency: "aud",
      },
    },
  ],
};
