import { Link } from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"

const Tag = ({ value, count }) => (
  <Link to={`/tags/${kebabCase(value)}/`}>
    <div className="Tag">
      {value} {count ? `(${count})` : ``}
    </div>
  </Link>
)

export default Tag
