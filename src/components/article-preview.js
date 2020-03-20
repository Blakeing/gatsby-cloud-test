import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className="text-xl">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <div
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags &&
      article.tags.map(tag => (
        <p
          className="mt-2 mr-2 text-gray-500 no-underline inline-block px-3 py-2 leading-none border-radius-2 border-2 border-gray-900"
          key={tag}
        >
          {tag}
        </p>
      ))}
  </div>
)
