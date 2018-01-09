---
title:  "&#35TIL&#58 CSS3 Vendor-Prefix Function"
subtitle: "The man is keeping your code down"
date:   2017-11-29 12:00:01
categories: [rw, webdev, TIL]
tags: [TIL, webdev, CSS, HTML, JS, code, SASS, SCSS]
---
As I am pretty into transitions and animations being core to contemporary user-experience, I think about all of the 'gotchas' with vendor-prefixing that is [sometimes][shouldIprefix] [required][caniuse] by 'older' or not-that-older browsers...

## Update: Auto-Prefixer
* **Auto-Prefixer:** Check out [this repo/site][Autoprefixer] for a well maintained and highly recommended build tool as well as a simple copy-pase tool for adding vendor prefixes.
* **Do it on build:** Since most sites are going to be run through a build step, you might as well use that step to compile your vanilla CSS / SASS / SCSS into brower-prefixed forests. There are [grunt libs][grunt] and [gulp libs][gulp], and of course [Webpack versions][webpack].
* **Use a Library:** - You could include something like [prefixfree][prefixfree] which is a 2k gzip'd file that will supposedly solve all issues. YMMV
* **Do it as you code**: Of course, after writing this, I found an editor plugin [for VS-Code][vscplug] as well as [Sublime-Text][st3plug] which will automate the prefixing as you write. Problem with doing things directly like this is that the resulting code will be a _mess_ to read!

---
## Original Post
I came across [this code snippet][snippet] and some variations thereof with a function for determining what [if any] prefix a given browser\vendor requires[^n]. Once you figure that out, you can do what you will via JS to apply the arguments you've come up with. 

```javascript
function getCSSPrefixed(cssProp){
    var css3vendors = ['', '-moz-','-webkit-','-o-','-ms-','-khtml-']
    var root = document.documentElement
    function camelCase(str){
        return str.replace(/\-([a-z])/gi, function (match, p1){ // p1 references submatch in parentheses
            return p1.toUpperCase() // convert first letter after "-" to uppercase
        })
    }
    for (var i=0; i<css3vendors.length; i++){
        var css3propcamel = camelCase( css3vendors[i] + cssProp )
        if (css3propcamel.substr(0,2) == 'Ms') // if property starts with 'Ms'
            css3propcamel = 'm' + css3propcamel.substr(1) // Convert 'M' to lowercase
        if (css3propcamel in root.style)
            return css3propcamel
    }
    return undefined
}
```

I've seen a couple of variations on the code above, but basically they all do they same approach - Take a list of possible names and keep trying the different vender prefixes until one of them works. Now, as transitions are pretty standardized, using vendor prefixes is becoming less and less necessary in production, but with animations and transforms, maybe not so much so. Especially if yaknow, if your audience has older devices and you want to make sure things work across the board...

```javascript
var transformName = getCSSPrefixed('transform') 
// Sets transformName to 'transform' or one of the variants, such as '-moz-transform', '-webkit-transform-', etc

var transitionName= getCSSPrefixed('transition') // as above
```

The example of using javascript to actually _apply_ the transition names en-masse are shown in their [example codepen][example].

Personally, my brain can't hardly wait to futz with `animation` @keyframes affecting CSS[4?] `perspective:`[^n] values...

---

[^n]: [shouldIprefix.com][shouldIprefix] recommends we keep using prefixes for animation.
[^n]: I'm alright with, and would even _recommend_ using ES5 `var` and hoisted `function`s since you _are_ looking for support in older devices which likely are not down kosher with arrow functions...
[^n]: Yep. It's coming. The cousin of 3D Transforms - https://developer.mozilla.org/en-US/docs/Web/CSS/perspective

[Autoprefixer]: https://autoprefixer.github.io/
[caniuse]: https://caniuse.com/
[example]: https://codepen.io/georgec/pen/apoJbq/
[grunt]: https://github.com/nDmitry/grunt-autoprefixer
[gulp]: https://github.com/sindresorhus/gulp-autoprefixer
[shouldIprefix]: http://shouldiprefix.com/#animations
[snippet]: http://www.javascriptkit.com/javatutors/css-transition-functions.shtml
[st3plugin]: https://packagecontrol.io/packages/Autoprefixer
[vscplug]: https://marketplace.visualstudio.com/items?itemName=sporiley.css-auto-prefix
[webpack]: http://jimfrenette.com/2017/11/webpack-3-sass-cssnano-autoprefixer-workflow/
[prefixfree]: https://leaverou.github.io/prefixfree/