const hamburger = document.getElementById("hamburger");
const firstMenu = document.getElementById("nav-item");
const navbar = document.getElementById("navbar");
const navbarItem = document.querySelectorAll("#nav-item li");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    firstMenu.classList.toggle('active');
})
document.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 250) {
        navbar.style.backgroundColor = "#29323c";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
})
navbarItem.forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        firstMenu.classList.toggle('active');
    })
});