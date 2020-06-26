---
templateKey: blog-post
title: Designing Data-Intense Applications - Chapter 1
date: 2020-03-10T01:57:47.547Z
featuredImage: /img/271dc36b-03c8-4c94-891a-85d3a2e7f0bc.png
description: Let's dig into Matin Kleppmann's "Designing Data-Intensive
  Applications" and talk about the facets of reliable, scalable, and
  maintainable applications!
tags:
  - book review
---
# What do we expect from our applications?
The first chapter of `Designing Data-Intensive Applications` (now referred to as DDIT) focuses on setting the stage for the rest of the book by presenting the author's definitions of the following terms:

* Reliability - _things continue to work correctly even when things go wrong_
* Scalability - _as the system grows (traffic, data volume, complexity), there should be reasonable ways to deal with that growth_
* Maintainability - _all about keeping things up and running (while not pulling out your hair)_

## Reliability 
At a high level, the author comments on how there are some common ideas of what it takes to call a system "reliable". 

* The application performs the function that the user expected.
* The application can tolerate the user making mistakes or placing things in an unexpected state.
* The performance is _good enough_ -- based on the expected load and data volume. 
* The system prevents unauthorized access and abuse. 

I found the author's comments on this topic to be extremely relevant to my career experiences. Software is challenging; the reality is that often, software is created at an extremely rapid pace and something as obvious as reliability gets overlooked. In my personal career, I have seen proof of concepts (which we _never_ expected to see a production environment) morph into something real.

Alright, so that is all fine and dandy - but what about when things **go wrong?** When things go wrong, we call these actions `faults`. Common types of faults are **hardware faults**, **software errors**, and **human errors**. It's important to clarify that there _is_ a difference between a `fault` and a `failure`. 

A `fault` is when the system encounters unexpected behavior and is able to keep on trucking whereas a `failure` stops the system completely. In general, the most common approach is to tolerate the fault instead of preventing them completely. This brings up an interesting point regarding how in code, with higher-level languages such as `C#`, we have this concept of `exceptions`, `try/catch` and how that differs from a language such as `C`.

### Hardware Faults
This section discussed how there are multiple ways hardware can fail and how cloud providers have helped emerge a different approach which prioritizes flexibility and elasticity over single-machine reliability. 

### Software Errors
Something all developers can empathize with. Bugs are inevitable and as much as we strive to prevent them, they creep into our system. Sometimes the engineers working on the code introduce them, other times it's an outside source that we seemingly have little control over.  

Some examples include:
* The classic off by 1 error
* Memory leaks
* Bugs that crash the entire system based on unexpected input
* Cascading failures, where Service 1's failure causes Service 2 to fail, which causes Service 3 to fail...

We can combat these issues by testing individual systems, writing meaningful integration tests, using monitoring platforms, and adding fault tolerance and recovery strategies in code.

### Human Errors
The author points out that humans are known to be unreliable. I tell my team that we should strive to automate anything that currently requires manual human intervention. The reality is that operators (humans) are responsible for a significant amount more errors than hardware failures.

### My takeaways:
* Clear definition of the 