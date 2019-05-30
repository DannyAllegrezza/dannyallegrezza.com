import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import dannyHeadshot from '../img/danny.jpg';
import Button from '../components/Button/Button';
import Masthead from '../components/Masthead';
import BlogPostOverview from '../components/BlogPostOverview/BlogPostOverview';

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
                  <h1>Hi, I'm Danny! <span role="img" aria-label="wave">👋</span></h1>
                  <div className="home-hero">
                    <p><a href="https://github.com/DannyAllegrezza/">Software Developer</a>.</p>
                    <p><Link to={`/blog`}>Occasional blogger</Link>.</p>
                    <p><Link to={`/cars`}>Gearhead</Link>.</p>
                  </div>

                  <p>
                    I enjoy crafting simple solutions for complex problems. You too?
                  </p>
                  <p>
                    Let's <Link to={`/contact`}>get in touch</Link>.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <Masthead text={"Recent posts"} />
            </div>

            <div className="columns">
              {this.renderBlogPosts(posts)}
            </div>

            <div className="columns is-centered">
              <div className="column is-3">
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
        <BlogPostOverview post={post} />
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
          excerpt(pruneLength: 150)
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
