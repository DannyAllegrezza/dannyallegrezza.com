import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const CarPageTemplate = ({ title, content, contentComponent, cars }) => {
  const PageContent = contentComponent || Content;

  const CarsToDisplay = () => {
    return cars.map(({ node: post }) => (
      <div
        className="content"
        style={{ border: '1px solid #333', padding: '2em 4em' }}
        key={post.id}
      >
        <p>
          <Link className="has-text-primary" to={post.fields.slug}>
            {post.frontmatter.title}
          </Link>
          <span> &bull; </span>
          <small>{post.frontmatter.date}</small>
        </p>
        <p>
          {post.excerpt}
          <br />
          <br />
          <Link className="button is-small" to={post.fields.slug}>
            Keep Reading →
                    </Link>
        </p>
      </div>
    ))
  };

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <CarsToDisplay />
            </div>
          </div>
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