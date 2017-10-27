---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {

  // if you are in '#blog' mode, collapse the menu panel
  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  // if you are not at the URL root or /index.html, collapse the menu panel
  // if you are in '#blog' mode, collapse the menu panel
  if (window.location.hash && window.location.hash == '#project') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  // if you are not at the URL root or /index.html, collapse the menu panel
  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  // Click the blog link
  $('a.blog-button').click(function (e) {
    // if .panel-cover is collapsed do nada
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return

    // check width of panel cover
    currentWidth = $('.panel-cover').width()

    // if display is small, 
    if (currentWidth < 960) {
      // collapse the panel cover AND add animated slideInRight to the content wrapper
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
    // otherwise
    // if display is big, set the max-width and 
      $('.panel-cover').css('max-width', currentWidth)

      // animate the panel-cover width to 40% with a max-width of 800px , over 400ms, 
      // by setting a max-width, you ensure the div will grow 'out' from an empty center instead of possibly only shrinking
// (Original Line: $('.panel-cover').animate({'max-width': '800px', 'width': '40%'}, 400, swing = 'swing', function () {}))
      $('.panel-cover').animate({'max-width': '800px', 'width': '40%'}, 400, 'linear');x
    }
  })

  // click the blog button in the Nav-Wrapper
  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible') // toggle visibility of .nav-wrapper
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn') // toggle between list and X,  animated \ fadeIn
  })


  // Click the list\x link....
  // Both the 'hamburger icon-list' and 'icon-x-circle' are in the .btn-mobile-menu
  $('.btn-mobile-menu').click(function () {
    // By default the btn-mobile-menu has classes="icon icon-list btn-mobile-menu__icon"
    // .nav wrapper toggles -   visible, animated, and bounceInDown
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown') 
    // the nav icon will toggle - between icon-list<<-->>icon-x   animated and fadeIn
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
});