import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content;
  console.log(image);

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <Img fixed={image.childImageSharp.fixed} />
                      </article>
                    </div>
                  </div>
                </div>
              </div>

              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data, pageContext }) => {
  const { markdownRemark: page } = data;
  console.log(pageContext);
  console.log(page.frontmatter);
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={page.frontmatter.title}
        content={page.html}
        image={page.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
