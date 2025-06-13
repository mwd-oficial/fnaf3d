let freddy = {
    el: document.querySelector("#freddy"),
    telaInicial: {
        top: "0",
        right: "-25%",
        width: "71%",
        height: "100%",
        filter: "brightness(0.75)",
        animationName: "RIG_Freddy|Freddy_MenuPose_01_RIG_Freddy",
        cameraTarget: "0m 2m 0m",
        cameraOrbit: "0 1.5rad 0",
        maxCameraOrbit: "0 0 1.5m",
        minCameraOrbit: "0 0 1.5m",
        configEx: () => {
            var effectComposer = document.createElement("effect-composer")
            freddy.el.appendChild(effectComposer)
            var glitchEffect = document.createElement("glitch-effect")
            effectComposer.appendChild(glitchEffect)
        }
    },
}

let bonnie = {
    el: document.querySelector("#bonnie"),
}

let chica = {
    el: document.querySelector("#chica"),
}

let mrCupcake = {
    el: document.querySelector("#mr-cupcake"),
}

let goldenFreddy = {
    el: document.querySelector("#golden-freddy"),
}

let animatronics = [freddy, bonnie, chica, mrCupcake, goldenFreddy]