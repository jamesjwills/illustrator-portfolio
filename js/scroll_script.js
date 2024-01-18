window.addEventListener('scroll', function () {
    var header = document.getElementById('myHeader');

    // Add 'scrolled' class to the header when scrolling down
    if (window.scrollY > 125) {
        header.classList.add('scrolled');
    } else {
        // Remove 'scrolled' class when scrolling back to the top
        header.classList.remove('scrolled');
    }
});
