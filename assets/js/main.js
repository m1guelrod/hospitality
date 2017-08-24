$(document).ready(function(){

	$('#customers').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: 10000,
		autoplaySpeed: 1000
	});
});

(function() {
"use strict";
	var toggles = document.querySelectorAll(".hamburger-menu");
	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};
	function toggleHandler(toggle) {
		toggle.addEventListener( "click", function(e) {
			e.preventDefault();
			(this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
		});
	}
})();
