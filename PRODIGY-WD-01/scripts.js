window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#002a4d';
    } else {
        navbar.style.backgroundColor = '#004080';
    }
});
