


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
if(document.getElementById("gallery")) {
  $("#gallery").unitegallery({
    gallery_theme: "compact",
    gallery_width: 1400,
    gallery_height: 625,
    gallery_images_preload_type: "minimal",
    slider_scale_mode: "fit",
    slider_control_zoom: false,
    slider_enable_zoom_panel: false,
    slider_arrow_left_offset_hor: 0,
    slider_arrow_right_offset_hor: 0,
    strip_space_between_thumbs: 15,
    thumb_width: 150,
    thumb_height: 75,
    thumb_selected_border_width: 2,
    thumb_selected_border_color: "#e57b01",
    thumb_round_corners_radius: 4
  });
}

/* Unite Slider */
// if(document.getElementById("slider")) {
//   $("#slider").unitegallery({
//     gallery_theme: "slider",
//     gallery_images_preload_type: "minimal",
//     slider_item_padding_top: 0,					//padding top of the slider item
//     slider_item_padding_bottom: 10,				//padding bottom of the slider item
//     slider_item_padding_left: 10,				//padding left of the slider item
//     slider_item_padding_right: 10,				//padding right of the slider item
//     gallery_min_width: "100%",						//gallery minimal width when resizing
//     slider_control_zoom: false,					//true, false - enable zooming control
//     slider_enable_bullets: false,				//enable the bullets onslider element
//     slider_enable_arrows: false,					//enable arrows on slider element
//     slider_enable_progress_indicator: false,		 //enable progress indicator element
//     slider_enable_fullscreen_button: true,		 //true,false - enable fullscreen button onslider element
//     slider_fullscreen_button_offset_hor: 15,	     //fullscreen button horizontal offset
//     slider_fullscreen_button_offset_vert: 5,	   	 //fullscreen button vertical offset
//     slider_transition: "fade",					//fade, slide - the transition of the slide change
//   });
// }

/* Select2 Simon: Note: Moved to top of color_lists.js*/
$(document).ready(function() {

});
