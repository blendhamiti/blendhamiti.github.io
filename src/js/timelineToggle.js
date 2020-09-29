let elements = document.getElementsByClassName("size-small");
let button = document.getElementById("toggle-small-elements");
let elementsShown = true;

button.onclick = function () {
    if (!elementsShown) {
        for (i = 0; i < elements.length;) {
            elements[i].style.display = "list-item";
        }
        elementsShown = true;
        // button.innerHTML = <i class="fas fa-angle-up"></i>;
    }
    else {
        for (i = 0; i < elements.length;) {
            elements[i].style.display = "none";
        }
        elementsShown = false;
        // button.innerHTML = <i class="fas fa-angle-down"></i>;
    }
}