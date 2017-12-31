---
title:  "&#35TIL&#58 Emulate Two Finger Touch in Chrome"
subtitle: "Spread 'em"
date:   2017-11-29 12:00:01
categories: [rw, webdev]
tags: [TIL, webdev, chrome, code, debugging]
---
If you do web development, you probably already know that you can get Chrome to emulate a variety of non-desktop devices.  

If this is news to you, open up the Developer Tools (⌥ + ⌘ + I ) and then select the mobile icon in the top left corner (or ⌘ + ⇧ + M ).  Ta-Daah!!!

Now, in the main browser window (you may have to click on it once to bring it back into 'focus'), if you move your mouse over the content, you'll see your mouse-cursor is now a translucent circle which emulates touch events. 

But, while tweaking a mobile layout, I accidentally just bumped into the fact that **if you hold down the Shift ⇧ key**, your mouse will turn into a cross-arrow[^n] and then as you click it emulates some sort of two-finger spreading behavior.

How 'bout that now?

--- 
[^n] aka 'plus-sign thingy with arrows' - apparently there's no Unicode for it? Yaknow, one of these sorta things ✚|☩|✢|✣ with arrows on the tips... 