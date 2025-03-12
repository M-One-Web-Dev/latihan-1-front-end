const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});

// Cek preferensi mode gelap dari localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

