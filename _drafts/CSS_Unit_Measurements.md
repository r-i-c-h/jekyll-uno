---
title:  "CSS Unit Measurements"
subtitle: "From Here to There"
date:   2018-05-07 12:00:01
categories: [webdev, front-end]
tags: [CSS, HTML, SASS, SCSS]
---

How big is big, how small is small, and how can we tell CSS to display the difference? CSS has a LOT of available unit-types one can use for various measurements. Supposedly there are 27? Here are the ones I know of.

## The "Duh" Units
. `px` - Size in pixels. The old standby. Default unit for most CSS measurement. *Theoretically* `1px` = 1/96th of an inch.
. `deg` - Rotation in Degrees. A complete circular rotation is `360deg`. Default unit for any sort of rotational CSS transformations.
. `s` - Time in Seconds - used for animations and transition timings.
. `ms` - Time in Milliseconds. `1s` = `1000ms`

## Responsive Units that you * gotta * know
. `em` - The "em-dash" is the width of any font's `m` character. It comes from the relative sizing which originated with changing letter blocks on a physical printing press. It's a typography-based scaling unit that describes a ratio to a given font-size. If we use`1.2em` in a child-element, the size is 20% larger than its parent's font-size. But you MUST be careful! In CSS, the **`em`** unit _only relates to the font-size on a parent-element_. If you set a parent element and a child element to both use `em` units, the child element's `em` will end up making changes based on the inherited value from its parent, not from a common source which causes messy bug confusion badness.
. `rem` - *Root* Em-Dash is exactly like the `em` unit, BUT a `rem` *always* relates to the default font-size set on the *body* no matter where we use it. `rem` works as a global measurement system and is much cleaner than `em`!
. `vh` - `1vh` = 1% of a *viewport’s height*, and `100vh` is the height of the entire viewport
. `vw` - Same as `vh`, but relates to the viewport's *width*
. `vmin` - Since screens on many devices can rotate between landscape/horizontal/wide and page/vertical/tall orientations, `1vmin` = 1% of *whichever is smaller* between the height or the width. It'll depend on "which way you're holding the thing".
. `vmax` - Like `vmin` but the *larger* of either the viewport's height or width.
. `fr` - Fractions of a parent element. `3fr` means divide the parent element into 3 sections. It is going to be common as we transition over to using CSS `grid`.

## Units You Never See
. `rad` - Rotation in *Radians* - Yaknow. HS Geometry? Remember? Neither do I. Radians are based on the the value of Pi. 1rad is 180/π degrees. Full rotation is 2π. Really though you would write a full rotation as `6.2832rad`. I guess it's good for math-heavy calculations?
. `grad` - Rotation in *Gradians* - Useful *but* I think we're all just accustomed to thinking in terms of degrees when it comes to rotations and the scale is too close. I'm sure other devs would kill me if I ever used this, though it is my favorite unloved unit. The `grad` is like degrees, but with easier math! A full `360deg` rotation = *400*`grad`.
. `turn` - Rotation as a "turn" is just what you think it is. A full rotation is `1turn`; Simple, but ya never see it.
. `ex` - The "x-height" of an element's font. It's the vertical height of a font's `x` character. Again, old publishing term ala 'em'.

## The BAD "Duh" Units

Physical units that we already know run into trouble when being used to describe sizes on a screen.


Defining units to describe the sizes of visual layouts for publishing in the real world has had a push and pull as we've evolved from the printing-press to something like a phone screen.
Since you normally don't know the size of a screen displaying your content or even its shape, in CSS we've moved away from the hard units of the real world to sizing units that adapt to their environments. Due to resolution differences, the physical size of 1px on your monitor may be different than the size of 1px on mine. Many measurements were established for use with typography on a physical printing press and while they did work for paper printing in the, they are *NOT reliable* representations of what may be on a user's screen.

. `in` - Inches  1in = 2.54cm = 96px
. `cm` - Centimeters  1cm = 96px/2.54
. `mm` - Millimeters  1mm = 1cm/10
. `pt` - Points  1pt = 1/72th of 1in

## CSS has these??!?
Per the [Official CSS Spec](https://www.w3.org/TR/css-values/]sklfjaslkasj)...
21. `ch` - The width of a font's `0` character.
22. `pc` - Picas.  1pc = 1/6th of an inch
23. `Q` - quarter-millimeters 1q = 1/40th of 1cm.


## MOST SUPRISING:
FREQUENCY Values! In CSS?!? What the whut?
. `hz` - Hertz. 1 Hertz means that something happens once per second, like the pulse of air in an audio wave (really, we can't hear anything until about 20Hz, and that is a bass low-end boom that is more felt than heard).
. `kHz` - 1 kiloHertz is 1000 Hertz. Usually defines higher-pitched screetchy sounds.
Looking at the spec, it's actually not clear if the unit is `Hz` or `hz` (ditto for `khz` and `kHz`), but normally in science we use the capital H for both.


`dpi` - Dots per inch.
`dpcm` - Dots per centimeter.
`dppx` -  Dots per px unit.



I'm describing these units in common-use cases, but CSS [`calc( )`] can do math with the same *type* of units even if they are actually different - Say, anything that measures distance, ex: You can mix `px` with `vw` or `rem`.



. `%` - I have to explain this? Does it even count? %s always relate to another measurement.