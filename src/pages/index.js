import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Img from 'gatsby-image'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
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
                    <div>
                      <Img alt="" fluid={node.heroImage.fluid} />
                      <h3 className="text-xl">
                        <Link to={`/blog/${node.slug}`}>{node.title}</Link>
                      </h3>
                      <small>{node.publishDate}</small>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: node.description.childMarkdownRemark.html,
                        }}
                      />
                      {node.tags &&
                        node.tags.map(tag => (
                          <p
                            className="mt-2 mr-2 text-gray-500 no-underline inline-block px-3 py-2 leading-none border-radius-2 border-2 border-gray-900"
                            key={tag}
                          >
                            {tag}
                          </p>
                        ))}
                    </div>
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

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
