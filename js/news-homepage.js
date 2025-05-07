const menuOpenIcon = document.querySelector("img[alt='menu-open icon']");
const menuCloseIcon = document.querySelector("img[alt='menu-close icon']");
const mobileMenu = document.querySelector(".mobile-menu");
const bodyElement = document.querySelector("body");

// This function opens the mobile navigation menu.
const openMenu = () => {
    mobileMenu.style.display = "flex";
    bodyElement.style.backgroundColor = "hsl(233, 8%, 79%)";
};

// This function closes the mobile navigation menu.
const closeMenu = () => {
    mobileMenu.style.display = "none";
    bodyElement.style.backgroundColor = "hsl(36, 100%, 99%)";
};

/* Event Listeners */

menuOpenIcon.addEventListener("click", openMenu);

menuCloseIcon.addEventListener("click", closeMenu);
