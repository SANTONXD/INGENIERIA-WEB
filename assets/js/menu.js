document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".main-nav");

    toggleBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
