const navbar = document.querySelector(".nav");
const menuBtn = document.querySelector(".menubtn");
const menu = document.querySelector(".menu_container");
const closeMenu = document.querySelector(".closeMenu");
const options = [document.querySelector("#option1"), document.querySelector("#option2"), document.querySelector("#option3"), document.querySelector("#option4"), document.querySelector("#option5")];
const options1 = [document.querySelector(".coffee"), document.querySelector(".specials"), document.querySelector(".ncd"), document.querySelector(".pastries"), document.querySelector(".all")];
var oldScroll = 0;
var typed, typed2, typed3;
var isShown = [false, false, false];
var chosenMenuOpt = 0;


function toTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function checkMenu() {
    if (window.innerWidth <= 850) {
        menuBtn.classList.remove("hidden");
        document.querySelector(".sep2").classList.add("hidden");
        document.querySelector("#option5").click();
        document.querySelector(".menu_options").classList.add("hidden");
    }
    else {
        menuBtn.classList.add("hidden");
        menu.style.width = "0px";
        document.querySelector("#overlay").classList.add("hidden");
        document.querySelector(".sep2").classList.remove("hidden");
        document.querySelector("#option1").click();
        document.querySelector(".menu_options").classList.remove("hidden");
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function option(element) {
    options[chosenMenuOpt].classList.remove("option_chosen");
    options1[chosenMenuOpt].classList.add("hidden");
    element.classList.add("option_chosen");
    chosenMenuOpt = options.indexOf(element);
    options1[chosenMenuOpt].classList.remove("hidden");
}


options.forEach(element => {
    element.addEventListener("click", () => {option(element)});
});

document.addEventListener("scroll", () => {
    if (oldScroll < this.scrollY) {
        if (this.scrollY >= 300) {
            navbar.style.height = "0px";
        }
    }
    else {
        navbar.style.height = "75px";
    }
    oldScroll = this.scrollY;
    // 
    if(isInViewport(document.querySelector('.title_text_abotUs')) && isShown[0] === false) {
        typed = new Typed(('.title_text_abotUs'), {
            strings: ["Who are we?", "What are we?", "A little about us","About Us"],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 750,
            endDelay: 500
        });
        isShown[0] = true;
    }
    if(isInViewport(document.querySelector('.title_menu')) && isShown[1] === false) {
        typed2 = new Typed(('.title_text_menu'), {
            strings: ["Menu"],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 750,
            endDelay: 500
        });
        isShown[1] = true;
    }
    if(isInViewport(document.querySelector('.title_text_contactUs')) && isShown[2] === false) {
        typed3 = new Typed(('.title_text_contactUs'), {
            strings: ["Contact Us"],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 750,
            endDelay: 500
        });
        isShown[2] = true;
    }
});

window.addEventListener("load", () => {
    toTop();
    document.querySelector(".loader").remove();
    document.body.style.overflow = "auto";
    checkMenu();
});
document.querySelector(".home_navbar").addEventListener("click", toTop);
document.querySelector(".home_menu").addEventListener("click", () => {
    toTop();
    menu.style.width = "0px";
    document.querySelector("#overlay").classList.add("hidden");
});
document.querySelector(".logo_navbar").addEventListener("click", toTop);
window.onresize = checkMenu;
menuBtn.addEventListener("click", () => {
    menu.style.width = "75%";
    document.querySelector("#overlay").classList.remove("hidden");
});
document.querySelector("#overlay").addEventListener("click", () => {
    menu.style.width = "0px";
    document.querySelector("#overlay").classList.add("hidden");
})
closeMenu.addEventListener("click", () => {
    menu.style.width = "0px";
    document.querySelector("#overlay").classList.add("hidden");
})
