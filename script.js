const menu = document.getElementById("mobileMenu");
const openMenuBtn = document.querySelector(".menuIcon");
const closeMenuBtn = document.getElementById("closeMenu");

openMenuBtn.addEventListener("click", () => {
    menu.classList.add("open");
    document.body.classList.add("menu-open");
});

closeMenuBtn.addEventListener("click", () => {
    closeMenu();
});

document.body.addEventListener("click", (e) => {
    if (
        menu.classList.contains("open") &&
        !menu.contains(e.target) &&
        !openMenuBtn.contains(e.target)
    ) {
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1200 && menu.classList.contains("open")) {
        closeMenu();
    }
});

function closeMenu() {
    menu.classList.remove("open");
    document.body.classList.remove("menu-open");
}
