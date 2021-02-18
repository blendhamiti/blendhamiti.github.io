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