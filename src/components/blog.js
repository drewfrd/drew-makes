import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const BlogLayout = ({ children }) => (
<StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
      </>
    )}
  />
)

export default BlogLayout