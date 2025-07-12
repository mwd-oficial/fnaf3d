// Five Nights at Freddy's 3
var phantomFreddy = {
    src: "assets/models/fnaf3/phantom-freddy.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-freddy/",
    swiperDescricao: [
        "Botão de Phantom Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 250m",
    orbitaCameraMinima: "0 0 250m",
    animacoes: {
        posicaoInicial: {
            src: "phantomfreddy_Bowtie_skeleton|idle",
            nome: "Posição inicial",
            alvoCamera: "0m 55m 0m",
        },
        seAbaixando: {
            src: "phantomfreddy_Bowtie_skeleton|cloack",
            nome: "Se abaixando",
            alvoCamera: "0m 55m 0m",
        },
        andando: {
            src: "phantomfreddy_Bowtie_skeleton|walk",
            nome: "Andando",
            alvoCamera: "0m 55m 10m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf3/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Phantom Freddy é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. Ele é uma alucinação de um Freddy Fazbear danificado e queimado do segundo jogo.<br><br> Ele tem a mesma aparência de Golden Freddy, mas com pupilas brancas. Ele parece estar chamuscado ou queimado, possivelmente prenunciando o incêndio que ocorreu no estabelecimento.",
}

var phantomChica = {
    src: "assets/models/fnaf3/phantom-chica.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-chica/",
    swiperDescricao: [
        "Botão de Phantom Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 300m",
    orbitaCameraMinima: "0 0 250m",
    alvoCamera: "0m 60m 1m",
    configEx: () => {
        modelViewer.exposure = 0.5
        modelViewer.style.filter = "hue-rotate(35deg)"
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf3/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original)<br><br>Phantom Chica é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. Ela é uma alucinação de uma Chica queimada e danificada.<br><br> Ela tem, essencialmente, o mesmo modelo que Chica do primeiro jogo, mas ela não tem olhos, em vez disso, tem pupilas brancas como as de Springtrap e os outros fantasmas.",
}

var phantomFoxy = {
    src: "assets/models/fnaf3/phantom-foxy.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-foxy/",
    swiperDescricao: [
        "Botão de Phantom Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 300m",
    orbitaCameraMinima: "0 0 250m",
    alvoCamera: "0m 65m 1m",
    configEx: () => {
        modelViewer.style.filter = "hue-rotate(60deg)"
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf3/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original)<br><br>Phantom Foxy é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. Ele é uma alucinação de um Foxy queimado e danificado.<br><br> Ele se assemelha muito ao Foxy Withered do segundo jogo, mas não tem olhos e, em vez disso, tem uma pupila branca em seu olho esquerdo.",
}

var phantomMangle = {
    src: "assets/models/fnaf3/phantom-mangle.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-mangle/",
    swiperDescricao: [
        "Botão de Phantom Mangle para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    configEx: () => {
        modelViewer.style.mixBlendMode = "hard-light"
    },
    animacoes: {
        posicaoInicial: {
            src: "RIG_Mangle2|Mangle_Pos_Door_RIG_Mangle2",
            nome: "Posição inicial",
            alvoCamera: "0.75m 2m 4.5m",
            estatico: true,
            rotacao: -190,
        },
        aproximando: {
            src: "RIG_Mangle2|Mangle_EnterRoom_RIG_Mangle2",
            nome: "Se aproximando",
            alvoCamera: "0.25m 2m 3m",
            rotacao: -180,
        },
        janela: {
            src: "RIG_Mangle2|Mangle_LWindow_Idle_RIG_Mangle2",
            nome: "Na janela",
            alvoCamera: "1.25m 2.25m -0.75m",
            rotacao: -150,
        },
        desligada: {
            src: "RIG_Mangle2|Mangle_Pos_12_RIG_Mangle2",
            nome: "Desligada",
            alvoCamera: "-15.1m 0.25m 4.25m",
            estatico: true,
            rotacao: 50,
        },
        ventilacao: {
            src: "RIG_Mangle2|Mangle_Repair_Phase2_Idle_RIG_Mangle2",
            nome: "Na ventilação",
            alvoCamera: "0m 0.5m 1.25m",
            estatico: true,
        },
        correndo: {
            src: "RIG_Mangle2|Mangle_Repair_Phase1_RIG_Mangle2",
            nome: "Correndo",
            alvoCamera: "0m 0.5m -3.5m",
        },
    },
    audios: {
        ruido: {
            src: "assets/audios/fnaf3/phantom-mangle/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original)<br><br>Phantom Mangle é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. É uma alucinação de um Mangle queimado e danificado.<br><br> Phantom Mangle tem, essencialmente, o mesmo modelo que Mangle do segundo jogo, mas com uma aparência queimada.",
}

var phantomBalloonBoy = {
    src: "assets/models/fnaf3/phantom-balloon-boy.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-balloon-boy/",
    swiperDescricao: [
        "Botão de Phantom Balloon Boy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    configEx: () => {
        modelViewer.style.mixBlendMode = "hard-light"
        modelViewer.exposure = 2
    },
    animacoes: {
        posicaoInicial: {
            src: "RIG_BalloonBoy|BalloonBoy_Idle_04_RIG_BalloonBoy",
            nome: "Posição inicial",
            alvoCamera: "-1.85m 0.85m -10.1m",
        },
        jumpscare: {
            src: "RIG_BalloonBoy|BalloonBoy_Jumpscare_01_RIG_BalloonBoy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -0.3m",
        },
        bbVoando: {
            src: "RIG_BalloonBoy|BalloonBoy_Idle_03_RIG_BalloonBoy",
            nome: "Voando",
            alvoCamera: "1.2m 1.25m -5.8m",
        },
        bbAgachado: {
            src: "RIG_BalloonBoy|BalloonBoy_Pos02_RIG_BalloonBoy",
            nome: "Agachado",
            alvoCamera: "10m 0.5m -2m",
            estatico: true,
            rotacao: 80,
        },
        bbCorrendo: {
            src: "RIG_BalloonBoy|BalloonBoy_Path_IN_04_RIG_BalloonBoy",
            nome: "Correndo",
            alvoCamera: "-1.5m 1m -6.8m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf3/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original)<br><br>Phantom Balloon Boy, também conhecido como Phantom BB, é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. Ele é uma alucinação de um BB queimado e danificado.",
}

var phantomPuppet = {
    src: "assets/models/fnaf3/phantom-puppet.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/phantom-puppet/",
    swiperDescricao: [
        "Botão de Phantom Puppet para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0m 0m 250m",
    orbitaCameraMinima: "0m 0m 150m",
    alvoCamera: "0m 50m 0m",
    configEx: () => {
        modelViewer.style.filter = "contrast(2) hue-rotate(75deg)"
        modelViewer.style.mixBlendMode = "hard-light"
        modelViewer.exposure = 2.5
    },
    audios: {
        ruido: {
            src: "assets/audios/fnaf3/phantom-puppet/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original)<br><br>Phantom Puppet é um dos antagonistas secundários e seis animatrônicos fantasmas que apareceram pela primeira vez em Five Nights at Freddy's 3. É uma alucinação de um Puppet queimado e danificado.",
}

var springtrap = {
    src: "assets/models/fnaf3/springtrap.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "3",
    temCursor: true,
    srcImg: "assets/images/fnaf3/springtrap/",
    swiperDescricao: [
        "Botão de Springtrap para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 3m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_SpringTrap|Springtrap_InvisibleTrans_Vents_RIG_SpringTrap",
            nome: "Posição inicial",
            alvoCamera: "-0.6m 1.25m 3.35m",
            rotacao: -180,
        },
        jumpscare: {
            src: "RIG_SpringTrap|Springtrap_Jumpscare_01_RIG_SpringTrap",
            nome: "Jumpscare",
            alvoCamera: "-0.1m -0.5m -0.25m",
        },
        andando: {
            src: "RIG_SpringTrap|Springtrap_Trans_02_01_RIG_SpringTrap",
            nome: "Andando",
            alvoCamera: "-3.5m 1.25m 6.5m",
            rotacao: -180,
        },
        ventilacao: {
            src: "RIG_SpringTrap|Springtrap_Vent_11_RIG_SpringTrap",
            nome: "Na ventilação",
            alvoCamera: "8.25m 0.5m 20m",
            rotacao: -90,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf3/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        iAlwaysComeBack: {
            src: "assets/audios/fnafffps/scraptrap/i-always-come-back.ogg",
            volume: 0.5,
            nome: "I always come back",
        },
        ventilacao: {
            src: "assets/audios/fnaf3/springtrap/ventilacao.ogg",
            volume: 0.5,
            nome: "Na ventilação",
        },
        grunido: {
            src: "assets/audios/fnaf3/springtrap/grunido.ogg",
            volume: 0.5,
            nome: "Grunido",
        },
    },
    descricao: "(Springtrap é a segunda forma de William Afton)<br><br> Springtrap é o principal antagonista e o único animatrônico verdadeiro em Five Nights at Freddy's 3. Ele é o único inimigo que pode dar um Game Over ao jogador. <br><br> Ele aparece como um traje de molas de cor oliva desbotada, com cores mais escuras em seu estômago e dentro de suas orelhas. Seu visual assustador e sua história trágica o tornam um dos personagens mais icônicos da franquia.",
}

