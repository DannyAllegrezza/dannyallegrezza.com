import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import './blogPostHeader.sass';

export const BlogPostHeader = ({ title, date, tags }) => {
    return (
        <div className="blog-post-header">
            <h1 className="has-text-centered has-text-weight-bold is-size-2">
                {title}
            </h1>

            <p className="has-text-centered is-size-8">
                {date}
                {tags && tags.length ? (
                    <span>
                        {tags.map(tag => (
                            <Link to={`/tags/${kebabCase(tag)}/`}>  |  #{tag}</Link>
                        ))}
                    </span>
                ) : null}
            </p>
        </div>
    );
}