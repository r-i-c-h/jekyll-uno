---
title:  "&#35TIL&#58 Semantically Modify Text Inside A Header"
subtitle: ""
date:   2017-11-01 12:00:01
categories: [rw, TIL, webdev]
tags: [TIL, webdev, HTML, CSS, jekyll]
---
Was pleasantly surprised to find out that vanilla HTML allows you to use semantic markup tags to modify header text in the middle of an `<h#> </h#>` heading tag. Mind you this is probably not the best idea I've ever had, but it _can_ give you a discount on finding a crazy CSS selector and is cleaner than writing `<span>`s with their own classes in the middle of some text... I'm only going to note a few of the tags I'd find useful, but I'm imagining you'd be ok using any of the tags listed in the **Inline Text Semantics**[^1] section of [this MDN page on HTML Elements][page].
That is, you'll be ok _AS LONG AS THE SITE'S CSS SUPPORTS IT_ [^2] **`(⊙＿⊙')`** 😅😬

## A Few Semantic Markup Tags ##
* `<code> </code>` - Instant Monospace
* `<mark> </mark>` - Highlights text
* `<s> </s>` - Strikethrough
* `<small> </small>` - Smaller text (duh). (btw `<big>` did once exist but _is deprecated_)
* `<sub> </sub>` - Subscript <sub>(below)</sub>
* `<sup> </sup>` - Superscript <sup>(above)</sup>
* `<q> </q>` - This text will be a "quotable quote"  

They work[^2] as follows:

<h3>A regular 'h3' heading</h3>
`<h3>A regular 'h3' heading</h3>`

<h3>Some <code>text in a &lt;code&gt; block</code> in an H3</h3>
`<h3>Some <code>text in a &lt;code&gt; block</code> in an H3</h3>`

<h3>Some <mark>text in a &lt;mark&gt; block</mark> in an H3</h3>
`<h3>Some <mark>text in a &lt;mark&gt; block</mark> in an H3</h3>`

<h3>Some <s>text in a &lt;s&gt; block</s> in an H3</h3>
`<h3>Some <s>text in a &lt;s&gt; block</s> in an H3</h3>`

<h3>Some <small>text in a &lt;small&gt; block</small> in an H3</h3>
`<h3>Some <small>text in a &lt;small&gt; block</small> in an H3</h3>`

<h3>Some <sub>text in a &lt;sub&gt; block</sub> in an H3</h3>
`<h3>Some <sub>text in a &lt;sub&gt; block</sub> in an H3</h3>`

<h3>Some <sup>text in a &lt;sup&gt; block</sup> in an H3</h3>
`<h3>Some <sup>text in a &lt;sup&gt; block</sup> in an H3</h3>`

<h3>Some <q>text in a &lt;q&gt; block</q> in an H3</h3>
`<h3>Some <q>text in a &lt;q&gt; block</q> in an H3</h3>`

So that's that. If you've made it this far, I'm wondering - Have you ever actually seen someone use a `<kbd>` or `<samp>` tag? Neither have I. 

Cheers!

---
[^1]: Remember kids, don't mix your block elements within the semantics of inline-content or Satan will come for your soul...
[^2]: Sooo, maaaybe originally all of _my own_ site's CSS was cleared and reset like ya do and maybe until just now I never got around to styling the q, sub, sup, or small base-tag styles. If that's not a case-in-point, I don't know what is, so make sure the CSS allows for these lesser-used tags. 
 
[page]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element