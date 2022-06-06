exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
  
	const wpData = await graphql(`
    query PageQuery {
        allWpPage {
            nodes {
              slug
              sections {
                sections {
                    __typename
                  ... on WpPage_Sections_Sections_Text {
                    title
                    content
                  }
                  ... on WpPage_Sections_Sections_Banner {
                    title
                    content
                    bannerButton {
                        title
                        url
                    }
                  }
                  ... on WpPage_Sections_Sections_BannerWithColor {
                    title
                    content
                    coloredBannerButton {
                      title
                      url
                    }
                  }
                }
              }
            }
          }
      }
  `)

	if (wpData.errors) {
		console.error(wpData.errors)
	}

// 	const { allWpPost } = wpData.data
// 	allWpPost.nodes.forEach( post => {
// 		createPage({
// 			path: `blog/${post.slug}`,
// 			component: require.resolve(`./src/templates/post.js`),
// 			context: { post },
// 		})
// 	})

	const { allWpPage } = wpData.data
	allWpPage.nodes.forEach( page => {
		createPage({
			path: `/${page.slug}`,
			component: require.resolve(`./src/templates/page.js`),
			context: { page },
		})
	})
  
}