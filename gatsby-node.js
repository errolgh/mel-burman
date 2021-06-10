













// exports.createPages = async function({ actions, grapqhl }) {
//     const { data } = await graphql`
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                     node {
//                         frontmatter {
//                             slug
//                         }
//                         id
//                     }
//                 }
//             }
//         }
//     `
// // create paginated pages for posts \/
//     const postsPerPage = 3

//     const numPages = Math.ceil(data.allMdix.edges.length / postsPerPage)

//     Array.from({length: numPages}).forEach((_, i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${i + 1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

// // create single blog post \/
//     data.allMdix.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })
//     })    
// }


// // this is how you create pages dynamically/programmatically in Gatsby
// // https://www.youtube.com/watch?v=7xTMu-nUDqY&list=PLW0RabRDhwwzVNhlOgQQgw6HJzXdM1MnT&index=11