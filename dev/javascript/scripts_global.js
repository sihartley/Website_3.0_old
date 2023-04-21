


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
      let current = location.pathname.split('/');
      current = current[current.length -1];
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

/* Unite Gallery */
/*$("#gallery").unitegallery({
  tile_border_color:"#7a7a7a",
  tile_outline_color:"#8B8B8B",
  tile_enable_shadow:true,
  tile_shadow_color:"#333333",
  tile_overlay_opacity:0.6,
  tile_show_link_icon:true,
  tile_image_effect_type:"sepia",
  tile_image_effect_reverse:true,
  tile_enable_textpanel:true,
  tile_textpanel_source: "description", //from data-description attribute (default alt attribute)
  lightbox_textpanel_title_color:"e5e5e5",
  tiles_col_width:350,
  tiles_space_between_cols:20
});*/

/* Select2 Simon: Note: Moved to top of color_lists.js*/
$(document).ready(function() {

});
