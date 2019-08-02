module.exports = {
  siteMetadata: {
    title: `Papel Walls`,
    description: `Creative wallpaper and vinyl`,
    author: `Marcelo Alves`,
    siteUrl: `https://www.papelwalls.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-145086197-1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://papelwalls.us1.list-manage.com/subscribe/post?u=836000f51f98137a4038ae08d&amp;id=bc8760844c`
      }
    },
  ],
}
