import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <div className="Flex">
        <Link to="/">
          <h1 className="Title">{siteTitle}</h1>
        </Link>
        <div>
          <Link to="/tags">
            <div className="AllTagsLink">All Tags</div>
          </Link>
          <Link to="/schedule">
            <div className="AllTagsLink">Schedule</div>
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
