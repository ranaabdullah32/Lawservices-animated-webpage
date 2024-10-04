// JavaScript for hiding the first navbar on scroll
let lastScrollTop = 0;
const header = document.querySelector('.header-info');
const secondNavbar = document.getElementById('secondNavbar');

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        header.style.top = "-100px"; // Hide the header
        secondNavbar.classList.remove('hidden'); // Show the second navbar
    } else {
        header.style.top = "0"; // Show the header
        secondNavbar.classList.add('hidden'); // Hide the second navbar
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});

document.getElementById('searchIcon').addEventListener('click', function() {
    const searchDropdown = document.getElementById('searchDropdown');
    if (searchDropdown.style.display === 'none' || searchDropdown.style.display === '') {
        searchDropdown.style.display = 'flex'; // Show dropdown
        document.querySelector('.search-input').focus(); // Focus on input
    } else {
        searchDropdown.style.display = 'none'; // Hide dropdown
    }
});

