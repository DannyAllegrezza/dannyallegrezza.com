import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import dannyHeadshot from '../img/danny.jpg';

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
                <img src={dannyHeadshot} />
              </div>
              <div className="column">
                <h1>Hi! I'm Danny</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Recent posts</h1>
            </div>

            <div className="columns">
              {this.renderBlogPosts(posts)}
            </div>
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
      <div className="column is-4" key={post.id}>

        <div className="post-overview">
          <Link className="has-text-primary" to={post.fields.slug}>
            <p className="post-overview-title">{post.frontmatter.title}</p>
            <p className="post-overview-excerpt">
              {post.excerpt}
            </p>
          </Link>

          {/* <span> &bull; </span>
              <small>{post.frontmatter.date}</small> */}

        </div>
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
          excerpt(pruneLength: 300)
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
