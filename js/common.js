const acc_btns = document.querySelectorAll(".accordion-header");
const acc_contents = document.querySelectorAll(".answer-show");

acc_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains("active")
      ) {
        acc.classList.remove("active");
        acc_btns.forEach((btn) => btn.classList.remove("active"));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".accordion-header")) {
    acc_btns.forEach((btn) => btn.classList.remove("active"));
    acc_contents.forEach((acc) => acc.classList.remove("active"));
  }
};

/*Pop up process*/
document.querySelector(".popup-videos").onclick = () => {
  document.querySelector(".popup-video").style.display = "block";
  document.querySelector("header").style.display = "none";
};

document.querySelector(".popup-video .close-span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
  document.querySelector("header").style.display = "block";
  document.querySelector(".popup-video iframe").src =
    "//www.youtube.com/embed/mUjhiT0zSKI?autoplay=0";
};

document.querySelector(".popup-video").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
  document.querySelector("header").style.display = "block";
  document.querySelector(".popup-video iframe").src =
    "//www.youtube.com/embed/mUjhiT0zSKI?autoplay=0";
};
