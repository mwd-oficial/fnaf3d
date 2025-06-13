arBtn.addEventListener("click", async function () {
    if (!isCelular) {
        alert("A visualização no modo AR está disponível apenas para celulares.")
        return
    }

    if (!/Android/i.test(navigator.userAgent)) {
        alert("O modo AR funciona apenas em dispositivos Android.")
        return
    }

    if (modelos[iModeloVar].driveId) {
        console.log("tem driveId")
        ar = true
        verificaOrientacao()
        telaAr.style.display = "flex"
        fecharAr.style.display = "block"
        const timestamp = new Date().toISOString();

        telaAr.scrollTo(0, 0)

        let animado = modelos[iModeloVar].temAnimacao

        document.querySelector("#target-p").innerHTML = `${animado ? "Animação" : "Modelo 3D"} ter o ponto central próximo de 0m 0m 0m (recomendado). Quanto maiores esses números, mais longe do centro o modelo 3D pode aparecer, e você pode precisar procurar ao seu redor para encontrá-lo. <br>Animação: ${modelos[iModeloVar].nomeAnimacao || (animado ? "Padrão" : "Nenhuma")}<br>Ponto central: ${modelos[iModeloVar].coordenadas || "0m 0m 0m"}`
        if (modelos[iModeloVar].animacaoAtual) {
            console.log("tem mais de 1 animação")
            try {
                const res = await axios.post(`${API_URL}/ar/cadastrar`, {
                    driveId: modelos[iModeloVar].driveId,
                    animacao: modelos[iModeloVar].animacaoAtual,
                    username: dadosUser.username || "Anônimo",
                    nome: nomeModelo.innerHTML,
                    timestamp: timestamp
                });
                setTimeout(() => {
                    url = `https://drive.google.com/uc?export=download&id=${res.data.newDriveId}`
                    modeloPronto = true
                }, 1000);
            } catch (e) {
                alert("Um erro ocorreu ao tentar entrar no modo AR.")
                return
            }
        } else {
            url = `https://drive.google.com/uc?export=download&id=${modelos[iModeloVar].driveId}`
            modeloPronto = true
        }
    } else {
        alert("Esse modelo 3D não está disponível para o modo AR.")
    }
})

irArBtn.addEventListener("click", function () {
    if (modeloPronto) {
        acessarAr()
    } else {
        carregamentoAR.style.display = "flex"
        intervaloModeloPronto = setInterval(() => {
            if (telaAr.style.display == "none") {
                clearInterval(intervaloModeloPronto);
                modeloPronto = false;
                return
            }
            if (modeloPronto) {
                clearInterval(intervaloModeloPronto);
                setTimeout(acessarAr, 500)
            }
        }, 50);
    }
})

function acessarAr() {
    let sceneViewerUrl = `https://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(url)}&mode=ar_only&resizable=true`;
    carregamentoAR.style.display = "none"
    window.location.href = sceneViewerUrl;
}

fecharAr.addEventListener("click", function () {
    ar = false
    verificaOrientacao()
    modeloPronto = false
    telaAr.style.display = "none"
    carregamentoAR.style.display = "none"
    fecharAr.style.display = "none"
    clearInterval(intervaloModeloPronto);

    let tutorialVideo = document.querySelector("#tela-ar video");
    tutorialVideo.pause();
    tutorialVideo.currentTime = 0;
})

/*
arBtn.addEventListener("click", async function () {
    if (!isCelular) {
        alerta("A visualização no modo AR está disponível apenas para celulares.")
        arBtn.style.opacity = 0.5
        return
    }

    if (modelos[iModeloVar].driveId) {
        ar = true
        verificaOrientacao()
        telaAr.style.display = "flex"

        let url, sceneViewerUrl
        //url = "https://drive.google.com/uc?export=download&id=1uDTEyO14x3IaWh9quu4IPE8zmts3pCRR";
        if (modelos[iModeloVar].animacaoAtual) {
            try {
                console.log("modelos[iModeloVar].driveId: " + modelos[iModeloVar].driveId)
                const timestamp = new Date().toISOString();

                const res = await axios.post(`${API_URL}/ar/cadastrar`, {
                    driveId: modelos[iModeloVar].driveId,
                    animacao: modelos[iModeloVar].animacaoAtual,
                    username: dadosUser.username || "Anônimo",
                    nome: nomeModelo.innerHTML,
                    timestamp: timestamp
                });
                setTimeout(() => {
                    url = `https://drive.google.com/uc?export=download&id=${res.data.newDriveId}`
                    
                    sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(url)}&mode=ar_only&resizable=true#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(url)};end;`;
                    
                    window.location.href = sceneViewerUrl;
                }, 1000);
            } catch (erro) {
                console.log("Erro ao eniar o modelo para AR:", erro);
            }
        } else {
            url = `https://drive.google.com/uc?export=download&id=${modelos[iModeloVar].driveId}`
            sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(url)}&mode=ar_only&resizable=true#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(url)};end;`;

            window.location.href = sceneViewerUrl;
        }
    } else {
        alerta("Modelo 3D não disponível para AR.")
    }
})
*/