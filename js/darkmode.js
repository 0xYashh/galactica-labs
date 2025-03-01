document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const body = document.body;

    // Apply dark mode if it's enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        darkModeBtn.textContent = "[Light Mode]";
    }

    darkModeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.textContent = "[Light Mode]";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.textContent = "[    Dark Mode]";
        }
    });
});
