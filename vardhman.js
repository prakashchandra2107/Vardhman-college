let v = document.querySelector("#abc");
let b = document.querySelector(".vision")

v.addEventListener("mouseenter", view);
v.addEventListener("mouseout", vie);
b.addEventListener("mouseenter", vi);

function view() {
    b.style.display = "block";
}
function vie() {
    b.style.display = "none"
}

function vi() {
    b.style.display = "block"
}