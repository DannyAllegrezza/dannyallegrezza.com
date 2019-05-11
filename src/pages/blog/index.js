import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

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
        <div className="post-overview">
          <Link className="has-text-primary" to={post.fields.slug}>
            <p className="post-overview-title">{post.frontmatter.title}</p>
            <p className="post-overview-excerpt">
              {post.excerpt}
            </p>
          </Link>
        </div>
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
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
            </div>
            <div className="columns is is-multiline">
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
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
