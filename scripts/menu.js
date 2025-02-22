// Animação do scroll

function animaScroll() {
    modelosDiv.forEach((modelo) => {
        const rect = modelo.getBoundingClientRect(); // Obtém as coordenadas da div em relação à janela de visualização
        var metadeAltura = rect.top + (modelo.offsetHeight / 2)

        if (metadeAltura >= 0) {
            if (isSubindo) {
                if (metadeAltura <= window.innerHeight) {
                    modelo.classList.add("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.remove("abaixo")
                } else {
                    modelo.classList.remove("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.add("abaixo")
                }
            } else {
                if (metadeAltura - 50 <= window.innerHeight) {
                    modelo.classList.add("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.remove("abaixo")
                } else {
                    modelo.classList.remove("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.add("abaixo")
                }
            }
        } else if (metadeAltura <= window.innerHeight) {
            if (isSubindo) {
                if (metadeAltura + 50 >= 0) {
                    modelo.classList.add("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.remove("abaixo")
                } else {
                    modelo.classList.remove("visivel")
                    modelo.classList.add("acima")
                    modelo.classList.remove("abaixo")
                }
            } else {
                if (metadeAltura >= 0) {
                    modelo.classList.add("visivel")
                    modelo.classList.remove("acima")
                    modelo.classList.remove("abaixo")
                } else {
                    modelo.classList.remove("visivel")
                    modelo.classList.add("acima")
                    modelo.classList.remove("abaixo")
                }
            }
        }
    })
}
animaScroll();
menuContent.addEventListener('scroll', animaScroll);

let lastScrollTop = 0;
var isSubindo
var scrollTop
function subindo() {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    isSubindo = scrollTop < lastScrollTop;
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    return isSubindo;
}
menuContent.addEventListener('scroll', subindo)


// Menu

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

        btnHome.style.opacity = 0
        menuJogos.style.opacity = 0
        setTimeout(() => {
            btnHome.style.display = "none"
            menuJogos.style.display = "none"
        }, 1000);

        pesquisaNaoVistoDiv.style.display = "none"
        irTopoDiv.style.display = "none"
        fecharPesquisa()
    } else {
        setTimeout(() => {
            ajustarAltura()
        }, 1000);
        pesquisaNaoVistoDiv.style.opacity = 0
        pesquisaNaoVistoDiv.style.pointerEvents = "none"
        pesquisaNaoVistoDiv.style.display = "flex"
        irTopoDiv.style.opacity = 0
        irTopoDiv.style.pointerEvents = "none"
        irTopoDiv.style.display = "flex"
        menuContent.removeEventListener('scroll', scrollPesquisaNaoVisto)
        if (fnafInfoImgDiv.style.display == "flex") {
            setTimeout(() => {
                if (document.querySelector("#div-scroll").getBoundingClientRect().top <= 75) {
                    pesquisaNaoVistoDiv.style.opacity = 1;
                    pesquisaNaoVistoDiv.style.pointerEvents = "all"
                    irTopoDiv.style.opacity = 1;
                    irTopoDiv.style.pointerEvents = "all"
                }
                menuContent.addEventListener('scroll', scrollPesquisaNaoVisto)
            }, 1500);
            if (primeiraVezScroll) {
                primeiraVezScroll = false
                setTimeout(irTopo, 1500);
            } else {
                setTimeout(() => {
                    nomeFnaf[iNomeFnaf].scrollIntoView({ behavior: 'smooth', block: 'start' })
                }, 1500);
            }
        } else {
            setTimeout(() => {
                pesquisaNaoVistoDiv.style.opacity = 1
                pesquisaNaoVistoDiv.style.pointerEvents = "all"
                irTopoDiv.style.opacity = 1
                irTopoDiv.style.pointerEvents = "all"
                menuContent.addEventListener('scroll', scrollPesquisaNaoVisto)
            }, 1500);
        }
        divMenu.classList.add("active")
        menuContent.style.display = "block"
        btnHome.style.display = "flex"
        menuJogos.style.display = "flex"
        setTimeout(() => {
            btnHome.style.opacity = 1
            menuJogos.style.opacity = 1
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
    telaInicialVideo.play()
    if (telaModelosAudio) {
        telaModelosAudio.pause();
        telaModelosAudio.currentTime = 0;
    }
    document.querySelectorAll(".tela-modelos-especiais").forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
    })
    divMenu.style.display = "none"
    btnMenu.style.display = "none"
    tutorialDescricaoDiv.style.display = "none"
    tutorialDescricaoBtn.style.display = "none"
    arBtn.style.display = "none"
    tutorialDescricaoDiv.classList.add("active")
    abrirFecharTutorial()
    if (divMenu.classList.contains("active")) abrirFecharMenu()
    if (jogosBtn.classList.contains("active")) abaJogos()
})

ucnBtn.addEventListener("click", aparecerUcnInfo)




arBtn.addEventListener("touchstart", function () {
    ar = true
    verificaOrientacao()
})


function irTopo() {
    menuContent.scrollTo(0, 0)
}
irTopoDiv.addEventListener("click", irTopo)



// descrição/tutorial
if (!isCelular) {
    descricaoDivWrapper.addEventListener("mouseenter", function () {
        tutorialDivWrapper.style.boxShadow = "inset 0px 0px 20px 0px #0008, 0px 0px 0px 0px #0000"
        tutorialDivWrapper.style.transform = "scale(0.9825)"
        tutorialDivWrapper.style.borderRadius = "30px"
    })
    descricaoDivWrapper.addEventListener("mouseleave", function () {
        tutorialDivWrapper.style.boxShadow = "inset 0px 0px 0px 0px #0000,  0px 0px 0px 0px #0000"
        tutorialDivWrapper.style.transform = "scale(1)"
        tutorialDivWrapper.style.borderRadius = "0px"
    })
    tutorialDivWrapper.addEventListener("mouseenter", function () {
        descricaoDivWrapper.style.boxShadow = "inset 0px 0px 20px 0px #0008, 0px 0px 0px 0px #0000"
        descricaoDivWrapper.style.transform = "scale(0.9825)"
        descricaoDivWrapper.style.borderRadius = "30px"
    })
    tutorialDivWrapper.addEventListener("mouseleave", function () {
        descricaoDivWrapper.style.boxShadow = "inset 0px 0px 0px 0px #0000,  0px 0px 0px 0px #0000"
        descricaoDivWrapper.style.transform = "scale(1)"
        descricaoDivWrapper.style.borderRadius = "0px"
    })
}


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
        document.querySelector("#descricao-div").scrollTo(0, 0)
        document.querySelector("#tutorial-div").scrollTo(0, 0)
    }
}

favoritarBtn.addEventListener("click", async function () {
    if (!logado) {
        alerta("Faça login para favoritar modelos 3D.");
        return;
    }
    this.classList.toggle(iconRounded);
    this.classList.toggle(iconOutlined);

    document.querySelector("#favoritar-span").innerHTML = this.classList.contains(iconRounded) ? "Favoritar" : "Favoritado"

    atualizarInteracoes(favoritarBtn, "favoritos", "favoritado", "Favoritado! Você poderá ver este modelo 3D na sua barra de favoritos.")
})

likes.btn.addEventListener("click", function () {
    if (!logado) {
        alerta("Faça login para dar likes.");
        return;
    }
    cliqueLikeDislike(likes, dislikes, "Like", "likes", "dislikes", "comLike", "comDislike");
});

dislikes.btn.addEventListener("click", function () {
    if (!logado) {
        alerta("Faça login para dar dislikes.");
        return;
    }
    cliqueLikeDislike(dislikes, likes, "Dislike", "dislikes", "likes", "comDislike", "comLike");
});

function cliqueLikeDislike(obj, otherObj, str, dustr, otherDustr, estado, otherEstado) {
    if (obj.btn.classList.contains(iconRounded)) {
        obj.btn.classList.add(iconOutlined);
        obj.btn.classList.remove(iconRounded);
        obj.qtdeEl.innerHTML = ++modelosbd[iModeloVar][dustr];

        if (otherObj.btn.classList.contains(iconOutlined)) {
            otherObj.btn.classList.remove(iconOutlined);
            otherObj.btn.classList.add(iconRounded);
            otherObj.qtdeEl.innerHTML = --modelosbd[iModeloVar][otherDustr];
            atualizarInteracoes(otherObj.btn, otherDustr, otherEstado, `${str} registrado com sucesso.`)
        }
    } else {
        obj.btn.classList.remove(iconOutlined);
        obj.btn.classList.add(iconRounded);
        obj.qtdeEl.innerHTML = --modelosbd[iModeloVar][dustr];
    }

    atualizarInteracoes(obj.btn, dustr, estado, `${str} registrado com sucesso.`)

    axios.put(`${API_URL}/models/editar`, {
        src: modelosbd[iModeloVar].src,
        likes: modelosbd[iModeloVar].likes,
        dislikes: modelosbd[iModeloVar].dislikes
    });
}

async function atualizarInteracoes(btn, array, estado, msg) {
    if (btn.classList.contains(iconOutlined)) {
        dadosUser[array].push(modelos[iModeloVar].src)
        modelos[iModeloVar][estado] = true
        alerta(msg)
    } else {
        var indice = dadosUser[array].indexOf(modelos[iModeloVar].src)
        dadosUser[array].splice(indice, 1)
        modelos[iModeloVar][estado] = false
    }

    const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
        [array]: dadosUser[array]
    })
    console.log(res.data.msg);
}



