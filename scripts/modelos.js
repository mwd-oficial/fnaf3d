// Modelos

btnModelos.forEach((modelo, iModelo) => {
    modelo.addEventListener("click", () => {
        if (!modelo.classList.contains("active") && !modelo.classList.contains("bloqueado")) {
            cliqueModelo(modelo, iModelo)
            rotacaoAutomatica()
            efeitoPixelado()
            efeitoGlitch()
            efeitoOutline()
        }
    })
})

function cliqueModelo(modelo, iModelo) {
    for (let i = 0; i < btnModelos.length; i++) {
        btnModelos[i].classList.remove("active")
    }
    modelo.classList.add("active")
    setTimeout(() => {
        divMenu.style.display = "none"
        btnMenu.style.display = "none"
    }, 1000);
    defineModelo(iModelo)

    rotacaoInput.checked = false
    velocidadeInput.value = 0


    pixelInput.checked = false


    glitchInput.checked = false


    outlineInput.checked = false
    suavizacaoInput.value = 0
    intensidadeInput.value = 0
    corInput.value = "#ffffff"

    document.querySelectorAll(".tela-modelos-especiais").forEach((audio) => {
        audio.volume = 0.25
    })
    if (modelos[iModelo].fnaf == "ffps" || modelos[iModelo].fnaf == "sb" || modelos[iModelo].fnaf == "sbr" || modelos[iModelo].fnaf == "w") {
        telaModelosAudio.pause()
    } else {
        if (telaModelosAudio.paused) {
            document.querySelectorAll(".tela-modelos-especiais").forEach((audio) => {
                audio.pause()
                audio.currentTime = "0"
            })
            telaModelosAudio.currentTime = "0"
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
            }
            break
        case "sb":
            if (telaModelosSb.paused) {
                telaModelosSb.currentTime = 0
                telaModelosSb.play()
                telaModelosFfps.pause()
                telaModelosSbr.pause()
                telaModelosW.pause()
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
            }
            break
        case "w":
            if (telaModelosW.paused) {
                telaModelosW.currentTime = 0
                telaModelosW.play()
                telaModelosFfps.pause()
                telaModelosSb.pause()
                telaModelosSbr.pause()
            }
            break
    }

}

function defineModelo(iModelo) {
    modelViewer.src = modelos[iModelo].src
    document.body.style.backgroundImage = modelos[iModelo].corFundo
    modelViewer.maxCameraOrbit = modelos[iModelo].orbitaCameraMaxima
    modelViewer.minCameraOrbit = modelos[iModelo].orbitaCameraMinima

    // Reseta a orbita da câmera e a rotação para a posição inicial
    modelViewer.cameraOrbit = modelViewer.getCameraOrbit()
    modelViewer.resetTurntableRotation(0)

    telaCarregamento.style.display = "flex"
    nomeModelo.style.display = "none"
    inputAlturaDiv.style.display = "none"
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
    tutorialDescricaoDiv.style.display = "none"

    iModeloVar = iModelo
    modelViewer.removeEventListener("load", carregarModeloEvento)
    modelViewer.addEventListener("load", carregarModeloEvento)

    if (divMenu.classList.contains("active")) abrirFecharMenu()
    if (tutorialDescricaoDiv.classList.contains("active")) abrirFecharTutorial()
}

function carregarModeloEvento() {
    carregarModelo(iModeloVar)
}

