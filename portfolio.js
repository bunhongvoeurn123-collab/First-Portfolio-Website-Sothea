const hong = document.getElementById("hong");
const menu = document.getElementById("menu");

if (hong && menu) {
    hong.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}

const themeBtn = document.getElementById("theme-btn");
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
}

const reveals = document.querySelectorAll(".reveal");

function checkReveal() {
    const windowHeight = window.innerHeight;
    reveals.forEach((reveal) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            reveal.classList.add("active");
        }
    });
}

window.addEventListener("scroll", checkReveal);
checkReveal();