document.querySelector("#rotacao-p").addEventListener("click", rotacaoAutomatica)
rotacaoInput.addEventListener("click", rotacaoAutomatica)
function rotacaoAutomatica() {
    rotacaoInput.classList.toggle("active")
    if (rotacaoInput.classList.contains("active")) {
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



document.querySelector("#pixel-p").addEventListener("click", efeitoPixelado)
pixelInput.addEventListener("click", efeitoPixelado)
function efeitoPixelado() {
    pixelInput.classList.toggle("active")
    if (pixelInput.classList.contains("active")) {
        pixelateEffect = document.createElement("pixelate-effect")
        effectComposer.appendChild(pixelateEffect)
    } else {
        if (pixelateEffect) effectComposer.removeChild(pixelateEffect)
    }
}

document.querySelector("#glitch-p").addEventListener("click", efeitoGlitch)
glitchInput.addEventListener("click", efeitoGlitch)
function efeitoGlitch() {
    glitchInput.classList.toggle("active")
    if (glitchInput.classList.contains("active")) {
        glitchEffect = document.createElement("glitch-effect")
        effectComposer.appendChild(glitchEffect)
    } else {
        if (glitchEffect) effectComposer.removeChild(glitchEffect)
    }
}



document.querySelector("#outline-p").addEventListener("click", efeitoOutline)
outlineInput.addEventListener("click", efeitoOutline)
function efeitoOutline() {
    outlineInput.classList.toggle("active")
    if (outlineInput.classList.contains("active")) {
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
    pularTutorial.style.display = "flex"
    if (isCelular) {
        pularTutorial.innerHTML = "Pular tutorial <span class='material-symbols-rounded'>east</span>"
        pularTutorial.addEventListener("touchstart", pularTutorialf)
    } else {
        pularTutorial.innerHTML = "Pular tutorial (Enter) <span class='material-symbols-rounded'>east</span>"
        window.addEventListener("keydown", function (event) { if (event.key === 'Enter' && tutorialBotoesDiv.style.display != "none") pularTutorialf() })
    }
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
            /*
            inputAlturaDiv.style.zIndex = 10
            setTimeout(() => {
                quantidadeMoedas3dDiv.style.transitionDuration = "0s"
                quantidadeMoedas3dDiv.style.zIndex = 1001
                quantidadeMoedas3dDiv.style.opacity = 1
            }, 1);
            tutorialBotoesContentP.innerHTML = "Aqui mostra quantas moedas 3D você tem."
            tutorialBotoesContentP.innerHTML += isCelular ? " Toque" : " Passe o mouse por cima"
            tutorialBotoesContentP.innerHTML += " para vê-lo. <br> Dica: Cada modelo tem 1 moeda escondida. Tente encontrá-la! <br> (Clique)"
*/
            break
        case 5:
            /*
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
            if (!tutorialDescricaoDiv.classList.contains("active")) abrirFecharTutorial()
                */
            break
        case 6:
            if (tutorialDescricaoDiv.classList.contains("active")) abrirFecharTutorial()
            tutorialBotoesContentP.innerHTML = "Aqui você pode ver todos os modelos disponíveis (e extras para desbloquear) <br> (Clique)"
            if (!divMenu.classList.contains("active")) abrirFecharMenu()

            break
        case 7:

            if (divMenu.classList.contains("active")) abrirFecharMenu()
            tutorialBotoesDiv.style.display = "none"
            pularTutorial.style.display = "none"
            animacoesContainer.style.pointerEvents = "all"
            audiosContainer.style.pointerEvents = "all"
            inputAlturaDiv.style.pointerEvents = "all"
            setTimeout(() => {
                logomwdEl.style.display = "block"
                setTimeout(() => logomwdEl.style.opacity = 1, 100)
            }, 500);


            break
    }
}

tutorialBotoesDiv.addEventListener("click", tutorialBotoesDivf)
function tutorialBotoesDivf() {
    tutorialBotoesDiv.removeEventListener("click", tutorialBotoesDivf)
    passoTutorial++
    tutorialBotoes()
    setTimeout(() => {
        tutorialBotoesDiv.addEventListener("click", tutorialBotoesDivf)
    }, 1000);
}

function pularTutorialf() {
    if (animacoesAberto) abaAnimacoes()
    animacoesContainer.style.zIndex = 10
    if (audiosAberto) abaAudios()
    audiosContainer.style.zIndex = 10
    inputAlturaDiv.style.zIndex = 10
    /*
    quantidadeMoedas3dDiv.style.zIndex = 1
    quantidadeMoedas3dDiv.style.opacity = 0
    quantidadeMoedas3dDiv.style.transitionDuration = "1s"
    if (isCelular) {
        quantidadeMoedas3dDiv.addEventListener("touchstart", quantidadeMoedas3d)
    } else {
        quantidadeMoedas3dDiv.addEventListener("mouseover", quantidadeMoedas3d)
    }
        */
    if (tutorialDescricaoDiv.classList.contains("active")) abrirFecharTutorial()

    passoTutorial = 7
    tutorialBotoes()
}







// fnaf info

fnafffpsDownload.addEventListener("click", function () {
    //window.open("https://drive.usercontent.google.com/download?id=16GOgIIRxcUjrlW8nLoW0OVx0ew46awrn&export=download&authuser=1", "_blank")
    window.open("https://github.com/mwd-oficial/fnaf3d/releases/download/v1.0/fnafffps.exe", "_blank")
    exitFullscreen()
})
fnafwDownload.addEventListener("click", function () {
    //window.open("https://drive.usercontent.google.com/download?id=1JzAI8b2ns_pbWy2RYcvPdkmh4v-SzdZw&export=download&authuser=1", "_blank")
    window.open("https://github.com/mwd-oficial/fnaf3d/releases/download/v1.0/fnafw.exe", "_blank")
    exitFullscreen()
})
fnafsbSteam.addEventListener("click", function () {
    window.open("https://store.steampowered.com/app/747660/Five_Nights_at_Freddys_Security_Breach/", "_blank")
    exitFullscreen()
})
fnafsbrSteam.addEventListener("click", function () {
    window.open("https://store.steampowered.com/app/1924720/Five_Nights_at_Freddys_Security_Breach__Ruin/", "_blank")
    exitFullscreen()
})
fnafFilme.addEventListener("click", function () {
    window.open("https://www.primevideo.com/-/pt/detail/Five-Nights-At-Freddy%E2%80%99s---O-Pesadelo-Sem-Fim/0Q0EVJG1I85A6J5704EGLVAT54", "_blank")
    exitFullscreen()
})
document.querySelector("#ucn-download-div").addEventListener("click", function () {
    //window.open("https://drive.usercontent.google.com/download?id=1cuc8Z7HOvG5d6Tdsz0R89wZkUcgsVCaa&export=download&authuser=0", "_blank")
    window.open("https://github.com/mwd-oficial/fnaf3d/releases/download/v1.0/fnafucn.exe", "_blank")
    exitFullscreen()
})

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

            iNomeFnaf = 1
            configurarFnafInfo(iNomeFnaf)

            break
        case "2":


            iNomeFnaf = 2
            configurarFnafInfo(iNomeFnaf)

            break
        case "3":


            iNomeFnaf = 3
            configurarFnafInfo(iNomeFnaf)

            break
        case "4":


            iNomeFnaf = 4
            configurarFnafInfo(iNomeFnaf)

            break
        case "sl":


            iNomeFnaf = 5
            configurarFnafInfo(iNomeFnaf)

            break
        case "ffps":


            iNomeFnaf = 6
            configurarFnafInfo(iNomeFnaf)

            break
        case "sb":


            iNomeFnaf = 7
            configurarFnafInfo(iNomeFnaf)

            break
        case "sbr":


            iNomeFnaf = 8
            configurarFnafInfo(iNomeFnaf)

            break
        case "w":


            iNomeFnaf = 9
            configurarFnafInfo(iNomeFnaf)

            break
        case "exc":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 10

            break
        case "ex1":

            iNomeFnaf = 11
            configurarFnafInfo(iNomeFnaf)

            break
        case "ex2":

            iNomeFnaf = 12
            configurarFnafInfo(iNomeFnaf)

            break
        case "ex3":

            iNomeFnaf = 13
            configurarFnafInfo(iNomeFnaf)

            break
        case "ex4":

            iNomeFnaf = 14
            configurarFnafInfo(iNomeFnaf)

            break
        case "exsl":

            iNomeFnaf = 15
            configurarFnafInfo(iNomeFnaf)

            break
        case "exffps":

            iNomeFnaf = 16
            configurarFnafInfo(iNomeFnaf)

            break
        case "exsb":

            iNomeFnaf = 17
            configurarFnafInfo(iNomeFnaf)

            break
        case "exsbr":

            iNomeFnaf = 18
            configurarFnafInfo(iNomeFnaf)

            break
        case "exw":

            iNomeFnaf = 19
            configurarFnafInfo(iNomeFnaf)

            break
        case "exo":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 21

            break
        case "exd":

            fnafInfoImgDiv.style.display = "none"
            iNomeFnaf = 22

            break
        case "exf":

            nomeFnafInfo.innerHTML = "Five Nights At Freddy's: O Pesadelo Sem Fim"
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafexfInfo
            trailer.src = "assets/videos/trailer-filme.mp4"
            trailer.poster = "assets/images/extras/trailer.webp"
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
    window.open(`jogos/fnaf${modelos[iModeloVar].fnaf}/fnaf${modelos[iModeloVar].fnaf}.html`, "_blank")
})

