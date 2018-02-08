# ES6 Object Destructuring:
The thing to remember here is this: 
<q>The less code you have to write, the fewer places you can make <s>misteaks</s> mistakes.</q>

## Ex1: Obj.properties to Individual Variables
**SETUP**: Let's say I have a box object - `boxObj = { width:1, height:2, length:3 }`   
**GOAL**: I want to put those values into some variables... 

Instead of writing out each variable and property like this:
```
var width = boxObj.width;
var height = boxObj.height;
var length = boxObj.length;
```
With Destructuring, I can do the exact same thing in only one line:
`const { width, height, length } = boxObj;` 
Kapoof! I now have three defined variables in my scope. I know, it looks like a weird messed up object, don't it? But waaaay less code.
Now, you MUST REMEMBER: **THE big caveat** in Destructuring is that the resulting variables _have to be named **exactly** the same as the object's property_ you're pulling out. 

## Ex2: Individual Variables to Obj.properties
( Or... the reverse of Ex#1. )
**SETUP:**  Let's say I have variables declared here and there in my scope... 
```
const width = 1;
const length = 3;
const area = someFunc(width,length);
const height = 2;
const someFunc = (var) => { /*..code...*/ }
const color = getColor(paint); etc....
```
**GOAL**: I want to store these variables in a single object. 
The 'old' approach would need a bunch of redundant 'key:value' pairs.
Either like this:    
 `var newStorageObj = { width:width, length:length, area:area, height:height, etc... };`    
Or even _more_ painfully
```
var newStorageObj = {};
newStorageObj['width'] = width;
newStorageObj['length'] = length;
etc....
```

But with our new pal Destructuring...you guessed it, we can do the same with less:   
`const newStorageObj = { width, length, area, height, color };` and that's it.
Again, the same caveat applies - The resulting names of the object's keys/properties _are exactly the same_ as the original variables' names.
---

## Ex3: Importing/Exporting with Destructuring
This isn't an old-vs-new thing, so much as a clean code thing.

**SETUP:** I have vars/func()s defined in a helper file called funcs.js 
**GOAL:** Cleanly export them and require/import them into another file. 

### Exporting Functions and Variables
When using node, every file you are exporting from is actually exporting  an already-defined object `module.exports`.
Sooo... You _could_ define everything you want to export as its own property on that object:   
```
module.exports.funcOne = (x) => {/*...*/}; 
module.exports.someNum = 123;
module.exports.makeItFunkyNow = async (x) => {/*...*/}
```
and that will totally work. But that is a whole lot of rewriting 'module.exports' all over the place.
So _INSTEAD_ to export things, we can use what we did in 'Ex#2' above. 
On the very last or so line of the file, set the module.exports object with Destructuring:
```
let someNum = 123;
const funcOne = (x) => {/*...*/}; 
const makeItFunkyNow = async (x) => {/*...*/}

module.exports = { someNum, funcOne, makeItFunkyNow }`
```
Now, back on the _IMPORTING_ side. Whereas you can keep `require`-ing the same file, 
```
const someNum = require('.\helpers\funcs').someNum
const funcOne = require('.\helpers\funcs').funcOne
```
