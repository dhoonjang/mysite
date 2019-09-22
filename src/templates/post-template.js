import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function Template({ data }) {
  const {
    markdownRemark: { frontmatter, html },
  } = data

  return (
    <Layout>
      <div className="template">
        <SEO title="POSTS" />
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4>
        <div className="" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일 ")
        path
        title
      }
    }
  }
`
