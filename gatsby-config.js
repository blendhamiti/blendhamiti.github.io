module.exports = {
  siteMetadata: {
    title: `Blend's Portfolio`,
    siteUrl: `https://blendhamiti.github.io`,
    description: `Portfolio website`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `api`,
        path: `${__dirname}/api/`,
      },
    },
    `gatsby-transformer-json`,
  ],
};
