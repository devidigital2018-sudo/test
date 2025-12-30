/* ================================
   GENERAL SMOOTH SCROLLING
================================== */
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll only for working anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

/* ================================
   MOBILE MENU TOGGLE
================================== */
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".navbar");

if (mobileMenuBtn && navbar) {
    mobileMenuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        document.body.classList.toggle("no-scroll"); // prevent background scroll
    });
}

/* ================================
   REMOVE ANY SCROLL-BLOCKING SCRIPTS
================================== */

// Ensure scrolling is always enabled
document.body.style.overflowY = "auto";

["wheel", "touchmove", "keydown"].forEach(eventType => {
    window.addEventListener(eventType, () => {
        document.body.style.overflowY = "auto";
    }, { passive: true });
});

/* ================================
   HEADER SHADOW ON SCROLL
================================== */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 20);
});

/* ================================
   FIX SECTION WHITE-SPACE / HEIGHT ISSUES
================================== */

window.addEventListener("load", () => {
    document.querySelectorAll("section").forEach(sec => {
        // REMOVE the 100vh forcing (THIS caused your layout breaking)
        sec.style.minHeight = "";
        sec.style.overflow = "";

        // Add a safer minimum spacing
        sec.style.paddingTop = sec.style.paddingTop || "40px";
        sec.style.paddingBottom = sec.style.paddingBottom || "40px";
    });

    // Remove weird huge empty space created by <div height="100vh"> sections
    document.querySelectorAll("[style*='100vh']").forEach(el => {
        el.style.minHeight = "auto";
        el.style.height = "auto";
    });
});
