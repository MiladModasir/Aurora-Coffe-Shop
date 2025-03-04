    /* document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("night-theme");
            document.body.classList.toggle("morning-theme");
            
            if (document.body.classList.contains("night-theme")) {
                console.log("Switched to NIGHT mode 🌙");
            } else {
                console.log("Switched to MORNING mode ☀️");
            }
        });
    }
    });
 */

    document.addEventListener("DOMContentLoaded", function () {
        const themeToggle = document.getElementById("theme-toggle");
        const menuToggle = document.querySelector(".trigram");
        const mobileMenu = document.querySelector("nav ul");
    
        // Load saved theme or set default
        const savedTheme = localStorage.getItem("theme") || "morning-theme";
        document.body.classList.add(savedTheme);
        themeToggle.innerText = savedTheme === "night-theme" ? "🌙" : "🌞";
    
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("night-theme");
            document.body.classList.toggle("morning-theme");
    
            let currentTheme = document.body.classList.contains("night-theme") ? "night-theme" : "morning-theme";
            localStorage.setItem("theme", currentTheme);
            themeToggle.innerText = currentTheme === "night-theme" ? "🌙" : "🌞";
        });
    
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
        });
    });
    



