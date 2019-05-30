import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Blog from "../components/blog"
import PostLink from "../components/post-link"

import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
.map((edge) => {
  return (
    <PostLink key={edge.node.id} post={edge.node} />
  )
})
  return <Layout>
    <SEO title="Drew Makes" keywords={[`web developer`, `front-end`, `programming`]} />
    <Blog />
    {Posts}     
  </Layout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            path
            title
          }
        }
      }
    }
  }
`

