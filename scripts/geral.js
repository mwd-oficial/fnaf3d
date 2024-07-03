// TIRAR ISSO DEPOIS!!!!
/*
aviso.style.display = "none"
telaInicial.style.display = "flex"
document.querySelector("#conteudo").style.display = "block"
//document.querySelector("#tela-carregamento-site").style.display = "none"
telaCheia.style.display = "none"

primeiraVez = false
animacoesContainer.style.pointerEvents = "all"
audiosContainer.style.pointerEvents = "all"
inputAlturaDiv.style.pointerEvents = "all"
*/
////////////////////////////////////

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
        despausarAudios()
    } else {
        telaCheia.style.display = "flex"
        if (!midiaPausada) {
            pausarAudios()
        }
    }
})


// Visibilidade da página
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        if (!midiaPausada) {
            pausarAudios()
        }
    } else {
        if (document.fullscreenElement) {
            despausarAudios()
        }
    }
})

function pausarAudios() {
    midiaPausada = true
    audiosTocando = []; // Limpa o array
    for (let i = 0; i < audioGeral.length; i++) {
        if (!audioGeral[i].paused) {
            audiosTocando.push(i); // Armazena o índice do áudio que estava tocando
            audioGeral[i].pause();
        }
    }
    videosRodando = []; // Limpa o array
    for (let i = 0; i < videoGeral.length; i++) {
        if (!videoGeral[i].paused) {
            videosRodando.push(i); // Armazena o índice do áudio que estava tocando
            videoGeral[i].pause();
        }
    }
}

function despausarAudios() {
    midiaPausada = false
    for (let i of audiosTocando) {
        audioGeral[i].play()
    }
    for (let i of videosRodando) {
        videoGeral[i].play()
    }
}


// Tirar o arrastar imagem com o cursor
var images = document.getElementsByTagName('img');
for (let i = 0; i < images.length; i++) {
    images[i].onmousedown = function (e) {
        if (e.preventDefault) e.preventDefault();
        return false;
    }
}



// Ajusta width, height e font size para celular
if (navigator.userAgentData != undefined && navigator.userAgentData.mobile) {
    isCelular = true

    tutorialDescricaoContent.classList.add("celular")
    document.querySelector("#logomwd").classList.add("celular")
    inputAlturaDiv.classList.add("celular")
    audiosContainer.classList.add("celular")
    fnafInfoImgDiv.classList.add("celular")
    ucnInfoImgDiv.classList.add("celular")

    resetarConfig.innerHTML = "Resetar<br>configurações"

    document.querySelector("#modelo-div").style.transform = "scale(1)"

    ajustesCelular()
}

function ajustesCelular() {
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
        var fontSizeAtual = parseFloat(window.getComputedStyle(el).fontSize);
        var fontSizeNovo = fontSizeAtual * 0.75;
        el.style.fontSize = fontSizeNovo + 'px';
    });
}

fecharAbaCel.addEventListener("click", function () {
    if (animacoesAberto) abaAnimacoes()
    if (audiosAberto) abaAudios()
    fecharAbaCel.style.display = "none"
})



// Início do site
window.addEventListener("load", function () {
    document.querySelector("#tela-carregamento-site").style.display = "none"
    getLocalStorage()
})

document.querySelector("#continuar-btn").addEventListener("click", function () {
    aviso.style.opacity = 0
    setTimeout(() => {
        telaInicial.style.display = "block"
        aviso.style.display = "none"
        telaInicialVideo.play()
        telaInicialAudio.play()
    }, 2500);
})



document.querySelector("#iniciar-btn").addEventListener("click", function () {
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

        setTimeout(() => {
            //cliqueModelo(btnModelos[0], 0)
            cliqueModelo(btnModelos[0], 0)
        }, 100);
    }, 1);
})

resetarConfig.addEventListener("click", () => { avisoLocalStorageDiv.style.display = "flex" })

document.querySelector("#voltar-btn").addEventListener("click", () => { avisoLocalStorageDiv.style.display = "none" })

document.querySelector("#prosseguir-btn").addEventListener("click", resetLocalStorageGeral)


