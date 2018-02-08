>>> http://stackabuse.com/how-to-use-module-exports-in-node-js/#disqus_thread
## Importing/Exporting Modules via Destructuring
This isn't an old-vs-new thing, so much as a clean code thing.
https://stackoverflow.com/questions/16383795/difference-between-module-exports-and-exports-in-the-commonjs-module-system?rq=1

https://stackoverflow.com/questions/7137397/module-exports-vs-exports-in-node-js

https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch?noredirect=1&lq=1

https://stackoverflow.com/questions/35223111/what-is-the-difference-between-importing-a-function-expression-or-a-function-dec?noredirect=1&lq=1

https://stackoverflow.com/questions/46715484/correct-async-function-export-in-node-js

**SETUP:** I have vars/func()s defined in a helper file called 'funcs.js'   
**GOAL:** _Cleanly_ export them and require/import them into another file. 

### Exporting Functions/Variables From a File


When using node, every file you export and import are actually part of a way-behind-the-scenes function... Sometimes you might bump into that when debugging. Part you are exporting from, is actually attached to an already-defined object `module.exports`. (This 'module' object actually has some other properties too, like `module.filename` or `module.id`, but that's besides the point). 
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
