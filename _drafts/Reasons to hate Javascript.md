#Reasons to hate Javascript:
https://hackernoon.com/js-wtf-with-math-79da9a941ec1
https://github.com/denysdovhan/wtfjs
https://hackernoon.com/oh-my-goodnejs-arrays-f9e9e4f03c97
https://hackernoon.com/js-wtf-with-number-5cd73514befb

## Mother F-cking TYPE-COERCION
Type coercion is, for my 2c, the absolute *worst* thing about JavaScript. This is where, unlike every other damn programming language I've ever dealt with, the JS engine will take a look at your Number/String/Whatever and say - 'Oh, you must have meant to change that [Number] variable to a [String] before you used it. Here, let me fix that for you...' As such, the results of this 'feature' can be unpredictable and difficult to spot.

`1 < 2 < 3` is `true`, but `3 > 2 > 1` is `false`




### The damn `+` operator
'5' + 3     // '53'
'5' - 3     // 2


## Floating Point Math Inaccuracies
`0.1 + 0.2 === 0.3` IS FALSE



### Truly annoying
JS has these weird concept of 'Truthiness' and 'False-iness' with which things often evaluate to true or false, but don't always.
```
true + true === 2   // true - OK so true is evaluating to 1 and getting added. Alright.
true - true === 0   // true - OK so true is evaluating to 1 and getting subtracted. Alright.
true === 1          // false - WHUT?
```

## Stupid reasons to hate JavaScript:
These are things that won't likely happen if you are careful enough, but are still weird...
`[] + {}` evaluates to `'[object Object]'` but `{} + []` evaluates to `0`. - The why? `+` behaves as an addition operator for `[] + {}` and as the unary operator for `{} + []`
