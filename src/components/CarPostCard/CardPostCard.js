import React from 'react';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import { Link } from 'gatsby';

export const CarCardPost = (props) => {
    return (
        <Link className="has-text-primary" to={props.fields.slug}>
            <div className="card">
                <div className="card-image">
                    <figure className="image">
                        <PreviewCompatibleImage imageInfo={props.frontmatter.featuredImage} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{props.frontmatter.title}</p>
                            <ul>
                                <li><span className="subtitle is-6">⚙ {props.frontmatter.engine}</span></li>
                                <li><span className="subtitle is-6">🏁 {props.frontmatter.horsepower} HP</span></li>
                                <li><span className="subtitle is-6">🔥 {props.frontmatter.torque} TQ</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="content">
                        {props.content}
                    </div>
                </div>
            </div>
        </Link>
    )
}