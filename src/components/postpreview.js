import React from "react"
import { Link } from "gatsby"
import "./postpreview.scss"
import Tag from "./tag"

const PostPreview = ({ post }) => {
  const Tags = post.frontmatter.tags.map((tag, index) => (
    <Tag key={index} value={tag} />
  ))
  return (
    <div className="PostPreview">
      <Link to={post.fields.slug}>
        <h3 className="PostTitle">{post.frontmatter.title}</h3>
        <div className="PostBody">
          <h5>{post.frontmatter.date}</h5>
          {post.frontmatter.description}
        </div>
      </Link>
      <div className="Tags">{Tags}</div>
    </div>
  )
}
export default PostPreview
