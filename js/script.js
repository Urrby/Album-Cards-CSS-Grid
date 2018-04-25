
let items = document.querySelectorAll(".album_artwork");
let overlay = document.querySelector(".overlay");
let overlayImage = overlay.querySelector("img");
let overlayClose = overlay.querySelector(".close");

items.forEach(
	function (img) {
		img.addEventListener("click", displayOverlay);
	}); 

overlay.querySelector(".close").addEventListener("click", close);

function displayOverlay(e) {
	let src = e.currentTarget.src;
	overlayImage.src = src;
	open();
}

function open () {
	overlay.classList.add("open");
}
function close () {
	overlay.classList.remove("open");
}