function configurarFnafInfo(i) {
    switch (i) {
        case 1:
        case 11:
            nomeFnafInfo.innerHTML = nomeFnaf[1].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf1Info
            trailer.src = "assets/videos/fnaf1/trailer.mp4"
            trailer.poster = "assets/images/fnaf1/trailer.webp"
            fnafImg.src = "assets/images/fnaf1/fnaf1.webp"
            jogarFnaf.style.display = "flex"
            break
        case 2:
        case 12:
            nomeFnafInfo.innerHTML = nomeFnaf[2].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf2Info
            trailer.src = "assets/videos/fnaf2/trailer.mp4"
            trailer.poster = "assets/images/fnaf2/trailer.webp"
            fnafImg.src = "assets/images/fnaf2/fnaf2.webp"
            jogarFnaf.style.display = "flex"
            break
        case 3:
        case 13:
            nomeFnafInfo.innerHTML = nomeFnaf[3].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf3Info
            trailer.src = "assets/videos/fnaf3/trailer.mp4"
            trailer.poster = "assets/images/fnaf3/trailer.webp"
            fnafImg.src = "assets/images/fnaf3/fnaf3.webp"
            jogarFnaf.style.display = "flex"
            break
        case 4:
        case 14:
            nomeFnafInfo.innerHTML = nomeFnaf[4].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnaf4Info
            trailer.src = "assets/videos/fnaf4/trailer.mp4"
            trailer.poster = "assets/images/fnaf4/trailer.webp"
            fnafImg.src = "assets/images/fnaf4/fnaf4.webp"
            jogarFnaf.style.display = "flex"
            break
        case 5:
        case 15:
            nomeFnafInfo.innerHTML = nomeFnaf[5].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafslInfo
            trailer.src = "assets/videos/fnafsl/trailer.mp4"
            trailer.poster = "assets/images/fnafsl/trailer.webp"
            fnafImg.src = "assets/images/fnafsl/fnafsl.webp"
            jogarFnaf.style.display = "flex"
            break
        case 6:
        case 16:
            nomeFnafInfo.innerHTML = nomeFnaf[6].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafffpsInfo
            trailer.src = "assets/videos/fnafffps/trailer.mp4"
            trailer.poster = "assets/images/fnafffps/trailer.webp"
            fnafImg.src = "assets/images/fnafffps/fnafffps.webp"
            if (isCelular) {
                downloadP.style.display = "block"
            } else {
                fnafffpsDownload.style.display = "flex"
            }
            break
        case 7:
        case 17:
            nomeFnafInfo.innerHTML = nomeFnaf[7].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafsbInfo
            trailer.src = "assets/videos/fnafsb/trailer.mp4"
            trailer.poster = "assets/images/fnafsb/trailer.webp"
            fnafImg.src = "assets/images/fnafsb/fnafsb.webp"
            fnafsbSteam.style.display = "flex"
            break
        case 8:
        case 18:
            nomeFnafInfo.innerHTML = nomeFnaf[8].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafsbrInfo
            trailer.src = "assets/videos/fnafsbr/trailer.mp4"
            trailer.poster = "assets/images/fnafsbr/trailer.webp"
            fnafImg.src = "assets/images/fnafsbr/fnafsbr.webp"
            fnafsbrSteam.style.display = "flex"
            break
        case 9:
        case 19:
            nomeFnafInfo.innerHTML = nomeFnaf[9].innerHTML
            textoFnafInfo.style.display = "flex"
            texto.innerHTML = fnafwInfo
            trailer.src = "assets/videos/fnafw/trailer.mp4"
            trailer.poster = "assets/images/fnafw/trailer.webp"
            fnafImg.src = "assets/images/fnafw/fnafw.webp"
            if (isCelular) {
                downloadP.style.display = "block"
            } else {
                fnafwDownload.style.display = "flex"
            }
            break
    }
}















