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
        icon: "src/images/icon.png",
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
  ],
};
