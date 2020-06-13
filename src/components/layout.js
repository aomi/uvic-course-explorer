/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Grommet} from "grommet"
import Header from "./header"

const theme = {
  global: {
   colors: {
     'light-2': '#f5f5f5',
     'text': {
       light: 'rgba(0, 0, 0, 0.87)',
     },
   },
   edgeSize: {
     small: '14px',
   },
   elevation: {
     light: {
       medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
     },
   },
    font: {
      family: 'Arial',
      size: '14px',
      height: '20px',
    },
  },
};
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Grommet theme={theme} full>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/aomi">Aomi Jokoji</a>
        </footer>
      </div>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
