const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  createPage({
    path: "/about/",
    component: path.resolve(`./src/pages/about.js`),
    context: {
      // optional context data you can pass to the page component here
    },
  })
}
