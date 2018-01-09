---
title:  'Parsing WWW/HTML/HTTP/URL Strings on the Client'
subtitle: 'It's a Sign'
date:   2017-12-25 12:00:01
categories: [webdev]
tags: [TIL, webdev, jekyll, github]
---
Been thinking about tools we have _on the client_ to slice-n'-dice a URL string. Server-side has similarities but backend parsing is another article for another time...
SO - Let's say I need to deal with some _crazy_ URL string that has a user:password combo, a not-necessarily-expected .co.uk domain, a specified port#, a file-path, a couple of search terms, as well as a hash value. (Whew!)   
`const crazyStr = 'http://userBob:pa55w0rd@www.example.co.uk:8080/path/to/phpFile.php?term1=thing+to+find&otherTerm=1234#the-Hash'`
---
## Method#1. Make a fake 'a' element, then use the `<a>`'s properties
This has kind of been my goto - You make a fake anchor-link and use its properties, but it never actually gets appended to the DOM.
```javascript
/* SETUP */
let fakeLink = document.createElement('a') // fakeLink is now a DOM Link Object
    fakeLink.href = crazyStr // Set the URL of the link 
/* RESULTING PROPERTIES (all return strings) */
fakeLink.protocol //==>> 'http:'
fakeLink.username //==>> 'userBob'
fakeLink.password //==>> 'pa55w0rd'
fakeLink.host //==>> 'www.example.co.uk:8080'
fakeLink.hostname //==>> 'www.example.co.uk'
fakeLink.port //==>> '8080'
fakeLink.origin //==>> 'http://www.example.co.uk:8080'
fakeLink.pathname //==>> '/path/to/phpFile.php'
fakeLink.search //==>> '?term1=thing+to+find&otherTerm=1234'
fakeLink.hash //==>> '#the-Hash'
```
If any one of these properties is not in the original href value, like a port# or hash, those will return as an empty string.
```javascript
let gLink = document.createElement('a')
    gLink.href = 'http://www.google.com/'
gLink.protocol //==>> 'http:'
gLink.username //==>> ''
gLink.password //==>> ''
gLink.host //==>> 'www.google.com'
gLink.hostname //==>> 'www.google.com'
gLink.port //==>> ''
gLink.origin //==>> 'http://www.google.com'
gLink.pathname //==>> '/'
gLink.search //==>> ''
gLink.hash //==>> ''
```
---
## Method#2: [The `new URL( )`][MDNUrlObj]
(This is not yet a cross-browser standard!!!) At first the result of `let urlObj = new URL(crazyStr)` seems exactly the same as the 'fakeLink' method above because _they both have the exact same .properties_ (protocol,hostname,hash, etc, etc - exactly the same). However, **the difference** (though I'm imagining there is also less memory/processor overhead) is the ability to **work with search terms using the* [`.searchParams`][MDNSearchParams] property**[^1], instead of being limited to a single string of all search values which the `.search` property normally returns.[^2]
```javascript
let newUrlObject = new URL(crazyStr)
let urlSearchObj = newUrlObject.searchParams 
let term1 = urlSearchObj.get('term1') // returns 'thing to find'
let otherTerm = parseInt(urlSearchObj.get('otherTerm')) // the number 1234
```
BUT WAIT, there's more... `URL().searchParams` has a [load of other functions][MDNSearchParams] that can return information or provide iterables for further futzing[^3].
Random Example: Say there is a repeated key in the URL (which is a bad idea):
```javascript
let badIdea = (new URL('http://abc.com/foo.html?term1=why&term1=would+you&term1=do+this')).searchParams
/* .get() */ let firstValue = badIdea.get('term1') //==>> 'why'
/* .has() */ let bool = badIdea.has('term2')// ==>> false
/* .getAll() */let ALLValues = badIdea.getAll('term1') //==>> [ 'why', 'would you', 'do this' ]
```

One last thing I should point out about `new URL()` is that it has an optional second argument with which you can pull out the base of one URL and append a new path onto it (though I have yet to find a need to do so...):
```javascript
/*1*/ let newCombo = new URL('../arg2', 'http://www.arg1.com/foo')
/*2*/ newCombo.hostname //==>> 'www.arg1.com'
/*3*/ newCombo.pathname //==>> '/arg2'
/*!*/ newCombo.href // ==>> 'http://www.arg1.com/arg2' !!!
/*4*/ newCombo.hash = 'newHash'
/*!*/ newCombo.href // ==>> 'http://www.arg1.com/arg2#newHash'
```

---
## Method #3: Use RegExp Matching...
The _fastest_ way to parse URL information is to use match again a regular expression. As usual, regular expressions are a whole bunch of nonsense which I can eventually pull apart, but I'm in the minority. Looking online, I have found a babillion answers for what is the 'right' regular expression match pattern to use, but they all function more or less this way:
```javascript
var matchPattern = /someCrazyPattern/i
var resultArray = crazyStr.match(matchPattern)
// I've messed with 25+ match patterns. The one I myself found best met my needs as the most robust is from https://jsperf.com/url-parsing/35: 
//  /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/i
// I know. Simple, right? (⊙＿⊙')
```
Then it is entirely _up to you_ to know which array slot is which or which capturing group you want to be dealing with. I would be most worried about two URLs not necessarily sharing the same number of arguments or search terms and that is a weakness of this method. 
So: Fastest, but definitely _NOT_ the easiest to work with.

---

[MDNUrlObj]: https://developer.mozilla.org/en-US/docs/Web/API/URL
[MDNSearchParams]: https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams

[^1] There _is_ a constructor called `URLSearchParameters()` that did the exact same thing, but that is on its way to deprecation and should therefore be avoided.
[^2]: Of course, you could use regex and `match()` on that single string, but you'll still be left hunting and pecking around the resulting arr[]... 
[^3]: Technical term, of course.

---
If you want to run your own tests, here are some pieces to play with:
```
/* A few regex Patterns (seriously, these are just a few of them) */
const a = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/i // - https://jsperf.com/url-parsing/35
const b = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i // -  http://blog.mattheworiordan.com/post/13174566389/url-regular-expression-for-links-with-or-without
const c = /(?:([^\:]*)\:\/\/)?(?:([^\:\@]*)(?:\:([^\@]*))?\@)?(?:([^\/\:]*)\.(?=[^\.\/\:]*\.[^\.\/\:]*))?([^\.\/\:]*)(?:\.([^\/\.\:]*))?(?:\:([0-9]*))?(\/[^\?#]*(?=.*?\/)\/)?([^\?#]*)?(?:\?([^#]*))?(?:#(.*))?/i // -  https://stackoverflow.com/questions/27745/getting-parts-of-a-url-regex
const d = /^(?:(?:(([^:\/#\?]+:)?(?:(?:\/\/)(?:(?:(?:([^:@\/#\?]+)(?:\:([^:@\/#\?]*))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/i // -  https://gist.github.com/rpflorence
const e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/i // -  http://blog.stevenlevithan.com/archives/parseuri

/* Random Data - Not all are valid depending on your needs! */
const dataArr = ['ftp://ftp.asdah.co.uk:2828/asdah%20asdah.gif',
'https://www.foufos.gr',
'www.-barfoo.gr',
'www.barfoo-.gr',
'www.barfoo.gr',
'www.barfoo',
'www.mp3.com',
'www.mp3#.com',
'www.t.co',
'http://arithmetic.example.co.uk/?airplane=apparel&babies=boundary#advice',
'http://arithmetic.example.com/?airplane=apparel&babies=boundary#advice',
'http://jblas:password@mycompany.com:8080/mail/inbox?msg=1234&type=unread#msg-content',
'http://bear.example.com/apparel#brother',
'http://bottle.example.com/battle.html',
'http://example.com/',
'http://example.org/',
'http://boy.example.com/',
'http://branch.example.com/',
'http://example.co.uk/?airplane=apparel&babies=boundary#advice',
'http://example.com:3000/pathname/?search=test#hash',
'http://example.com/basketball#bell',
'http://example.net/achiever.php#action',
'http://example.org/berry.php',
'http://foufos.gr',
'http://werer.gr',
'http://www.asdah.com/~joe',
'http://www.example.com/',
'http://www.example.com/#apparatus',
'http://www.example.com/bait',
'http://www.example.com/basin.html',
'http://www.example.com/bell/book.html#boundary',
'http://www.example.com/bite/board.html',
'http://www.example.com/books.php?arch=branch&boundary=basin',
'http://www.example.com/boot.php',
'http://www.example.net/',
'http://www.example.org/',
'http://www.foufos.gr',
'http://www.foufos.gr/kino',
'http://www.foufos',
'http://www.t.co',
'https://anger.example.com/balance',
'https://asdah.gov/asdh-ah.as',
'https://bead.example.com/boot#birth',
'https://beef.example.com/?bomb=brass',
'https://behavior.example.com/breath/bird',
'https://bell.example.org/bat/boot.html',
'https://birds.example.com/ball',
'https://example.com/?birth=beds',
'https://example.com/',
'https://example.com/ball/alarm.html',
'https://www.example.com/?boat=badge&advertisement=aunt',
'https://www.example.com/',
'https://www.example.com/action',
'https://www.example.com/adjustment/ants?bag=boy',
'https://www.example.com/basin.htm',
'https://www.example.com/bat/brother.php',
'https://www.example.org/?bottle=boat&bag=bird']