---
templateKey: blog-post
title: 'OWASP Meetup Review: Security and Auditing meet Graph Databases'
date: 2019-05-29T04:43:23.513Z
featuredImage: /img/graph.png
description: Can graph databases help security professionals?
tags:
  - code
---
That is what speaker Erkang Zheng discussed with the the [OWASP Triangle Chapter](https://www.meetup.com/owasptriangle/) members. 

## Talk Overview

> Attackers think in graphs; defenders operate with lists. That’s why attackers win.

_What if we could have a graph-based, data-driven security and compliance platform that can:_

* _intelligently analyze my environment,_
* _automatically keep up with the constant changes and_
* _help us understand and navigate that complexity_

_The talk described how the security and engineering team at `LifeOmic` built their security operations and automate compliance evidence collection using a graph database._

## Personal Notes

Although I consider myself to have a well-rounded understanding of security and exploits, I'm very much a novice in this domain so when my brother-in-law invited me to this talk I happily agreed to attend. 

As a self-proclaimed _full stack_ developer, I primarily focus on writing code that either supports, fixes, or expands functionality of web applications. Many developers (including myself at times) have the tendency to brush off security concerns, expecting these to be taken care of by **sys-admins**, **dev-ops**, or **security engineers**. Having a deep understanding of security flaws, exploits, and compliance will completely change how you develop your software. 

Accompanied by a room of security professionals, I quickly understood the monolithic challenge auditing and compliance present to these individuals. The speaker presented a typical set of compliance and auditing rules many tech companies need to adhere to. For example, all of these scenarios require either auditing or compliance:

* Keeping up with internal inventory of devices
* Making sure software is patched when vulnerabilities are discovered
* Verifying proper encryption is being used to transport sensitive data
* Validating certificates 

It's easy to see how the number of data points quickly grows exponentially and how many of the pieces of data are related. To combat this, Zheng's team created a product called [JupiterOne](jupiterone.io) which utilizes a graph database to store incoming data points.

![JupiterOne](/img/jone.jpg "Architecture of JupiterOne")


I found the use of a graph database to be a novel approach to solving the problem at hand. Data points are fed into the system and are labeled automatically. Users can then provide custom labels to enrich and tag data. 

A graph allows for fast traversal of this type of data, and most importantly, the relationships. While this type of system could be achieved with a relational database, it simply wouldn't scale.
