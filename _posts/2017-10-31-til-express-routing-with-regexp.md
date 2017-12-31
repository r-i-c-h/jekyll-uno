---
title:  "&#35TIL&#58 Express Routing With RegExp"
subtitle: "Anyplace will do"
date:   2017-10-31 12:00:01
categories: [rw, TIL, Backend]
tags: [TIL, webdev, node, express]
---
Today, I learned that [Express][expressdocs] can actually parse inbound/outbound routing paths _using [Regular Expressions][wiki][^1]_ for either paths or routing!

When setting up a path for an http request/response, you can actually define the path[^2] with a handful of regular expressions being used inline... Now, as often happens, this is a RTFM from the [official Express docs][expressdocs], but this was news to me (especially because I'm pretty good with RegEx). 

For mixing routes you can put **_some_** of the regexp search modifiers [**`?`, `+`, `*`, `^`/`$`, `()`**] right into the address string of what would otherwise be `.get('a*/norma?l/:path, ....)`. BUT watch out because **dot `.` and dash`-` are treated LITERALLY!**, not like their normal use in regex

If you want to use pure regexp (and I probably would, but that's me), you use Javascript's normal regexp `/search/` style, but leave out the quotes from the first term of the handler. Don't `'/doThis/'`, instead `/doThis/`, and this way you can use a `.get(/d.t/, ...)`.

There are some great regex tools out there. Personally, I'm partial to [regex101.com][r101] for my quick regexp testing. The docs do mention this [Express Route Tester][test] tool for testing routes and showing you the regexp your `'/endpoint:someparam'` is actually being compiled to, but since it doesn't support pattern-matching, I'm not sure that it is super useful in this regard.

Code Time...
```javascript
var express = require('express')
var app = express()


/* Ex1: I want to send the same `foo.html` as the response to */
/* requests coming into `http://xyz.com/ANT/` OR `http://xyz.com/AMP/` */
// In regex `?` means 'optional'
app.get('/A(NT)?(MP)?', (req, res) => {
  res.send(foo.html)
})

/* Ex2: I want to respond to requests to `abc.com/lowdown/` as */
/* well as to `abc.com/getdown/` but NOT to `abc.com/downlow/` */
// In regex `*` means 'anything' and `$` means 'the end'
app.get('/*down$', (req, res, next) => { /*...*/} )
```
[^3]

After years of bopping between environments, one of the few things that remains constant from one to another is the use of the absurd syntax that is [Regular Expressions][regex]. It is total gobbledygook[^4] and I know it primarily because I've used it in 'Find' commands in the multiple[plusplus] text[st] editors[vsc] that I've used over the years. Knowing regex is up there with learning vi or Emacs on the 'things ya should know' pile, but I gotta say, it *is* _really_ useful to know.

[expressdocs]: https://expressjs.com/en/guide/routing.html
[path]: https://www.npmjs.com/package/path-to-regexp 
[plusplus]: https://notepad-plus-plus.org/
[regex]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[tester]: https://forbeslindesay.github.io/express-route-tester/
[st]: https://www.sublimetext.com/
[vsc]: https://code.visualstudio.com/
[wiki]: https://en.wikipedia.org/wiki/Regular_expression
[r101]: https://regex101.com/
[kevinleary]: https://www.kevinleary.net/regex-route-express/

[^1]: I personally call it 'RegEx'/'regex', but since javascript is my bread-and-butter at the moment, they use 'RegExp()' so #whatcanyado I just use them all interchangably.
[^2]: Per the docs - "Query strings are not part of the route path." - This is **not** about query strings or things after a '?'. Here we're dealing with the raw inbound URI. 
[^3]: Yes, the first example would _also_ match '/ANTMP' and the second example matches anything that ends in 'down'.
[^4]: Technical Terminology