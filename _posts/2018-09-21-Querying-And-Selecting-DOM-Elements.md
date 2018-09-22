---
title:  "Querying, Selecting, & Mutating DOM Elements"
subtitle: "This not that"
date: 2018-09-21 12:00:01
categories: [webdev, code]
tags: [HTML, CSS]
---
Was reading [this article][FCCArticle] off of the FreeCodeCamp.org blog. Realized that while I pretty interchangeably use `document.querySelector`[All]`(___)` and `document.getElement`[s]`By[`Something`](___)`, though I've come to prefer the former, there is a subtle difference in how you mutate the DOM elements you've selected. They both produce Array-like ("Array-like"? Thanks JavaScript🙄🤐) collections, but whereas the 'querySelector' options return a DOM-_NodeList_, the 'getElement' versions return an _HTMLCollection_. These two entities are remarkably similar, but are distinct.

## Get 'Em: NodeList vs HTMLCollection
Say I have the following HTML in my page:
```HTML
  <div class="getMe" id="gIndx0"> You are cool. </div>
  <div class="queryMe" id="qIndx0"> You are neat. </div>
  <div class="getMe" id="gIndx1"> I like you. </div>
  <div class="queryMe" id="qIndx1"> I lurvz you. </div>
  <div class="getMe" id="gIndx2"> You smell nice. </div>
```

In order to get at all of the `div`s with class `foo`, I could go one of two ways:
```javascript
  const getByVersion = document.getElementsByClassName('getMe'); //⟹ HTMLCollection
  const queryVersion = document.querySelectorAll('.queryMe'); //⟹ NodeList

  console.log( getByVersion.length ); // ⟹ 3
  console.log( queryVersion.length ); // ⟹ 2
  console.log( Array.isArray(getByVersion) ); // ⟹ false !
  console.log( Array.isArray(queryVersion) ); // ⟹ false !
```

---

## Change 'Em
Let's see some ways of manipulating our selections by doing something like, idunno, changing the innerText to "Rich Rules". **Both** `NodeList`s and `HTMLCollection`s can be *interated over* to make changes to each selection.


### 1. Use `Object.entries(___)` to cast to an Array
We can use the ES6 `Object.entries()` method to make either type of collection an Array, and *then we can use any of our normal **Array methods**,* including `.forEach(x=>{})`or `.map(x=>{});`. Either method will work with either the HTMLCollection or NodeList (even if `map` is technically returning a new array and `forEach` isn't).
 ( `Object.entries()` returns an Array of two-element *sub-Arrays* in the form `[` indxNumber`,` value `]`, so you'll note that I have to use a `[1]` in order to access the `<div>`s. )

```javascript
/* Either of these are interchangeable for both types of colletions */
Object.entries( getByVersion ).map( elem => { elem[1].innerText = "Rich Rules" });
Object.entries( queryVersion ).forEach( elem => { elem[1].innerText = "Rich Rules" }); // same effect
```

Thing is, *I don't like this approach*, because I don't conceptualize the selected DOM elements as "Objects".

### 2. Use `Array.from(___)` to cast to an Array
Same deal as above... I like it *more*, because, well, I'm making an Array *from* the DOM collections.
```javascript
Array.from(getByVersion).map(elem => { elem.innerText = "Rich Rocks" });
Array.from(queryVersion).forEach(elem => { elem.innerText = "Rich Rocks" });
```

### 3. My RECOMMENDED Method - The ES6 `[...`spread`]`
The beauty of the ES6 `...` "Spread-Operator" is that it saves your characters. Works pretty much exactly like `Array.from()` but is more concise!
```javascript
[...getByVersion].map(elem => { elem.innerText = "Rich Reads" });
[...queryVersion].forEach(elem => { elem.innerText = "Rich Reads" });
```

### 4. Oldskool = `Array.prototype` methods
To use array methods on Array-like objects, you have to call the methods like this:
`Array.prototype.`array_method_name`.call(`array-like_object`, `function`);` So, to case to an Array, something like, `Array.prototype.slice.call(queryVersion)`.
Suffice it to say, anytime you are using `call` or `apply` things can get very messy very quickly.


## NodeList vs HTMLCollection - What's the difference?

Semantic Difference - A `NodeList` can contain *any type of node* but an `HTMLCollection` is going to only contain a node type of "Element". In the DOM, the term "node" is actually a super generic term. Everything in the DOM is a node and every node is an object. On the other hand, calling something an "Element" refers to *one specific type* of node. An element could be some `<li>`s, `<div>`s, the `<body>`, or even the window itself [don't touch that!]. An important thing to remember is that you can't ever be sure that the collection you're looking at is actually live and the most up-to-date. Since browser implementations vary, you should always "refresh" your selection to make sure you are using the latest and greatest.



[FCCArticle]: https://medium.freecodecamp.org/how-to-call-javascript-code-on-multiple-div-elements-without-the-id-attribute-59596e570fcf