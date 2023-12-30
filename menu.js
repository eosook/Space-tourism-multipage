const menu = document.getElementById("menu");
const menuLogo = document.getElementById("menu-open");
const closeLogo = document.getElementById("menu-close");
const menuStyle = document.getSelection

menuLogo.addEventListener("click", () => {
    menu.style.transform = 'translateX(0)';
})

closeLogo.addEventListener("click", () => {
    menu.style.transform = 'translateX(100%)';
})