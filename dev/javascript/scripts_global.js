/* Logo Fade In/Out JS */
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

/* Bar Menu Highlight */
    (function () {
      let current = location.pathname.split('/')[1];
      if (current === "") return;
      let menuItems = document.querySelectorAll('.menu-bar a');
      let i = 0, len = menuItems.length;
      for (; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += "on";
        }
      }
    })();
}