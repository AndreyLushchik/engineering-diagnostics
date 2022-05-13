// burger
let menu = document.querySelector(".menu__drop");
let menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
	menu.classList.toggle("active");
});
