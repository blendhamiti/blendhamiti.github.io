// var lastScrollTop = 0;

// window.addEventListener('scroll', function () {
//     var components = document.querySelectorAll('.component');

//     var componentsPositions = []

//     components.forEach(component => {
//         componentsPositions.push(component.getBoundingClientRect());
//         console.log(component.getBoundingClientRect())
//     });


//     var st = window.pageYOffset || document.documentElement.scrollTop;

//     setTimeout(function () {
//         componentsPositions.forEach(function (position, index) {
//             if (st > lastScrollTop) {
//                 // scrolling down
//                 if (position.bottom <= window.screen.height - 100 && position.bottom > 0) {
//                     if (index < componentsPositions.length)
//                         components.item(index + 1).scrollIntoView({
//                             // behavior: 'smooth'
//                         });
//                 }
//             } else {
//                 // scrolling up
//                 if (position.top >= 0 && position.top < window.screen.height - 100) {
//                     if (index > 0)
//                         components.item(index - 1).scrollIntoView();
//                 }

//             }

//         });
//     }, 500);


//     lastScrollTop = st <= 0 ? 0 : st;
// });
$('.certificates-thumbnail').on('click', function () {
    $('#certificates-overlay')
        .css({ backgroundImage: `url(${this.src})` })
        .addClass('open')
        .one('click', function () { $(this).removeClass('open'); });
});
var resumeIcons = document.querySelectorAll(".icon-block i")

resumeIcons.forEach(icon => {
    icon.classList.add("colored");
});
var resumeIconsContainers = document.querySelectorAll(".icon-block span")

resumeIconsContainers.forEach(container => {
    container.title = container.childNodes.item(0).classList[0].split("-", "2")[1];
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