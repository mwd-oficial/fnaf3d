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
        pesquisaNaoVistoDiv.style.display = "none"
        ucnBtn.style.display = "none"
        fecharPesquisa()
    } else {
        pesquisaNaoVistoDiv.style.opacity = 0
        pesquisaNaoVistoDiv.style.pointerEvents = "none"
        pesquisaNaoVistoDiv.style.display = "flex"
        if (fnafInfoImgDiv.style.display == "flex") {
            menuContent.removeEventListener('scroll', scrollPesquisaNaoVisto)
            setTimeout(() => {
                if (document.querySelector("#div-scroll").getBoundingClientRect().top <= 75) {
                    pesquisaNaoVistoDiv.style.opacity = 1;
                    pesquisaNaoVistoDiv.style.pointerEvents = "all"
                }
                menuContent.addEventListener('scroll', scrollPesquisaNaoVisto)
            }, 1500);
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
        } else {
            setTimeout(() => {
                pesquisaNaoVistoDiv.style.opacity = 1
                pesquisaNaoVistoDiv.style.pointerEvents = "all"
            }, 1500);
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
            tutorialBotoesContentP.innerHTML += isCelular ? " Toque" : " Passe o mouse por cima"
            tutorialBotoesContentP.innerHTML += " para vê-lo. <br> Dica: Cada modelo tem 1 moeda escondida. Tente encontrá-la! <br> (Clique)"

            break
        case 5:
            quantidadeMoedas3dDiv.style.zIndex = 1
            quantidadeMoedas3dDiv.style.opacity = 0
            quantidadeMoedas3dDiv.style.transitionDuration = "1s"
            if (isCelular) {
                tutorialBotoesContent.style.left = "50%"
                tutorialBotoesContent.style.transform = "translate(-50%, -50%)"
                quantidadeMoedas3dDiv.addEventListener("touchstart", quantidadeMoedas3d)
            } else {
                quantidadeMoedas3dDiv.addEventListener("mouseover", quantidadeMoedas3d)
            }
            tutorialBotoesContentP.innerHTML = "Aqui você pode ver a descrição do modelo e o tutorial de como interagir com ele <br> (Clique)"
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
    textoFnafInfo.style.display = "none"
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

            nomeFnafInfo.innerHTML = nomeFnaf[1].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf1Info
            trailer.src = "assets/videos/fnaf1/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnaf1/trailer.webp" : ""
            fnafImg.src = "assets/images/fnaf1/fnaf1.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 1

            break
        case "2":

            nomeFnafInfo.innerHTML = nomeFnaf[2].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf2Info
            trailer.src = "assets/videos/fnaf2/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnaf2/trailer.webp" : ""
            fnafImg.src = "assets/images/fnaf2/fnaf2.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 2

            break
        case "3":

            nomeFnafInfo.innerHTML = nomeFnaf[3].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf3Info
            trailer.src = "assets/videos/fnaf3/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnaf3/trailer.webp" : ""
            fnafImg.src = "assets/images/fnaf3/fnaf3.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 3

            break
        case "4":

            nomeFnafInfo.innerHTML = nomeFnaf[4].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf4Info
            trailer.src = "assets/videos/fnaf4/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnaf4/trailer.webp" : ""
            fnafImg.src = "assets/images/fnaf4/fnaf4.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 4

            break
        case "sl":

            nomeFnafInfo.innerHTML = nomeFnaf[5].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafslInfo
            trailer.src = "assets/videos/fnafsl/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnafsl/trailer.webp" : ""
            fnafImg.src = "assets/images/fnafsl/fnafsl.webp"
            jogarFnaf.style.display = "flex"
            iNomeFnaf = 5

            break
        case "ffps":

            nomeFnafInfo.innerHTML = nomeFnaf[6].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafffpsInfo
            trailer.src = "assets/videos/fnafffps/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnafffps/trailer.webp" : ""
            fnafImg.src = "assets/images/fnafffps/fnafffps.webp"
            if (isCelular) {
                downloadP.style.display = "block"
            } else {
                fnafffpsDownload.style.display = "flex"
            }
            iNomeFnaf = 6

            break
        case "sb":

            nomeFnafInfo.innerHTML = nomeFnaf[7].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafsbInfo
            trailer.src = "assets/videos/fnafsb/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnafsb/trailer.webp" : ""
            fnafImg.src = "assets/images/fnafsb/fnafsb.webp"
            fnafsbSteam.style.display = "flex"
            iNomeFnaf = 7

            break
        case "sbr":

            nomeFnafInfo.innerHTML = nomeFnaf[8].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafsbrInfo
            trailer.src = "assets/videos/fnafsbr/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnafsbr/trailer.webp" : ""
            fnafImg.src = "assets/images/fnafsbr/fnafsbr.webp"
            fnafsbrSteam.style.display = "flex"
            iNomeFnaf = 8

            break
        case "w":

            nomeFnafInfo.innerHTML = nomeFnaf[9].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafwInfo
            trailer.src = "assets/videos/fnafw/trailer.mp4"
            trailer.poster = !isCelular ? "assets/images/fnafw/trailer.webp" : ""
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
        case "ex1":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 11

            break
        case "ex2":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 12

            break
        case "ex3":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 13

            break
        case "ex4":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 14

            break
        case "exsl":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 15

            break
        case "exffps":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 16

            break
        case "exsb":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 17

            break
        case "exsbr":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 18

            break
        case "exw":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 19

            break
        case "exo":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 20

            break
        case "exd":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 21

            break
        case "exf":

            nomeFnafInfo.innerHTML = "Five Nights At Freddy's: O Pesadelo Sem Fim"
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafexfInfo
            trailer.src = "assets/videos/trailer-filme.mp4"
            trailer.poster = !isCelular ? "assets/images/extras/trailer.webp" : ""
            fnafImg.src = "assets/images/extras/fnaf-filme.webp"
            fnafImg.style.width = "initial"
            fnafImg.style.height = "100%"
            fnafFilme.style.display = "flex"
            iNomeFnaf = 20

            break
    }
    if (isCelular) {
        document.querySelectorAll(".ajustar-font-size-info").forEach(function (el) {
            var fontSizeAtual = parseFloat(window.getComputedStyle(el).fontSize);
            var fontSizeNovo = fontSizeAtual * 0.75;
            el.style.fontSize = fontSizeNovo + 'px';
        });
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

document.querySelector("#ainda-nao-visto-div label").addEventListener("click", checkarAindaNaoVisto)
aindaNaoVistoInput.addEventListener("click", checkarAindaNaoVisto)
aindaNaoVistoDiv.addEventListener("click", checkarAindaNaoVisto)
function checkarAindaNaoVisto() {
    if (aindaNaoVistoInput.checked) {
        aindaNaoVistoInput.checked = false
    } else {
        aindaNaoVistoInput.checked = true
    }
    atualizarVistos()
}
function atualizarVistos() {
    if (aindaNaoVistoInput.checked) {
        vistosArray.forEach(iModelo => {
            var img = btnModelosImg[iModelo];
            var brilhoOriginal = parseFloat(img.getAttribute('data-original-brightness')) || 1;
            var novoBrilho = brilhoOriginal - 3 * brilhoOriginal / 4; // Ajusta o brilho proporcionalmente
            img.style.filter = `brightness(${novoBrilho})`;
        });
    } else {
        vistosArray.forEach(iModelo => {
            var img = btnModelosImg[iModelo];
            var brilhoOriginal = parseFloat(img.getAttribute('data-original-brightness')) || 1;
            img.style.filter = `brightness(${brilhoOriginal})`; // Restaura o brilho original
        });
    }
}

function scrollPesquisaNaoVisto() {
    if (document.querySelector("#div-scroll").getBoundingClientRect().top <= 75) {
        pesquisaNaoVistoDiv.style.opacity = 1;
        pesquisaNaoVistoDiv.style.pointerEvents = "all"
    } else {
        pesquisaNaoVistoDiv.style.opacity = 0;
        pesquisaNaoVistoDiv.style.pointerEvents = "none"
        pesquisaInput.blur()
    }
}


modelosDivP.forEach(nome => {
    if (nome.innerText.length > maiorLength) maiorLength = nome.innerText.length
})

maiorLength += 15
pesquisaInput.maxLength = maiorLength;

pesquisaBtn.addEventListener("click", function () {
    if (pesquisaInput.classList.contains("active")) {
        fecharPesquisa()
    } else {
        pesquisaInput.classList.add("active")
        pesquisaInput.style.width = maiorLength * 10.75 + "px"
        pesquisaInput.focus()
        pesquisaInput.style.paddingRight = "50px"
        pesquisaInput.style.border = "3px solid #333"
    }
})

function fecharPesquisa() {
    pesquisaInput.classList.remove("active")
    pesquisaInput.style.width = "0px"
    pesquisaInput.style.paddingRight = "0px"
    pesquisaInput.style.border = "0px solid #0000"
    pesquisaInput.value = ""
    pesquisa()
}

pesquisaInput.addEventListener("input", pesquisa)
function pesquisa() {
    var valor = pesquisaInput.value
    modelosDiv.forEach(btn => btn.style.display = "none")
    nomeFnaf.forEach(nome => nome.style.display = "none")
    nenhumResul.style.display = "block"
    if (fnafInfoImgDiv.style.display == "flex") {
        //nenhumResul.style.m
    }
    modelosDivP.forEach((nome, iNome) => {
        var textoNome = nome.innerText;
        if (textoNome.toLocaleLowerCase().includes(valor.toLocaleLowerCase()) && valor.toLocaleLowerCase() !== "") {
            var valorOriginal = textoNome.match(new RegExp(escapeRegExp(valor), 'i'))[0];
            textoNome = textoNome.replace(new RegExp(escapeRegExp(valorOriginal), 'g'), `<mark>${valorOriginal}</mark>`);
            nome.innerHTML = textoNome;

            modelosDiv[iNome].style.display = "block"

            switch (modelos[iNome].fnaf) {
                case "l":
                    nomeFnaf[0].style.display = "block"
                    break
                case "1":
                    nomeFnaf[1].style.display = "block"
                    break
                case "2":
                    nomeFnaf[2].style.display = "block"
                    break
                case "3":
                    nomeFnaf[3].style.display = "block"
                    break
                case "4":
                    nomeFnaf[4].style.display = "block"
                    break
                case "sl":
                    nomeFnaf[5].style.display = "block"
                    break
                case "ffps":
                    nomeFnaf[6].style.display = "block"
                    break
                case "sb":
                    nomeFnaf[7].style.display = "block"
                    break
                case "sbr":
                    nomeFnaf[8].style.display = "block"
                    break
                case "w":
                    nomeFnaf[9].style.display = "block"
                    break
                case "ex1":
                    nomeFnaf[11].style.display = "block"
                    break
                case "ex2":
                    nomeFnaf[12].style.display = "block"
                    break
                case "ex3":
                    nomeFnaf[13].style.display = "block"
                    break
                case "ex4":
                    nomeFnaf[14].style.display = "block"
                    break
                case "exsl":
                    nomeFnaf[15].style.display = "block"
                    break
                case "exffps":
                    nomeFnaf[16].style.display = "block"
                    break
                case "exsb":
                    nomeFnaf[17].style.display = "block"
                    break
                case "exsbr":
                    nomeFnaf[18].style.display = "block"
                    break
                case "exw":
                    nomeFnaf[19].style.display = "block"
                    break
                case "exo":
                    nomeFnaf[20].style.display = "block"
                    break
                case "exf":
                    nomeFnaf[20].style.display = "block"
                    break
                case "exd":
                    nomeFnaf[21].style.display = "block"
                    break
            }
            if (modelos[iNome].fnaf.includes("ex")) nomeFnaf[10].style.display = "block"

        } else {
            textoNome = textoNome.replace(new RegExp("<mark>", 'g'), "");
            textoNome = textoNome.replace(new RegExp("</mark>", 'g'), "");
            nome.innerHTML = textoNome;
        }
        if (modelosDiv[iNome].style.display == "block") nenhumResul.style.display = "none"
        if (valor.toLocaleLowerCase() === "") {
            modelosDiv.forEach(btn => btn.style.display = "block")
            nomeFnaf.forEach(nome => nome.style.display = "block")
        }
    })
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

window.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        pesquisaInput.blur()
    }
})