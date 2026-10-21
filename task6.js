const k = document.getElementById("k");
const demo = document.getElementById("demo");

k.addEventListener("keyup", function () {
    demo.innerHTML = "You pressed: " + k.value;
});