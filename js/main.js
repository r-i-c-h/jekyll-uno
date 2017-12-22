---
layout: null
sitemap:
  exclude: 'yes'
---

const panel = document.getElementById('magic-panel')
const hasCollapsed = () => { return panel.classList.contains('panel-cover--collapsed') }
const addCollapsed = () => { panel.classList.add('panel-cover--collapsed') }
const shrinkPanel = () => {
  document.getElementsByClassName('navigation-wrapper')[0].style.flexDirection = 'column'
  document.getElementsByClassName('panel-cover__description')[0].style.display = 'none'
  document.getElementsByClassName('panel-cover__divider--secondary')[0].style.display = 'none'
  panel.style.width = '25%' // Animation via CSS Transition
}

const mainContent = document.getElementsByClassName('content-wrapper')[0]
const mobileTopBar = document.getElementById('mobile-menu-topbar')

if (window.location.hash && window.location.hash == '#blog') {
  addCollapsed()
}

if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
  addCollapsed()
}

const projectBtn = document.getElementById('project-btn')
projectBtn.addEventListener('click', (e) => { e.preventDefault() })
const loadProjectPage = () => { window.location.href = '{{ site.baseurl }}/projects/' }

const bigButtons = document.getElementsByClassName('big-button')
for (let i = 0 ; i < bigButtons.length; i++) {
  bigButtons[i].addEventListener('click', (e) => {
    if ( hasCollapsed() && (e.target === projectBtn) ) loadProjectPage()
    if ( hasCollapsed() ) return

    if ( panel.clientWidth < 960 ) {
      addCollapsed()
    } else { 
        // if project button, change window.location after panel is done with transition
        if ( e.target === projectBtn ) {
          mainContent.style.display = 'none'
          panel.addEventListener('transitionend', (e) => {
            loadProjectPage()
          }, true)
        }
        shrinkPanel()
      }
      if ( e.target === document.getElementById('blog-btn') ) {
        mainContent.style.display = 'block'
        mainContent.classList.add('animated') // $('.content-wrapper').addClass('animated slideInRight')
        mainContent.classList.add('slideInRight')
      }
  })
} // endFor 

  
/*   $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
 */
/*  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
 */