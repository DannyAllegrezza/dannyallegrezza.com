import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const CarPageTemplate = ({ title, content, contentComponent, cars }) => {
  const PageContent = contentComponent || Content;

  const CarsToDisplay = () => {
    return cars.map(({ node: car }) => (
      <div className="column is-4" key={car.id}>
        <div className="post-overview">
          <Link className="has-text-primary" to={car.fields.slug}>
            <p className="post-overview-title">{car.frontmatter.title}</p>
            <p className="post-overview-excerpt">
              {car.excerpt}
            </p>
          </Link>
        </div>
      </div>
    ))
  };

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">{title}</h1>
        </div>
        <PageContent className="content" content={content} />
        
        <div className="columns">
          <CarsToDisplay />
        </div>

      </div>
    </section>
  )
}

CarPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CarPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CarPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        cars={data.allMarkdownRemark.edges}
      />
    </Layout>
  )
}

CarPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CarPage


export const carPageQuery = graphql`
  query CarPageQuery($id: String!) {
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "car-post"}}}) {
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
    markdownRemark(id: {eq: $id}) {
        html
      frontmatter {
        title
      }
      }
    }
`