---
layout: page
title:  "Projects, Pulls, & Portfolio Pieces"
permalink: /projects/
---
<q style="display:inherit;">Proof I <s>sometimes</s> know exactly what I'm doing!</q>

### ❂ [Tabsanity Terminator][tabsanityGoogle]
Publicly [available from the Chrome Web Store][tabsanityGoogle], this is an [open-source][tabsanityGithub] extension for Google Chrome. I wanted a one-click solution to both de-duplicate the tabs in my current window as well as group them together by domain - So I built and released one.

### ❂ [Jekyll-Uknow Theme for Jekyll][uknow]
No graphic necessary, the [theme of this very blog][uknow] you are already looking at is [available as an open-source repo][uknow]. I wanted to have the experience of working with a github-pages site, and their default CMS/static-site generator is the Ruby/Elixir-based jekyll. While I'm really a 'javascript' guy I still wanted to use github's recommended tool for the task. I found an [extant jekyll theme][uno] I wanted to use, but I started discovering certain shortcomings. Since I wanted to remove jQuery and use some more contemporary CSS techniques like flexbox and CSS3-transitions, I decided that instead of making a pull-request on it, I should fork it into its own project. So, starting with an inherited codebase, I shrank the footprint, changed and shrank the (S)CSS, focused more on mobile interaction, fixed UI issues, and removed the jQuery dependencies. Still have plenty of ideas, but that's what the future is for...

### ❂ Qards iOS/Android App
A mobile cross-platform realtime multi-player card game. Used React-Native in order to make a cross-platform app for real-time multiplayer card games. Of course there were lots of moving pieces in the tech-stack to make this work -  Firebase for Facebook/Google authentication, Reddis, SQL, Socket.io, Heroku deployment of our Express server with Circle-CI. Really wanted to get P2P WebRTC working, but since React Native is always in flux, at the time that library was broken. As this was a team project, there is plenty of code I'd like to rewrite. Thoughts include changing  the client/server to use GraphQL instead of the GET/POST scheme originally designed because now that I know about GQL I think it would be a much better tool for the job. Additionally, the testing suite should be rewritten (perhaps using Jest) since the mocha/chai/sinon combo caused us more problems than they solved.

### ❂ Stateful State Feels (News Mapper)
![News Mapper US Image]({{ "/images/NewsMapper1Mini.png"}})  ![News Mapper Global Image]({{ "/images/NewsMapper2Mini.png"}})

An interactive Data-Visualization using Bootstrap and React libraries for construction. Every 24-hrs the "Top-10 news stories by US-State" were pulled from a custom API and put into a MongoDB database. From there, each story was run through the IBM Watson Tone Analyzer API which returned a variety of sentiment analysis scores. These scores formed a dataset which was used to feed a Mapbox overlay placed on a map of the US. Users would select different criteria and can then hover over each state with a mouse to see a choropleth-style visualization of the 'score' of that particular sentiment. Eventually this was expanded to a global context which required the addition of data-scraping the front page of a number of international English-language news sites.
([Ver1 of the project][HerokuNewsMap] is still deployed on Heroku, but there isn't any data to see since our api provider shut down in Jan-2018.)

### ❂ WordPress Sites
Not high on any web-developer's resume [any more] is the work done for umpteen WordPress installations. While I'm looking forward to WordPress becoming a React environment, in the past I've done a [dozen or so][anna] sites with the WordPress CMS so [clients][ecbt] could manage [their own content][ninetwenty] without [my][rjazz] assistance. Depending on the project, I've created customized reusable child-themes that could be updated, custom PHP elements for rendering, WordPress' own JetPack system for link/comment-tracking and SEO, as well as not so out-of-the-box solutions. Different projects have required everything from WooCommerce plugin shopping-carts, creating custom code to facilitate PayPal payments, to online client scheduling.

❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿ ❯ ★ ✎ ✦ ✮ ✯ ❂ ⦿

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