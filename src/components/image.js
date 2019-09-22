import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename }) => {
  const dataArray = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 300) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)

  const image = dataArray.images.edges.find(n =>
    n.node.relativePath.includes(filename)
  )
  if (!image) return null

  return <Img sizes={image.node.childImageSharp.sizes} />
}

export default Image