// Moeda 3D
function gerarMoeda3d() {
    moeda3dImg.style.display = "block"
    moeda3dImg.style.top = ((Math.random() * window.innerHeight)) + "px"
    moeda3dImg.style.left = ((Math.random() * window.innerWidth)) + "px"
}

moeda3dImg.addEventListener("click", cliqueMoeda)
async function cliqueMoeda() {
    if (!logado) {
        alerta("Faça login para coletar moedas 3D.");
        return;
    }
    moeda3dImg.style.display = "none"
    document.querySelector("#moeda-3d-audio").play()

    //quantidadeMoedas3dDiv.style.opacity = 1
    //setTimeout(() => quantidadeMoedas3dDiv.style.opacity = 0, 5000);

    ++dadosUser.moedas3d

    if (!verificaPraComprar()) alerta("+1&nbsp;<img src='assets/images/extras/pra-comprar/moeda-3d/0.webp'>")

    const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
        moedas3d: dadosUser.moedas3d
    })
    console.log(res.data.msg);
}

async function verificaPraComprar() {
    for (let iPraComprar = 0; iPraComprar < praComprar.length; iPraComprar++) {
        let praComprarEl = praComprar[iPraComprar];
        if (dadosUser.moedas3d == valor[iPraComprar].innerHTML) {
            praComprarEl.classList.remove("bloqueado")
            dadosUser.comprados.push(modelosExtras[iPraComprar].src)

            extraDesbloqueado.classList.remove("dourado")
            setTimeout(() => {
                extraDesbloqueado.style.display = "flex"
                setTimeout(() => extraDesbloqueado.style.opacity = 1, 125);
                alerta("Novo Extra Desbloqueado!")
                extraDesbloqueadoImg.src = modelosExtras[iPraComprar].srcImg + "0.webp"
                extraDesbloqueadoP.innerHTML = modelosExtras[iPraComprar].nome
            }, 1);

            aparecerConfete()

            const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                comprados: dadosUser.comprados
            })
            console.log(res.data.msg);
            return true
        }
    }
    return false
}

