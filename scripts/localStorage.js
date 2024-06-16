//localStorage.setItem("teste", JSON.stringify([1, 4, 63, 135]));
//console.log(JSON.parse(localStorage.getItem("teste")));

function getLocalStorage() {
    moedas3dNum = localStorage.getItem("moedas-3d")
    if (moedas3dNum == undefined) moedas3dNum = 0
    moedas3dNumDiv.innerHTML = moedas3dNum

    praComprarArray = JSON.parse(localStorage.getItem("praComprar"))
    if (praComprarArray == undefined) praComprarArray = []
    for (let i = 0; i < praComprarArray.length; i++) {
        praComprar[praComprarArray[i]].classList.remove("bloqueado")
    }

    praEncontrarArray = JSON.parse(localStorage.getItem("praEncontrar"))
    if (praEncontrarArray == undefined) praEncontrarArray = []
    for (let i = 0; i < praEncontrarArray.length; i++) {
        praEncontrar[praEncontrarArray[i]].classList.remove("bloqueado")
        iModeloExtra = praEncontrarArray[i] + (praComprar.length)
        document.querySelectorAll(".pra-encontrar img")[praEncontrarArray[i]].src = modelosExtras[iModeloExtra].imgSrc
        document.querySelectorAll(".pra-encontrar ~ p")[praEncontrarArray[i]].innerHTML = modelosExtras[iModeloExtra].nome
    }

    ucnDesbloqueado = Boolean(localStorage.getItem('ucnDesbloqueado'))

}

function resetLocalStorageGeral() {
    avisoLocalStorageDiv.style.display = "none"
    localStorage.setItem("moedas-3d", 0)
    moedas3dNum = 0
    moedas3dNumDiv.innerHTML = moedas3dNum


    localStorage.setItem("praComprar", "[]")
    praComprar.forEach((praComprarEl) => {
        praComprarEl.classList.add("bloqueado")
    })
    praComprarArray = []

    localStorage.setItem("praEncontrar", "[]")
    praEncontrar.forEach((praEncontrarEl, iPraEncontrar) => {
        praEncontrarEl.classList.add("bloqueado")
        document.querySelectorAll(".pra-encontrar img")[iPraEncontrar].src = ""
        document.querySelectorAll(".pra-encontrar ~ p")[iPraEncontrar].innerHTML = "???"
    })
    praEncontrarArray = []

    ucnDesbloqueado = false
    localStorage.setItem('ucnDesbloqueado', String(ucnDesbloqueado))

    resetLocalStorageFnaf()
}

function resetLocalStorageFnaf() { }