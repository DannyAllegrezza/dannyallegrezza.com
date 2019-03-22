# dannyallegrezza.com

This project serves as an experiment with Gatsby, Netlify-CMS and the JAM stack. I'm hoping these notes will help anyone else toying around with this stack!

* [End result of Gatsby tutorial](https://github.com/DannyAllegrezza/gatsby-by-doing)

### How does data get loaded by Gatsby?
* Files are `sourced` by `gatsby-source-*` plugins. Once the data has been sourced, you use a "transformer" plugin to transform your source data into other types of data.
* There are transformers for JSON, YAML, Markdown, etc.

### How are pages generated?
According to Gatsby, any component found in the `pages` directory will be automatically turned into a page. This can be seen by looking at the `gatsby-config.js` file.

### How do I extend the platform?

### Whats up with the `config.yml` file?

## Netlify CMS

See the wiki for more info