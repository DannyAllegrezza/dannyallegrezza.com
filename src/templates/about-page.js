import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Masthead from '../components/Masthead';

export const AboutPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <header className="masthead">
            <Masthead text={title} />
          </header>

          <PreviewCompatibleImage imageInfo={image} />
          <PageContent className="content" content={content} />
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

// gastby 
const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data;
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
