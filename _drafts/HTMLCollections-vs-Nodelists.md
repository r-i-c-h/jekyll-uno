# HTMLCollections and NodeLists:

## HTMLCollections

EX: document.**getElementsByClassName**('foo')
(btw - you can actually put more than one class name in there and separate by a space which will act as an && )

Returns an array-like _HTMLCollection_ object of all child elements which have [all of] the given class name[s].
An _HTMLCollection_ in the HTML DOM is **live** - Any changes to the DOM are immediately reflected in the HTMLCollection.

You can use Array methods on an _HTMLCollection_ by using a combination of `Array.prototype` and `call`:
`let foo = Array.prototype.filter.call(htmlcollection, (elem) => { return testElement.nodeName === 'DIV' });`

Properties:
* `HTMLCollection.length`
* `HTMLCollection.item(__)` - returns the node at zero-based-index-# in the parenthesis or `null` if the requested index is out of range
* `HTMLCollection.namedItem(__)` - returns the node with the matching ID or name and returns null if no node exists with that name.

## NodeLists

EX: elem.**childNodes** || document.**querySelector**All()

A NodeList object is _not_ an Array, but you _can_ iterate through them with `forEach()`.
You can also convert NodeLists into arrays by either: `let arrA = Array.from(someNodeList)` OR `let arrB = [...someNodeList]`

**_SOMETIMES_** NodeLists are static, and sometimes they are live so be careful!
`document.querySelectorAll()` returns a _static_ NodeList.

Properties/Methods:
* `NodeList.length`
* `NodeList.item(__)` - returns the node at zero-based-index-# in the parenthesis or `null` if the requested index is out of range.
You _can_ use `nodeList[idx]` but instead of 'null', it would return 'undefined' when out of bounds.

* `NodeList.forEach()` - ala array.forEach ( to use this in IE, you `Array.prototype.forEach.call(list, (x)=>{...})`
* `NodeList.entries()` - Returns an iterator allowing to go through all key/value pairs contained in this object.
* `NodeList.keys()` - Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
* `NodeList.values()` - Returns an iterator allowing to go through all values of the key/value pairs contained in this object.