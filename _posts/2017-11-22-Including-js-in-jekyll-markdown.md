---
title:  "Including JS In Jekyll Markdown"
subtitle: "Or is it _including?"
date:   2017-11-22 15:04:23
categories: [rw, webdev, jekyll]
tags: [jekyll, javascript, includes]
---
I don't know if calling the markdown language for [jekyll][jekyll] 'Jekyll Markdown' is the best nomenclature. I mean, it _is_ to me at its heart really markdown, but then I've got the [liquid][liquid] templating language. :aside: templates within non-templated material. oy.:

So I was thinking about how to include some dynamically-rendered content in one of these pages. But then, yaknow, the whole point of this system is to pre-compile everything. Was trying to think of a way to inject javascript into my jekyll markdown. Then I remembered the **\_includes** folder. So, here's what I came up with

## Method 1: Inline `<script>` Tags ##
### A Quick & Dirty Not-The-Best-Idea ###
Since you can use whatever HTML tags you want inline in a Markdown post, if I were to arbitrarily put a `<script>` tag to start code and end it with a `</script>` in the middle of my writing, it _would_ actually take effect. If you don't believe me, <script> console.log('Why Helloooooo... See? I told ya so =_= :-P')</script> go ahead and take a look at your console, and then the source for this page. (I'll wait)...

While this may be useful, it does seem a little hack-y and it would be tough figuring out where code went awry, so I gotta say, I'd recommend the following idea of using jekyll's 'includes' over inlining your JS.

## Method 2: The \_includes Folder ##
### (aka "The Clean Way") ###
Then I remembered the **\_includes** folder. You can bring in anything to the middle of a page by using the liquid\ruby\whatever percentage syntax: `{% raw %}{% include some-other-file.html %}{% endraw %}`. There is some great advanced and *dynamic* usage of includes over [at idratherbewriting.com][Adv Includes]

Since the `_includes` folder import process is looking for _complete_ .html files, what ya could do is write a super-vanilla HTML markup, and then write whatever code you want inside of a `<script>` tag. 
So I'd write the following and save it as `something.html` inside the site's `_includes` directory
```html
<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script>
   /*** Put JS Content Here... ***/
</script>
</body>
</html>
```

Then, by typing `{% raw %}{% include something.html %}{% endraw %}` the file will be imported\injected into this post and the javascript code should be coming along for the ride...

## Method 3: Outside Forces ##
Let me add that apparently you can pull in a live file from a github repo by using that file's raw incarnation (available via the [rawgit][rawgit] website). Haven't tried it yet...

---
[Adv Includes]: http://idratherbewriting.com/2016/06/06/extending-markdown-in-jekyll-with-includes/
[jekyll]:   http://jekyllrb.com
[liquid]:   https://shopify.github.io/liquid/
[rawgit]:   https://rawgit.com/
