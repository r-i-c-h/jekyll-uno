# console.[Things Other Than 'Log']
Yes, we all know the basics of logging: `console.log('text',someVar)` will print strings or the value of variables passed into it.
https://developer.mozilla.org/en-US/docs/Web/API/Window/console

## Totally Useful Console

https://developer.mozilla.org/en-US/docs/Web/API/Console/table
* console.table(obj)
  * Turns the object values into a table
  * works with Object and Arrays
  * Best secret here.

* console.assert - quick conditional tests
  * console.assert( some condition., _anything_ you want spit out to the console if failing )
  * `console.assert( 5==3, {part:'of th3', failure:'output'})`

* console.count() - Magic Counter of how many times has this happened?
  * Unfortunately a bit *Heisenberg Principal* - it incremements *every* time it is called. If you want to manually check the value, you'll be incrementing the counter.
  * There is a big shared global counter: `console.count();`
  * And there are specific counters based on labels:`console.count('LabelString')`
    `const X = () => {console.count('ThreeTimes');} X();X();X(); console.count('FirstTime');`


## Possibly useful Console Output Formatting controls...
* `console.warn()` - just like `.log()`, *but with pretty **yellow color** instead*
* `console.error()`(aka `.exception()`) - just like `.log()`, *but with pretty **red color** instead*
* `console.group()` >>> `.groupEnd()`
  * indents the printing of all console calls made between the `console.group()` and the `console.groupEnd()` function statements, but don't forget that `groupEnd()` call!
  * You can use particular labels as well - `console.group('lvlTwo')`
* `console.groupCollapsed()` - Exactly like `console.group()`, but the new group is printed out collapsed. This function _also_ needs `.groupEnd()`

---
* `console.clear()` - You're kidding me, right? If you are writing this or even just `clear()`outside of a particular academic context, I would expect you'd know that a pretty universal terminal\console clear keyboard shortcut is CNTRL+L. Learn it. It is your new God.

## Less Useful to Know
* console.dir(obj) - By now `console.log` has picked up all of its tricks and replaced it



a = {x:1,b:{ x:2, c:{ x:3,d:{}}}, some:function(x){console.log('meow');} }


https://developer.mozilla.org/en-US/docs/Web/API/Console/warn
https://developer.mozilla.org/en-US/docs/Web/API/Console/trace

https://developer.mozilla.org/en-US/docs/Web/API/Console/group

https://developer.mozilla.org/en-US/docs/Web/API/Console/info

https://developer.mozilla.org/en-US/docs/Web/API/Console/profile & https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd

https://developer.mozilla.org/en-US/docs/Web/API/Console/time + console.timeEnd()

https://developer.mozilla.org/en-US/docs/Web/API/Console/timeStamp