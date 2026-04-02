const office = document.querySelector("#office")
const ventilador = document.querySelector("#ventilador")

function iniciarNoite(n) {
    telaNoite.style.display = "block";
    telaNoite.style.opacity = 1;
    document.querySelector("#noite-p").innerText = `Noite ${n}`;

    mudandoCamera.play();
    chiado.pause();
    chiado.currentTime = 0;
    inicialCelularAudio.pause();
    inicialCelularAudio.currentTime = 0;
    inicialAudio.pause();
    inicialAudio.currentTime = 0;

    document.querySelector("#barra-100vh").style.display = "block"
    setTimeout(() => {
        document.querySelector("#barra-100vh").style.display = "none"
        document.querySelectorAll(".barras-noite").forEach(barra => {
            let sortTime = Math.random() * 5
            setTimeout(() => {
                let sortPos = Math.random() * window.innerHeight
                barra.style.top = `${sortPos}px`
                barra.style.display = "block"
                setTimeout(() => {
                    barra.style.display = "none"
                }, 75);
            }, sortTime * 75)
        })
    }, 75);

    setTimeout(() => {
        document.querySelector("#noite-div-p").style.opacity = 0;
        setTimeout(() => {
            telaNoite.style.display = "none";
            iniciarJogo();
        }, 1000);
    }, 3000);
}

function iniciarJogo() {
    office.style.display = "block"
    ventilador.style.display = "block"
}