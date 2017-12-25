# jekyll-Uknow

A fork of the minimalist and responsive Jekyll-Uno theme by [joshgerdes](http://joshgerdes.github.com) originally based on the [Uno](https://github.com/daleanthony/Uno) theme for Ghost. 
> :warning:  This theme requires ruby and rubygems installed

## Features
* Removed all jQuery dependencies
* Clean layout
* Resposive layout
* Pagination
* Syntax highlighting
* Social links
* Tags listing page
* Categories listing page
* Google Analytics integration
* ?? Disqus integration ??
* Due the use of CSS3 Transitions, as per [caniuse.com](https://caniuse.com/#feat=css-transitions) it won't work for 6.5% of the world's browsers (...forget anything before IE11!)

---

1. Download or clone repo `git clone git@github.com:joshgerdes/jekyll-uno.git`
1. Enter the folder: `cd jekyll-uno/`

1. If you don't have bundler installed: `gem install bundler`
1. Install Ruby gems: `bundle install`
1. Start your local server
  1.1 If you do not have the jekyll-livereload gem, start Jekyll server with: `bundle exec jekyll serve --watch`
  1.1 If you _DO_ have the jekyll-livereload bundle, you can use `bundle exec jekyll serve --livereload --watch`

### Copyright and licensed under [the MIT license](/LICENSE)

---

#### Ideas for the future:
* Add Search Capability!
* Change dynamic media width from 960 to 720
* Handle browser 'back' button from `site.url/#blog` back to `site.url`
  * https://www.oshyn.com/blogs/2011/december/javascript_navigation_using_hash_change____
  * https://stackoverflow.com/questions/172957/detecting-back-button-hash-change-in-url
  * https://gist.github.com/sstephenson/739659
* Use and abuse some prebaked [Font-Awesome Animations](https://l-lin.github.io/font-awesome-animation/)