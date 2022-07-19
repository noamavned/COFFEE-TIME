const errorList = ["Sent", "Name is not right", "Something is wrong with your email", "You did not write anything"];

function validateMail(email) {
    email = email || "";
    let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(email.toLowerCase().trim());
}

function validateName(x) {
    if(/^[A-Za-z\s]+$/.test(x)) return true;
    return false;
}

function verify(data) {
    console.log(data);
    if (validateName(data[0]) === false) {return [false, 1];}
    if (validateMail(data[1]) === false) {return [false, 2];}
    if (data[2].length == 0) {return [false, 3];}
    return [true, 0];
}

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

function submit() {
    const elements = [document.querySelector('#nameInputCU'), document.querySelector('#mailInputCU'), document.querySelector('#contentInputCU')]
    const data = [document.querySelector('#nameInputCU').value, document.querySelector('#mailInputCU').value, document.querySelector('#contentInputCU').value];
    var dt = verify(data);
    if (dt[0]) {
        elements.forEach(element => {
            element.value = "";
            element.blur();
        });
        // send data to database
        toTop();
    }
    alert(errorList[dt[1]]);
}
