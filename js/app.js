// Find the elements we need
const siteHeader = document.getElementById("site-header");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

// Open or close the mobile menu
function setMenuOpen(shouldOpen) {
    mobileMenu.classList.toggle("hidden", !shouldOpen);
    iconOpen.classList.toggle("hidden", shouldOpen);
    iconClose.classList.toggle("hidden", !shouldOpen);
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

if (siteHeader && menuButton && mobileMenu) {

    // Clicking the hamburger flips the menu open or closed
    menuButton.addEventListener("click", function () {
        const menuIsClosed = mobileMenu.classList.contains("hidden");
        setMenuOpen(menuIsClosed);
    });

    // Close the menu after tapping a link inside it
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuOpen(false);
        });
    });

    // Add a soft shadow once the page has scrolled a little
    window.addEventListener("scroll", function () {
        const hasScrolled = window.scrollY > 10;
        siteHeader.classList.toggle("has-shadow", hasScrolled);
    });
}