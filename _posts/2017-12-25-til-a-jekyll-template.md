---
title:  "&#35TIL&#58 A Jekyll Template"
subtitle: "And a bit about Dates"
date:   2017-12-25 12:00:01
categories: [rw, TIL, jekyll]
tags: [TIL, webdev, jekyll, github]
---
This is a more advanced demo template of a jekyll blog post. Right now I'm in the start of any bit of text content that will be truncated to be shown as an intro excerpt for whatever purpose, most likely a roll of blog posts. Figure I can tap out a crazy post real quick and then **append the source of this very file** to the bottom of it(self?)... See, a thing I'm not in love with about the default jekyll "_Hello World_" is that it doesn't really fill the page past a desktop screen break. Though I suppose to it's credit it _does_ show code blocks. 

We are in the land of markdown, and you *must* constanly leave an entire empty line between paragraphs. Earlier, since I didn't like the formatting of my line break tags, I learned if you _[leave two-empty spaces at the end of a line][two-empty]_ **it will force wrap**, though I'm not gonna do that now because it's time to talk about...

### Code Blocks ###
For inline code just put a `` ` `` on either side of a `word` and it will instantly turn into `'code'`.
For a block, just use backticks and a language name to get syntax highlighting ala ```` ```javascript ````, then end it with another set of ```` ``` ````. The result:
```javascript
let j = 3;
const foo = (arg) => { /*...*/}
console.table(arrtoo)
```

### Dates and Postnames ###
When you do _Save As..._ this file into your `_posts` directoy :wink:, you need to follow the annoying pattern: `YYYY-MM-DD-theoretical-name-of-post.ext`. I'll have to write about injecting HTML and Javascript _into_ jekyll posts another time [hint: use `_includes`] in order to make this a dynamic solution, maybe with a simple UI even, but I'm just aiming for some copy-paste text at the moment... 

The last time this page compiled the was at {{ site.time | date: '%c' }}, so, I'd use a file formatted:  
**{{ 'now' | date: "%Y-%m-%d-Title-of-Post.md" }}**  
(Oh, and while we're on with dates, the front-matter in your post can use **{{ 'now' | date: "date: %F %T" }}** )

I do want to mention a neat snippet I found at the site of [Alan W Smith][Alan-Smith] which is a masterful exploration of [jekyll][jekyll]/[liquid][liquid]'s [vanilla date functions][jekyll-dates]. Included was a neat codeblock that gives you fancified English 'rd'/'st'/'th' formatting[^n] ala: **{% assign d = page.date | date: "%-d"  %}{{ page.date | date: "%B" }} {% case d %}{% when '1' or '21' or '31' %}{{ d }}st{% when '2' or '22' %}{{ d }}nd{% when '3' or '23' %}{{ d }}rd{% else %}{{ d }}th {% endcase %}, {{ page.date | date: "%Y" }}**  
Pretty kewl. 

---
* **PS>** Yes I know about the [rake-file filename generator][rakefile] c/o [yeswejekyll][yeswejekyll]. But wasn't this more fun?
* **PPS>** If you're using jekyll, you really _should_ already know that for inserting liquid\ruby you can use that a `{% raw %}{% something something %}{% endraw %}` construct.
* **PPPS>** Big ups to [this post][jekyll-in-jekyll] for pointing out liquid's  `{% raw %}{% raw %}{% endraw %}` - `{% raw %}{% endraw {% endraw %}{% raw %}%}{% endraw %}` construct.
  * Though it also turns out you can also increase the number of backticks on either side to quote a backtick-block itself. 

> All I'm saying is it took me waaay too long to figure out how to write the inline code for ```` ```javascript ````

[Alan-Smith]: http://alanwsmith.com/jekyll-liquid-date-formatting-examples
[jekyll]: https://jekyllrb.com/
[jekyll-dates]: https://jekyllrb.com/docs/templates/
[jekyll-in-jekyll]: http://blog.slaks.net/2013-06-09/writing-about-jekyll-in-jekyll/
[liquid]: https://shopify.github.io/liquid/
[rakefile]: [https://github.com/plusjade/jekyll-bootstrap/blob/master/Rakefile]
[two-empty]: https://daringfireball.net/projects/markdown/syntax
[yeswejekyll]: ]http://yeswejekyll.com/#_posts

[^n]: According to [Wikipedia] they are called _'Ordinal Indicators'_ - https://en.wikipedia.org/wiki/Ordinal_indicator 

