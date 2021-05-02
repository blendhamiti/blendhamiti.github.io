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
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    `gatsby-transformer-json`,
  ],
};
