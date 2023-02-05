/* Logo Fade In/Out */
const checkpoint = 200;
let opacity;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= checkpoint) {
    opacity = currentScroll / checkpoint;
  }
  document.querySelector(".mini-logo").style.opacity = opacity;
  sessionStorage.setItem('opacity', opacity);
});
/* Brings logo back after page refresh/reload */
window.onload = function () {
  let data = sessionStorage.getItem('opacity');
  if (data > 0) {
    document.querySelector(".mini-logo").style.opacity = data;
  }
}
