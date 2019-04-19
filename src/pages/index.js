import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark; // we're destructing data.allMarkdownRemark.edges and aliasing it as "posts"

    return (
      <Layout>
        <section className="section ">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                Column 1
              </div>
              <div className="column">
                Column 2
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Recent posts</h1>
            </div>
            {this.renderBlogPosts(posts)}
          </div>
        </section>
      </Layout>
    )
  }

  /**
   *
   * 
   * @param {*} posts array of objects, each containing a blog post
   * @returns
   * @memberof IndexPage
   */
  renderBlogPosts(posts) {
    return posts.map(({ node: post }) => (
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
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3,
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
