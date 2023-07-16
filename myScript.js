const viewWidth = document.getElementById("viewWidth");
const viewHeight = document.getElementById("viewHeight");
const srWidth = document.getElementById("srWidth");
const srHeight = document.getElementById("srHeight");

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

let ratio = window.devicePixelRatio || 1;

const w = window.screen.width * ratio;
const h = window.screen.height * ratio;

viewWidth.textContent = vw;
viewHeight.textContent = vh;

srWidth.innerHTML = w;
srHeight.innerHTML = h;

const aboutModal = document.getElementById("aboutModal");
const openAbout = document.getElementById("openAbout");
const closeAbout = document.getElementById("closeAbout");

openAbout.addEventListener("click", () => {
  aboutModal.classList.remove("hidden");
});

closeAbout.addEventListener("click", () => {
  aboutModal.classList.add("hidden");
});