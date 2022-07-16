function aboutUs() {
    var rect = document.querySelector(".about_us").getBoundingClientRect();
    window.scroll({
        top: window.scrollY + rect.top,
        behavior: 'smooth'
    });
    menu.style.width = "0px";
    document.querySelector("#overlay").classList.add("hidden");
}

function goToMenu() {
    var rect = document.querySelector(".menu").getBoundingClientRect();
    window.scroll({
        top: window.scrollY + rect.top,
        behavior: 'smooth'
    });
    menu.style.width = "0px";
    document.querySelector("#overlay").classList.add("hidden");
}
