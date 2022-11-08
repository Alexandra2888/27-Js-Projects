const slider = document.querySelector(".container");
let isDown = false;
let startx;
let scrollLeft;

slider.addEventListener("mousedown", function (e) {
    isDown = true;
    slider.classList.add("active");

    startx = e.pageX;
    scrollToLeft = slider.scrollLeft;
});

slider.addEventListener("mouseup", function (e) {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseleave", function (e) {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", function (e) {
    if (!isDown) return
    e.preventDefault();

    const distanceX = e.pageX - slider.offsetLeft;
    const walk = distanceX - startx;
    slider.scrollLeft = scrollToLeft - walk;
});