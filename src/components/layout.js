/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import SideBar from "../components/side-bar"

import "./layout.css"

const Layout = ({ children }) => (
      <>
       <div
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            display: 'grid',
            gridTemplateColumns: '1fr minmax(300px, 600px) 1fr',
            gridGap: '1rem'
          }}
        >
          <SideBar />
          <main>{children}</main>
          <SideBar />
        </div>
      </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
