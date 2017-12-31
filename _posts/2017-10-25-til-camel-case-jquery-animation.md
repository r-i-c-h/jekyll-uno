---
title:  "&#35TIL&#58 Camel-Case jQuery Animation"
subtitle: "Arrrrrrg"
date:   2017-10-25 12:00:01
categories: [rw, TIL, node]
tags: [TIL, webdev, CSS, jQuery]
---
Learned this one 'the hard way' today. Even though jQuery's moment in the sun would seem to have passed, I discovered 
one important thing to remember when using jQuery's **`.animate()** method: 

ALL PROPERTY NAMES MUST BE CAMEL-CASED!

So use `paddingLeft` instead of `padding-left` or `marginRight` instead of `margin-right`, etc...
