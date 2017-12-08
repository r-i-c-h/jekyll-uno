---
layout: null
sitemap:
  exclude: 'yes'
---
/* I didn't put the jQuery in there, it came that way. I'm afraid to remove it lest it break something...*/
/* ('.btn-mobile-menu') ('.btn-mobile-menu__icon').toggle ('.content-wrapper') ('.panel-cover') ('a.blog-button') */

// Blog Button is #blogbutton        Proj Button is #projbutton
  $(document).ready(function () {

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (( $('.panel-cover').width() < 960 ) || ( $('.panel-cover').hasClass('panel-cover--collapsed') )) {
    $('.panel-cover').addClass('panel-cover--collapsed') 
    $('.panel-cover__description').remove()
    $('.panel-cover__divider--secondary').remove()
  }

  $('a.blog-button').click(function (e) {
    if ( $('.panel-cover').hasClass('panel-cover--collapsed') ) return
    if ( $('.panel-cover').width() < 960 ) {
      $('.panel-cover').addClass('panel-cover--collapsed')
    } else {
      // >=960
      $('.panel-cover').css('max-width',  $('.panel-cover').width())
    }
    $('.content-wrapper').hide()
    $('.panel-cover').animate({'max-width': '530px', 'width': '25%'}, 400, swing = 'swing', function () {
      $('.content-wrapper').show()
      $('.content-wrapper').addClass('animated slideInRight')
    })
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.panel-cover__description').remove()
    $('.panel-cover__divider--secondary').remove()
  })

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})