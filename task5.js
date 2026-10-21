const hover = document.getElementById("box");

hover.addEventListener("mouseover", function () {
    hover.style.background = "grey";
});

hover.addEventListener("mouseout", function () {
    hover.style.background = "blue";
});