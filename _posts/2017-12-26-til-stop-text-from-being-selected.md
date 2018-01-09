---
title:  "&#35TIL&#58 Stop Text From Being Selected"
subtitle: "Don't touch that"
date:   2017-12-26 12:00:01
categories: [rw, TIL, webdev]
tags: [TIL, HTML, CSS, code]
---
I've wondered how pages prevent the copying and pasting of text-content, and was thinking that touchable events would change things somehow. I mean, of course, you could just put all your text on the screen as [one big image][ascii-table] but, that's not indexable\searchable. So TIL the CSS argument combo `user-select:` and `touch-callout:` which I guess one really should vendor-prefix the heck out of...
```css
.classname { 
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

---
<h1 style="user-select: none; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none;">Go On. Try to select me.</h1>
Betcha can't...

[ascii-table]: http://www.asciitable.com/