fecharExtraDesbloqueado.addEventListener("click", function () {
    extraDesbloqueado.style.opacity = 0
    setTimeout(() => extraDesbloqueado.style.display = "none", 125);
    if (extraDesbloqueado.contains(confete)) extraDesbloqueado.removeChild(confete)
    setTimeout(async () => {
        if ((dadosUser.comprados.length + dadosUser.encontrados.length + dadosUser.douradosEncontrados.length) == modelosExtras.length) {

            dadosUser.ucnDesbloqueado = true
            ucnBtn.style.display = "flex"

            alerta("Parabéns! Você desbloqueou o FNaF UCN!")

            confete = document.createElement("img")
            confete.src = "assets/images/confete.webp"
            confete.id = "confete"
            ucnInfoImgDiv.appendChild(confete)
            document.querySelector("#criancas-gritando").play()
            timeoutConfete = setTimeout(() => {
                ucnInfoImgDiv.removeChild(confete)
            }, 4000);

            if (jogosBtn.classList.contains("active")) imgJogos.style.height = "465px"

            aparecerUcnInfo()

            const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                ucnDesbloqueado: dadosUser.ucnDesbloqueado
            })
            console.log(res.data.msg);
        }
    }, 1);
})

function aparecerConfete() {
    confete = document.createElement("img")
    confete.src = "assets/images/confete.webp"
    confete.id = "confete"
    extraDesbloqueado.appendChild(confete)
    document.querySelector("#criancas-gritando").play()
    timeoutConfete = setTimeout(() => {
        if (extraDesbloqueado.contains(confete)) extraDesbloqueado.removeChild(confete)
    }, 4000);
}

