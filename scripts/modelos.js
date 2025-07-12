// Modelos

btnModelos.forEach((modelo, iModelo) => {
    if (!isCelular) modelo.classList.add("efeito-hover")
    modelo.onmouseover = () => pointarCursor(modelo)
    modelo.addEventListener("click", () => {
        if (!modelo.classList.contains("active") && !modelo.classList.contains("bloqueado")) {
            cliqueModelo(modelo, iModelo)
            modelo.style.pointerEvents = "none"
            setTimeout(() => modelo.style.pointerEvents = "all", 2000)

            modelViewer.interactionPromptStyle = "wiggle"
            modelViewer.rotationPerSecond = "0deg"
            modelViewer.timeScale = 1
            if (pixelateEffect) {
                effectComposer.removeChild(pixelateEffect)
                pixelInput.classList.remove("active")
            }
            if (glitchEffect) {
                effectComposer.removeChild(glitchEffect)
                glitchInput.classList.remove("active")
            }
            if (outlineEffect) {
                effectComposer.removeChild(outlineEffect)
                outlineInput.classList.remove("active")
            }
        } else {
            if (modelo.classList.contains("active")) alerta("Você já está vendo esse modelo!")
            if (modelo.classList.contains("bloqueado")) alerta("Este modelo ainda está bloqueado")
        }
    })
})

// variável para ser limpada qundo o botão de voltar o carregamento for apertado
var timeoutMenu
function cliqueModelo(modelo, iModelo) {
    for (let i = 0; i < btnModelos.length; i++) {
        btnModelos[i].classList.remove("active")
    }
    modelo.classList.add("active")
    timeoutMenu = setTimeout(() => {
        divMenu.style.display = "none"
        btnMenu.style.display = "none"
    }, 1500);

    telaCarregamento.style.display = "flex"
    defineModelo(iModelo)

    velocidadeInput.value = 1
    document.querySelector("#velocidade-div span").innerHTML = "1"


    rotacaoInput.value = 0


    pixelInput.checked = false


    glitchInput.checked = false


    outlineInput.checked = false
    suavizacaoInput.value = 0
    intensidadeInput.value = 0
    corInput.value = "#ffffff"

    document.querySelectorAll(".tela-modelos-especiais").forEach((audio) => {
        audio.volume = 0.25
    })
    if (modelos[iModelo].fnaf == "ffps" || modelos[iModelo].fnaf == "sb" || modelos[iModelo].fnaf == "sbr" || modelos[iModelo].fnaf == "sotm" || modelos[iModelo].fnaf == "w") {
        telaModelosAudio.pause()
    } else {
        if (telaModelosAudio.paused) {
            document.querySelectorAll(".tela-modelos-especiais").forEach((audio) => {
                audio.pause()
                audio.currentTime = 0
            })
            telaModelosAudio.currentTime = 0
            sortearTelaModelosAudio()
        }
    }

    switch (modelos[iModelo].fnaf) {
        case "ffps":
            if (telaModelosFfps.paused) {
                telaModelosFfps.currentTime = 0
                telaModelosFfps.play()
                telaModelosSb.pause()
                telaModelosSbr.pause()
                telaModelosW.pause()
                telaModelosSotm.pause()
            }
            break
        case "sb":
            if (telaModelosSb.paused) {
                telaModelosSb.currentTime = 0
                telaModelosSb.play()
                telaModelosFfps.pause()
                telaModelosSbr.pause()
                telaModelosW.pause()
                telaModelosSotm.pause()
            }
            break
        case "sbr":
            if (telaModelosSbr.paused) {
                telaModelosSbr.currentTime = 0
                telaModelosSbr.volume = 0.125
                telaModelosSbr.play()
                telaModelosFfps.pause()
                telaModelosSb.pause()
                telaModelosW.pause()
                telaModelosSotm.pause()
            }
            break
        case "sotm":
            if (telaModelosSotm.paused) {
                telaModelosSotm.currentTime = 0
                telaModelosSotm.volume = 0.125
                telaModelosSotm.play()
                telaModelosFfps.pause()
                telaModelosSb.pause()
                telaModelosSbr.pause()
                telaModelosW.pause()
            }
            break
        case "w":
            if (telaModelosW.paused) {
                telaModelosW.currentTime = 0
                telaModelosW.play()
                telaModelosFfps.pause()
                telaModelosSb.pause()
                telaModelosSbr.pause()
                telaModelosSotm.pause()
            }
            break
    }

}