---
# **Behold:**

```````
---
title:  "&#35TIL&#58 A Jekyll Template"
subtitle: "And a bit about Dates"
date:   2017-12-25 12:00:01
categories: [rw, TIL, jekyll]
tags: [TIL, webdev, jekyll, github]
---
This is a more advanced demo template of a jekyll blog post. Right now I'm in the start of any bit of text content that will be truncated to be shown as an intro excerpt for whatever purpose, most likely a roll of blog posts. Figure I can tap out a crazy post real quick and then **append the source of this very file** to the bottom of it(self?)... See, a thing I'm not in love with about the default jekyll "_Hello World_" is that it doesn't really fill the page past a desktop screen break. Though I suppose to it's credit it _does_ show code blocks. 

We are in the land of markdown, and you *must* constanly leave an entire empty line between paragraphs. Earlier, since I didn't like the formatting of my line break tags, I learned if you _[leave two-empty spaces at the end of a line][two-empty]_ **it will force wrap**, though I'm not gonna do that now because it's time to talk about...

### Code Blocks ###
For inline code just put a `` ` `` on either side of a `word` and it will instantly turn into `'code'`.
For a block, just use backticks and a language name to get syntax highlighting ala ```` ```javascript ````, then end it with another set of ```` ``` ````. The result:
```javascript
let j = 3;
const foo = (arg) => { /*...*/}
console.table(arrtoo)
```

### Dates and Postnames ###
When you do _Save As..._ this file into your `_posts` directoy :wink:, you need to follow the annoying pattern: `YYYY-MM-DD-theoretical-name-of-post.ext`. I'll have to write about injecting HTML and Javascript _into_ jekyll posts another time [hint: use `_includes`] in order to make this a dynamic solution, maybe with a simple UI even, but I'm just aiming for some copy-paste text at the moment... 

The last time this page compiled was at {{ site.time | date: '%c' }}, so, I'd use a file formatted:  
**{{ 'now' | date: "%Y-%m-%d-Title-of-Post.md" }}**  
(Oh, and while we're on with dates, the front-matter in your post can use **{{ 'now' | date: "date: %F %T" }}** )

I do want to mention a neat snippet I found at the site of [Alan W Smith][Alan-Smith] which is a masterful exploration of [jekyll][jekyll]/[liquid][liquid]'s [vanilla date functions][jekyll-dates]. Included was a neat codeblock that gives you fancified English 'rd'/'st'/'th' formatting[^n] ala: **{% assign d = page.date | date: "%-d"  %}{{ page.date | date: "%B" }} {% case d %}{% when '1' or '21' or '31' %}{{ d }}st{% when '2' or '22' %}{{ d }}nd{% when '3' or '23' %}{{ d }}rd{% else %}{{ d }}th {% endcase %}, {{ page.date | date: "%Y" }}**  
Pretty kewl. 

---
* **PS>** Yes I know about the [rake-file filename generator][rakefile] c/o [yeswejekyll][yeswejekyll]. But wasn't this more fun?
* **PPS>** If you're using jekyll, you really _should_ already know that for inserting liquid\ruby you can use that a `{% raw %}{% something something %}{% endraw %}` construct.
* **PPPS>** Big ups to [this post][jekyll-in-jekyll] for pointing out liquid's  `{% raw %}{% raw %}{% endraw %}` - `{% raw %}{% endraw {% endraw %}{% raw %}%}{% endraw %}` construct.
  * Though it also turns out you can also increase the number of backticks on either side to quote a backtick-block itself. 

> All I'm saying is it took me waaay too long to figure out how to write the inline code for ```` ```javascript ````

[Alan-Smith]: http://alanwsmith.com/jekyll-liquid-date-formatting-examples
[jekyll]: https://jekyllrb.com/
[jekyll-dates]: https://jekyllrb.com/docs/templates/
[jekyll-in-jekyll]: http://blog.slaks.net/2013-06-09/writing-about-jekyll-in-jekyll/
[liquid]: https://shopify.github.io/liquid/
[rakefile]: [https://github.com/plusjade/jekyll-bootstrap/blob/master/Rakefile]
[two-empty]: https://daringfireball.net/projects/markdown/syntax
[yeswejekyll]: ]http://yeswejekyll.com/#_posts

[^n]: According to [Wikipedia] they are called _'Ordinal Indicators'_ - https://en.wikipedia.org/wiki/Ordinal_indicator 
```````