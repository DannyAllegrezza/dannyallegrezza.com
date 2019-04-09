# dannyallegrezza.com

This project serves as an experiment with Gatsby, Netlify-CMS and the JAM stack. I'm hoping these notes will help anyone else toying around with this stack!

* [End result of Gatsby tutorial](https://github.com/DannyAllegrezza/gatsby-by-doing)

### How does data get loaded by Gatsby?
* Files are `sourced` by `gatsby-source-*` plugins. Once the data has been sourced, you use a "transformer" plugin to transform your source data into other types of data.
* There are transformers for JSON, YAML, Markdown, etc.

### How are pages generated?
According to Gatsby, any component found in the `pages` directory will be automatically turned into a page. This can be seen by looking at the `gatsby-config.js` file.

There are a few different ways to create Pages in Gatsby.

1. [Using page components](https://www.gatsbyjs.org/tutorial/part-one/#-using-page-components)
    * Any React component defined in `src/pages/*.js` will automatically become a page.
    * EX: I create a file in `src/pages/about.js` and create a basic React component. Just by putting a React component in the `src/pages/about.js` file, you now have a page accessible at `/about`.
2. [Programmatically create pages from data](https://www.gatsbyjs.org/tutorial/part-seven/)
    * Gatsby lets you use GraphQL to query your data and map the query results to pages—all at build time. 
    * Check the docs on how [Markdown file names are transformed into slugs](https://www.gatsbyjs.org/tutorial/part-seven/#creating-slugs-for-pages).
    * The steps to programmatically creating pages are:
        1. Query data with GraphQL
        2. Map the query results to pages

### How do I extend the platform?

### Whats up with the `config.yml` file?

### Gatsby useful links

* [Gatsby pages](https://www.gatsbyjs.org/tutorial/part-one/#familiarizing-with-gatsby-pages)
* [Gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
* [Gatsby source plugins tutorial](https://www.gatsbyjs.org/tutorial/part-five/)

## Netlify CMS



See the wiki for more info