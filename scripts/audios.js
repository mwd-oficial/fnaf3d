// Áudios
/*
function sortearTelaModelosAudio() {
    if (telaModelosAudio != undefined) {
        telaModelosAudio.pause()
        telaModelosAudio.currentTime = 0
    }
    do {
        newSort = Math.floor(Math.random() * document.querySelectorAll(".tela-modelos-audios").length)
    } while (sort === newSort)
    sort = newSort
    telaModelosAudio = document.querySelectorAll(".tela-modelos-audios")[sort]
    telaModelosAudio.volume = 0.25
    telaModelosAudio.playbackRate = 10.0;
    telaModelosAudio.play()
}

document.querySelectorAll(".tela-modelos-audios").forEach(function(audio) {
    audio.addEventListener("ended", sortearTelaModelosAudio);
});
*/
function sortearTelaModelosAudio() {
    if (telaModelosAudio != undefined) {
        telaModelosAudio.pause();
        telaModelosAudio.currentTime = 0;
    }

    do {
        newSort = Math.floor(Math.random() * document.querySelectorAll(".tela-modelos-audios").length);
    } while (sort === newSort);

    sort = newSort;
    telaModelosAudio = document.querySelectorAll(".tela-modelos-audios")[sort];
    telaModelosAudio.volume = 0.25;

    // Verifica se o src foi definido corretamente
    if (telaModelosAudio.src) {
        // Tenta tocar o áudio após ter certeza de que está carregado
        telaModelosAudio.load(); // Garante que o áudio está carregado
        telaModelosAudio.play().catch(function(error) {
            console.error("Erro ao tentar tocar o áudio: ", error);
            setTimeout(sortearTelaModelosAudio, 1000); // Tenta sortear novamente após 1 segundo
        });
    } else {
        console.error("O src do áudio não está definido.");
        setTimeout(sortearTelaModelosAudio, 1000); // Tenta sortear novamente após 1 segundo
    }
}

// Adicione o ouvinte de evento fora da função
document.querySelectorAll(".tela-modelos-audios").forEach(function(audio) {
    audio.addEventListener("ended", sortearTelaModelosAudio);
});


// Maximiza ou minimiza a aba de audios
if (isCelular) {
    audiosH3.addEventListener("click", abaAudios)
} else {
    audiosContainer.addEventListener("mouseover", abaAudios)
}
function abaAudios() {
    if (!animacoesAberto) fecharAbaCel.style.display = "none"
    if (audiosAberto) {
        audiosAberto = false
        audiosContainer.style.left = -(audiosDiv.offsetWidth) + "px";
        h3SetaAudios.style.transform = "rotate(0deg)"
        audiosContainer.style.zIndex = 10

        if (!isCelular) {
            audiosContainer.addEventListener("mouseover", abaAudios)
            audiosContainer.removeEventListener("mouseleave", abaAudios)
        }
    } else {
        audiosAberto = true
        audiosContainer.style.left = "0px";
        h3SetaAudios.style.transform = "rotate(180deg)"
        if (isCelular) {
            fecharAbaCel.style.display = "block"
        }
        if (tutorialBotoesDiv.style.display == "none") audiosContainer.style.zIndex = 12

        if (!isCelular) {
            audiosContainer.removeEventListener("mouseover", abaAudios)
            audiosContainer.addEventListener("mouseleave", abaAudios)
        }
    }
}

audiosBtnP.forEach((btn, iAudio) => {
    btn.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
            document.querySelectorAll(".audios-btn-p").forEach((btn, iAudio) => {
                iconeAudios[iAudio].innerHTML = "volume_up"
                btn.classList.remove("active")
            })
            for (let i = 0; i < audiosKeys.length; i++) {
                iconeAudios[i].innerHTML = "volume_up"
                audioModelo.pause()
                audioModelo.currentTime = 0
            }
            this.classList.add("active")
            audioModelo.src = modelos[iModeloVar].audios[audiosKeys[iAudio]].src
            audioModelo.load()
            tocarAudio(iModeloVar, iAudio)
        } else {
            playPauseAudio(iAudio)
        }

    })
})

function tocarAudio(iModelo, iAudio) {

    audiosKeys = Object.keys(modelos[iModelo].audios)

    for (let i = 0; i < document.querySelectorAll(".audios-btn-p").length; i++) {
        iconeAudios[i].innerHTML = "volume_up"
    }

    audioModelo.volume = modelos[iModelo].audios[audiosKeys[iAudio]].volume
    playPauseAudio(iAudio)
    audioModelo.removeEventListener("ended", audioAcabou)
    audioModelo.addEventListener("ended", audioAcabou)



    // Pega a duração do áudio e define no mostrador
    tempoTotal[iAudio].innerHTML = "00:00"
    audioModelo.addEventListener("canplaythrough", function () {
        var minutos = Math.floor(audioModelo.duration / 60);
        var segundos = Math.floor(audioModelo.duration - minutos * 60);
        tempoTotal[iAudio].innerHTML = (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
        audiosRange[iAudio].max = audioModelo.duration
    })


    // Pega o tempo atual do áudio e atualiza o mostrador toda vez que o tempo andar
    audioModelo.addEventListener('timeupdate', function () {
        audiosRange[iAudio].value = this.currentTime;
        var minutos = Math.floor(this.currentTime / 60);
        var segundos = Math.floor(this.currentTime - minutos * 60);
        tempoAtual[iAudio].innerHTML = (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos);
    });

    // Atualiza o tempo atual do áudio quando o usuário mudar no range
    audiosRange[iAudio].addEventListener('input', function () {
        audioModelo.currentTime = audiosRange[iAudio].value;
    });
}

function audioAcabou() {
    document.querySelectorAll(".audios-btn-p").forEach((btn, i) => {
        iconeAudios[i].innerHTML = "volume_up"
        btn.classList.remove("active")
    })
    telaModelosAudio.play()
}

// Muda os ícones de play e pause dos áudios
function playPauseAudio(iAudio) {
    if (iconeAudios[iAudio].innerHTML == "play_arrow" || iconeAudios[iAudio].innerHTML == "volume_up") {
        iconeAudios[iAudio].innerHTML = "pause"
        audioModelo.play()
        telaModelosAudio.pause()
    } else {
        iconeAudios[iAudio].innerHTML = "play_arrow"
        audioModelo.pause()
        telaModelosAudio.play().catch(function(error) {
            console.error("Erro ao tentar tocar o áudio: ", error);
            setTimeout(sortearTelaModelosAudio, 1000); // Tenta sortear novamente após 1 segundo
        });
    }
}