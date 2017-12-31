---
title:  "&#35TIL&#58 Express `bodyparser` is Already Installed! [Again]"
subtitle: "Welcome Back Baby"
date:   2017-11-02 12:00:01
categories: [rw, TIL, Backend]
tags: [TIL, webdev, node, express]
---
Contrary to much of what I've read from even recent blog posts online [links redacted], **there is _no need_ to npm install or require `body-parser` into express anymore!**

 The powers that be have [wisely] decided to just `require('body-parser')` automatically in as part of the _expressjs_ core. Basically, once upon a time, body-parser was actually part of the default modules, but then it got removed, annnnnd now minds have been _un_changed so it has been reintroduced.

 Since body-parser is now built into express, in order to use it as middleware, you code it _just like you would have for body-parser_. So, as per (this link)[https://github.com/expressjs/express/commit/c0136d8b48dd3526c58b2ad8666fb4b12b55116c#diff-e1bbd4f15e3b63427b4261e05b948ea8], Sept-27th, 2017, we can use what was once the body-parser syntax as follows:

```javascript
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
```
