# jekyll-Uknow

A fork of the minimalist and responsive Jekyll-Uno theme by [joshgerdes](http://joshgerdes.github.com), itself originally based on the [Uno](https://github.com/daleanthony/Uno) theme for Ghost. 
> :warning:  This theme requires ruby and rubygems installed + Due to use of CSS-Transitions it does not attempt to be backwards-compatible for older browsers

## Features

* Responsive layout
* Pagination
* Syntax highlighting
* Social links
* Tags listing page
* Categories listing page
* Google Analytics integration
* XML Feed (Not linked in default)
* Disqus integration (Not enabled but code is in /_includes)

## Changes from Parent

* Removes jQuery dependencies
* Fixes + Improves UI/UX
* Shrinks CSS Footprint
* Adds Project/Portfolio Static Display Links

---

1. Download or clone repo `git clone git@github.com:r-i-c-h/jekyll-uknow.git`
1. Enter the folder: `cd jekyll-uknow/`
1. If you don't have bundler installed: `gem install bundler`
1. Install Ruby gems: `bundle install`
1. Start your local server
   1.1 If you _do_ have the jekyll-livereload bundle, you can use `bundle exec jekyll serve --livereload --watch`
   1.1 If you do not have the jekyll-livereload gem, start Jekyll server with: `bundle exec jekyll serve --watch`

### Copyright and licensed under [the MIT license](/LICENSE)

---

#### Ideas for the future
* Add Search Capability:
  * https://learn.cloudcannon.com/jekyll/jekyll-search-using-lunr-js/
  * https://botleg.com/stories/implement-elasticsearch-in-jekyll-blog/
  * https://ryanharrison.co.uk/2017/10/24/elastic-jekyll.html
* Change 'Projects' from single Page to a proper jekyll-collection
  * https://jekyllrb.com/docs/collections/
* Support Subtitles in Posts
* Change CSS px/ems to rems where possible
* Change dynamic media width from 960 to 720
* Adopt proper BEM style to organize CSS 
* Handle browser 'back' button from `site.url/#blog` back to `site.url`
  * https://www.oshyn.com/blogs/2011/december/javascript_navigation_using_hash_change____
  * https://stackoverflow.com/questions/172957/detecting-back-button-hash-change-in-url
  * https://gist.github.com/sstephenson/739659
* Use and abuse some prebaked [Font-Awesome Animations](https://l-lin.github.io/font-awesome-animation/)