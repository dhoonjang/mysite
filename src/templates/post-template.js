import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import "./post-template.scss"
import Tag from "../components/tag"

const PostPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data
  console.log(frontmatter.tags)
  const Tags = frontmatter.tags.map((tag, index) => (
    <Tag key={index} value={tag} />
  ))

  return (
    <Layout>
      <div className="template">
        <SEO title="POSTS" />
        <h1>{frontmatter.title}</h1>
        <div className="InfoBar">
          <h4>{frontmatter.description}</h4>
          <h4 className="date">{frontmatter.date}</h4>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <div className="PostTags">{Tags}</div>
      </div>
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        title
        description
        tags
      }
    }
  }
`
