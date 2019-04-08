import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { CarOverview } from '../components/CarOverview';

// The main CarPage Component which is used to render the Cars page
const CarPage = ({ data }) => {
  console.log(data);
  //const { markdownRemark: post } = data
  const { edges: cars } = data.allMarkdownRemark;

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {cars}
        </div>
      </section>
    </Layout>
  )
}

CarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CarPage

export const carPageQuery = graphql`
  query CarPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "cars-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            engine
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`