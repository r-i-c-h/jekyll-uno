---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  // if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
  //   $('.panel-cover').addClass('panel-cover--collapsed')
  // }
  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.hash && window.location.hash == '#project') {
    //$('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.blog-btn').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;

    currentWidth = $('.panel-cover').width()

    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '800px', 'width': '30%'}, 400, 'linear');
    }
  })

  $('.navigation-wrapper a').click(function () {
    // $('.navigation-wrapper').toggleClass('visible') // toggle visibility of .nav-wrapper
    $('.btn-mobile-menu__icon').removeClass('animated fadeIn');
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn'); // toggle between list and X,  animated \ fadeIn
    $('.navigation-wrapper').removeClass('animated'); 
    $('.navigation-wrapper').removeClass('bounceInDown'); 
    $('.navigation-wrapper').toggleClass('animated bounceOutUp');  // bounce it out   
    
  })


  // Click the list\x link....
  // Both the 'hamburger icon-list' and 'icon-x-circle' are in the .btn-mobile-menu
  $('.btn-mobile-menu').click(function () {
    const navWrap = $('.navigation-wrapper');
    if ( navWrap.hasClass('bounceInDown') ){ // Nav is visible
      navWrap.removeClass('animated'); 
      navWrap.removeClass('bounceInDown'); 
      navWrap.toggleClass('animated bounceOutUp');  // bounce it out
    } else {
      navWrap.removeClass('animated'); 
      navWrap.removeClass('bounceOutUp');
      navWrap.addClass('visible');
      navWrap.toggleClass('animated bounceInDown');  // bounce out & show
    }
    
    // the nav icon will toggle - between icon-list<<-->>icon-x   animated and fadeIn
    $('.btn-mobile-menu__icon').toggleClass('animated fadeIn')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
});