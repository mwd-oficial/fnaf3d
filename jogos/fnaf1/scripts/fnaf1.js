// Configurações iniciais
let freddyCarregado = false
const telaCarregamentoSite = document.querySelector("#tela-carregamento-site")
const progressBar = document.querySelector("#progress-bar")
let aparecerAviso = true
const telaViraCel = document.querySelector("#tela-vira-cel")
const telaCheia = document.getElementById("tela-cheia")
const imagemGeral = document.querySelectorAll("img")


const isCelular = navigator.userAgentData != undefined && navigator.userAgentData.mobile
//const isCelular = true

progressBar.value = 0
let progressoInterval = setInterval(function () {
    if (progressBar.value < 100) {
        progressBar.value += 0.1
    } else {
        clearInterval(progressoInterval);
    }
}, 1);

freddy.el.onload = () => {
    freddyCarregado = true

    const material = freddy.el.model.materials[0];
    setInterval(() => {
        material.setAlphaMode('BLEND');
        material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
        setTimeout(() => {
            material.setAlphaMode('OPAQUE');
            material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
            setTimeout(() => {
                material.setAlphaMode('BLEND');
                material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
                setTimeout(() => {
                    material.setAlphaMode('OPAQUE');
                    material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                    setTimeout(() => {
                        material.setAlphaMode('BLEND');
                        material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 0]);
                        setTimeout(() => {
                            material.setAlphaMode('OPAQUE');
                            material.pbrMetallicRoughness.setBaseColorFactor([1, 1, 1, 1]);
                        }, 750);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 6000)
}

window.onload = () => {
    let intervalo = setInterval(() => {
        if (freddyCarregado) {
            this.clearInterval(intervalo)
            progressBar.value = 100
            setTimeout(() => {
                telaCarregamentoSite.style.display = "none"
                if (!document.fullscreenElement) {
                    telaCheia.style.display = "flex"
                } else {
                    if (aparecerAviso) aparecerAvisof()
                }
            }, 500);
        }
    }, 500);
}

window.onresize = verificaOrientacao
function verificaOrientacao() {
    let portrait = window.innerHeight > window.innerWidth
    if (portrait) {
        telaViraCel.style.display = "flex"
    } else {
        telaViraCel.style.display = "none"
    }
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

telaCarregamentoSite.onclick = () => {
    launchFullscreen(document.documentElement);
    telaCarregamentoSite.style.cursor = "default"
}

telaCheia.onclick = () => {
    launchFullscreen(document.documentElement);
    if (aparecerAviso) aparecerAvisof()
}

document.onfullscreenchange = () => {
    if (document.fullscreenElement) {
        telaCheia.style.display = "none"
    } else {
        telaCheia.style.display = "flex"
        telaCarregamentoSite.style.cursor = "pointer"
    }
}

// Visibilidade da página
document.onvisibilitychange = () => {
    if (document.visibilityState === 'hidden') {
        // if (!midiaPausada) {
        //     pausarMidia()
        // }
    } else {
        // if (document.fullscreenElement) {
        //     despausarMidia()
        // }
    }
}

// Tirar o arrastar imagem com o cursor
for (let i = 0; i < imagemGeral.length; i++) {
    imagemGeral[i].onmousedown = function (e) {
        if (e.preventDefault) e.preventDefault();
        return false;
    }
}

















// Inicio

// Audios
const inicialAudio = document.querySelector("#inicial-audio")
const inicialCelularAudio = document.querySelector("#inicial-celular-audio")
const chiado = document.querySelector("#chiado")
const mudandoCamera = document.querySelector("#mudando-camera")

const aviso = document.querySelector("#aviso")
let avisoTimeout

const telaInicial = document.querySelector("#tela-inicial")
const btnInicial = document.querySelectorAll(".btn-inicial")
const setas = document.querySelectorAll(".setas")
const continueNoite = document.querySelector("#continue-noite")
const glitchTelaInicial = document.querySelector("#glitch-tela-inicial")
const menu = document.querySelector("#menu")
const simNaoDiv = document.querySelector("#sim-nao-div")

function aparecerAvisof() {
    navigator.vibrate(0)

    if (isCelular) {
        // Aparecer bonnie sem olhos e vibrar ao aparecer os olhos (sorteado e apenas para mobile)
    }

    aparecerAviso = false
    aviso.style.display = "flex"
    setTimeout(() => {
        aviso.style.opacity = 1
        setTimeout(() => {
            aviso.onclick = fecharAviso
        }, 10);
    }, 1000);
    avisoTimeout = setTimeout(fecharAviso, 4000);
}

function fecharAviso() {
    clearTimeout(avisoTimeout)
    aviso.style.opacity = 0
    executarConfig(freddy, "telaInicial")
    setTimeout(() => {
        aviso.style.display = "none"
        freddy.el.style.display = "block"
        telaInicial.style.display = "block"
        chiado.play()
        if (isCelular) {
            inicialCelularAudio.play()
        } else {
            inicialAudio.play()
        }
    }, 500);
}

function alternarEstado() {
    const estados = [
        { state: '0.75', time: 3000 },
        { state: '1.25', time: 500 },
        { state: '0.75', time: 500 },
        { state: '1.25', time: 500 },
        { state: '0.75', time: 750 },
        { state: '1.25', time: 250 },
        { state: '0.75', time: 250 },
        { state: '1.25', time: 250 },
        { state: '0.75', time: 250 },
        { state: '0.5', time: 250 },
        { state: '0.75', time: 2000 },
        { state: '1.25', time: 250 },
    ];

    let i = 0;

    function alternar() {
        freddy.el.style.filter = `brightness(${estados[i].state})`

        i = (i + 1) % estados.length; // Voltando para o início quando o ciclo terminar

        setTimeout(alternar, estados[i].time); // Espera o tempo especificado e alterna novamente
    }

    alternar(); // Inicia a alternância
}

alternarEstado(); // Chama a função para iniciar o ciclo



document.querySelectorAll(".barras").forEach(barra => {
    let sortTime = Math.random() * 5
    setInterval(() => {
        let sortPos = Math.random() * window.innerHeight
        barra.style.top = `${sortPos}px`
        barra.style.display = "block"
        setTimeout(() => {
            barra.style.display = "none"
        }, 500);
    }, sortTime * 1000);
})


btnInicial.forEach((btn, i) => {
    btn.onmouseover = () => {
        if (!isCelular) {
            setas.forEach(seta => seta.style.opacity = 0)
            setas[i].style.opacity = 1
            mudandoCamera.play()

            if (btn.id == "continue") {
                continueNoite.style.opacity = 1
            } else {
                continueNoite.style.opacity = 0
            }
        }
    }

    btn.onclick = () => {
        if (isCelular) {
            mudandoCamera.play()
            setas[i].style.opacity = 1
            setTimeout(() => {
                executarAcao(btn.id)
            }, 1000);
        } else {
            executarAcao(btn.id)
        }
    }

})

window.onkeydown = (event) => {
    if (!isCelular && telaInicial.style.display == "block" && event.key === "Enter") {
        for (let i = 0; i < setas.length; i++) {
            if (setas[i].style.opacity == 1) executarAcao(btnInicial[i].id)
        }
    }
}

function executarAcao(id) {
    setas.forEach(seta => seta.style.opacity = 0)
    if (id == "novo-jogo") {
        if (isCelular) {
            menu.style.display = "none"
            simNaoDiv.style.display = "block"
        } else {
            alert("sim executado")
        }
    }
    if (id == "sim") {
        alert("sim executado")
    }
    if (id == "nao") {
        simNaoDiv.style.display = "none"
        menu.style.display = "block"
    }
    if (id == "continue") {
        alert("continue executado")
    }
    if (id == "sexta-noite") {
        alert("sexta noite executado")
    }
    if (id == "noite-personalizavel") {
        alert("noite personalizavel executado")
    }
    if (id == "opcoes") {
        alert("opcoes executado")
    }
    if (id == "desbloqueaveis") {
        alert("desbloqueaveis executado")
    }
}


function executarConfig(animatronicp, estadop) {
    let animatronic = animatronicp.el
    let estado = animatronicp[estadop]
    animatronic.style.top = estado.top
    animatronic.style.right = estado.right
    animatronic.style.width = estado.width
    animatronic.style.height = estado.height
    animatronic.style.filter = estado.filter
    animatronic.animationName = estado.animationName
    animatronic.cameraTarget = estado.cameraTarget
    animatronic.cameraOrbit = estado.cameraOrbit
    animatronic.maxCameraOrbit = estado.maxCameraOrbit
    animatronic.minCameraOrbit = estado.minCameraOrbit
    estado.configEx()
}


















// Ajusta width, height e font size para celular
if (isCelular) {
    document.querySelectorAll(".efeito-hover").forEach(btn => btn.classList.remove("efeito-hover"))
    setas[0].style.opacity = 0
    continueNoite.style.opacity = 1
    document.querySelector("#menu-celular").style.display = "flex"
}
