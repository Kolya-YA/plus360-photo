// import * as PanoViewer from './view360.panoviewer.pkgd.min.js'
// import { PanoViewer } from './view360.panoviewer.pkgd.min.js'

// const loadPano = () => {
  // const container = document.getElementById("testPano")
  // var panoViewer = new PanoViewer(container,{
  //   projectionType: "equirectangular",
  //   image: "https://naver.github.io/egjs-view360/examples/img/equi.jpg"
  // });

// PanoControls.init(document.querySelector(".viewer"), panoViewer);
// PanoControls.showLoading();
// }
// console.log(PanoViewer)

// loadPano()

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