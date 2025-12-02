// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close nav on link click (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Reveal on scroll
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dummy contact form handler
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been recorded for Farm Fusion.");
  contactForm.reset();
});

function openDesc(type) {
    const modal = document.getElementById("descModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    if (type === "solar") {
        title.innerText = "Solar Powered System";
        text.innerText = "Farm Fusion uses high-efficiency solar panels and a backup battery system to ensure continuous operation even during cloudy weather. Helps cut fuel cost and supports eco-friendly farming.";
    }
    else if (type === "tools") {
        title.innerText = "Detachable Multi-Tools";
        text.innerText = "Interchangeable attachments for ploughing, sowing, spraying, and small-scale harvesting. Allows farmers to switch tools in under 2 minutes.";
    }
    else if (type === "sprayer") {
        title.innerText = "Smart Sprayer System";
        text.innerText = "Pressure-controlled nozzles deliver uniform spraying, reduce pesticide waste, and improve crop health with precision application.";
    }

    modal.style.display = "block";
}

function closeDesc() {
    document.getElementById("descModal").style.display = "none";
}

// Close on clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("descModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
