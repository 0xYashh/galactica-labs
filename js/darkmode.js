document.addEventListener("DOMContentLoaded", function () {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const modeIcon = document.getElementById("mode-icon");
    const body = document.body;

    function updateIcon() {
        if (body.classList.contains("dark-mode")) {
            modeIcon.src = "https://img.icons8.com/external-flat-papa-vector/78/external-Light-Mode-interface-flat-papa-vector.png"; // Light mode icon
            modeIcon.alt = "Light Mode";
        } else {
            modeIcon.src = "https://img.icons8.com/ios-filled/50/do-not-disturb-2.png"; // Dark mode icon
            modeIcon.alt = "Dark Mode";
        }
    }

    // Apply dark mode if it's enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        updateIcon();
    }

    darkModeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
        updateIcon();
    });
});