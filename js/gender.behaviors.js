jQuery(document).ready(function() {


  // For the header slider
  jQuery('.l-content .flexslider').flexslider({
    animation: "slide",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 15000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 2000,         //Integer: Set the speed of animations, in milliseconds
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pausePlay: true,
    pauseText: 'Pause',
    playText: 'Play',
  });

  // For the header slider
  jQuery('.l-region--sidebar-first .flexslider').flexslider({
    animation: "slide",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 2000,         //Integer: Set the speed of animations, in milliseconds
    directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
  });




});



/*(function (jQuery) {

  Drupal.behaviors.flexslider {
		attach: function (context, settings) {
			  // For the header slider
  jQuery('.l-content .flexslider').flexslider({
    animation: "slide",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
    pauseOnAction: false,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pausePlay: true,
    pauseText: 'Pause',
    playText: 'Play',
  });

  // For the header slider
  jQuery('.l-region--sidebar-first .flexslider').flexslider({
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 10000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationDuration: 0,         //Integer: Set the speed of animations, in milliseconds
    directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    keyboardNav: false,              //Boolean: Allow slider navigating via keyboard left/right keys
    pauseOnAction: false,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
  });
	}
	};
})(jQuery);*/
