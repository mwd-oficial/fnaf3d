//localStorage.setItem("teste", JSON.stringify([1, 4, 63, 135]));
//console.log(JSON.parse(localStorage.getItem("teste")));

function getLocalStorage() {
    moedas3dNum = localStorage.getItem("moedas-3d") ?? 0
    moedas3dNumDiv.innerHTML = moedas3dNum

    praComprarArray = JSON.parse(localStorage.getItem("praComprar")) ?? []
    for (let i = 0; i < praComprarArray.length; i++) {
        praComprar[praComprarArray[i]].classList.remove("bloqueado")
    }

    praEncontrarArray = JSON.parse(localStorage.getItem("praEncontrar")) ?? []
    for (let i = 0; i < praEncontrarArray.length; i++) {
        praEncontrar[praEncontrarArray[i]].classList.remove("bloqueado")
        iModeloExtra = praEncontrarArray[i] + (praComprar.length)
        document.querySelectorAll(".pra-encontrar img")[praEncontrarArray[i]].src = modelosExtras[iModeloExtra].srcImg + "0.webp"
        document.querySelectorAll(".pra-encontrar ~ p")[praEncontrarArray[i]].innerHTML = modelosExtras[iModeloExtra].nome
    }

    praEncontrarDouradoArray = JSON.parse(localStorage.getItem("praEncontrarDourado")) ?? []
    for (let i = 0; i < praEncontrarDouradoArray.length; i++) {
        praEncontrarDourado[praEncontrarDouradoArray[i]].classList.remove("bloqueado")
        iModeloExtra = praEncontrarDouradoArray[i] + (praComprar.length + praEncontrar.length)
        document.querySelectorAll(".pra-encontrar-dourado img")[praEncontrarDouradoArray[i]].src = modelosExtras[iModeloExtra].srcImg + "0.webp"
        document.querySelectorAll(".pra-encontrar-dourado ~ p")[praEncontrarDouradoArray[i]].innerHTML = modelosExtras[iModeloExtra].nome
    }

    geralSorteado = JSON.parse(localStorage.getItem("geralSorteado")) ?? []
    botaoDouradoDesativadoArray = JSON.parse(localStorage.getItem("botaoDouradoDesativadoArray")) ?? []
    setTimeout(() => {
        if (geralSorteado.length === 0) {
            praEncontrarDourado.forEach((btn) => {
                numSort = Math.floor(Math.random() * document.querySelectorAll(".geral").length);
                modelos[numSort].temBotaoDourado = true
                modelos[numSort].botaoDouradoDesativado = false
                geralSorteado.push(numSort)
                botaoDouradoDesativadoArray.push(false)
                localStorage.setItem("botaoDouradoDesativadoArray", JSON.stringify(botaoDouradoDesativadoArray))
                localStorage.setItem("geralSorteado", JSON.stringify(geralSorteado))
            })
        } else {
            geralSorteado.forEach((num, iNum) => {
                modelos[num].temBotaoDourado = true
                modelos[num].botaoDouradoDesativado = botaoDouradoDesativadoArray[iNum]
            })
        }
        console.log("geralSorteado: " + geralSorteado)
    }, 1000);

    ucnDesbloqueado = JSON.parse(localStorage.getItem('ucnDesbloqueado')) ?? false
    if (ucnDesbloqueado) ucnBtn.style.display = "flex"

    vistosArray = JSON.parse(localStorage.getItem("vistosArray")) ?? []

}

function resetLocalStorageGeral() {
    alerta("Progresso resetado")

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

    localStorage.setItem("praEncontrarDourado", "[]")
    praEncontrarDourado.forEach((praEncontrarDouradoEl, iPraEncontrarDourado) => {
        praEncontrarDouradoEl.classList.add("bloqueado")
        document.querySelectorAll(".pra-encontrar img")[iPraEncontrarDourado].src = ""
        document.querySelectorAll(".pra-encontrar ~ p")[iPraEncontrarDourado].innerHTML = "???"
    })
    praEncontrarDouradoArray = []

    geralSorteado = []
    localStorage.setItem("geralSorteado", JSON.stringify(geralSorteado))

    botaoDouradoDesativadoArray = []
    localStorage.setItem("botaoDouradoDesativadoArray", JSON.stringify(botaoDouradoDesativadoArray))

    ucnDesbloqueado = false
    localStorage.setItem('ucnDesbloqueado', JSON.stringify(ucnDesbloqueado))
    ucnBtn.style.display = "none"

    vistosArray = []
    localStorage.setItem("vistosArray", JSON.stringify(vistosArray))

    resetLocalStorageFnaf()
}

function resetLocalStorageFnaf() { }