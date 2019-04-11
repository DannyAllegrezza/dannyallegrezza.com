import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const CarPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

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
  const { markdownRemark: post } = data
  console.log(HTMLContent);
  console.log(post.frontmatter.title);
  return (
    <Layout>
      <CarPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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