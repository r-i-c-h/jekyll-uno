---
title:  "Line Numbers in Jekyll Code Blocks"
subtitle: "And a bit about Dates"
date:   2017-12-24 12:00:01
categories: [rw, jekyll]
tags: [TIL, webdev, jekyll, github, markdown]
---
I've been a little annoyed that [Markdown][markdown] doesn't allow for line-numbers in its code blocks. It's just not a part of the basic system[^1] though some engines _do_ add line numbers when putting together the final HTML that gets displayed. Usually, I think of these posts in terms of Markdown syntax, but I'm _really_ writing Markdown inside of [liquid][liquid] and so it turns out that in jekyll, there _is_ a way to add line numbers to code blocks. (Scroll to the bottom if you want to cut to the chase)

In Markdown, there are two 'normal' / official ways of writing code-blocks:

### 1. Using Three **\`** Backticks 
This is my normal go-to when I'm writing my posts and notes. If I want a code block I'll use the GFM [(Github Flavored Markdown)][markdown] approach which is to start and end a block with three backticks[^2] in a line. If you want a language-specific color-theme rendered, just include the name of that syntax attached to the first line of the code block's ```` ``` ````'s like so:
`````markdown
```javascript 
  function some(code) { /* goes here */ }
  var x = 21;
```
`````
Which actually renders on the page as...
```javascript 
  function some(code) { /* goes here */ }
  let x = 21;
```

### 2. Indenting Four Spaces
I don't think this is such a great idea in that while it is cool in that it is automagical, and just happens when you put an empty line and then four spaces before the start of your line, I feel that it doesn't 'read' most easily in a raw .md file

    A couple of spaces of indenting can make or break formatting things.
    And if you care enough about line numbers to read this, you care about formatting.  

Also, I don't *think* you can get any sort of language specific syntax with it.

### 3. **ANSWER**: liquid 'linenos'
The answer amounts to RTFM: It's right [in the jekyll docs][docslink], though it _is_ jekyll/liquid specific and won't work in, say, a github readme. The trick is to use [liquid's][liquid] `{% raw %}{% highlight %}{% endraw %}`function...  
Ya might recall that anything you type between an opening `{% raw %}{% highlight someLanguage %}{% endraw %}` tag, and an ending `{% raw %}{% endhighlight %}{% endraw %}` tag will be code block-formatted into whatever language you put in the first tag just like the ```` ```ruby ```` approach in #2. So, to get the exact same output as the JS example above, you'd write:
````
{% raw %}{% highlight javascript %}
    function some(code) { /*goes here*/ }
    let x = 21;
{% endhighlight %}{% endraw %}
````
**However**, _if_ I _include the word_ **`linenos`** _in the opening tag_, guess what happens?  
````
{% raw %}{% highlight javascript linenos %}
    function some(code) { /*goes here*/ }
    let x = 21;
{% endhighlight %}{% endraw %}
````
Becomes...  
{% highlight javascript linenos %}
    function some(code) { /*goes here*/ }
    let x = 21;
    // Neatorific!
{% endhighlight %}
You can actually set this as a default behavior in your `config.yml`, but I'm not gonna on this theme for the moment... (Oh, and good guess, btw.)  
If you want to style the numbers in particular, you can make changes to the `.lineno {}` class in your CSS. See [this post][lineno deets] for details, but I gotta wonder WHY WOULD A **`linenos`** [plural] ARGUMENT BE MODIFIED BY A CLASS NAME **`.lineno`** [singular]?? \<sigh\>

TIL next time...Cheers!

# BONUS ANSWER:
Saw (this post from 2015 by Tobias Lohse)[http://mrloh.se/2015/05/bending-markdown-for-jekyll-and-github-pages/] that says you can put the following code in your `_config.yml`:
```
markdown: kramdown
kramdown:
    highlighter: rouge
    syntax_highlighter_opts:
        block:
            line_numbers: true
```

---
[^1]: The argument I've seen about leaving line-#s out of GFM is that one ends up copying line numbers when copying and pasting code. Makes enough sense.
[^2]: The Backtick is the small **\`** thing _on the top left of your keyboard_ that shares a key with the tilde/**\~**/squiggle symbol. Basically, just realize that the Backtick is _NOT_ the same as a single quote **'**. It is technically called a '_grave_', but in the same way that whatever you want to call this thing: `#`,  which is really an _octothorp_, nowsadays coders just call the \` a backtick. See [Wikipedia] for deets.

[docslink]: https://jekyllrb.com/docs/templates/
[jekyll]: https://jekyllrb.com/
[lineno deets]: https://botleg.com/stories/line-numbers-in-jekyll-code-blocks/
[liquid]: https://shopify.github.io/liquid/
[markdown]: https://guides.github.com/features/mastering-markdown/
[Wikipedia]: https://en.wikipedia.org/wiki/Grave_accent