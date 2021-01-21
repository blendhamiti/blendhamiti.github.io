$('.certificates-thumbnail').on('click', function () {
    $('#certificates-overlay')
        .css({ backgroundImage: `url(${this.src})` })
        .addClass('open')
        .one('click', function () { $(this).removeClass('open'); });
});
document.querySelectorAll(".icon-block i").forEach(icon => {
    icon.classList.add("colored");
});
document.querySelectorAll(".icon-block span").forEach(container => {
    container.title = container.childNodes.item(0).classList[0].split("-", "2")[1];
});
window.addEventListener('load', function () {
    var components = document.querySelectorAll('.component');
    var navLinks = document.querySelectorAll(".nav-link");

    // Get any component's position to use the global x, y, positon values
    var pagePosition = components.item(0).getBoundingClientRect();

    var componentsHeights = [0];
    var componentsHeightsSum = 0;

    components.forEach(component => {
        componentsHeightsSum += component.getBoundingClientRect().height;
        componentsHeights.push(-componentsHeightsSum + (window.screen.height / 2));
    });

    navLinks.forEach(function (navLink, index) {
        if (pagePosition.y <= componentsHeights[index] && pagePosition.y > componentsHeights[index + 1]) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.name === components.item(index).id) {
                    link.classList.add("active");
                }
            });
        }
    });
});
window.addEventListener('scroll', function () {
    var components = document.querySelectorAll('.component');
    var navLinks = document.querySelectorAll(".nav-link");

    // Get any component's position to use the global x, y, positon values
    var pagePosition = components.item(0).getBoundingClientRect();

    var componentsHeights = [0];
    var componentsHeightsSum = 0;

    components.forEach(component => {
        componentsHeightsSum += component.getBoundingClientRect().height;
        componentsHeights.push(-componentsHeightsSum + (window.screen.height / 2));
    });

    navLinks.forEach(function (navLink, index) {
        if (pagePosition.y <= componentsHeights[index] && pagePosition.y > componentsHeights[index + 1]) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.name === components.item(index).id) {
                    link.classList.add("active");
                }
            });
        }
    });
});
function scrollToElement(elementId) {
    let element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}


var timelineExpanded = false;

function shrinkTimeline() {
    let button = document.getElementById("btn-shrink-timeline");
    let timelineEntries = document.querySelectorAll(".timeline .size-small");

    if (!timelineExpanded) {
        timelineEntries.forEach(entry => {
            entry.style.display = "list-item";
        });
        timelineExpanded = true;
        button.innerHTML = 'Hide <i class="fas fa-angle-up"></i>';
    }
    else {
        timelineEntries.forEach(entry => {
            entry.style.display = "none";
        });
        timelineExpanded = false;
        button.innerHTML = 'Show all <i class="fas fa-angle-down"></i>';
    }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});