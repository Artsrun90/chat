window.addEventListener('resize', function(event) {
    if (window.innerWidth <= 640) {
        console.log(window.innerWidth);
    }
}, true);

if (window.screen.width <= 640) {
    console.log(window.screen.width);
}