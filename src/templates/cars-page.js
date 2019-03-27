import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export default ({ data }) => {
    console.log(data);

    return (
        <div>{data.markdownRemark.frontmatter.title}</div>
    )
}

export const carPageQuery = graphql`
  query CarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        engine
      }
    }
  }
`