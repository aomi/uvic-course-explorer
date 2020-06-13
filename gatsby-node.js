/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const result = await graphql(`
      query {
        allCoursesJson {
            edges {
              node {
                catalogCourseId
                description
              }
            }
        }
      }
    `)
    result.data.allCoursesJson.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/c/${node.catalogCourseId}`,
            component: path.resolve(`./src/templates/course.js`),
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                catalogCourseId: node.catalogCourseId,
            },
        })
    })
}