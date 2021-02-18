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