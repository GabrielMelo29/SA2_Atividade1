let listaProdutos = [
    {
        imagem: "img/Rectangle 16.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 18.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 19.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 20.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 21.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 22.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 23.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    },
    {
        imagem: "img/Rectangle 24.png",
        descricao: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua"
    }
]

function renderizarProdutos() {
    let espacoD = document.getElementById("espaco-produtos")

    let templateD = ""

    for (let index = 0; index < listaProdutos.length; index++) {
        const produto = listaProdutos[index];

        templateD += `<div class="produtos-destaque"><a href="#"><img src="${produto.imagem}" alt=""></a><p>${produto.descricao} </p><div><h4 class="detalhe">R$ Valor</h4><h5 class="detalhe">À vista</h5></div><h6 class="detalhe">R$ Valor</h6></div>`

    }
    espacoD.innerHTML = templateD;

}

let listaCategorias = [
    {
        imagem: "img/pc.png",
        descricao: "PC GAMER"
    },
    {
        imagem: "img/hard.png",
        descricao: "HARDWARE"
    },
    {
        imagem: "img/cell.png",
        descricao: "CELULAR"
    },
]

function renderizarCategorias() {
    let espacoC = document.getElementById("espaco-categorias")

    let templateC = ""

    for (let index = 0; index < listaCategorias.length; index++) {
        const categoria = listaCategorias[index];

        templateC += `<div class="categoria"><img src="${categoria.imagem}"><a href="#"><h2>${categoria.descricao}</h2></a></div>`

    }
    espacoC.innerHTML = templateC;

}


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


const dropdown1 = document.querySelector(".dropdown-atend")
const dropdown2 = document.querySelector(".dropdown-inst")
const dropdown3 = document.querySelector(".dropdown-pag"),

         selectAt = dropdown1.querySelector(".select-at"),
         optionsAt = dropdown1.querySelectorAll(".list-at"),
         selectIn = dropdown2.querySelector(".select-in"),
         optionsIn = dropdown2.querySelectorAll(".list-in"),
         selectPag = dropdown3.querySelector(".select-pag"),
         optionsPag = dropdown2.querySelectorAll(".list-pag")

selectAt.addEventListener("click", () => dropdown1.classList.toggle("active"));
selectIn.addEventListener("click", () => dropdown2.classList.toggle("active"));
selectPag.addEventListener("click", () => dropdown3.classList.toggle("active"));

