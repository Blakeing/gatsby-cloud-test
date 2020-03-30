import React, { useState } from 'react'
import { motion } from 'framer-motion'
import shuffle from 'lodash/shuffle'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.25,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const Web = ({ data }) => {
  const items = data.allContentfulPortfolioItem.edges

  return (
    <>
      <div className="hidden pr-40 lg:w-full lg:flex lg:items-center lg:justify-end">
        <div className="px-3 py-1 text-2xl font-thin text-white border-l-4 border-white bg-dark-steel ">
          Select a Category
        </div>

        <Link
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none"
          to="/web"
        >
          Web
        </Link>

        <Link
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
          to="/print"
        >
          Print
        </Link>

        <Link
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
          to="/brand"
        >
          Brand
        </Link>

        <Link
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          className="px-3 py-1 text-2xl font-thin text-white hover:text-orange focus:outline-none "
          to="/all"
        >
          All
        </Link>
      </div>
      <motion.div
        className="grid w-full h-full p-5 m-0 overflow-hidden list-none "
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',

          gap: '15px',
        }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {items.map(({ node, index }) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            key={index}
            className="bg-white"
            variants={item}
          >
            <Img fluid={node.image.fluid} />
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Web

export const webQuery = graphql`
  query WebItemQuery {
    allContentfulPortfolioItem(filter: { category: { eq: "web" } }) {
      edges {
        node {
          category
          overlayColor
          image {
            fluid(maxWidth: 1000, maxHeight: 671, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