var timeoutVoltar
function defineModelo(iModelo) {
    modelViewer.src = modelos[iModelo].src
    document.body.style.backgroundImage = modelos[iModelo].corFundo
    modelViewer.maxCameraOrbit = modelos[iModelo].orbitaCameraMaxima
    modelViewer.minCameraOrbit = modelos[iModelo].orbitaCameraMinima

    switch (modelos[iModelo].fnaf) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "sl":
        case "ffps":
        case "sb":
        case "sbr":
        case "sotm":
            temSkybox = true
            break
        default:
            temSkybox = false
            break
    }

    // Reseta a orbita da câmera e a rotação para a posição inicial
    modelViewer.cameraOrbit = "-90deg 90deg 0"
    modelViewer.resetTurntableRotation()

    dicaP.style.opacity = 1
    nomeModelo.style.display = "none"
    animacoesContainer.style.display = "none"
    audiosContainer.style.display = "none"
    extraDesbloqueado.style.display = "none"

    document.querySelectorAll(".animacoes-btn").forEach((btn) => {
        animacoesDiv.removeChild(btn)
    })

    document.querySelectorAll(".audios-btn-p-range").forEach((btn) => {
        btn.style.display = "none"
    })

    audioModelo.pause()
    audioModelo.currentTime = 0


    document.querySelectorAll(".audios-btn-p").forEach((btn, iAudio) => {
        iconeAudios[iAudio].innerHTML = "volume_up"
        btn.classList.remove("active")
    })

    tutorialDescricaoBtn.style.display = "none"
    arBtn.style.display = "none"
    tutorialDescricaoDiv.style.display = "none"

    if (modelos[iModelo].temCursor) {
        cursorImg.src = modelos[iModelo].srcImg + "default.avif"
        document.body.style.cursor = `url(${modelos[iModelo].srcImg}default.avif), auto`
    } else {
        cursorImg.src = ""
        document.body.style.cursor = "default"
    }
    atualizarPointers()

    var encontrou = false
    dadosUser.vistos.forEach(visto => {
        if (visto == modelos[iModelo].src) encontrou = true
    })
    if (!encontrou) dadosUser.vistos.push(modelos[iModelo].src)
    if (aindaNaoVistoInput.classList.contains("active")) atualizarVistos()

    iModeloVar = iModelo

    if (temSkybox) {
        skyboxDiv.style.display = "flex"
        efeitoSkybox(true)
    } else {
        skyboxDiv.style.display = "none"
        efeitoSkybox(false)
    }

    progressoModeloInterval = setInterval(function () {
        if (progressBarModelo.value < 100) {
            progressBarModelo.value += 0.1
        } else {
            clearInterval(progressoModeloInterval);
        }
    }, 1);
    modelViewer.onload = carregarModeloEvento

    if (divMenu.classList.contains("active")) abrirFecharMenu()
    if (tutorialDescricaoDiv.classList.contains("active")) abrirFecharTutorial()
    timeoutVoltar = setTimeout(() => {
        voltarCarregamento.style.opacity = 1
        voltarCarregamento.style.pointerEvents = "all"
    }, 1500);
    if (logado) axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
        vistos: dadosUser.vistos
    })
}

function carregarModeloEvento() {
    progressBarModelo.value = 100
    setTimeout(() => {
        carregarModelo(iModeloVar)
    }, 100)
}

