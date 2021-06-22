
const twinTopMenu = () => {
  const headerBlock = document.querySelector('.header-top')
  const headerTopMenu = document.querySelectorAll('.header-top > a')
  const [topPortfolio, topLogo, topBuro] = headerTopMenu
  
  const headerBottomMenu = document.querySelectorAll('.header-bottom > ul')
  const [portfolioMenu, buroMenu] = headerBottomMenu

  topPortfolio.addEventListener('click', () => {
    portfolioMenu.classList.remove('header-bottom__portfoulo-menu--hidden')
    buroMenu.classList.add('header-bottom__buro-menu--hidden')
  })

  topLogo.addEventListener('click', () => {
    portfolioMenu.classList.add('header-bottom__portfoulo-menu--hidden')
    buroMenu.classList.add('header-bottom__buro-menu--hidden')
  })
  
  topBuro.addEventListener('click', () => {
    portfolioMenu.classList.add('header-bottom__portfoulo-menu--hidden')
    buroMenu.classList.remove('header-bottom__buro-menu--hidden')
  })
  
  headerBlock.addEventListener('mouseleave', () => {
    portfolioMenu.classList.add('header-bottom__portfoulo-menu--hidden')
    buroMenu.classList.add('header-bottom__buro-menu--hidden')
  })
}

twinTopMenu()