async function sortearPraEncontrar() {
    numSort = Math.floor(Math.random() * praEncontrar.length);
    if (dadosUser.encontrados.indexOf(numSort) == -1) {
        if (dadosUser.encontrados.length < praEncontrar.length) {
            dadosUser.encontrados.push(modelosExtras[numSort + praComprar.length].src);
            praEncontrarf(numSort)
            const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                encontrados: dadosUser.encontrados
            })
            console.log(res.data.msg);
        }
    } else {
        if (dadosUser.encontrados.length < praEncontrar.length) {
            sortearPraEncontrar()
        }
    }
    console.log(dadosUser.encontrados);
}

function praEncontrarf(iPraEncontrar) {
    praEncontrar[iPraEncontrar].classList.remove("bloqueado")
    iModeloExtra = iPraEncontrar + (praComprar.length)

    extraDesbloqueado.classList.remove("dourado")
    setTimeout(() => {
        extraDesbloqueado.style.display = "flex"
        setTimeout(() => extraDesbloqueado.style.opacity = 1, 125);
        alerta("Novo Extra Desbloqueado!")
        extraDesbloqueadoImg.src = modelosExtras[iModeloExtra].srcImg + "0.webp"
        extraDesbloqueadoP.innerHTML = modelosExtras[iModeloExtra].nome
    }, 1);

    document.querySelectorAll(".pra-encontrar img")[iPraEncontrar].src = modelosExtras[iModeloExtra].srcImg + "0.webp"
    document.querySelectorAll(".pra-encontrar ~ p")[iPraEncontrar].innerHTML = modelosExtras[iModeloExtra].nome

    aparecerConfete()
}