function carregarModelo(iModelo) {

    console.log(modelViewer.availableAnimations);

    desConfigEx()
    if (typeof modelos[iModelo].configEx === 'function') modelos[iModelo].configEx()

    nomeDescricaoModelo.innerHTML = modelosDivP[iModelo].innerText
    nomeDescricaoModeloCel.innerHTML = modelosDivP[iModelo].innerText
    descricaoModelo.innerHTML = modelos[iModelo].descricao
    // setTimeout(botaoDouradof, 1000);

    let rotacao = modelos[iModelo].rotacao ?? 0;
    modelViewer.resetTurntableRotation((-90 + rotacao) * (Math.PI / 180));



    setTimeout(() => {
        clearTimeout(timeoutMenu)
        telaCarregamento.style.display = "none"
        progressBarModelo.value = 0
        voltarCarregamento.style.opacity = 0
        voltarCarregamento.style.pointerEvents = "none"
        divMenu.style.display = "flex"
        btnMenu.style.display = "flex"

        marcarInteracao(favoritarBtn, "favoritado")
        marcarInteracao(likes.btn, "comLike")
        marcarInteracao(dislikes.btn, "comDislike")
        likes.qtdeEl.innerHTML = modelosbd[iModeloVar].likes
        dislikes.qtdeEl.innerHTML = modelosbd[iModeloVar].dislikes

        if (!tutorialVisto) {
            tutorialVisto = true
            tutorialBotoes()
        } else {
            animacoesContainer.style.pointerEvents = "all"
            audiosContainer.style.pointerEvents = "all"
        }
    }, 500);

    nomeModelo.innerHTML = modelosDivP[iModelo].innerText
    nomeModelo.style.display = "block"

    tutorialDescricaoBtn.style.display = "flex"
    arBtn.style.display = "flex"
    tutorialDescricaoDiv.style.display = "flex"

    animacoesContainer.style.display = "block"
    audiosContainer.style.display = "flex"

    if (modelos[iModelo].animacoes) {
        comecarAnimacao(iModelo, 0) // Animação posição inicial
        semAnimacoes.style.display = "none"
    } else {
        semAnimacoes.style.display = "block"
        animacoesRangeDiv.style.display = "none"
    }

    if (modelos[iModelo].audios) {
        semAudios.style.display = "none"
    } else {
        semAudios.style.display = "block"
    }


    imgDescricaoModelo.src = modelos[iModelo].srcImg + "0.avif"
    favoritarBtn.classList.remove(iconOutlined)
    favoritarBtn.classList.add(iconRounded)
    likes.btn.classList.remove(iconOutlined)
    likes.btn.classList.add(iconRounded)
    dislikes.btn.classList.remove(iconOutlined)
    dislikes.btn.classList.add(iconRounded)

    imagemCards.src = modelos[iModelo].srcImg + "cards.avif"
    swiperSlide = document.querySelectorAll(".swiper-slide")
    swiperSlide.forEach(slide => {
        slide.remove()
    })
    for (let i = 0; i < modelos[iModelo].swiperDescricao.length; i++) {
        novoSlide = document.createElement("div")
        novoSlide.classList.add("swiper-slide")
        novoSlide.classList.add("pointers")

        novaImg = document.createElement("img")
        novaImg.src = modelos[iModelo].srcImg + i + (modelos[iModelo].webps?.includes(i) ? ".webp" : ".avif")

        novaDescricao = document.createElement("div")
        novaDescricao.classList.add("swiper-descricao")
        novaDescricao.classList.add("ajustar-font-size")
        novaDescricao.innerHTML = modelos[iModelo].swiperDescricao[i]

        novoSlide.appendChild(novaImg)
        novoSlide.appendChild(novaDescricao)
        document.querySelector(".swiper-wrapper").appendChild(novoSlide)
    }
    swiperSlide = document.querySelectorAll(".swiper-slide")
    swiperDescricao = document.querySelectorAll(".swiper-descricao")
    swiperImg = document.querySelectorAll(".swiper-slide img")


    swiperSlide.forEach((slide, i) => {
        if (isCelular) {
            slide.onclick = () => botoes(i)
        } else {
            slide.onmouseenter = () => aparecerBotoesSlide(i)
            slide.onmouseleave = sumirBotoes
        }

        slide.onmouseover = () => pointarCursor(slide)
        if (isCelular) ajustarFontSize(swiperDescricao[i])
    })
    swiper.slideTo(0)




    if (modelos[iModelo].srcJumpscare) {
        h3Jumpscare.style.display = "block"
        jumpscareDivVideo.style.display = "flex"
        jumpscareVideo.src = modelos[iModelo].srcJumpscare
        jumpscareVideo.poster = modelos[iModelo].srcImg + "poster.avif"
    } else {
        h3Jumpscare.style.display = "none"
        jumpscareDivVideo.style.display = "none"
        jumpscareVideo.src = ""
        jumpscareVideo.poster = ""
    }



    fnafInfo(iModelo)
    gerarMoeda3d()


    if (modelos[iModelo].animacoes) {
        document.querySelector("#velocidade-h3").style.display = "block"
        document.querySelector("#velocidade-div").style.display = "flex"

        animacoesKeys = Object.keys(modelos[iModelo].animacoes); // Pega todos os objetos dentro de .animacoes
        animacoesKeys.forEach((animacao) => {
            animacoesBtn = document.createElement("div");
            animacoesBtn.classList.add("animacoes-btn");
            animacoesBtn.classList.add("pointers");
            animacoesDiv.insertBefore(animacoesBtn, animacoesRangeDiv);
            animacoesBtn.innerHTML = modelos[iModelo].animacoes[animacao].nome;
            document.querySelectorAll(".animacoes-btn")[0].classList.add("active")

            document.querySelectorAll(".animacoes-btn").forEach((btn, iAnimacao) => {
                if (!isCelular) btn.classList.add("efeito-hover")
                btn.onmouseover = () => pointarCursor(btn)
                btn.addEventListener("click", function () {
                    if (!this.classList.contains("active")) {
                        document.querySelectorAll(".animacoes-btn").forEach((btn) => {
                            btn.classList.remove("active")
                        })
                        this.classList.add("active")
                        comecarAnimacao(iModelo, iAnimacao)
                    }
                })
            })
        })
    } else {
        modelViewer.cameraTarget = modelos[iModelo].alvoCamera
        document.querySelector("#velocidade-h3").style.display = "none"
        document.querySelector("#velocidade-div").style.display = "none"

        setTimeout(() => {
            let target = modelViewer.getCameraTarget();
            if (target.x > 2 || target.z > 2) modelViewer.disablePan = true
            else modelViewer.disablePan = false

            let viuAlerta = false
            modelViewer.onpointerdown = (e) => {
                if (e.pointerType === 'mouse' && e.button === 2) {
                    if ((target.x > 2 || target.z > 2) && !viuAlerta) {
                        alerta("Não é possível mudar o ponto central desse modelo.")
                        viuAlerta = true
                    }
                }
            }
        }, 100);
    }

    if (modelos[iModelo].audios) {
        audiosKeys = Object.keys(modelos[iModelo].audios) // Pega todos os objetos dentro de .audios
        audiosKeys.forEach((audio, iAudio) => {
            audiosBtnPRange[iAudio].style.display = "flex"
            audiosBtnPP[iAudio].innerHTML = modelos[iModelo].audios[audio].nome;
        })
    }
    setTimeout(() => {
        if (modelos[iModelo].fnaf == "w") {
            clearInterval(animacaoWorld)
            animacaoWorldf()
        } else {
            clearInterval(animacaoWorld)
        }
    }, 100)

    animacoesAberto = true
    audiosAberto = true
    abaAnimacoes()
    abaAudios()

    setTimeout(() => {
        iModeloAntigo = iModelo
        voltarCarregamento.addEventListener("click", voltarCarregamentof)
    }, 2500);
}


