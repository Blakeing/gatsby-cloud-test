import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {article.tags &&
      article.tags.map(tag => (
        <p
          style={{
            color: '#A0A0A0',
            textdDecoration: 'none',
            display: 'inline-block',
            padding: '.33333rem .5rem',
            lineHeight: '1',
            borderRadius: '2px',
            border: '1px solid #A0A0A0',
            marginRight: '.5em',
          }}
          key={tag}
        >
          {tag}
        </p>
      ))}
  </div>
)
