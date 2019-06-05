---
templateKey: blog-post
title: OWASP Meetup - Security and Auditing meet Graph Databases
date: 2019-05-29T04:43:23.513Z
featuredImage: /img/graph.png
description: >-
  Can graph databases help security professionals?
tags:
  - code
---
That is what speaker Erkang Zheng discussed with the the [OWASP Triangle Chapter](https://www.meetup.com/owasptriangle/) members. 

## Abstract
> Attackers think in graphs; defenders operate with lists. That’s why attackers win.

## Details

What if we could have a graph-based, data-driven security and compliance platform that can:

* intelligently analyze my environment,
* automatically keep up with the constant changes and
* help us understand and navigate that complexity

The talk described how the security and engineering team at `LifeOmic` built their security operations and automate compliance evidence collection using a graph database. 


## Notes

I found the use of a graph database to be a novel approach to solving the problem at hand. Data points are fed into the system and are labeled automatically. Users can then provide custom labels to enrich and tag data. 

A graph allows for fast traversal of this type of data, and most importantly, the relationships. While this type of system could be achieved with a relational database, it simply wouldn't scale. 
