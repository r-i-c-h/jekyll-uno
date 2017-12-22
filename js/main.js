---
layout: null
sitemap:
  exclude: 'yes'
---
const panel = document.getElementById('grey-panel')
const isPanelCollapsed = () => { return panel.classList.contains('panel-cover--collapsed') }
const addCollapsed = () => { panel.classList.add('panel-cover--collapsed') }

if (window.location.hash && window.location.hash == '#blog') { 
  addCollapsed() 
}
if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
  addCollapsed()
}

const bigButtons = document.getElementsByClassName('big-button')
const blogBtn = document.getElementById('blog-btn')
const projectBtn = document.getElementById('project-btn')
const loadProjectPage = () => { window.location.href = '{{ site.baseurl }}/projects/' }

projectBtn.addEventListener('click', (e) => { e.preventDefault() })
for (let i = 0 ; i < bigButtons.length; i++) {
  bigButtons[i].addEventListener('click', (e) => {   
    const mainContent = document.getElementsByClassName('content-wrapper')[0]
 
    const checkForProjectPageChange = () => {
      if (e.target === projectBtn) loadProjectPage()
      return null;
    }
    
    if ( isPanelCollapsed() ) return checkForProjectPageChange()
 
    if ( panel.clientWidth < 960 ) {
      addCollapsed()
      return checkForProjectPageChange();
    }
    
    if ( e.target === projectBtn ) { // Setup project page reload for *after* transitions ends
      mainContent.style.display = 'none'
      panel.addEventListener('transitionend', (e) => {
        loadProjectPage()
      })
    }
      
    /* Shrink Panel To The Left */
    document.getElementsByClassName('navigation-wrapper')[0].style.flexDirection = 'column'
    document.getElementsByClassName('panel-cover__description')[0].style.display = 'none'
    document.getElementsByClassName('panel-cover__divider--secondary')[0].style.display = 'none'
    panel.style.width = '25%' // Animation via CSS Transition
  
    if ( e.target === blogBtn ) { // Main blog content fly in from left animation 
      mainContent.style.display = 'block'
      mainContent.classList.add('animated')
      mainContent.classList.add('slideInRight')
    }
  })
}

  
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