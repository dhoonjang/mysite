import React from "react"
import { Link } from "gatsby"
import "./postpreview.scss"

const PostPreview = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path} className="PostLink">
      <div className="PostPreview">
        <h3>{post.frontmatter.title}</h3>
        <h5>{post.frontmatter.date}</h5>
        {post.frontmatter.description}
      </div>
    </Link>
    <div className="tags">
      <b>Go</b>
      <b>Intro</b>
      <b>Learn</b>
    </div>
  </div>
)
export default PostPreview
