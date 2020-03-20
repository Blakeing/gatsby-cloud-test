import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={data.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="relative bg-black text-white text-center">
          <Img
            style={{ height: '61.8vh', maxHeight: '400px' }}
            alt={post.title}
            fluid={post.heroImage.fluid}
          />
        </div>
        <div
          style={{ width: 'calc(100% - 10vmin)', padding: '5vmin 0' }}
          className="mx-auto my-0"
        >
          <h1
            style={{ marginBottom: '5vmin' }}
            className="pb-2 border-gray-300 border-b-2"
          >
            {post.title}
          </h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
