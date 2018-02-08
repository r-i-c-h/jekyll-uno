---
title:  "Systems Design Interview Questions"
subtitle: "All you have to know is everything"
date: 2018-02-01 12:00:01
categories: [webdev, code, backend]
tags: [dev, devops, ops]
---
The below list is adapted/augmented from an article on Hackernoon - [Top 10 System Design Interview Questions for Software Engineers][hackernoonPost]. (Imagine all of the below bullet-points have an implied 'How To' in front of them if not explicitly written. Thnx.)

## 1. Design TinyURL or bitly
### A URL shortening service
* How to generate a unique ID for each URL?
* How would your service handle redirects?
* How would your service handle caching?
* How would your service handle duplication of previously submitted URLs?
* How would you generate unique IDs at scale (thousands of URL shortening requests coming every second)?
* How to set time-to-live / delete expired URLs etc?
* User records for those submitting the URLs to be shortened
* How would you support *custom* user-defined short URLs?
* How to track click stats on each link?

## 2. Design YouTube/Netflix/Twitch
### (Possibly-realtime) Video streaming service (aka simultaneously Storing and Transmitting petabytes of data)
* How to efficiently store large amounts of data
* How to distribute data in away that a huge number of users can watch simultaneously
* How to allow for easy sharing of links.
* How would you record stats about videos (total # of views, up/down-votes, etc.)
* How would a user add comments on videos (in realtime), how would they be stored
* User playlists of upcoming videos
* User history of watched video
* User Recommended videos process

## 3. Design Facebook-Messenger/WhatsApp
### Global chat service
* How would you design one-on-one conversations between users?
* How would you extend your design to support group chats?
* What to do when a user is not connected to the internet?
* When to send push notifications?
* Can you provide end-to-end encryption. How?

## 4. Designing Quora/Reddit/HackerNews
### Message board service w/social network aspects - Users can post text or share links. Then other users can comment or vote on them.
* Record stats for each answer - category, the total number of views, upvotes/downvotes, etc.
* Track Users' histories of votes, submissions, and comments
* Track Users being able to follow topic or specific other users
* Create timeline/newsfeed for individual users consisting of top questions from all users, topics they follow, and individuals they follow.

## 5. Design Dropbox/Google Drive/iCloud
### Global file storage & sharing service
* How would users be able to upload/view/search/share files or photos?
* How would you track permissions for file sharing
* How would you allow multiple users to edit the same document

## 6. Design Facebook/Twitter/Instagram
### Large social media service with hundreds of millions of users
* How to efficiently store and search for posts or tweets.
* How to Track the relationships of who befriends/follows whom. Especially case of millions of users following a single celebrity.
* Newsfeed generation

## 7. Design a Type-Ahead Prediction Service
### Searchengine related service for guessing what is about to be typed +/ a service which would pre-emptively suggest top 10 search terms based on latest user-inpud.
* How to do the predictions themselves?
* How to store previous search queries?
* How to keep the data fresh?
* How to find the best matches to the already typed string?
* How to handle updates and the user is typing too fast?
* How to forward push loading of most likely result to client before they ask for it?

## 8. Design a 'Web Crawler'
### Scalable service that can crawl the entire Web and fetch/parse hundreds of millions of Web documents
* How to store previous search queries? (like#7)
* How to keep the data fresh? (like#7)
* How to find new web pages?
* How to prioritize web pages that change dynamically?
* How to ensure that your crawler is not infinitely stuck on the same domain or same loop of A->B->C->A->B... ?

## 9. Design an API Rate Limiter
* Limit the number of requests an entity can send to an API within a time window e.g., 15 requests per second or only 2000 total requests.
* Rate limiting should work for a distributed setup, as the APIs are accessible through a cluster of servers and can receive simultaneous requests

## 10. Design Uber or Lyft
### Ride sharing service / a proximity server
* How to efficiently match nearby customers <--> drivers when a new ride request is made?
* How to store millions of dynamic geographical locations for drivers and riders who are always moving.
* How to handle updates to driver/rider locations w/millions of updates every second?
* How to track Driver and Customer ratings? The distribution of requests for those rating to drivers/customers post-ride.
* How to track coupon codes?
* How to track payment completion or issues?
* How to track 'demand' increase and make changes with those dynamic rates?

## 11. Design Yelp
### Nearby Places/Friends kind of like #10
* How to store locations for millions of people/places
* How would the users of the service be able to search nearby friends or places?
* How to rank places (based on the distance + user reviews)
* How to efficiently store location data according to the population density (e.g. a block in New York City might have more places/people than a small city)


### For all of the above: How to handle creating a widget that can be easily embedded into a third party website (Like a facebook-like button, or a Tweet embed)

[hackernoonPost]: https://hackernoon.com/top-10-system-design-interview-questions-for-software-engineers-8561290f0444