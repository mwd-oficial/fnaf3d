// TIRAR ISSO DEPOIS!!!!
/*
aviso.style.display = "none"
telaInicial.style.display = "flex"
document.querySelector("#conteudo").style.display = "block"
//document.querySelector("#tela-carregamento-site").style.display = "none"
telaCheia.style.display = "none"
divLogoBtn.style.display = "flex"
divLogoBtn.style.opacity = 1
tutorialVisto = true
*/
////////////////////////////////////

isCelular = (navigator.userAgentData !== undefined && navigator.userAgentData.mobile) || /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
//isCelular = true

// Ajusta width, height e font size para celular
if (isCelular) {
    nomeDescricaoModelo.style.display = "none"
    nomeDescricaoModeloCel.style.display = "block"
    document.querySelectorAll(".efeito-hover").forEach(btn => btn.classList.remove("efeito-hover"))

    document.querySelector("#tela-cheia > p").innerHTML = "Para uma melhor experiência, <br> toque para ativar a tela cheia"

    nomeModelo.style.width = "calc(100vw - 3* 65px)"

    userDiv.classList.add("celular")
    tutorialDescricaoContent.classList.add("celular")
    logomwdEl.classList.add("celular")
    audiosContainer.classList.add("celular")
    fnafInfoImgDiv.classList.add("celular")
    ucnInfoImgDiv.classList.add("celular")
    document.querySelector("#modelos").classList.add("celular")
    menuJogos.classList.add("celular")
    tutorialBotoesContentP.style.maxWidth = "95%"

    imgAlternativaDiv.classList.remove("naocelular")
    voltarCarregamento.classList.remove("naocelular")
    document.querySelector("#problemas-swiper-div").classList.remove("naocelular")

    fecharExtraDesbloqueado.style.fontSize = "50px"
    document.querySelector("#fechar-swiper-div-btn").style.fontSize = "50px"

    document.querySelector("#modelo-div").style.transform = "scale(1)"

    document.querySelector("#modelo-info-container").style.flexDirection = "column"
    document.querySelector("#modelo-info-div").style.width = "50%"

    document.querySelector("form").style.marginBottom = "35%"

    document.querySelector("#config-user-div").style.height = "calc(100% - 50px)"

    arBtn.style.opacity = 1

    document.querySelectorAll(".ajustar-width-50").forEach(function (el) {
        var widthAtual = parseFloat(window.getComputedStyle(el).width);
        var widthNovo = widthAtual * 0.5;
        el.style.width = widthNovo + 'px';
    });

    document.querySelectorAll(".ajustar-width-75").forEach(function (el) {
        var widthAtual = parseFloat(window.getComputedStyle(el).width);
        var widthNovo = widthAtual * 0.75;
        el.style.width = widthNovo + 'px';
    });

    document.querySelectorAll(".ajustar-height").forEach(function (el) {
        var heightAtual = parseFloat(window.getComputedStyle(el).height);
        var heightNovo = heightAtual * 0.75;
        el.style.height = heightNovo + 'px';
    });

    document.querySelectorAll(".ajustar-font-size").forEach(function (el) {
        ajustarFontSize(el)
    });
}

function ajustarFontSize(el) {
    var fontSizeAtual = parseFloat(window.getComputedStyle(el).fontSize);
    var fontSizeNovo = fontSizeAtual * 0.75;
    el.style.fontSize = fontSizeNovo + 'px';
}


// API tela cheia
function launchFullscreen(element) {
    telaCheia.style.display = "none"
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

function exitFullscreen() {
    telaCheia.style.display = "flex"
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
}

telaCheia.addEventListener("click", function () {
    // Ativar o modo de tela cheia para navegadores que suportam!
    launchFullscreen(document.documentElement); // a página inteira
    if (siteCarregado) {
        siteCarregado = false
        setTimeout(() => {
            aviso.style.opacity = 1
        }, 1);
    }
})

telaCarregamentoSite.addEventListener("click", function () {
    // Ativar o modo de tela cheia para navegadores que suportam!
    launchFullscreen(document.documentElement); // a página inteira
    telaCarregamentoSite.style.cursor = "default"
})

document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
        telaCheia.style.display = "none"
        despausarMidia()
    } else {
        telaCheia.style.display = "flex"
        telaCarregamentoSite.style.cursor = "pointer"
        if (!midiaPausada) {
            pausarMidia()
        }
    }
})


// Visibilidade da página
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        if (!midiaPausada) {
            pausarMidia()
        }
    } else {
        if (document.fullscreenElement) {
            despausarMidia()
        }
    }
})

window.addEventListener("resize", verificaOrientacao)
function verificaOrientacao() {
    var portrait = window.innerHeight > window.innerWidth
    if (ar) {
        if (!portrait) {
            telaViraPortrait.style.display = "flex"
        } else {
            telaViraPortrait.style.display = "none"
        }
        telaViraLandscape.style.display = "none"
    } else {
        if (portrait) {
            telaViraLandscape.style.display = "flex"
        } else {
            telaViraLandscape.style.display = "none"
        }
        telaViraPortrait.style.display = "none"
    }
}
verificaOrientacao()


