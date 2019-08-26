---
layout: page
title:  "Projects, Pulls, & Portfolio Pieces"
permalink: /projects/
---
<q style="display:inherit;">Proof I <s>sometimes</s> know exactly what I'm doing!</q>

### ❂ [Tabsanity Terminator][tabsanityGoogle]
Publicly [available from the Chrome Web Store][tabsanityGoogle], this is an [open-source][tabsanityGithub] extension for Google Chrome to both de-duplicate tabs in the current window as well as group them by domain.

### ❂ [ECBT][ecbt]
Site for a private psychology practice which I completely owned from design to deployment. Mobile-responsive, ARIA-accessibility compliant, with a Google Maps integration. Particularly worth highlighting as there were zero frameworks or helpers involved - Nothing but hand-coded HTML, SASS/(S)CSS, SVG, and JavaScript. 

### ❂ [Jekyll-Uknow Theme for Jekyll][uknow]
The [theme of this very blog][uknow] is available as an [open-source repo][uknow]. While I'm really a 'javascript' guy, this site is built on the Ruby/Elixir Jekyll framework because I wanted the challenge of stepping outside of my comfort zone. Forking an [extant jekyll theme][uno], I heavily revised it by focusing on mobile interaction, fixing UI issues, shrinking the (S)CSS and moving to some contemporary CSS techniques like flexbox and CSS-transitions. These not only improved UX, but allowed for the removal of jQuery-dependencies which shrink file sizes and improved site performance.

### ❂ Qards iOS/Android App
![Qards Login]({{ "/images/Qaards-sm-Sc1.png"}})  ![Qards Group-Play Screen]({{ "/images/Qaards-sm-Sc4.png"}})
A mobile cross-platform realtime multi-player card game built with React-Native. Lots of moving pieces in the tech-stack to make this work -  Firebase for Facebook/Google authentication, Reddis for session management, SQL for game stats, Socket.io for realtime communication, and Express server deployment to Heroku with Circle-CI. 

### ❂ Stateful State Feels (News Mapper)
![News Mapper US Image]({{ "/images/NewsMapper1Mini.png"}})  ![News Mapper Global Image]({{ "/images/NewsMapper2Mini.png"}})
An interactive Data-Visualization using Bootstrap and React libraries. ([Ver1 of the project][HerokuNewsMap] is still deployed on Heroku, but there isn't any data since our api provider shut down in Jan-2018.) Every 24-hrs the "Top-10 news stories by US-State" were pulled from a custom API and put into a MongoDB database. From there, each story was scored by the IBM Watson Tone-Analyzer API which returned a variety of sentiment analysis scores. These scores formed a dataset which was used to feed a Mapbox overlay placed on a map of the US. Users would select different criteria and could hover over each state with a mouse to see a choropleth-style visualization of the 'score' of that particular sentiment. 

### ❂ WordPress Sites
Since the mid-2000's I've been doing [WordPress][[anna] [installations][ninetwenty]. Though on my own I prefer Gatsby for static site development, WordPress remains one of the fastest ways for [me][rjazz] to get a client up and running. Different projects have required everything from integrating WooCommerce plugin shopping-carts to an existing site, creating custom code to facilitate PayPal payments, and setting up an online client scheduling integration.Depending on the project, I've created customized theming/styling, custom PHP elements for rendering, setup WordPress' own JetPack system for link/comment-tracking and SEO, as well as not so out-of-the-box solutions... 

❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦

[anna]: https://www.annagoldacupuncture.com/
[tabsanityGoogle]: https://chrome.google.com/webstore/detail/tabsanity-terminator/gogccpmimpnngeklhecgkcnmagenaepd
[ecbt]: https://www.evanstoncbt.com/
[javascripting]: https://github.com/workshopper/javascripting
[learnyounode]: https://github.com/workshopper/learnyounode
[ninetwenty]: http://www.920special.com/
[nodeschool]:   https://nodeschool.io/
[rjazz]: http://www.richjazz.com
[tabsanityGithub]: https://github.com/r-i-c-h/tabsanity-terminator
[uknow]: https://github.com/r-i-c-h/jekyll-uknow
[uno]: https://github.com/joshgerdes/jekyll-uno
[HerokuNewsmap]: http://104.131.140.155/