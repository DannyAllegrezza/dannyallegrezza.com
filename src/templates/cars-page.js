import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
// import Content, { HTMLContent } from '../components/Content';
import { CarOverview } from '../components/CarOverview';
import React, { Component } from 'react'

export default class CarPage extends Component {
  render() {
    const { data } = this.props;
    const cars = data.allMarkdownRemark.edges;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">My Vehicles</h1>
            </div>
            {this.renderCars(cars)}
          </div>
        </section>
      </Layout>
    )
  }

  renderCars(cars) {
    return cars.map(({ node: post }) => (
      <CarOverview {...post} />
    ))
  }
}

CarPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

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