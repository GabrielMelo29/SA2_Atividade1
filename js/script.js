function mostrarMenu() {
    let menuMobile = document.querySelector(".menu")
    if (menuMobile.style.display == "none") {
        menuMobile.style.display = "block"
    } else {
        menuMobile.style.display = "none"
    }
}

function scrolll() {
    var left = document.querySelector(".produtos-promocao");
    left.scrollBy(350, 0);
}
function scrollr() {
    var right = document.querySelector(".produtos-promocao");
    right.scrollBy(-350, 0);
}

let email = document.getElementById("campo-email") 

function enviarEmail() {
    let emailDigitado = email.value
    console.log (emailDigitado)
}