function carregarModelo(iModelo) {

    console.log(modelViewer.availableAnimations);

    desConfigEx()
    if (modelos[iModelo].temConfigEx) modelos[iModelo].configEx()

    document.querySelector("#nome-descricao-modelo").innerHTML = modelosDivP[iModelo].innerHTML
    descricaoModelo.innerHTML = modelos[iModelo].descricao
    setTimeout(() => {
        if ("botaoDouradoDesativado" in modelos[iModeloVar]) {
            if (modelos[iModeloVar].botaoDouradoDesativado) {
                document.querySelector("#botao-dourado").classList.add("desativado")
            } else {
                document.querySelector("#botao-dourado").classList.remove("desativado")
            }
        }
    }, 10);

    if (modelos[iModelo].mudaOrbitaCamera) {
        modelViewer.cameraOrbit = modelos[iModelo].orbitaCamera;
    } else {
        modelViewer.cameraOrbit = "auto auto auto"
    }

    setTimeout(() => {
        if (!tutorialVisto) {
            tutorialVisto = true
            localStorage.setItem('tutorialVisto', JSON.stringify(tutorialVisto))
            setTimeout(() => {
                tutorialBotoes()
            }, 1000);
        } else {
            animacoesContainer.style.pointerEvents = "all"
            audiosContainer.style.pointerEvents = "all"
            inputAlturaDiv.style.pointerEvents = "all"
        }

        divMenu.style.display = "flex"
        btnMenu.style.display = "flex"

        telaCarregamento.style.display = "none"
        nomeModelo.innerHTML = modelosDivP[iModelo].innerHTML
        nomeModelo.style.display = "block"

        tutorialDescricaoBtn.style.display = "flex"
        tutorialDescricaoDiv.style.display = "flex"

        if (modelos[iModelo].temAltura) {
            inputAlturaDiv.style.display = "flex"
        }
        animacoesContainer.style.display = "block"
        audiosContainer.style.display = "flex"

        if (modelos[iModelo].temAnimacao) {
            comecarAnimacao(iModelo, 0) // Animação posição inicial
            semAnimacoes.style.display = "none"
        } else {
            semAnimacoes.style.display = "block"
        }

        if (modelos[iModelo].temAudio) {
            semAudios.style.display = "none"
        } else {
            semAudios.style.display = "block"
        }

        fnafInfo(iModelo)
        gerarMoeda3d()

        // Faz a animação de aparecer os conteiners abertos e serem fechados após 0.5 segundos, toda vez que um modelo for clicado
        animacoesAberto = true
        audiosAberto = true
        setTimeout(() => {
            abaAnimacoes()
            abaAudios()
        }, 500);
    }, 2000);

    if (modelos[iModelo].temAnimacao) {
        animacoesKeys = Object.keys(modelos[iModelo].animacoes); // Pega todos os objetos dentro de .animacoes
        animacoesKeys.forEach((animacao) => {
            animacoesBtn = document.createElement("div");
            animacoesBtn.classList.add("animacoes-btn");
            animacoesDiv.insertBefore(animacoesBtn, animacoesRangeDiv);
            animacoesBtn.innerHTML = modelos[iModelo].animacoes[animacao].nome;
            document.querySelectorAll(".animacoes-btn")[0].classList.add("active")

            document.querySelectorAll(".animacoes-btn").forEach((btn, iAnimacao) => {
                btn.addEventListener("click", function () {
                    if (!this.classList.contains("active")) {
                        document.querySelectorAll(".animacoes-btn").forEach((btn) => {
                            btn.classList.remove("active")
                        })
                        this.classList.add("active")
                        comecarAnimacao(iModelo, iAnimacao)
                        setTimeout(() => {
                            defineAltura(iModelo)
                        }, 1);
                    }
                })
            })
        })
    } else {
        modelViewer.cameraTarget = modelos[iModelo].alvoCamera
        setTimeout(() => {
            defineAltura(iModelo)
        }, 1);
    }

    if (modelos[iModelo].temAudio) {
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
}

// Desfaz as alterações feiras com configEx()
function desConfigEx() {
    modelViewer.exposure = 1
    modelViewer.style.filter = "none"
    modelViewer.style.mixBlendMode = "normal"
}

function defineAltura(iModelo) {
    inputAltura.max = modelos[iModelo].alturaMaxima
    inputAltura.min = modelos[iModelo].alturaMinima
    inputAltura.value = (modelos[iModelo].alturaMaxima + modelos[iModelo].alturaMinima) / 2
    alvoX = Number(modelViewer.getCameraTarget().x)
    alvoY = Number(modelViewer.getCameraTarget().y)
    alvoZ = Number(modelViewer.getCameraTarget().z)
}

inputAltura.addEventListener("input", function () {
    modelViewer.cameraTarget = `${alvoX}m ${alvoY + Number(this.value)}m ${alvoZ}m`
})

