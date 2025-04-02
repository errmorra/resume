
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const backToTop = document.createElement("button");
    const darkModeToggle = document.createElement("button");
    
    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: "smooth"
                });
            }
        });
    });

    // Back to Top Button
    backToTop.innerText = "↑";
    backToTop.id = "backToTop";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "20px";
    backToTop.style.display = "none";
    backToTop.style.cursor = "pointer";
    document.body.appendChild(backToTop);
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    
    // Dark Mode Toggle
    darkModeToggle.innerText = "🌙";
    darkModeToggle.id = "darkModeToggle";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.top = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
    
    // Fade-in effect on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Typing effect in header
    const headerText = "IT - Professional";
    const headerElement = document.querySelector("header p");
    let index = 0;
    
    function typeEffect() {
        if (index < headerText.length) {
            headerElement.innerText += headerText.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    
    headerElement.innerText = "";
    typeEffect();
});
