import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tag from "../components/tag"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => {
  const Tags = group.map((tag, index) => (
    <Tag key={index} value={tag.fieldValue} count={tag.totalCount} />
  ))
  return (
    <Layout>
      <SEO title="ALL TAGS" />
      <h2>All Tags</h2>
      <div className="AllTags">{Tags}</div>
    </Layout>
  )
}

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
