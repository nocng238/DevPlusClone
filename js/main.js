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
// text scroll on view animation
const images = document.querySelectorAll('.fade');


        observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {
                if(entry.isIntersecting) {
                   // entry.target.style.animation = `fadeInUp 1s forwards linear`;
                  if(entry.target.classList.contains('up')){
                    entry.target.style.animation = `fadeInUp 2s forwards ease`;}
                  if(entry.target.classList.contains('left')){
                    entry.target.style.animation = `fadeInLeft 2s forwards ease`;}
                  if(entry.target.classList.contains('right')){
                    entry.target.style.animation = `fadeInRight 2s forwards ease`;}
                    
                }
              
            })
        })

        images.forEach(image => {
            observer.observe(image)
        })

// image affect
const imageAffect = document.querySelectorAll(".image-affect");
// imageAffect.addEventListener('mousemove',imageMouseMove);
imageAffect.forEach(image =>{
    image.addEventListener('mousemove',imageMouseMove);
    image.addEventListener('mouseleave', imageMouseLeave);
})
function imageMouseMove(event) {
    const image = event.currentTarget;
    const cardWidth = image.offsetWidth;
    const cardHeight = image.offsetHeight;
    const centerX = image.offsetLeft + cardWidth/2;
    const centerY = image.offsetTop + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    // console.log(mouseY)
    const rotateX = 15*mouseX/(cardHeight/2);
    const rotateY = -15*mouseY/(cardHeight/2);
    image.style.transform = ` perspective(10000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.2, 1.2 , 1.2)` ;
}
function imageMouseLeave(event){
    event.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
}
// Scroll up button
const scrollTopBtn = document.querySelector(".scroll-top-btn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.opacity = "1";
    scrollTopBtn.style.visibility = "visible";
    scrollTopBtn.style.transition = "var(--smooth)";
   
  } else {
    scrollTopBtn.style.opacity = "0";
    scrollTopBtn.style.visibility = "hidden";
  }
}
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top : 0
    })
})