document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dynamic skill highlighting on hover
    document.querySelectorAll("#skills ul li").forEach(skill => {
        skill.addEventListener("mouseover", function () {
            this.style.color = "#007BFF";
            this.style.fontWeight = "bold";
        });
        skill.addEventListener("mouseout", function () {
            this.style.color = "";
            this.style.fontWeight = "";
        });
    });

    // Contact section email copy functionality
    const emailElement = document.getElementById("email");
    if (emailElement) {
        emailElement.style.cursor = "pointer";
        emailElement.title = "Click to copy email";
        emailElement.addEventListener("click", function () {
            navigator.clipboard.writeText(emailElement.textContent).then(() => {
                alert("Email copied to clipboard!");
            });
        });
    }
});
