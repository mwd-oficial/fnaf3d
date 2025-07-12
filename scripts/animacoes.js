// Animações

// Maximiza ou minimiza a aba de animações
if (isCelular) {
    animacoesH3.addEventListener("touchstart", abaAnimacoes)
} else {
    animacoesContainer.addEventListener("mouseover", abaAnimacoes)
}
function abaAnimacoes() {
    if (!audiosAberto) fecharAbaCel.style.display = "none"
    if (animacoesAberto) {
        animacoesAberto = false
        animacoesContainer.style.bottom = -(animacoesDiv.offsetHeight) + "px";
        h3SetaAnimacoes.style.transform = "rotate(0deg)"
        animacoesContainer.style.zIndex = 10

        if (!isCelular) {
            animacoesContainer.addEventListener("mouseover", abaAnimacoes)
            animacoesContainer.removeEventListener("mouseleave", abaAnimacoes)
        }
    } else {
        animacoesAberto = true
        animacoesContainer.style.bottom = "0px";
        h3SetaAnimacoes.style.transform = "rotate(180deg)"
        animacoesContainer.classList.add("active")
        if (isCelular) fecharAbaCel.style.display = "block"
        animacoesContainer.style.zIndex = 11

        if (!isCelular) {
            animacoesContainer.removeEventListener("mouseover", abaAnimacoes)
            animacoesContainer.addEventListener("mouseleave", abaAnimacoes)
        }
    }
}

function comecarAnimacao(iModelo, iAnimacao) {
    modeloPronto = false
    animacoesKeys = Object.keys(modelos[iModelo].animacoes);
    var animacaoSel = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]]
    modelos[iModelo].animacaoAtual = animacaoSel.src
    modelos[iModelo].nomeAnimacao = animacaoSel.nome
    modelos[iModelo].coordenadas = animacaoSel.alvoCamera

    modelViewer.animationName = animacaoSel.src;
    modelViewer.currentTime = 0
    modelViewer.cameraTarget = animacaoSel.alvoCamera;
    iconeAnimacoes.innerHTML = "pause"
    modelViewer.play();
    modelViewer.resetTurntableRotation()

    setTimeout(() => {
        let target = modelViewer.getCameraTarget();
        if (target.x > 2 || target.z > 2) modelViewer.disablePan = true
        else modelViewer.disablePan = false

        let viuAlerta = false
        modelViewer.onpointerdown = (e) => {
            if (e.pointerType === 'mouse' && e.button === 2) {
                if ((target.x > 2 || target.z > 2) && !viuAlerta) {
                    alerta("Não é possível mudar o ponto central dessa animação.")
                    viuAlerta = true
                }
            }
        }
    }, 100);

    if (animacaoSel.orbitaCameraMaxima) {
        modelViewer.maxCameraOrbit = animacaoSel.orbitaCameraMaxima;
    } else {
        modelViewer.maxCameraOrbit = modelos[iModelo].orbitaCameraMaxima
    }

    if (animacaoSel.orbitaCameraMinima) {
        modelViewer.minCameraOrbit = animacaoSel.orbitaCameraMinima;
    } else {
        modelViewer.minCameraOrbit = modelos[iModelo].orbitaCameraMinima
    }

    let rotacao = animacaoSel.rotacao ?? 0;
    modelViewer.resetTurntableRotation((-90 + rotacao) * (Math.PI / 180));


    // Se a animação não for estática, mostra o range e o tempo atual
    if (!animacaoSel.estatico) {
        modelViewer.play()
        animacoesRangeDiv.style.display = "flex"

        // Pega a duração da animação e define no mostrador
        var minutos = Math.floor(modelViewer.duration / 60);
        var segundos = Math.floor(modelViewer.duration - minutos * 60);
        tempoTotalAnimacoes.innerHTML = (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);

        animacoesRange.max = modelViewer.duration

        // Pega o tempo atual da animação e atualiza o mostrador toda vez que o tempo andar (timeupdate não funciona com model viewer)
        intervaloAnimacao = setInterval(() => {
            animacoesRange.value = modelViewer.currentTime;
            var minutos = Math.floor(modelViewer.currentTime / 60);
            var segundos = Math.floor(modelViewer.currentTime - minutos * 60);
            tempoAtualAnimacoes.innerHTML = (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
        }, 1);

        // Atualiza o tempo atual da animação quando o usuário mudar no range
        animacoesRange.addEventListener('input', function () {
            modelViewer.timeScale = 1
            modelViewer.pause()
            modelViewer.currentTime = animacoesRange.value;
        });
        animacoesRange.addEventListener('mouseup', function () {
            if (iconeAnimacoes.innerHTML == "pause") modelViewer.play()
            modelViewer.timeScale = velocidadeInput.value
        })
        animacoesRange.addEventListener('touchend', function () {
            if (iconeAnimacoes.innerHTML == "pause") modelViewer.play()
            modelViewer.timeScale = velocidadeInput.value
        })

        iconeAnimacoes.onclick = playPauseAnimacao

    } else {
        modelViewer.pause()
        animacoesRangeDiv.style.display = "none"
    }
}

function playPauseAnimacao() {
    if (!modelViewer.paused) {
        iconeAnimacoes.innerHTML = "play_arrow"
        modelViewer.pause()
    } else {
        iconeAnimacoes.innerHTML = "pause"
        modelViewer.play()
    }
}