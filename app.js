const mouse = document.querySelector(".cursor");
const mouseTxt = mouse.querySelector("span");
const nav = document.querySelector(".nav");

function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function activeCursor(e) {
  const item = e.target;
  if (item.id === "logotext" || item.classList.contains("nav")) {
    mouse.classList.add("nav-active");
  } else {
    mouse.classList.remove("nav-active");
  }

  if (item.classList.contains("reactimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "REACT";
  } else {
    mouse.classList.remove("explore-active");
    mouseTxt.innerText = "";
    // gsap.to(".title-swipe", 1, { y: "100%" });
  }

  if (item.classList.contains("jsimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "JAVASCIPRT";
  }
  if (item.classList.contains("htmlimg")) {
    mouse.classList.add("explore-active");
    // gsap.to(".title-swipe", 1, { y: "0%" });
    mouseTxt.innerText = "HTML/CSS";
  }
}

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);
