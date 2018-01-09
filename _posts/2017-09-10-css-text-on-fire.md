---
title:  "CSS Text on Fire"
date:   2017-09-10 15:04:23
categories: [webdev]
tags: [CSS, neato]
---
While the site [CSSNewbie.com][site] doesn't always have the best executions, I am enamored with [this particular text-effect][fire]. By using different offset drop shadows[^n], the text is made to look like it is _en fuego_ and it works pretty well as a visual trick...

### End result: 
<div style="background-color:#0d0d0d; text-align:center; padding:1rem; font-size:1.5rem;"> Setting things <span style="color: #f5f5f5; text-shadow: 0px -2px 4px #fff, 0px -2px 10px #FF3, 0px -10px 20px #F90, 0px -20px 40px #C33; font-size:4rem; display:inline-block; vertical-align:middle; padding-right:3px; padding-left:3px;">ON FIRE</span> everywhere you go....</div>

### How-To:
Make some element and give it a `class="fire"` to apply it...

```css
body {
  background-color:#0d0d0d; /* something dark */
  text-align:center;
}

.fire {
  font-size: 4rem; /* large enough to see the effect */
  color: #f5f5f5;
  text-shadow:
  0px -2px 4px #fff,
  0px -2px 10px #FF3,
  0px -10px 20px #F90,
  0px -20px 40px #C33;

  /* particulars of my example */
  display: inline-block;
  vertical-align: middle;
}
```
---
[site]: https://cssnewbie.com/
[fire]: https://cssnewbie.com/css-burning-text-effect/
[^n]: Ok, really, `text-shadows` obviously