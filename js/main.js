const menu = document.querySelector(".navbar-links");
const menuButton = document.querySelector(".navbar-icons");
const sidebar = document.querySelector(".side-bar");
const closeButton = document.querySelector(".close-button i");

menuButton.addEventListener("click", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1000) {
    sidebar.classList.toggle("side-bar-open");
  } else {
    menu.classList.toggle("navbar-open");
  }
  // menu.classList.toggle("navbar-open")
  // sidebar.classList.toggle("side-bar-open")
  menuButton.classList.toggle("open");
});
closeButton.addEventListener("click", () => {
  sidebar.classList.toggle("side-bar-open");
  menuButton.classList.toggle("open");
});

// submenu-open-button
const subMenu = document.querySelector(".submenu");
const subMenuOpenButton = document.querySelector(".submenu-open-btn");
subMenuOpenButton.addEventListener("click", () => {
  subMenu.classList.toggle("submenu-open");
  subMenuOpenButton.classList.toggle("submenu-open-btn-open");
});
// submenu close button
const closeSubMenuButton = document.querySelector(".submenu-close-btn");
closeSubMenuButton.addEventListener("click", () => {
  subMenu.classList.toggle("submenu-open");
  subMenuOpenButton.classList.toggle("submenu-open-btn-open");
});
// text scroll on view animation
const images = document.querySelectorAll(".fade");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.style.animation = `fadeInUp 1s forwards linear`;
      if (entry.target.classList.contains("up")) {
        entry.target.style.animation = `fadeInUp 2s forwards ease`;
      }
      if (entry.target.classList.contains("left")) {
        entry.target.style.animation = `fadeInLeft 2s forwards ease`;
      }
      if (entry.target.classList.contains("right")) {
        entry.target.style.animation = `fadeInRight 2s forwards ease`;
      }
    }
  });
});

images.forEach((image) => {
  observer.observe(image);
});

/*Review process*/
var counter = 1;

setInterval(() => {
  document.getElementById("btn" + counter).checked = true;
  counter++;
  const width = window.innerWidth;
  console.log(width);
  if (width > 765) {
    if (counter > 2) {
      counter = 1;
    }
  } else {
    if (counter > 3) {
      counter = 1;
    }
  }
}, 5000);
