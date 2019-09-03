import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import './blogPostOverview.sass';


export default class BlogPostOverview extends Component {
    static propTypes = {
        post: PropTypes.object
    }

    render(props) {
        let post = this.props.post;

        return (
            <div className="post-overview">
                <Link className="has-text-primary" to={post.fields.slug}>
                    <p className="post-overview-title has-text-weight-bold">{post.frontmatter.title}</p>
                    <small className="post-overview-date">{post.frontmatter.date}</small>
                    <p className="post-overview-excerpt">
                        {post.excerpt}
                    </p>
                </Link>
            </div>
        )
    }
}

