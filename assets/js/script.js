$(".carousel").swipe({
	swipe: function (
		event,
		direction,
		distance,
		duration,
		fingerCount,
		fingerData
	) {
		if (direction == "left") $(this).carousel("next");
		if (direction == "right") $(this).carousel("prev");
	},
	allowPageScroll: "vertical",
});

const hamb = document.getElementById("hamberger");
const icon = document.querySelector(".navbar-toggler-icon");
hamb.addEventListener("click", () => {
	if (hamb.getAttribute("aria-expanded") === "true") {
		icon.style.backgroundImage =
			"url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/768px-Hamburger_icon_white.svg.png')";
	} else {
		icon.style.backgroundImage =
			"url('https://icon-library.com/images/menu-icon-white-png/menu-icon-white-png-5.jpg')";
	}
});
