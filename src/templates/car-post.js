import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Content, { HTMLContent } from '../components/Content';
import { BlogPostHeader } from '../components/BlogPostHeader/BlogPostHeader';

export const CarPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  engine,
  horsepower,
  torque,
  helmet,
  featuredImage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            
            <BlogPostHeader title={title}  />
            
            {featuredImage && <PreviewCompatibleImage imageInfo={featuredImage} />}
            
            <blockquote>{description}</blockquote>
            
            <ul>
              <li>{engine}</li>
              <li>{horsepower}</li>
              <li>{torque}</li>
            </ul> 
            
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

CarPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const CarPost = ({ data }) => {
  const { markdownRemark: car } = data;

  return (
    <Layout>
      <CarPostTemplate
        content={car.html}
        contentComponent={HTMLContent}
        title={car.frontmatter.title}
        description={car.frontmatter.description}
        engine={car.frontmatter.engine}
        horsepower={car.frontmatter.horsepower}
        torque={car.frontmatter.torque}
        featuredImage={car.frontmatter.featuredImage}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${car.frontmatter.title}`}</title>
            <meta name="description" content={`${car.frontmatter.description}`} />
          </Helmet>
        }
      />
    </Layout>
  )
}

CarPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CarPost

export const pageQuery = graphql`
  query CarPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        engine
        horsepower
        torque
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 960, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
