const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 97, 97, 97, 90,90, 70];

window.addEventListener("scroll", () => {
    mainFn();
});

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent =
                progressBarPercents[i];
        });
    }
};

mainFn();

window.addEventListener("resize", () => {
    window.location.reload();
});



// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Student", "Developer", "Learner"],
    typeSpeed: 130,
    backSpeed: 140,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Student", "Developer", "Learner"],
    typeSpeed: 130,
    backSpeed: 140,
    loop: true
});