function sortearPraEncontrarDourado() {
    dadosUser.botoesDourados.forEach((el, i) => {
        if (modelos[iModeloVar].src == el.src) {
            if (!el.desativado) {
                botaoDourado.classList.add("desativado")
                el.desativado = true
                axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                    botoesDourados: dadosUser.botoesDourados
                })
            }
        }
    })
    numSort = Math.floor(Math.random() * praEncontrarDourado.length);
    if (dadosUser.douradosEncontrados.indexOf(numSort) == -1) {
        if (dadosUser.douradosEncontrados.length < praEncontrarDourado.length) {
            dadosUser.douradosEncontrados.push(modelosExtras[numSort + praComprar.length + praEncontrar.length].src);
            praEncontrarDouradof(numSort)
            axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                douradosEncontrados: dadosUser.douradosEncontrados
            })
        }
    } else {
        if (dadosUser.douradosEncontrados.length < praEncontrarDourado.length) {
            sortearPraEncontrarDourado()
        }
    }
    console.log(dadosUser.douradosEncontrados);
}

function praEncontrarDouradof(iPraEncontrarDourado) {
    praEncontrarDourado[iPraEncontrarDourado].classList.remove("bloqueado")
    iModeloExtra = iPraEncontrarDourado + (praComprar.length + praEncontrar.length)

    extraDesbloqueado.classList.add("dourado")
    extraDesbloqueado.style.display = "flex"
    setTimeout(() => extraDesbloqueado.style.opacity = 1, 125);
    alerta("Novo Extra Dourado Desbloqueado!")
    extraDesbloqueadoImg.src = modelosExtras[iModeloExtra].srcImg + "0.webp"
    extraDesbloqueadoP.innerHTML = modelosExtras[iModeloExtra].nome

    document.querySelectorAll(".pra-encontrar-dourado img")[iPraEncontrarDourado].src = modelosExtras[iModeloExtra].srcImg + "0.webp"
    document.querySelectorAll(".pra-encontrar-dourado ~ p")[iPraEncontrarDourado].innerHTML = modelosExtras[iModeloExtra].nome

    aparecerConfete()
}



function aparecerUcnInfo() {
    ucnInfoImgDiv.style.display = "flex"
    setTimeout(() => ucnInfoImgDiv.style.opacity = 1, 125);
    if (isCelular) {
        document.querySelector("#ucn-info-div>p").style.display = "block"
    } else {
        document.querySelector("#ucn-download-div").style.display = "flex"
    }
}

document.querySelector("#fechar-ucn-info-btn").addEventListener("click", () => {
    ucnInfoImgDiv.style.opacity = 0
    setTimeout(() => ucnInfoImgDiv.style.display = "none", 125);
})


document.querySelector("#ainda-nao-visto-div").addEventListener("click", checkarAindaNaoVisto)

function checkarAindaNaoVisto() {
    if (aindaNaoVistoInput.classList.contains("active")) {
        aindaNaoVistoInput.classList.remove("active")
    } else {
        aindaNaoVistoInput.classList.add("active")
    }
    atualizarVistos()
}