function eventosVideo() {
    document.querySelectorAll("video").forEach((video) => {
        video.onplay = pausarAudios
        video.onpause = despausarAudios
        video.onended = despausarAudios
    })
}
eventosVideo()

function pausarMidia() {
    midiaPausada = true
    pausarAudios()
    videosRodando = []; // Limpa o array
    for (let i = 0; i < videoGeral.length; i++) {
        if (!videoGeral[i].paused) {
            videosRodando.push(i); // Armazena o índice do áudio que estava tocando
            videoGeral[i].pause();
        }
    }
}

function pausarAudios() {
    audiosTocando = []; // Limpa o array
    for (let i = 0; i < audioGeral.length; i++) {
        if (!audioGeral[i].paused) {
            audiosTocando.push(i); // Armazena o índice do áudio que estava tocando
            audioGeral[i].pause();
        }
    }
}

function despausarMidia() {
    midiaPausada = false
    despausarAudios()
    for (let i of videosRodando) {
        videoGeral[i].play()
    }
}

function despausarAudios() {
    for (let i of audiosTocando) {
        audioGeral[i].play()
    }
}

if (!isCelular) {
    var timeoutSumir = []
    videosUsuario.forEach((el, i) => {
        playPause[i].style.display = "flex"

        el.addEventListener("play", () => { playVideo(i) })
        el.addEventListener("pause", () => { pauseVideo(i) })

        divVideo[i].addEventListener("mousemove", () => { sumirPlayPause(i) })
        divVideo[i].addEventListener("mouseleave", () => { sumirPlayPauseLeave(i) })
    })

    function playVideo(i) {
        playPauseIcon[i].innerHTML = "pause"
        sumirPlayPause(i)
    }

    function pauseVideo(i) {
        playPauseIcon[i].innerHTML = "play_arrow"
        playPause[i].style.transitionDuration = ".5s"
        clearTimeout(timeoutSumir[i])
        setTimeout(() => { playPause[i].style.opacity = 0.75 }, 1);
    }

    function sumirPlayPause(i) {
        playPause[i].style.transitionDuration = ".05s"
        setTimeout(() => { playPause[i].style.opacity = 0.75 }, 1);
        clearTimeout(timeoutSumir[i])
        if (!videosUsuario[i].paused) {
            playPause[i].style.transitionDuration = ".5s"
            timeoutSumir[i] = setTimeout(() => { playPause[i].style.opacity = 0 }, 2500);
        }
    }

    function sumirPlayPauseLeave(i) {
        if (!videosUsuario[i].paused) {
            clearTimeout(timeoutSumir[i])
            playPause[i].style.transitionDuration = ".5s"
            timeoutSumir[i] = setTimeout(() => { playPause[i].style.opacity = 0 }, 1);
        }
    }
}


// Tirar o arrastar imagem com o cursor
for (let i = 0; i < imagemGeral.length; i++) {
    imagemGeral[i].onmousedown = function (e) {
        if (e.preventDefault) e.preventDefault();
        return false;
    }
}


fecharAbaCel.addEventListener("touchstart", function () {
    if (animacoesAberto) abaAnimacoes()
    if (audiosAberto) abaAudios()
    fecharAbaCel.style.display = "none"
})

var timeoutAlerta
function alerta(txt) {
    alertaDiv.innerHTML = txt

    alertaDiv.style.top = isCelular ? "25px" : "50px"
    alertaDiv.style.transform = "translateX(-50%) scale(1)"
    alertaDiv.style.opacity = 1

    clearTimeout(timeoutAlerta)

    timeoutAlerta = setTimeout(() => {
        alertaDiv.style.top = isCelular ? "-25px" : "-50px"
        alertaDiv.style.transform = "translateX(-50%) scale(0.75)"
        alertaDiv.style.opacity = 0
    }, 5000);
}



// Início do site



progressoInterval = setInterval(function () {
    if (progressBar.value < 100) {
        progressBar.value += 0.1
    } else {
        clearInterval(progressoInterval);
    }
}, 1);

window.addEventListener("load", function () {
    progressBar.value = 100
    setTimeout(() => {
        atualizarPointers()
        telaCarregamentoSite.style.display = "none"
        if (!document.fullscreenElement) {
            telaCheia.style.display = "flex"
        } else {
            if (siteCarregado) {
                siteCarregado = false
                setTimeout(() => {
                    aviso.style.opacity = 1
                }, 1);
            }
        }
    }, 100);
})

function atualizarPointers() {
    if (isCelular) return
    pointers = document.querySelectorAll(".pointers")
    pointers.forEach(btn => btn.classList.add("efeito-hover"))
    pointers.forEach((btn) => {
        btn.onmouseover = () => {
            pointarCursor(btn);
        }
    })
}

