// TIRAR ISSO DEPOIS!!!!
/*
aviso.style.display = "none"
telaInicial.style.display = "flex"
document.querySelector("#conteudo").style.display = "block"
//document.querySelector("#tela-carregamento-site").style.display = "none"
telaCheia.style.display = "none"
tutorialVisto = true
*/
////////////////////////////////////


// Ajusta width, height e font size para celular
if (navigator.userAgentData != undefined && navigator.userAgentData.mobile) {
    isCelular = true
    document.querySelector("#tela-cheia > p").innerHTML = "Toque para ativar a tela cheia"

    tutorialDescricaoContent.classList.add("celular")
    logomwdEl.classList.add("celular")
    inputAlturaDiv.classList.add("celular")
    audiosContainer.classList.add("celular")
    fnafInfoImgDiv.classList.add("celular")
    ucnInfoImgDiv.classList.add("celular")
    document.querySelector("#modelos").classList.add("celular")
    menuJogos.classList.add("celular")

    imgAlternativaDiv.classList.remove("naocelular")
    voltarCarregamento.classList.remove("naocelular")
    document.querySelector("#problemas-swiper-div").classList.remove("naocelular")

    fecharExtraDesbloqueado.style.fontSize = "50px"
    document.querySelector("#fechar-swiper-div-btn").style.fontSize = "50px"

    resetarConfig.innerHTML = "Resetar<br>configurações"

    document.querySelector("#modelo-div").style.transform = "scale(1)"


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
})

document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
        telaCheia.style.display = "none"
        if (siteCarregado) {
            siteCarregado = false
            aviso.style.opacity = 1
        }
        despausarMidia()
    } else {
        telaCheia.style.display = "flex"
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

document.querySelectorAll(".videos").forEach((video) => {
    video.addEventListener("play", pausarAudios)
    video.addEventListener("pause", despausarAudios)
    video.addEventListener("ended", despausarAudios)
})

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
        document.querySelector("#tela-carregamento-site").style.display = "none"
        getLocalStorage()
    }, 500);
})

if (isCelular) {
    continuarAviso.innerHTML = "Continuar <span class='material-symbols-rounded'>east</span>"
    continuarAviso.addEventListener("touchstart", continuar)
} else {
    continuarAviso.innerHTML = "Continuar (Enter) <span class='material-symbols-rounded'>east</span>"
    pularTutorial.innerHTML = "Pular tutorial (Enter) <span class='material-symbols-rounded'>east</span>"
    window.addEventListener("keydown", function (event) {if (event.key === 'Enter' && aviso.style.display != "none") continuar()})
}
function continuar() {
    aviso.style.opacity = 0
    setTimeout(() => {
        telaInicial.style.display = "block"
        aviso.style.display = "none"
        telaInicialVideo.play()
        telaInicialAudio.play()
    }, 2500);
}



document.querySelector("#iniciar-btn").addEventListener("click", function () {
    telaCarregamento.style.display = "flex"
    telaInicial.style.display = "none"

    document.querySelector("#conteudo").style.display = "block"
    telaInicialVideo.pause()
    telaInicialAudio.pause()

    sortearTelaModelosAudio()

    if (modelViewer !== undefined) conteudo.removeChild(modelViewer)
    setTimeout(() => {
        // Tive que criar um model viewer novo para carregá-lo novamente ao retornar a página inicial
        modelViewer = document.createElement("model-viewer")
        modelViewer.cameraControls = true
        modelViewer.disablePan = true
        modelViewer.animationCrossfadeDuration = "0"
        modelViewer.autoRotateDelay = "0"
        effectComposer = document.createElement("effect-composer")
        modelViewer.appendChild(effectComposer)
        conteudo.appendChild(modelViewer)

        for (let i = 0; i < btnModelos.length; i++) {
            btnModelos[i].classList.remove("active")
        }
        btnModelos[0].classList.remove("active")

        if (!isCelular) {
            modelViewer.removeEventListener("mouseover", aparecerCursorImg)
            modelViewer.addEventListener("mouseover", aparecerCursorImg)
            modelViewer.removeEventListener("mouseleave", sumirCursorImg)
            modelViewer.addEventListener("mouseleave", sumirCursorImg)
            extraDesbloqueado.addEventListener("mouseover", sumirCursorImg)
            moeda3dImg.removeEventListener("mouseover", aparecerCursorImg)
            moeda3dImg.addEventListener("mouseover", aparecerCursorImg)
        }


        setTimeout(() => {
            //cliqueModelo(btnModelos[0], 0)
            cliqueModelo(btnModelos[0], 0)
            clearTimeout(timeoutVoltar)
        }, 100);
    }, 1);
})

resetarConfig.addEventListener("click", () => { avisoLocalStorageDiv.style.display = "flex" })

document.querySelector("#voltar-btn").addEventListener("click", () => { avisoLocalStorageDiv.style.display = "none" })

document.querySelector("#prosseguir-btn").addEventListener("click", resetLocalStorageGeral)


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
        btn.style.cursor = `url(../${modelos[iModeloVar].srcImg}pointer.webp), auto`
    } else {
        btn.style.cursor = "pointer"
    }
}

setInterval(() => {
    if (telaCarregamento.style.display == "flex") {
        dicaP.style.opacity = 0
        setTimeout(() => {
            do {
                newSortDica = Math.floor(Math.random() * telaModelosAudios.length);
            } while (sortDica === newSortDica);

            sortDica = newSortDica;
            dicaP.innerHTML = dicas[sortDica]
            dicaP.style.opacity = 1
        }, 1000);
    }
}, 4000);