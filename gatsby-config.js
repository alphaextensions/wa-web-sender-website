module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-190269211-1'
      }
    },
    `gatsby-plugin-sass`
  ]
};
