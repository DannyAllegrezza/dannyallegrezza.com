import React from 'react';
import { Link } from 'gatsby';
import './featuredBlogPost.sass';

export const FeaturedBlogPost = ({post}) => {
    console.log(post);
    return (
        <section>
          <Link 
            className="feature feature-dark" 
            to={post.fields.slug}
            style={{backgroundImage: `url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`}}
          >
            <span className="featured-title">
              <h2 className="is-size-4">{post.frontmatter.title}</h2>
              The software industry can't afford exclusion, mystery, or sloppiness.
              </span>
          </Link>
      </section>
    )
}