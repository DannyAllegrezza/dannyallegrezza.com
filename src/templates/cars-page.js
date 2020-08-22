import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Masthead from '../components/Masthead';
import { CarCardPost } from '../components/CarPostCard/CardPostCard';

export const CarPageTemplate = ({ title, content, contentComponent, cars }) => {
  const PageContent = contentComponent || Content;
  console.log(cars);

  const CarsToDisplay = () => {
    return cars.map(({ node: car }) => (
      <div className="column is-4" key={car.id}>
        <CarCardPost {...car} />
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

        <div className="columns is-multiline">
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
  const { markdownRemark: page } = data;
  //console.log(data);

  return (
    <Layout>
      <CarPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
        cars={data.allMarkdownRemark.edges}
        featuredImage={data.allMarkdownRemark.node}
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
          horsepower
          torque
          description
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 300, quality: 90) {
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