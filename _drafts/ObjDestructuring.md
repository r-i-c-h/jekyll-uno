# ES6 Object Destructuring:
The thing to remember here is this: 
<q>The less code you have to write, the fewer places you can make <s>misteaks</s> mistakes.</q>

## Ex1: Move Obj.properties to Individual Variables
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
Kapoof! I now have three defined const variables in my scope. I know, it looks like a weird messed up object, don't it? But waaaay less code.
Now, you MUST REMEMBER: **THE big caveat** with Destructuring is that the variables _have to be named **exactly** the same as the object's property_. If you want to change something, `const foo = obj.bar`, well you'll be doing that manually...

## Ex2: Individual Variables to Obj.properties
( aka... the reverse of Ex#1. )
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
Or even _more_ painfully super manually like
```
var newStorageObj = {};
newStorageObj['width'] = width;
newStorageObj['length'] = length;
etc....
```

But with our new pal Destructuring...you guessed it, we can do the same with less:   
`const newStorageObj = { width, length, area, height, color };` and that's it.
Again, the same caveat applies - The names of the resulting object's keys/properties/methods _are exactly the same_ as their original variables' names.
---

