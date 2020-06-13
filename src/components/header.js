import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { TextInput, Box } from "grommet"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0c5c98`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <Box direction="row-responsive" justify="between" align="center">
        <Box>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        </Box>
        <Box>
        <TextInput
          placeholder="type here"
          style={{color:"white"}}
        />
        </Box>

        
      </Box>
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
