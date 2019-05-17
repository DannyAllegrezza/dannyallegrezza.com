import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default class BlogPost extends Component {
    static propTypes = {
        post: PropTypes.object
    }

    render(props) {
        let post = this.props.post;

        return (
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
        )
    }
}

