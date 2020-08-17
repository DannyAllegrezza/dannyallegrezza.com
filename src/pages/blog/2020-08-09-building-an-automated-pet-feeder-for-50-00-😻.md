---
templateKey: blog-post
title: Building an automated pet feeder for $50.00
date: 2020-08-09T20:28:55.337Z
featuredImage: /img/dsc_0389-2-.jpg
description: As a fun way to break into IoT, I decided to automate a simple task
  - feeding our cat!
tags:
  - iot
  - aws
  - pet-feeder
---
# Overview

My wife and I have one animal, Kneesox, our [Cornish Rex](https://en.wikipedia.org/wiki/Cornish_Rex) cat. She's ~~kind of~~ a big deal and brings us both an incredible amount of joy. Like any other cat, Kneesox loves to eat and if given the opportunity, would glady overindulge herself. Some cats are fine with free-feeding (having a constant supply of food available), however, she started to gain weight and we had to re-evaluate our options. 

After much research, we decided that the best option was to switch to **meal feeding** her, with a schedule of two meals per day at 7:30 AM and PM. As an aside, Kneesox's portion is only 2TBSP! With the adjustment in place her weight quickly settled back to an appropriate amount for her size. We decided that I would handle her morning routine and my wife would take care of the evening. With our new roles in place, I quickly realized how unreliable I was at this simple task. Some mornings I would wake up late and Kneesox would be waiting at our bedroom door, letting us know that she was ready for breakfast! Other times, I'd head downstairs and walk right past her bowl. 

> I knew that we needed an automated feeder.

Being quite the cat-enthusiast, my wife had already performed quite a bit of research on this topic. Commercial feeders range anywhere from $75.00 to $300.00 for a quality feeder. The feature set offered seemed fairly basic, so I set out to see if anyone had tackled this project. Of course, dozens of hackers and makers had shared their work on both YouTube and GitHub which gave me some incredible inspiration.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-avYaK3i6Nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# The hardware
Here is an overview of the hardware used in this project.


<body><table>
<thead>
<tr>
<th>Hardware</th>
<th align="center">Cost</th>
</tr>
</thead>
<tbody><tr>
<td><a href="https://www.amazon.com/gp/product/B000NW5RRG/ref=ppx_yo_dt_b_asin_title_o06_s00?ie=UTF8&amp;psc=1">Cereal Dispenser</a></td>
<td align="center">$15.00</td>
</tr>
<tr>
<td><a href="https://www.amazon.com/gp/product/B07V359RFB/ref=ppx_yo_dt_b_asin_title_o05_s01?ie=UTF8&amp;psc=1">* Stepper Motor</a></td>
<td align="center">$28.00</td>
</tr>
<tr>
<td><a href="https://www.amazon.com/gp/product/B01ES99586/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&amp;psc=1">Coupler from motor to wheel</a></td>
<td align="center">$7.22</td>
</tr>
<tr>
<td><a href="https://www.amazon.com/gp/product/B01M29YK5U/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&amp;psc=1">Stepper motor drive controller</a></td>
<td align="center">$8.00</td>
</tr>
<tr>
<td><a href="https://www.amazon.com/Version-Internet-Development-Wireless-Micropython/dp/B07R4MVSCY/ref=sr_1_14?dchild=1&amp;keywords=esp8266&amp;qid=1597374211&amp;sr=8-14">ESP8266 microcontroller</a></td>
<td align="center">$6.00</td>
</tr>
<tr>
<td><a href="https://www.amazon.com/gp/product/B077PW5JC3/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&amp;psc=1">* 12V to 2V adapter</a></td>
<td align="center">$13.00</td>
</tr>
</tbody></table>
</body>

>NOTE: A cheaper stepper motor could be used and the 12V to 2V adapter can be substituted out if powered by regular batteries.



## Assembly
The first step is to modify the cereal dispenser. We'll need to remove the crank-arm that comes attached to the inner turn-wheel. I was able to carefully wiggle mine off. Next, I modified I piece of iron rod by grinding it down to fit the key-hole for the spigot that is attached to the crank-arm. I joined the stepper motor together using this [coupler](https://www.amazon.com/gp/product/B01ES99586/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&amp;psc=1).

![Feeder overview](/img/feeder-1.jpg)


<!-- ![Kneesox metal art](/img/kneesox-metal-art.png)
> I created this piece of metal art as a gift for my wife. I don't know if I'll be able to outdo this one!


![Catio](/img/catio.jpg)
> Our town home patio transformed into a "catio"! -->



