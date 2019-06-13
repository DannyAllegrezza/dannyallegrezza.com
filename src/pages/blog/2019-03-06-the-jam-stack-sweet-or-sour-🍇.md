---
templateKey: blog-post
title: The JAM Stack - Sweet or Sour?
date: 2019-03-08T00:58:11.533Z
featuredImage: /img/jamstack.JPG
description: High performance static websites for everyone.
tags:
  - code
---
I love fast, secure, light weight websites. Because JAMstack projects don’t rely on server-side code, they can be distributed instead of living on a single server. Serving directly from a CDN unlocks speeds and performance that can’t be beat. The more of your app you can push to the edge, the better the user experience.

# What is the JAM stack?
Visit [jamstack.org](https://jamstack.org/) and you'll be greeted with the following:

**JAMstack: noun \’jam-stak’\**

> Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.

Let’s dig into each of these items.

## JavaScript
Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.

## APIs
All server-side processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript. These can be custom-built or leverage third-party services.

## Markup
Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.

When I first read this, I thought to myself “this seems like nothing new” and indeed, it really isn’t. What this stack represents is a set of rules which when complies yields a very secure, high performance site. So what problem does this approach try to solve? What are some possible use cases? Where does this stack fall apart?

## Different approaches to web app development

The large majority of websites are simply serving up read-only content to users. What I mean by this is that most websites have upfront knowledge of the majority of content to be served (ex: a blog site). That said, the traditional client-server model starts to seem a bit inefficient.

Let’s think about that same blog example. If this site was built using WordPress there would be a lot of steps require to serve up this post.

1. Your browser requests ‘/blog/this-post’
2. The Apache server handles this request, sending it to the PHP app (WordPress) 
3. Some type of controller will handle the request, looking up the post in the MySQL database 
4. The content of the post is passed to a view, which is a template for a blog post.
5. The PHP builds the HTML and CSS and sends it back to the client
6. Your browser can now render the post!

This an extremely over simplified view of what actually happens however I hope you can see that this model has some flaws.

1. Every request, unless cached, will perform the same steps to serve up the same content
2. There are inate security flaws that come with executing PHP and SQL code to build and serve up the content


The traditional model of a client-server application is still extremely popular and widely used by many websites however it does have some downsides. 
