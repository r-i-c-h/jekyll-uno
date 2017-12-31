---
title:  "&#35TIL&#58 Semantically Modify Text Inside An H1"
subtitle: ""
date:   2017-11-01 12:00:01
categories: [rw, TIL]
tags: [TIL, webdev, HTML, CSS]
---
Was pleasantly surprised to find out that you can use semantic markup tags to actually modify header text in the middle of a `<h_> </h_>` tag.

* Using `<small></small>` - Smaller Text (duh)
* Using `<code></code>` - Instant Monospace
* Using <mark></mark> - Highlights text

So, let's say I have...
<h2>Some regular text inside an H2 Heading</h2>

Adding some variation to the above... 
`<h2>Here is <small>some small text</small> inside an H2</h2>`
<h2>Here is <small>some small text</small> inside an H2</h2>
`<h2>Here is <code>some code text</code> inside an H2</h2>`
<h2>Here is <code>some code text</code> inside an H2</h2>
`<h2>Here is <mark>some mark-ed text</mark> inside an H2</h2>`
<h2>Here is <mark>some mark-ed text</mark> inside an H2</h2>