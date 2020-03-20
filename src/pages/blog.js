import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div
            style={{ height: '61.8vh', maxHeight: '400px' }}
            className="flex justify-center items-center bg-gray-300 text-2xl overflow-hidden"
          >
            Blog
          </div>
          <div
            style={{ width: 'calc(100% - 10vmin)', padding: '5vmin 0' }}
            className="mx-auto my-0"
          >
            <h2
              style={{ marginBottom: '5vmin' }}
              className="pb-2 border-gray-300 border-b-2"
            >
              Recent articles
            </h2>
            <ul
              style={{ gridGap: '5vmin' }}
              className="grid-cols-auto grid list-none m-0 p-0"
            >
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
