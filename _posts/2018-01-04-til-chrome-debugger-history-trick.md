---
title:  "&#35TIL&#58 Chrome Debugger Element History trick"
subtitle: ""
date:   2018-01-04 12:00:01
categories: [rw, TIL, webdev, code]
tags: [CSS, neato, HTML, chrome, debugging, javascript, SASS, SCSS, markdown
---
Was recently reminded of this Chrome debugger trick that I knew once upon a time I but obviously forgot about.

The debugger _remembers the last five DOM elements_ that you clicked on to examine in the Elements panel.

You can then access these items in the Console by referencing `$0` [the most recent], through `$4` [the 'first' element you clicked on]. I'll let you work out the particulars, but so far as I've found, this will work for _any_ type of DOM tag you click on to examine. Of course, until you click on things, these `$_#_` references will return undefined, so make sure to click around on the Elements panel first.