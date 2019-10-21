import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import Masthead from '../../components/Masthead';
import { FeaturedBlogPost } from '../../components/FeaturedBlogPost/FeaturedBlogPost';
import BlogPostOverview from '../../components/BlogPostOverview/BlogPostOverview';

export default class Blog extends React.Component {
  /**
 *
 * 
 * @param {*} posts array of objects, each containing a blog post
 * @returns
 * @memberof IndexPage
 */
  renderBlogPosts(posts) {
    return posts.map(({ node: post }) => (
      <div className="column is-4" key={post.id}>
        <BlogPostOverview post={post} />
      </div>
    ))
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark; // we're destructing data.allMarkdownRemark.edges and aliasing it as "posts"

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <header className="masthead">
                <Masthead text={"Blog"} />
              </header>
              <FeaturedBlogPost post={posts[0].node} />
            </div>
            <div className="columns is-multiline">
              {this.renderBlogPosts(posts)}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            description
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 960, maxHeight: 250, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
