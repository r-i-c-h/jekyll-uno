---
title:  "&#35TIL&#58 Javascript's Deprecated `with` syntax:"
subtitle: "or without you"
date:   2017-10-18 12:00:01
categories: [rw, TIL, javascript]
tags: [TIL, code, javascript]
---
Got asked to explain this recently and I [had to look it up on MDN][mdnwith]. Using `with` was **deprecated** as of ES5 and *its use is now bad-practice*, can lead to unintended results, and is literally _rejected_ in 'strict-mode'.

Basically, `with(`_someObj{}_`){/*. . . */}` told the interpreter that for any unknown methods/references in the following obj{}'s scope, use whatever is in the (arg) as the source for looking things up...

Given: `var c = 10;` - Writing `with(Math){ a=c*PI; b=floor(a*10); }` will make all of the unknowns like `PI` and `floor` be looked up in the `Math` object as `Math.floor` and `Math.PI`

Random. ¯\\_(ツ)_/¯ But we've got enough headaches over `this`, so I can see why `with` was dropped. Good choice ECMA. My brain thanks you.

[mndwith]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with