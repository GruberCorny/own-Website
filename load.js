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

    // Load footer with scroll behavior
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('/blocks/footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;

                // Nachdem der Footer geladen ist, Scroll-Event hinzufügen
                const loadedFooter = document.querySelector('.scroll-activated-footer');
                if (loadedFooter) {
                    window.addEventListener('scroll', function () {
                        // Berechne 95% der Seitenhöhe
                        const scrollThreshold = document.body.scrollHeight * 0.95 - window.innerHeight;

                        if (window.scrollY > scrollThreshold) {
                            loadedFooter.classList.add('visible');
                        } else {
                            loadedFooter.classList.remove('visible');
                        }
                    });

                    // Initialen Zustand prüfen
                    setTimeout(() => {
                        const initialThreshold = document.body.scrollHeight * 0.95 - window.innerHeight;
                        if (window.scrollY > initialThreshold) {
                            loadedFooter.classList.add('visible');
                        }
                    }, 100);
                }
            })
            .catch(error => console.error('Footer konnte nicht geladen werden:', error));
    }
});