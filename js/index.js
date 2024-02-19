let navOpenBtn = document.getElementById("nav-open-btn");

if (navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        let navLinks = document.getElementById("nav-links");
        navLinks.classList.add("open");
    })
}

let navCloseBtn = document.getElementById("nav-close-btn");

if (navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        let navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("open");
    })
}

let aboutList = document.querySelectorAll("#about-list > li");
let aboutBtn = document.getElementById("about-btn");
let index = 0;

if (aboutList) {
    aboutList[0].classList.add("appear");
    aboutBtn.addEventListener("click", () => {
        aboutList[index].classList.remove("appear");
        index = (index + 1) % aboutList.length;
        aboutList[index].classList.add("appear");
    })
}