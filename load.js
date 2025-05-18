// load-navbar.js
document.addEventListener('DOMContentLoaded', function () {
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('/blocks/navbar.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                navbarPlaceholder.innerHTML = html;
            })
            .catch(error => console.error('Navbar konnte nicht geladen werden:', error));
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('/blocks/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;  // Fixed: was using navbarPlaceholder
            })
            .catch(error => console.error('Footer konnte nicht geladen werden:', error));
    }
});