function botoes(i) {
    if (estadoBotoes) {
        aparecerBotoesSlide(i)
    } else {
        sumirBotoes()
    }
}

function botaoDouradof() {
    botaoDourado.style.display = "none"
    dadosUser.botoesDourados.forEach((el) => {
        if (modelos[iModeloVar].src == el.src) {
            botaoDourado.style.display = "block"
            if (el.desativado) {
                botaoDourado.classList.add("desativado")
            } else {
                botaoDourado.classList.remove("desativado")
            }
        }
    })
}


function marcarInteracao(btn, estado) {
    if (modelos[iModeloVar][estado]) {
        setTimeout(() => {
            btn.classList.add(iconOutlined);
            btn.classList.remove(iconRounded);
        }, 500);
    } else {
        setTimeout(() => {
            btn.classList.add(iconRounded);
            btn.classList.remove(iconOutlined);
        }, 500);
    }

    setTimeout(() => {
        if (estado == "favoritado") {
            document.querySelector("#favoritar-span").innerHTML = btn.classList.contains(iconRounded) ? "Favoritar" : "Favoritado"
        }
    }, 600);
}



voltarCarregamento.addEventListener("click", voltarCarregamentof)
function voltarCarregamentof() {
    voltarCarregamento.removeEventListener("click", voltarCarregamentof)
    alerta("Voltando...")
    cliqueModelo(btnModelos[iModeloAntigo], iModeloAntigo)
    clearTimeout(timeoutMenu)
}

// Desfaz as alterações feiras com configEx()
function desConfigEx() {
    modelViewer.exposure = 1
    modelViewer.style.filter = "none"
    modelViewer.style.mixBlendMode = "normal"
    if (bloomEffect && effectComposer.contains(bloomEffect)) {
        effectComposer.removeChild(bloomEffect);
    }
}

