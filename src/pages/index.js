import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import dannyHeadshot from '../img/danny.jpg';
import Button from '../components/Button';

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
                <img src={dannyHeadshot} alt={"danny and caitlin allegrezza"} />
              </div>
              <div className="column">
                <div className="content">
                  <h1>Hi! 👋 I'm Danny</h1>
                  <p className="home-hero">
                    <p><a href="https://github.com/DannyAllegrezza/">Software Developer</a>.</p>
                    <p><Link to={`/blog`}>Occasional blogger</Link>.</p>
                    <p><Link to={`/cars`}>Gearhead</Link>.</p>
                  </p>

                  <p>
                    I enjoy crafting simple solutions for complex problems. You too? Let's <Link to={`/contact`}>get in touch</Link>.
                  </p>

                </div>
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

            <div className="columns is-centered">
              <div className="column is-8">
                <Button>
                  <Link to={`/blog`}>View All Posts</Link>
                </Button>
              </div>
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
