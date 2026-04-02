let freddy = {
    elDiv: document.querySelector("#freddy-div"),
    el: document.querySelector("#freddy"),
    loader: document.querySelector("#freddy-div > .div-logo"),
    telaInicial: {
        top: "0",
        right: "-25%",
        width: "71%",
        height: "100%",
        filter: "brightness(0.75)",
        animationName: "RIG_Freddy|Freddy_MenuPose_01_RIG_Freddy",
        cameraTarget: "0m 2m 0m",
        cameraOrbit: "0 1.5rad 0",
        maxCameraOrbit: "0 90deg 1.5m",
        minCameraOrbit: "0 90deg 1.5m",
        configEx: () => {
            var effectComposer = document.createElement("effect-composer")
            freddy.el.appendChild(effectComposer)
            var glitchEffect = document.createElement("glitch-effect")
            effectComposer.appendChild(glitchEffect)
        }
    },
}

let bonnie = {
    elDiv: document.querySelector("#bonnie-div"),
    el: document.querySelector("#bonnie"),
    loader: document.querySelector("#bonnie-div > .div-logo"),
}

let chica = {
    elDiv: document.querySelector("#chica-div"),
    el: document.querySelector("#chica"),
    loader: document.querySelector("#freddy-div > .div-logo"),
}

let mrCupcake = {
    elDiv: document.querySelector("#mr-cupcake-div"),
    el: document.querySelector("#mr-cupcake"),
    loader: document.querySelector("#mr-cupcake-div > .div-logo"),
}

let foxy = {
    elDiv: document.querySelector("#foxy-div"),
    el: document.querySelector("#foxy"),
    loader: document.querySelector("#foxy-div > .div-logo"),
}

let goldenFreddy = {
    elDiv: document.querySelector("#golden-freddy-div"),
    el: document.querySelector("#golden-freddy"),
    loader: document.querySelector("#golden-freddy-div > .div-logo"),
}

let animatronics = [freddy, bonnie, chica, mrCupcake, foxy, goldenFreddy]