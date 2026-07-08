/* ==========================
   Mobile Menu
========================== */

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* ==========================
   Close Menu After Click
========================== */

document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

/* ==========================
   Typing Animation
========================== */

const words = [
    "Network Engineer Student",
    "Cisco Learner",
    "MikroTik Enthusiast",
    "Future Network Engineer",
    "Cybersecurity Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* ==========================
   Scroll Progress Bar
========================== */

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth = (scrollTop / height) * 100;

    progress.style.width = progressWidth + "%";

});

/* ==========================
   Animate Skill Bars
========================== */

const skillBars = document.querySelectorAll(".bar span");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

        }

    });

}, {

    threshold: 0.5

});

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

/* ==========================
   Active Navbar Link
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================
   Navbar Background
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "rgba(8,27,41,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(8,27,41,.8)";
        header.style.boxShadow = "none";

    }

});

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
    ".card, .project-card, .timeline-item, .skill, .contact-info, .contact-form"
);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all 1s ease";

    revealObserver.observe(el);

});

/* ==========================
   Contact Form
========================== */

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

/* ==========================
   Console Message
========================== */

console.log("Portfolio Loaded Successfully 🚀");