function atualizarVistos() {
    if (aindaNaoVistoInput.classList.contains("active")) {
        modelos.forEach((modelo, i) => {
            dadosUser.vistos.forEach(visto => {
                if (modelo.src == visto) {
                    var img = btnModelosImg[i];
                    var brilhoOriginal = parseFloat(img.getAttribute('data-original-brightness')) || 1;
                    var novoBrilho = brilhoOriginal - 3 * brilhoOriginal / 4; // Ajusta o brilho proporcionalmente
                    img.style.filter = `brightness(${novoBrilho})`;
                }
            })
        });
    } else {
        modelos.forEach((modelo, i) => {
            dadosUser.vistos.forEach(visto => {
                if (modelo.src == visto) {
                    var img = btnModelosImg[i];
                    var brilhoOriginal = parseFloat(img.getAttribute('data-original-brightness')) || 1;
                    img.style.filter = `brightness(${brilhoOriginal})`; // Restaura o brilho original
                }
            })
        });
    }
}



function scrollPesquisaNaoVisto() {
    if (document.querySelector("#div-scroll").getBoundingClientRect().top <= 75) {
        pesquisaNaoVistoDiv.style.opacity = 1;
        pesquisaNaoVistoDiv.style.pointerEvents = "all"
        irTopoDiv.style.opacity = 1
        irTopoDiv.style.pointerEvents = "all"
    } else {
        pesquisaNaoVistoDiv.style.opacity = 0;
        pesquisaNaoVistoDiv.style.pointerEvents = "none"
        pesquisaInput.blur()
        irTopoDiv.style.opacity = 0
        irTopoDiv.style.pointerEvents = "none"
    }
}


modelosDivP.forEach(nome => {
    if (nome.innerText.length > maiorLength) {
        maiorLength = nome.innerText.length
        console.log("Maior length: " + nome.innerText)
    }
})

function ajustarAltura() {
    modelosDiv.forEach(div => { if (div.offsetHeight > maiorHeight) maiorHeight = div.offsetHeight })
    modelosDiv.forEach(div => { div.style.minHeight = `${maiorHeight}px` })
}

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
        pesquisaInput.style.paddingLeft = "15px"
        pesquisaInput.style.border = "3px solid #333"
    }
})

function fecharPesquisa() {
    pesquisaInput.classList.remove("active")
    pesquisaInput.style.width = "0px"
    pesquisaInput.style.paddingRight = "0px"
    pesquisaInput.style.paddingLeft = "30px"
    pesquisaInput.style.border = "0px solid #0000"
    pesquisaInput.value = ""
    pesquisa()
    if (pesquisaInput.value == "") menuContent.scrollTo(0, posicaoScroll);
}

var posicaoScroll = 0;
menuContent.addEventListener("scroll", function () {
    posicaoScroll = menuContent.scrollY || menuContent.scrollTop;
});

pesquisaInput.addEventListener("blur", function () {
    if (isCelular) exitFullscreen()
})

pesquisaInput.addEventListener("input", pesquisa)
function pesquisa() {
    menuContent.scrollTo(0, 630)
    var valor = pesquisaInput.value
    modelosDiv.forEach(btn => btn.style.display = "none")
    nomeFnaf.forEach(nome => nome.style.display = "none")
    nenhumResul.style.display = "block"
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


function menuJogosf() {
    for (let i = 0; i < srcJogos.length; i++) {
        menuJogosImg[i].addEventListener("click", function () {
            window.open(srcJogos[i], "_blank")
        })
    }
}
menuJogosf()

jogosBtn.addEventListener("click", abaJogos)
function abaJogos() {
    if (jogosBtn.classList.contains("active")) {
        jogosBtn.classList.remove("active")
        imgJogos.style.border = "0px solid #333"
        if (isCelular) {
            imgJogos.style.width = "0px"
        } else {
            imgJogos.style.height = "0px"
        }
    } else {
        jogosBtn.classList.add("active")
        imgJogos.style.border = "3px solid #333"
        if (isCelular) {
            imgJogos.style.width = dadosUser.ucnDesbloqueado ? "465px" : "420px"
        } else {
            imgJogos.style.height = dadosUser.ucnDesbloqueado ? "465px" : "420px"
        }
    }
}



myUserBtn.addEventListener("click", function () {
    userDiv.style.display = "flex"
    telaDadosUser.style.opacity = 0;
    telaConfigUser.style.opacity = 0
    document.querySelectorAll(".btns-menu-user").forEach(btn => btn.style.pointerEvents = "none")
    setTimeout(() => {
        userDiv.style.opacity = 1
        if (logado) {
            irTelaDadosUser(dadosUser.username)
        } else {
            irTelaDadosUser()
        }
    }, 250);
})

document.querySelector("#fechar-user-div").addEventListener("click", function () {
    userDiv.style.opacity = 0
    if (isCelular && focusInput) exitFullscreen()
    focusInput = false
    if (!dadosUser.imagemId) semFoto = true
setTimeout(() => userDiv.style.display = "none", 250);
})