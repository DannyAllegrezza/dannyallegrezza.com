# Templates - what are they for?
This directory contains page/item templates, specifically built for use of the Netlify CMS. The Netlify CMS backend allows you to create and preview your different media types (ex: a `page`, a `blog-post`, etc.)

See: https://github.com/netlify-templates/gatsby-starter-netlify-cms/issues/113

* These represent the actual content of the given page/item. For example, `blog-post.js` contains a template for rendering a specific individual blog post (ex: `blog/2019-02-27-engineering-meeting-👌/`) as well as the preview page inside of the Netlify CMS backend.
* `content` is able to handle an HTML string, as received from Gatsby, or a React component, as received from Netlify CMS. It's a dual purpose prop.