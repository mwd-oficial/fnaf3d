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
        animacoesH3.style.border = "3px solid #333"
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
        animacoesH3.style.border = "0px solid #0000"
        if (isCelular) {
            fecharAbaCel.style.display = "block"
        }
        animacoesContainer.style.zIndex = 11

        if (!isCelular) {
            animacoesContainer.removeEventListener("mouseover", abaAnimacoes)
            animacoesContainer.addEventListener("mouseleave", abaAnimacoes)
        }
    }
}

function comecarAnimacao(iModelo, iAnimacao) {
    animacoesKeys = Object.keys(modelos[iModelo].animacoes);
    modelViewer.animationName = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].src;
    modelViewer.currentTime = 0
    modelViewer.cameraTarget = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].alvoCamera;
    iconeAnimacoes.innerHTML = "pause"
    modelViewer.play();

    setTimeout(() => {
        defineAltura(iModelo)
    }, 1);

    if (modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].mudaOrbitaCameraMaxima) {
        modelViewer.maxCameraOrbit = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].orbitaCameraMaxima;
    } else {
        modelViewer.maxCameraOrbit = modelos[iModelo].orbitaCameraMaxima
    }

    if (modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].mudaOrbitaCameraMinima) {
        modelViewer.minCameraOrbit = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].orbitaCameraMinima;
    } else {
        modelViewer.minCameraOrbit = modelos[iModelo].orbitaCameraMinima
    }

    if (modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].mudaOrbitaCamera) {
        modelViewer.cameraOrbit = modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].orbitaCamera;
    } else {
        modelViewer.cameraOrbit = "auto auto auto"
    }

    // Se a animação não for estática, mostra o range e o tempo atual
    if (!modelos[iModelo].animacoes[animacoesKeys[iAnimacao]].estatico) {
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
            modelViewer.currentTime = animacoesRange.value;
        });

        iconeAnimacoes.removeEventListener("click", playPauseAnimacao)
        iconeAnimacoes.addEventListener("click", playPauseAnimacao)

    } else {
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