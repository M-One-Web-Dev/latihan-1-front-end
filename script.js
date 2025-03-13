document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  });
  
  // Toggle Dark and Light Mode
  document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.innerHTML = "☀️";
    } else {
      themeToggle.innerHTML = "🌙";
    }
  
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
  
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "🌙";
      }
    });
  });
  