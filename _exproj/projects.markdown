---
layout: page
title:  "Projects, Pulls, & Portfolio Pieces"
permalink: /projects/
---
<q>It's proof I <s>sometimes</s> know exactly what I'm doing!</q>

### ❂ [Jekyll-Uknow Theme for Jekyll][uknow]
No graphic necessary, the [theme of this very blog][uknow] you are already looking at is [available as an open-source repo][uknow]. I wanted to have the experience of hosting a github-pages site, and their default CMS/static-site generator is jekyll. While I'm really a 'javascript' guy, and jekyll is based on ruby, I still wanted to use github's recommended tool for the task so I didn't let that stop me. I found an extant [jekyll theme][uno] I wanted to use, but as I put it into place, I started discovering shortcomings and user-interaction discrepancies. Since I wanted to remove jQuery and use some more contemporary CSS techniques like flexbox and CSS3-transitions, I decided that instead of making a pull-request on it, I just forked it into its own project. So, starting with an inherited codebase, I shrank the footprint, changed and shrank the (S)CSS, focused more on mobile interaction, fixed UI issues, and removed the jQuery dependencies. Still have plenty of ideas, but that's what the future is for...

### ❂ [Tabsanity Terminator][tabsanity]
[Open-source][tabsanity] Extension for Google Chrome. I wanted a one-click solution to both de-duplicate the tabs in the current window as well as group them together by domain. So I built and released one. Publicly [available from the Chrome Web Store][chromeWebStore]

### ❂ Qards iOS/Android App
A mobile cross-platform realtime multi-player card game. Used React-Native in order to make a cross-platform app for real-time multiplayer card games. Of course there were lots of moving pieces in the tech-stack to make this work -  Firebase for Facebook/Google authentication, Reddis, SQL, Heroku deployment of our Express server with Circle-CI. I'd like to rewrite the client/server to use GraphQL instead of the GET/POST scheme originally designed because now that I know about GQL, I think it would be a much better tool for the job. Additionally, testing was minimal and the test-suite at best was fractured, so now that I know more about it I'd like to implement the jest suite instead of the mocha/chai/sinon/??? patchwork that caused more problems than they solved.

### ❂ Stateful State Feels
An exercise in interactive data-visualization. Every 24-hrs the "Top-10 news stories by US-State" were pulled from an API and put into a MongoDB database. From there, each story was run through the [IBM Watson Tone Analyzer][watson] which returned a variety of sentiment analysis scores. These scores formed a dataset which was used to feed a Mapbox overlay placed on a map of the US. Users select different sentiments and can hover over each state with a mouse to see a choropleth-style visualization of the 'score' of that particular sentiment.

### ❂ learnyounode - WIP
I enjoy teaching others about tech when I have the time/opportunity to do so,  and I am lucky enough to have a fairly active chapter of [NodeSchool][nodeschool] in my area. The first thing we have new people do is go through the very first [learnyounode][learnyounode] set of challenges, ['javascripting'][javascripting]. Unfortunately, I found the instructions for the challenges to be needlessly confusing, so worked on hopefully clarifying things. 

### ❂ WordPress Sites
Not high on any web-developer's resume [any more] is the work done for umpteen WordPress installs. I'm looking forward to WordPress becoming much more fluid as it becomes a React environment, but in the past I've done a [dozen or so][anna] sites with the WordPress CMS so [clients][ecbt] could manage [their own content][ninetwenty] without [my][rjazz] assistance. Depending on the project, I've created customized reusable child-themes that could be updated, custom PHP elements for rendering, WordPress' own JetPack system for link/comment-tracking and SEO, as well as not so out-of-the-box solutions. Different projects have required everything from WooCommerce plugin shopping-carts, creating custom code to facilitate PayPal payments, to online client scheduling.

❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿

[anna]: https://www.annagoldacupuncture.com/
[chromeWebStore]: [https://chrome.google.com/webstore/detail/tabsanity-terminator/gogccpmimpnngeklhecgkcnmagenaepd]
[ecbt]: https://www.evanstoncbt.com/
[javascripting]: https://github.com/workshopper/javascripting
[learnyounode]: https://github.com/workshopper/learnyounode
[ninetwenty]: http://www.920special.com/
[nodeschool]:   https://nodeschool.io/
[rjazz]: http://www.richjazz.com
[tabsanity]: https://github.com/r-i-c-h/tabsanity-terminator
[uknow]: https://github.com/r-i-c-h/jekyll-uknow
[uno]: https://github.com/joshgerdes/jekyll-uno
[watson]:       https://www.ibm.com/watson/services/tone-analyzer/