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

    praEncontrarDouradoArray = JSON.parse(localStorage.getItem("praEncontrarDourado"))
    if (praEncontrarDouradoArray == undefined) praEncontrarDouradoArray = []
    for (let i = 0; i < praEncontrarDouradoArray.length; i++) {
        praEncontrarDourado[praEncontrarDouradoArray[i]].classList.remove("bloqueado")
        iModeloExtra = praEncontrarDouradoArray[i] + (praComprar.length + praEncontrar.length)
        document.querySelectorAll(".pra-encontrar-dourado img")[praEncontrarDouradoArray[i]].src = modelosExtras[iModeloExtra].imgSrc
        document.querySelectorAll(".pra-encontrar-dourado ~ p")[praEncontrarDouradoArray[i]].innerHTML = modelosExtras[iModeloExtra].nome
    }

    geralSorteado = JSON.parse(localStorage.getItem("geralSorteado"))
    botaoDouradoDesativadoArray = JSON.parse(localStorage.getItem("botaoDouradoDesativadoArray"))
    setTimeout(() => {
        if (geralSorteado.length === 0) {
            praEncontrarDourado.forEach((btn) => {
                numSort = Math.floor(Math.random() * document.querySelectorAll(".geral").length);
                modelos[numSort].descricao += "<div id='botao-dourado' onclick='sortearPraEncontrarDourado()'>Clique</div>"
                modelos[numSort].botaoDouradoDesativado = false
                geralSorteado.push(numSort)
                botaoDouradoDesativadoArray.push(false)
                localStorage.setItem("botaoDouradoDesativadoArray", JSON.stringify(botaoDouradoDesativadoArray))
                localStorage.setItem("geralSorteado", JSON.stringify(geralSorteado))
            })
        } else {
            geralSorteado.forEach((num, iNum) => {
                modelos[num].descricao += "<div id='botao-dourado' onclick='sortearPraEncontrarDourado()'>Clique</div>"
                modelos[num].botaoDouradoDesativado = botaoDouradoDesativadoArray[iNum]
            })
        }
        console.log("geralSorteado: " + geralSorteado)
    }, 1000);

    ucnDesbloqueado = JSON.parse(localStorage.getItem('ucnDesbloqueado'))

    tutorialVisto = JSON.parse(localStorage.getItem('tutorialVisto'))

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

    tutorialVisto = false
    localStorage.setItem('tutorialVisto', JSON.stringify(tutorialVisto))

    resetLocalStorageFnaf()
}

function resetLocalStorageFnaf() { }