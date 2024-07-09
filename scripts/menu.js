// Menu, 

btnMenu.addEventListener("click", abrirFecharMenu)
function abrirFecharMenu() {
    btnMenu.style.pointerEvents = "none"
    setTimeout(() => {
        btnMenu.style.pointerEvents = "all"
    }, 1100);
    if (divMenu.classList.contains("active")) {
        menuContent.style.opacity = 0
        divMenu.classList.remove("active")
        setTimeout(() => {
            menuContent.style.display = "none"
        }, 500);
        menuIcon.innerHTML = "menu"
        btnHome.style.display = "none"
        ucnBtn.style.display = "none"
    } else {
        if (fnafInfoImgDiv.style.display == "flex") {
            if (primeiraVezScroll) {
                primeiraVezScroll = false
                setTimeout(() => {
                    menuContent.scrollTo(0, 0)
                }, 1500);
            } else {
                setTimeout(() => {
                    nomeFnaf[iNomeFnaf].scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 1500);
            }
        }
        divMenu.classList.add("active")
        menuContent.style.display = "block"
        setTimeout(() => {
            btnHome.style.display = "flex"
            if (ucnDesbloqueado) {
                ucnBtn.style.display = "flex"
            }
        }, 1000);
        setTimeout(() => {
            menuContent.style.opacity = 1
        }, 1000);
        menuIcon.innerHTML = "close"
    }
}

btnHome.addEventListener("click", function () {
    telaInicial.style.display = "block"
    document.querySelector("#conteudo").style.display = "none"
    telaInicialVideo.currentTime = 0
    telaInicialAudio.currentTime = 0
    telaInicialVideo.play()
    telaInicialAudio.play()
    divMenu.style.display = "none"
    btnMenu.style.display = "none"
    tutorialDescricaoDiv.style.display = "none"
    tutorialDescricaoBtn.style.display = "none"
    tutorialDescricaoDiv.classList.add("active")
    abrirFecharTutorial()
})

ucnBtn.addEventListener("click", aparecerUcnInfo)






// descrição/tutorial

tutorialDescricaoBtn.addEventListener("click", abrirFecharTutorial)
function abrirFecharTutorial() {
    tutorialDescricaoBtn.style.pointerEvents = "none"
    setTimeout(() => {
        tutorialDescricaoBtn.style.pointerEvents = "all"
    }, 1100);
    if (tutorialDescricaoDiv.classList.contains("active")) {
        tutorialDescricaoContent.style.opacity = 0
        tutorialDescricaoDiv.classList.remove("active")
        setTimeout(() => {
            tutorialDescricaoContent.style.display = "none"
        }, 500);
        tutorialIcon.innerHTML = "question_mark"
    } else {
        tutorialDescricaoDiv.classList.add("active")
        tutorialDescricaoContent.style.display = "flex"
        setTimeout(() => {
            tutorialDescricaoContent.style.opacity = 1
        }, 1000);
        tutorialIcon.innerHTML = "close"
    }
}

rotacaoInput.addEventListener("change", rotacaoAutomatica)
function rotacaoAutomatica() {
    if (rotacaoInput.checked) {
        modelViewer.autoRotate = true
        modelViewer.interactionPromptStyle = "basic"
        if (velocidadeInput.value == 0) {
            velocidadeInput.value = 33
        }
        modelViewer.rotationPerSecond = velocidadeInput.value + "deg"
    } else {
        modelViewer.autoRotate = false
        modelViewer.interactionPromptStyle = "wiggle"
        modelViewer.rotationPerSecond = "0deg"
    }
}

velocidadeInput.addEventListener("input", function () {
    modelViewer.rotationPerSecond = velocidadeInput.value + "deg"
})



pixelInput.addEventListener("change", efeitoPixelado)
function efeitoPixelado() {
    if (pixelInput.checked) {
        pixelateEffect = document.createElement("pixelate-effect")
        effectComposer.appendChild(pixelateEffect)
    } else {
        if (pixelateEffect) effectComposer.removeChild(pixelateEffect)
    }
}

glitchInput.addEventListener("change", efeitoGlitch)
function efeitoGlitch() {
    if (glitchInput.checked) {
        glitchEffect = document.createElement("glitch-effect")
        effectComposer.appendChild(glitchEffect)
    } else {
        if (glitchEffect) effectComposer.removeChild(glitchEffect)
    }
}



outlineInput.addEventListener("change", efeitoOutline)
function efeitoOutline() {
    if (outlineInput.checked) {
        outlineEffect = document.createElement("outline-effect")
        effectComposer.appendChild(outlineEffect)
        if (intensidadeInput.value == 0) {
            intensidadeInput.value = 1
        }
        if (suavizacaoInput.value == 0) {
            suavizacaoInput.value = 1
        }
        outlineEffect.strength = intensidadeInput.value
        outlineEffect.smoothing = Number(suavizacaoInput.value)
        outlineEffect.color = corInput.value
    } else {
        if (outlineEffect) effectComposer.removeChild(outlineEffect)
    }
}

intensidadeInput.addEventListener("input", function () {
    if (outlineEffect) outlineEffect.strength = this.value
})

suavizacaoInput.addEventListener("input", function () {
    if (outlineEffect) outlineEffect.smoothing = Number(this.value)
})

corInput.addEventListener("input", function () {
    if (outlineEffect) outlineEffect.color = this.value
})











// Tutorial botões
function tutorialBotoes() {
    tutorialBotoesDiv.style.display = "flex"
    switch (passoTutorial) {
        case 1:
            if (!animacoesAberto) abaAnimacoes()
            animacoesContainer.style.zIndex = 1001
            if (isCelular) {
                tutorialBotoesContent.style.height = "50%"
                tutorialBotoesContent.style.top = "100px"
            }
            break
        case 2:
            if (animacoesAberto) abaAnimacoes()
            if (!audiosAberto) abaAudios()
            animacoesContainer.style.zIndex = 10
            audiosContainer.style.zIndex = 1001
            tutorialBotoesContentP.innerHTML = "Aqui você pode ver os áudios disponíveis do modelo <br> (Clique)"
            if (isCelular) {
                tutorialBotoesContent.style.transform = "translate(0%, -50%)"
                tutorialBotoesContent.style.height = "100%"
                tutorialBotoesContent.style.top = "50%"
                tutorialBotoesContent.style.width = "50%"
                tutorialBotoesContent.style.left = "initial"
                tutorialBotoesContent.style.right = "0"
            }
            break
        case 3:
            if (audiosAberto) abaAudios()
            audiosContainer.style.zIndex = 10
            inputAlturaDiv.style.zIndex = 1001
            tutorialBotoesContentP.innerHTML = "Aqui você pode alterar a altura do modelo <br> (Clique)"
            if (isCelular) {
                tutorialBotoesContent.style.left = "15%"
                tutorialBotoesContent.style.right = "initial"
            }
            break
        case 4:
            inputAlturaDiv.style.zIndex = 10
            setTimeout(() => {
                quantidadeMoedas3dDiv.style.transitionDuration = "0s"
                quantidadeMoedas3dDiv.style.zIndex = 1001
                quantidadeMoedas3dDiv.style.opacity = 1
            }, 1);
            tutorialBotoesContentP.innerHTML = "Aqui mostra quantas moedas 3D você tem."
            tutorialBotoesContentP.innerHTML += " Passe o mouse por cima"
            tutorialBotoesContentP.innerHTML += " Clique"
            tutorialBotoesContentP.innerHTML += " para vê-lo. <br> Dica: Cada modelo tem 1 moeda escondida. Tente encontrá-la! <br> (Clique)"

            break
        case 5:
            quantidadeMoedas3dDiv.style.zIndex = 1
            quantidadeMoedas3dDiv.style.opacity = 0
            quantidadeMoedas3dDiv.style.transitionDuration = "1s"
            if (isCelular) {
                tutorialBotoesContent.style.left = "50%"
                tutorialBotoesContent.style.transform = "translate(-50%, -50%)"
                quantidadeMoedas3dDiv.addEventListener("click", quantidadeMoedas3d)
            } else {
                quantidadeMoedas3dDiv.addEventListener("mouseover", quantidadeMoedas3d)
            }
            tutorialBotoesContentP.innerHTML = "Aqui você pode ver as informações do modelo e tutorial de como interagir com ele <br> (Clique)"
            tutorialBotoesContentP.style.backdropFilter = "blur(10px) brightness(0.5)"
            tutorialBotoesDiv.style.backdropFilter = "none"
            if (!tutorialDescricaoDiv.classList.contains("active")) {
                abrirFecharTutorial()
            }
            break
        case 6:
            abrirFecharTutorial()
            tutorialBotoesContentP.innerHTML = "Aqui você pode ver todos os modelos disponíveis (e extras para desbloquear) <br> (Clique)"
            if (!divMenu.classList.contains("active")) {
                abrirFecharMenu()
            }
            break
        case 7:
            abrirFecharMenu()

            tutorialBotoesDiv.style.display = "none"
            animacoesContainer.style.pointerEvents = "all"
            audiosContainer.style.pointerEvents = "all"
            inputAlturaDiv.style.pointerEvents = "all"


            break
    }
}

tutorialBotoesDiv.addEventListener("click", function () {
    passoTutorial++
    tutorialBotoes()
})









// fnaf info

function fnafInfo(iModelo) {
    fnafInfoImgDiv.style.display = "flex"
    textoFnafInfo.forEach((texto) => {
        texto.style.display = "none"
    })
    fnafImg.style.width = "100%"
    fnafImg.style.height = "initial"
    jogarFnaf.style.display = "none"
    fnafffpsDownload.style.display = "none"
    fnafwDownload.style.display = "none"
    fnafsbSteam.style.display = "none"
    fnafsbrSteam.style.display = "none"
    fnafFilme.style.display = "none"
    downloadP.style.display = "none"
    switch (modelos[iModelo].fnaf) {
        case "l":
            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 0
            break
        case "1":

            textoFnafInfo[0].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[1].innerHTML
            fnafImg.src = "assets/images/fnaf1/fnaf1.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 1

            break
        case "2":

            textoFnafInfo[1].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[2].innerHTML
            fnafImg.src = "assets/images/fnaf2/fnaf2.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 2

            break
        case "3":

            textoFnafInfo[2].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[3].innerHTML
            fnafImg.src = "assets/images/fnaf3/fnaf3.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 3

            break
        case "4":

            textoFnafInfo[3].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[4].innerHTML
            fnafImg.src = "assets/images/fnaf4/fnaf4.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 4

            break
        case "sl":

            textoFnafInfo[4].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[5].innerHTML
            fnafImg.src = "assets/images/fnafsl/fnafsl.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 5

            break
        case "ffps":

            textoFnafInfo[5].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[6].innerHTML
            fnafImg.src = "assets/images/fnafffps/fnafffps.webp"
            if (isCelular) {
                downloadP.style.display = "block"
            } else {
                fnafffpsDownload.style.display = "flex"
            }
            iNomeFnaf = 6

            break
        case "sb":

            textoFnafInfo[6].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[7].innerHTML
            fnafImg.src = "assets/images/fnafsb/fnafsb.webp"
            fnafsbSteam.style.display = "flex"
            iNomeFnaf = 7

            break
        case "sbr":

            textoFnafInfo[7].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[8].innerHTML
            fnafImg.src = "assets/images/fnafsbr/fnafsbr.webp"
            fnafsbrSteam.style.display = "flex"
            iNomeFnaf = 8

            break
        case "w":

            textoFnafInfo[8].style.display = "block"
            nomeFnafInfo.innerHTML = nomeFnaf[9].innerHTML
            fnafImg.src = "assets/images/fnafw/fnafw.webp"
            if (isCelular) {
                downloadP.style.display = "block"
            } else {
                fnafwDownload.style.display = "flex"
            }
            iNomeFnaf = 9

            break
        case "ex":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 10

            break
        case "exf":

            textoFnafInfo[9].style.display = "block"
            nomeFnafInfo.innerHTML = "Five Nights At Freddy's: O Pesadelo Sem Fim"
            fnafImg.src = "assets/images/extras/fnaf-filme.webp"
            fnafImg.style.width = "initial"
            fnafImg.style.height = "100%"
            fnafFilme.style.display = "flex"
            iNomeFnaf = 11

            break
    }
}


jogarFnaf.addEventListener("click", function () {
    window.open(`../jogos/fnaf${modelos[iModeloVar].fnaf}/fnaf${modelos[iModeloVar].fnaf}.html`, "_blank")
})

















// Moeda 3D
function gerarMoeda3d() {
    moeda3dImg.style.display = "block"
    moeda3dImg.style.top = ((Math.random() * window.innerHeight)) + "px"
    moeda3dImg.style.left = ((Math.random() * window.innerWidth)) + "px"
}

moeda3dImg.addEventListener("click", function () {
    this.style.display = "none"
    document.querySelector("#moeda-3d-audio").play()
    quantidadeMoedas3d()
    moedas3dNumDiv.innerHTML = ++moedas3dNum
    localStorage.setItem("moedas-3d", moedas3dNum)
    verificaPraComprar()
})

function quantidadeMoedas3d() {
    quantidadeMoedas3dDiv.removeEventListener("mouseover", quantidadeMoedas3d)
    quantidadeMoedas3dDiv.style.opacity = 1
    setTimeout(() => {
        quantidadeMoedas3dDiv.style.opacity = 0
        quantidadeMoedas3dDiv.addEventListener("mouseover", quantidadeMoedas3d)
    }, 5000);
}

function verificaPraComprar() {
    praComprar.forEach((praComprarEl, iPraComprar) => {
        if (moedas3dNum == valor[iPraComprar].innerHTML) {
            praComprarEl.classList.remove("bloqueado")
            praComprarArray.push(iPraComprar)
            localStorage.setItem("praComprar", JSON.stringify(praComprarArray))

            extraDesbloqueado.style.display = "flex"
            extraDesbloqueadoH2.innerHTML = "Novo Extra Desbloqueado!"
            extraDesbloqueadoImg.src = modelosExtras[iPraComprar].imgSrc
            extraDesbloqueadoP.innerHTML = modelosExtras[iPraComprar].nome

            aparecerConfete()


        }
    })
}

extraDesbloqueado.addEventListener("click", function () {
    this.style.display = "none"
    if (extraDesbloqueado.contains(confete)) extraDesbloqueado.removeChild(confete)
    setTimeout(() => {
        if ((praComprarArray.length + praEncontrarArray.length + praEncontrarDouradoArray.length) == modelosExtras.length) {
            aparecerUcnInfo()
        }
    }, 1);
})

function aparecerConfete() {
    confete = document.createElement("img")
    confete.src = "assets/images/confete.gif"
    confete.id = "confete"
    extraDesbloqueado.appendChild(confete)
    document.querySelector("#criancas-gritando").play()
    timeoutConfete = setTimeout(() => {
        if (extraDesbloqueado.contains(confete)) extraDesbloqueado.removeChild(confete)
    }, 4000);
}

function sortearPraEncontrar() {
    numSort = Math.floor(Math.random() * praEncontrar.length);
    if (praEncontrarArray.indexOf(numSort) == -1) {
        if (praEncontrarArray.length < praEncontrar.length) {
            praEncontrarArray.push(numSort);
            praEncontrarf(numSort)
        }
    } else {
        if (praEncontrarArray.length < praEncontrar.length) {
            sortearPraEncontrar()
        }
    }
    console.log(praEncontrarArray);
}

function praEncontrarf(iPraEncontrar) {
    praEncontrar[iPraEncontrar].classList.remove("bloqueado")
    iModeloExtra = iPraEncontrar + (praComprar.length)
    localStorage.setItem("praEncontrar", JSON.stringify(praEncontrarArray))

    extraDesbloqueado.classList.remove("dourado")
    setTimeout(() => {
        extraDesbloqueado.style.display = "flex"
        extraDesbloqueadoH2.innerHTML = "Novo Extra Desbloqueado!"
        extraDesbloqueadoImg.src = modelosExtras[iModeloExtra].imgSrc
        extraDesbloqueadoP.innerHTML = modelosExtras[iModeloExtra].nome
    }, 1);

    document.querySelectorAll(".pra-encontrar img")[iPraEncontrar].src = modelosExtras[iModeloExtra].imgSrc
    document.querySelectorAll(".pra-encontrar ~ p")[iPraEncontrar].innerHTML = modelosExtras[iModeloExtra].nome

    aparecerConfete()
}

function sortearPraEncontrarDourado() {
    if ("botaoDouradoDesativado" in modelos[iModeloVar]) {
        if (!modelos[iModeloVar].botaoDouradoDesativado) {
            modelos[iModeloVar].botaoDouradoDesativado = true
            botaoDouradoDesativadoArray[geralSorteado.indexOf(iModeloVar)] = true
            localStorage.setItem("botaoDouradoDesativadoArray", JSON.stringify(botaoDouradoDesativadoArray))
            document.querySelector("#botao-dourado").classList.add("desativado")
        }
    }
    numSort = Math.floor(Math.random() * praEncontrarDourado.length);
    if (praEncontrarDouradoArray.indexOf(numSort) == -1) {
        if (praEncontrarDouradoArray.length < praEncontrarDourado.length) {
            praEncontrarDouradoArray.push(numSort);
            praEncontrarDouradof(numSort)
        }
    } else {
        if (praEncontrarDouradoArray.length < praEncontrarDourado.length) {
            sortearPraEncontrarDourado()
        }
    }
    console.log(praEncontrarDouradoArray);
}

function praEncontrarDouradof(iPraEncontrarDourado) {
    praEncontrarDourado[iPraEncontrarDourado].classList.remove("bloqueado")
    iModeloExtra = iPraEncontrarDourado + (praComprar.length + praEncontrar.length)
    localStorage.setItem("praEncontrarDourado", JSON.stringify(praEncontrarDouradoArray))

    extraDesbloqueado.classList.add("dourado")
    extraDesbloqueado.style.display = "flex"
    extraDesbloqueadoH2.innerHTML = "Novo Extra Dourado Desbloqueado!"
    extraDesbloqueadoImg.src = modelosExtras[iModeloExtra].imgSrc
    extraDesbloqueadoP.innerHTML = modelosExtras[iModeloExtra].nome

    document.querySelectorAll(".pra-encontrar-dourado img")[iPraEncontrarDourado].src = modelosExtras[iModeloExtra].imgSrc
    document.querySelectorAll(".pra-encontrar-dourado ~ p")[iPraEncontrarDourado].innerHTML = modelosExtras[iModeloExtra].nome

    aparecerConfete()
}

function aparecerUcnInfo() {
    ucnInfoImgDiv.style.display = "flex"
    ucnDesbloqueado = true
    localStorage.setItem('ucnDesbloqueado', JSON.stringify(ucnDesbloqueado))
    if (isCelular) {
        document.querySelector("#ucn-info-div>p").style.display = "block"
    } else {
        document.querySelector("#ucn-download-div").style.display = "flex"
    }
    confete = document.createElement("img")
    confete.src = "assets/images/confete.gif"
    confete.id = "confete"
    ucnInfoImgDiv.appendChild(confete)
    document.querySelector("#criancas-gritando").play()
    timeoutConfete = setTimeout(() => {
        ucnInfoImgDiv.removeChild(confete)
    }, 4000);
}

document.querySelector("#fechar-ucn-info-btn").addEventListener("click", () => { ucnInfoImgDiv.style.display = "none" })