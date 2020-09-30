$('.certificates-thumbnail').on('click', function () {
    $('#certificates-overlay')
        .css({ backgroundImage: `url(${this.src})` })
        .addClass('open')
        .one('click', function () { $(this).removeClass('open'); });
});
function inititalScrollDown(elementId) {
    let element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}


// let str = window.location.pathname;
// let element = document.getElementsByName(str.split("/")[1].split(".")[0]).item(0);
// if (element === null)
//     document.getElementsByName("index").item(0).classList.add("active");
// else
//     element.classList.add("active");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
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