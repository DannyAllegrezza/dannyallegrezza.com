import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import CarOverview from '../components/CarOverview';

export default ({ data }) => {
    const PageContent = HTMLContent;
    console.log(data);
    return (
        <Layout>
              <section className="section section--gradient">
                <div className="container">
                  <div className="columns">
                    <div className="column is-10 is-offset-1">
                      <div className="section">
                        <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                          {data.markdownRemark.frontmatter.title}
                        </h2>
                        <PageContent className="content" content={data.html} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
          <div>{data.markdownRemark.frontmatter.title}</div>
        </Layout>
    )
}

export const carPageQuery = graphql`
  query CarPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        engine
      }
    }
  }
`