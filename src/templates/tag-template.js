import React from "react"
// Components
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostPreview from "../components/postpreview"
import SEO from "../components/seo"

const TagPage = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with `

  const Posts = edges.map(({ node }) => (
    <PostPreview key={node.id} post={node} />
  ))

  return (
    <Layout>
      <SEO title={tag} />
      <h2>
        {tagHeader}
        <b>[ {tag} ]</b>
      </h2>
      <div className="PostGrid">{Posts}</div>
    </Layout>
  )
}
export default TagPage

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            description
            tags
          }
        }
      }
    }
  }
`
