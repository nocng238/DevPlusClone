const menu = document.querySelector(".navbar-links")
const menuButton = document.querySelector(".navbar-icons")
const sidebar = document.querySelector(".side-bar")
const closeButton = document.querySelector(".close-button i")

menuButton.addEventListener('click', ()=>{
    const windowWidth  = window.innerWidth
    if(windowWidth > 1000){
        sidebar.classList.toggle("side-bar-open")
    }else{
        menu.classList.toggle("navbar-open")
    }
    // menu.classList.toggle("navbar-open")
    // sidebar.classList.toggle("side-bar-open")
    menuButton.classList.toggle("open")
    

} )
closeButton.addEventListener('click', () =>{
    sidebar.classList.toggle("side-bar-open")
    menuButton.classList.toggle("open")
})

// submenu-open-button
const subMenu = document.querySelector(".submenu")
const subMenuOpenButton = document.querySelector(".submenu-open-btn")
subMenuOpenButton.addEventListener('click', () =>{
    subMenu.classList.toggle("submenu-open")
    subMenuOpenButton.classList.toggle("submenu-open-btn-open")
})
// submenu close button
const closeSubMenuButton = document.querySelector(".submenu-close-btn")
closeSubMenuButton.addEventListener('click', ()=>{
    subMenu.classList.toggle("submenu-open")
    subMenuOpenButton.classList.toggle("submenu-open-btn-open")
})