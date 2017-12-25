---
layout: null
sitemap:
exclude: 'yes'
---
// debugger;
const panel = document.getElementById('grey-panel')
const addCollapsed = () => { panel.classList.add('panel-cover--collapsed') }

if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
  addCollapsed()
} 

if (window.location.hash && window.location.hash == '#blog') {
  addCollapsed()
}

const flipMobileTopSpanIcons = () => {
  const topSpanIcon = document.getElementsByClassName('btn-mobile-menu__icon')[0];
  topSpanIcon.classList.add('fadeOut')
  topSpanIcon.classList.toggle('icon-list')
  topSpanIcon.classList.toggle('icon-x-circle')
  topSpanIcon.classList.remove('fadeOut')
}

const toggleMobileNavDisplay = (cbFunc) => {
  flipMobileTopSpanIcons()
  const navWrapper = document.getElementsByClassName('navigation-wrapper')[0]
  if (navWrapper.classList.contains('visible')) {
    Promise.resolve() // Promises used for sequential triggering
      .then( _ => navWrapper.classList.toggle('bounceOutUp') )
      .then( _ => navWrapper.classList.toggle('bounceInDown') )
      .then( _ => { if (cbFunc) { cbFunc() } } )
      .catch( err => console.error(err) )
  } else {
    navWrapper.classList.add('animated')
    navWrapper.classList.add('bounceInDown')
    navWrapper.classList.add('visible')
  }
}

const bigButtons = document.getElementsByClassName('big-button')
const projectBtn = document.getElementById('project-btn')
const loadProjectPage = () => { window.location.href = '{{ site.baseurl }}/projects/' }

/** Click Handlers **/
projectBtn.addEventListener('click', (e) => { e.preventDefault() })

const mobileTopSpan = document.getElementById('mobile-menu-topbar') // aka .mobile and .btn-mobile-menu
mobileTopSpan.addEventListener('click', (e) => { toggleMobileNavDisplay() })

for (let i = 0; i < bigButtons.length; i++) {
  
  bigButtons[i].addEventListener('click', (e) => {
    const isMobileEnv = () => { 
      const navWrapper = document.getElementsByClassName('navigation-wrapper')[0]
      return navWrapper.classList.contains('bounceInDown')
    }
    const checkForProjBtnClicked = () => {
      if (e.currentTarget === projectBtn) { 
        return isMobileEnv() ? toggleMobileNavDisplay(loadProjectPage) : loadProjectPage()
      }
      if (isMobileEnv()) { toggleMobileNavDisplay() }
    }

    if ( panel.classList.contains('panel-cover--collapsed') ) return checkForProjBtnClicked()
    if ( panel.clientWidth <= 960 ) { 
      addCollapsed() 
      return checkForProjBtnClicked()
    }

    document.getElementsByClassName('navigation-wrapper')[0].style.flexDirection = 'column'
    document.getElementsByClassName('panel-cover__description')[0].style.display = 'none'
    document.getElementsByClassName('panel-cover__divider--secondary')[0].style.display = 'none'
    if ( isMobileEnv() ) {
      if (e.currentTarget === projectBtn) { return toggleMobileNavDisplay(loadProjectPage) }
      if (e.currentTarget === document.getElementById('blog-btn')) { return toggleMobileNavDisplay() }
    }

    const mainContent = document.getElementsByClassName('content-wrapper')[0]
  
    if (e.currentTarget === document.getElementById('blog-btn')) { 
      mainContent.style.display = 'block'
      panel.style.width = '25%' /* Animation via CSS Transition */
      mainContent.classList.add('animated')
      mainContent.classList.add('slideInRight')
      return
    }

    if (e.currentTarget === projectBtn) { 
      const whichEndEventName = () => {
        const el = document.createElement('fakeelement');
        const transitionEndPrefixes = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
        }
        let nm;
        for ( nm in transitionEndPrefixes ){
          if( el.style[nm] !== undefined ){
            return transitionEndPrefixes[nm];
          }
        }
      }

      mainContent.style.display = 'none'
      const endOfTransition = whichEndEventName();
      panel.addEventListener( endOfTransition, (e) => { loadProjectPage() });
      panel.style.width = '25%' /* Animation via CSS Transition */
    }
  })

}