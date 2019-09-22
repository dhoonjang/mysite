import React from "react"
import { Link } from "gatsby"
const PostPreview = ({ post }) => (
  <div className="PostPreview">
    <Link to={post.frontmatter.path} className="PostLink">
      {post.frontmatter.title}
      <br />({post.frontmatter.date})
    </Link>
  </div>
)
export default PostPreview