var continuarAvisoBool = true
if (isCelular) {
    continuarAviso.innerHTML = "Continuar <span class='material-symbols-rounded'>east</span>"
    continuarAviso.addEventListener("touchstart", continuar)
} else {
    continuarAviso.innerHTML = "Continuar (Enter) <span class='material-symbols-rounded'>east</span>"
    window.addEventListener("keydown", function (event) { if (event.key === 'Enter' && continuarAvisoBool) continuar() })
}

var timeoutJumpscare, pularJumpscareBool = true
function continuar() {
    continuarAvisoBool = false
    pularJumpscare.style.display = "flex"
    aviso.style.opacity = 0
    if (isCelular) {
        pularJumpscare.innerHTML = "Pular introdução <span class='material-symbols-rounded'>east</span>"
        pularJumpscare.addEventListener("touchstart", irTelaInicial)
    } else {
        pularJumpscare.innerHTML = "Pular introdução (Enter) <span class='material-symbols-rounded'>east</span>"
        window.addEventListener("keydown", function (event) {
            if (event.key === 'Enter' && pularJumpscareBool) {
                irTelaInicial()
            }
        })
    }
    setTimeout(() => {
        telaInicial.style.display = "block"
        aviso.style.display = "none"
    }, 2500);
    timeoutJumpscare = setTimeout(() => {
        jumpscareInicialVideo.play()
        jumpscareInicialVideo.addEventListener("ended", irTelaInicial)

        telaInicialVideo.play()
        telaInicialVideo.muted = true
    }, 2500);
}

function irTelaInicial() {
    pularJumpscareBool = false
    pularJumpscare.style.display = "none"
    jumpscareInicialVideo.style.display = "none"
    clearTimeout(timeoutJumpscare)
    jumpscareInicialVideo.pause()
    jumpscareInicialVideo.removeEventListener("ended", irTelaInicial)

    divLogoBtn.style.display = "flex"

    telaInicialVideo.muted = false
    telaInicialVideo.currentTime = 0
    setTimeout(() => {
        divLogoBtn.style.opacity = 1
        telaInicialVideo.style.display = "block"
    }, 10);
}


document.querySelector("#iniciar-btn").addEventListener("click", async function () {
    telaCarregamento.style.display = "flex"
    telaInicial.style.display = "none"
    if (dadosUser.email && dadosUser.password && !logado) {
        peloLocalStorage = true
        await entrarUser();
    }

    document.querySelector("#conteudo").style.display = "block"
    telaInicialVideo.pause()

    sortearTelaModelosAudio()

    if (modelViewer !== undefined) conteudo.removeChild(modelViewer)
    setTimeout(() => {
        // Tive que criar um model viewer novo para carregá-lo novamente ao retornar a página inicial
        modelViewer = document.createElement("model-viewer")
        modelViewer.cameraControls = true
        modelViewer.autoRotateDelay = "0"
        modelViewer.autoRotate = true
        modelViewer.interactionPromptStyle = "wiggle"
        modelViewer.rotationPerSecond = "0deg"
        effectComposer = document.createElement("effect-composer")
        modelViewer.appendChild(effectComposer)
        conteudo.appendChild(modelViewer)

        for (let i = 0; i < btnModelos.length; i++) {
            btnModelos[i].classList.remove("active")
        }
        btnModelos[0].classList.remove("active")

        if (!isCelular) {
            modelViewer.onmouseover = aparecerCursorImg
            modelViewer.onmouseleave = sumirCursorImg
            extraDesbloqueado.addEventListener("mouseover", sumirCursorImg)
            moeda3dImg.onmouseover = aparecerCursorImg
        }


        setTimeout(() => {
            //cliqueModelo(btnModelos[0], 0)
            cliqueModelo(btnModelos[0], 0)
            clearTimeout(timeoutVoltar)
        }, 100);
    }, 1);
})

function aparecerCursorImg() { cursorImg.style.display = "block" }
function sumirCursorImg() { cursorImg.style.display = "none" }

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Ajuste a posição da imagem conforme necessário
    cursorImg.style.left = `${mouseX}px`;
    cursorImg.style.top = `${mouseY}px`;
});

function pointarCursor(btn) {
    if (modelos[iModeloVar].temCursor) {
        btn.style.cursor = `url(${modelos[iModeloVar].srcImg}pointer.avif), auto`
    } else {
        btn.style.cursor = "pointer"
    }
}

setInterval(() => {
    if (telaCarregamento.style.display == "flex") {
        dicaP.style.opacity = 0
        setTimeout(() => {
            do {
                newSortDica = Math.floor(Math.random() * dicas.length);
            } while (sortDica === newSortDica);

            sortDica = newSortDica;
            dicaP.innerHTML = dicas[sortDica]
            dicaP.style.opacity = 1
        }, 1000);
    }
}, 4000);