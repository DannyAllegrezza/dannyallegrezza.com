import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Masthead from '../components/Masthead';

export const CarPageTemplate = ({ title, content, contentComponent, cars, featuredImage }) => {
  const PageContent = contentComponent || Content;
  console.log(featuredImage);
  const CarsToDisplay = () => {
    return cars.map(({ node: car }) => (
      <div className="column is-4" key={car.id}>
        <div className="post-overview">
          <Link className="has-text-primary" to={car.fields.slug}>
            <p className="post-overview-title">{car.frontmatter.title}</p>
            <p className="post-overview-excerpt">
              {car.frontmatter.description}
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
          <header className="masthead">
            <Masthead text={title} />
          </header>
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
  const { markdownRemark: car } = data;

  return (
    <Layout>
      <CarPageTemplate
        contentComponent={HTMLContent}
        title={car.frontmatter.title}
        content={car.html}
        cars={data.allMarkdownRemark.edges}
        featuredImage={car.frontmatter.featuredImage}
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
          description
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 300, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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