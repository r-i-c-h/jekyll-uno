---
layout: page
title:  "Projects, Pulls, & Portfolio Pieces"
permalink: /projects/
---
## Jekyll-Uknow Theme for Jekyll
No screenshot necessary, the theme of this very blog you are looking at is available as an [open-source repo][https://github.com/r-i-c-h/jekyll-uknow]. I found [a jekyll theme][uno] I wanted this github-pages site to use, but as I put it into place, I started discovering various shortcomings. So, starting with an inherited codebase I shrank the footprint, updated CSS, fixed UI animation issues, and removed jQuery dependencies.

## Qards iOS/Android App
A Mobile Realtime Multi-player card-game. Used React-Native in order to make a cross-platform app for real-time multiplayer card games. Whole host of techs involved, Firebase, Facebook/Google user logins, Redis, SQL, Heroku deployment with Circle-CI. 

## Stateful State Feels
An exercise in interactive data-visualization. Every 24-hrs the "Top-10 news stories by US-State" were pulled from an API and put into a MongoDB database. From there, each story was run through the (IBM Watson Tone Analyzer)[watson] which returned a variety of sentiment analysis scores. These scores formed a dataset which was used to feed a Mapbox overlay placed on a map of the US. Users select different sentiments and can hover over each state to see a visualization of the 'score' of that particular sentiment.

## TabTrim - WIP
Open-source Extension for Google Chrome. I just wanted a one-click solution to both de-duplicate the tabs in my window as well as group them together by domain. 

## learnyounode - WIP
I enjoy teaching others about tech when I have the time/opportunity to do so,  and I am lucky enough to have a fairly active chapter of [NodeSchool][nodeschool] in my area. The first thing we have new people do is go through the very first [learnyounode][learnyounode] set of challenges, ['javascripting'][javascripting]. Unfortunately, I found the instructions for the challenges to be needlessly confusing, so worked on hopefully clarifying things. 


[watson]:       https://www.ibm.com/watson/services/tone-analyzer/
[nodeschool]:   https://nodeschool.io/
[learnyounode]: https://github.com/workshopper/learnyounode
[uno]: https://github.com/joshgerdes/jekyll-uno
[javascripting]: https://github.com/workshopper/javascripting