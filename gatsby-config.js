module.exports = {
  siteMetadata: {
    title: `Blend's Portfolio`,
    siteUrl: `https://blendhamiti.github.io`,
    description: `Portfolio website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blend's Portfolio`,
        short_name: `Blend's Portfolio`,
        lang: `en`,
        start_url: `/`,
        background_color: `#1f3e5a`,
        theme_color: `#145051`,
        display: `standalone`,
        icon: `src/images/profile/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://blendhamiti.github.io`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: `${__dirname}/data/api/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/data/images/`,
      },
    },
  ],
};
