import React from 'react';
import { Link } from 'gatsby';
import './featuredBlogPost.sass';

export const FeaturedBlogPost = ({post}) => {
    return (
        <section>
          <Link 
            className="feature feature-dark" 
            to={post.fields.slug}
            style={{backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`}}
          >
            <span className="featured-title">
              <h2 className="is-size-4">{post.frontmatter.title}</h2>
              {post.frontmatter.description}
              </span>
          </Link>
      </section>
    )
}