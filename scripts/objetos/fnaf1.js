// Five Nights at Freddy's 1
var freddy = {
    src: "assets/models/fnaf1/freddy.glb",
    corFundo: "radial-gradient(#5B3C21, #000)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 6.5m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Freddy|Freddy_MenuPose_01_RIG_Freddy",
            nome: "Posição Inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: true,
        },
        parado: {
            src: "RIG_Freddy|Freddy_Pos03_Door_RIG_Freddy",
            nome: "Parado",
            alvoCamera: "-0.35m 1.25m -1.25m",
            estatico: true,
        },
        jumpscare: {
            src: "RIG_Freddy|Freddy_Jumpscare_01_RIG_Freddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -1m",
            alvoCameraJogo: "0m 0m -1m",
            orbitaCameraJogo: "-0.004831221105499585rad 1.5716068512153272rad 1.7707877722717378m",
            orbitaMinimaCameraJogo: "0 0 0.5m",
        },
        horaDoShow: {
            src: "RIG_Freddy|Freddy_Showtime_Loop_Tom_RIG_Freddy",
            nome: "Hora do Show",
            alvoCamera: "0m 1.25m 0.1m",
        },
        andando: {
            src: "RIG_Freddy|Freddy_Walk_Office03_RIG_Freddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 3m",
        },
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/fnaf1/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        musicaTema: {
            src: "assets/audios/fnaf1/freddy/musica-tema.ogg",
            volume: 0.5,
            nome: "Música Tema",
        },
        risada1: {
            src: "assets/audios/fnaf1/freddy/risada1.ogg",
            volume: 0.5,
            nome: "Risada 1",
        },
        risada2: {
            src: "assets/audios/fnaf1/freddy/risada2.ogg",
            volume: 0.5,
            nome: "Risada 2",
        },
        risada3: {
            src: "assets/audios/fnaf1/freddy/risada3.ogg",
            volume: 0.5,
            nome: "Risada 3",
        },
        fucinho: {
            src: "assets/audios/fnaf1/freddy/fucinho.ogg",
            volume: 0.5,
            nome: "Fucinho",
        },
    },
    descricao: "Freddy Fazbear é o principal antagonista de Five Nights at Freddy's. Ele é um urso animatrônico que é deixado no \"modo livre\" durante a noite, fazendo ele passear pela Pizzaria Freddy Fazbear juntamente com os outros animatrônicos até as 6:00 da manhã. <br><br> Freddy é conhecido por sua risada profunda e assustadora que ecoa pelos corredores da pizzaria. Ele é o líder da banda, geralmente segurando um microfone e vestindo um chapéu preto e uma gravata borboleta.",
}



var bonnie = {
    src: "assets/models/fnaf1/bonnie.glb",
    corFundo: "radial-gradient(#2D3A75, #000)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.5,
    alturaMinima: -1,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Bonnie|Bonnie_StagePose_Guitar_RIG_Bonnie",
            nome: "Posição Inicial",
            alvoCamera: "0m 1.5m 0.05m",
            estatico: true,
        },
        parado: {
            src: "RIG_Bonnie|Bonnie_Pos010_Hidden_RIG_Bonnie",
            nome: "Parado",
            alvoCamera: "22.4m 2.5m -0.45m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        olhar: {
            src: "RIG_Bonnie|Bonnie_Hallway_LookAt_RIG_Bonnie",
            nome: "Olhar",
            alvoCamera: "-0.2050278084228601m 1.3311434445932575m -1.5990312308357566m",
        },
        jumpscare: {
            src: "RIG_Bonnie|Bonnie_Jumpscare_01_RIG_Bonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.6m -0.25m",
        },
        horaDoShow: {
            src: "RIG_Bonnie|Bonnie_Showtime_Loop_Tom_RIG_Bonnie",
            nome: "Hora do Show",
            alvoCamera: "0m 1.35m 0.1m",
        },
        andando: {
            src: "RIG_Bonnie|Bonnie_Trans_DiningArea_B_RIG_Bonnie",
            nome: "Andando",
            alvoCamera: "12.5m 1.35m -1.4m",
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 0 0",
        },
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/fnaf1/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        grunido: {
            src: "assets/audios/fnaf1/bonnie-chica/grunido.ogg",
            volume: 0.5,
            nome: "Grunido",
        },
        andando: {
            src: "assets/audios/fnaf1/bonnie-chica/andando.ogg",
            volume: 0.5,
            nome: "Bonnie Andando",
        },
    },
    descricao: "Bonnie é um coelho animatrônico que alegra as crianças durante o dia na Pizzaria Freddy Fazbear. Ele é conhecido como Bonnie, o Coelho, e é o guitarrista da banda da pizzaria.<br><br>É um coelho de cor indigo com detalhes em azul e olhos magenta. Ele é conhecido por ser o primeiro a se mover e ser o mais ativo dos animatrônicos.",
}



var chica = {
    src: "assets/models/fnaf1/chica.glb",
    corFundo: "radial-gradient(#DCC863, #000)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Chica|Chica_MenuPose_01_RIG_Chica",
            nome: "Posição Inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: true,
        },
        parado: {
            src: "RIG_Chica|Chica_Pos06_HallwayA_RIG_Chica",
            nome: "Parada",
            alvoCamera: "7.5m 1.25m 2.75m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        olhar1: {
            src: "RIG_Chica|Chica_Hallway_LookAt_RIG_Chica",
            nome: "Olhar 1",
            alvoCamera: "0m 1.25m 2.75m",
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        olhar2: {
            src: "RIG_Chica|Chica_Finale_Pos05_RIG_Chica",
            nome: "Olhar 2",
            alvoCamera: "-57m 1.25m 53.6m",
            mudaOrbitaCamera: true,
            orbitaCamera: "-120deg 0 0",
        },
        jumpscare: {
            src: "RIG_Chica|Chica_Jumpscare_01_RIG_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m 0.25m",
        },
        horaDoShow: {
            src: "RIG_Chica|Chica_Showtime_Loop_Tom_RIG_Chica",
            nome: "Hora do Show",
            alvoCamera: "0m 1.3m 0m",
        },
        perseguicao: {
            src: "'RIG_Chica|Chica_Finale_Pos01_RIG_Chica",
            nome: "Perseguição",
            alvoCamera: "-60m 1.3m 55m",
            mudaOrbitaCamera: true,
            orbitaCamera: "150deg 0 0",
        },
        andando: {
            src: "RIG_Chica|Chica_Trans_DiningArea_A_RIG_Chica",
            nome: "Andando",
            alvoCamera: "17.5m 1.3m 1.6m",
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/fnaf1/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        grunido: {
            src: "assets/audios/fnaf1/bonnie-chica/grunido.ogg",
            volume: 0.5,
            nome: "Grunido",
        },
        andando: {
            src: "assets/audios/fnaf1/bonnie-chica/andando.ogg",
            volume: 0.5,
            nome: "Chica Andando",
        },
        cozinha: {
            src: "assets/audios/fnaf1/chica/cozinha.ogg",
            volume: 0.5,
            nome: "Chica na Cozinha",
        },
    },
    descricao: "Chica é uma das quatro principais antagonistas do jogo Five Nights at Freddy's. Ela é um robô que alegra as crianças durante o dia na Pizzaria Freddy Fazbear, junto com Freddy Fazbear e Bonnie.<br><br>É uma galinha animatrônica de cor amarela e é a segunda voz da banda. Ela é frequentemente vista carregando um cupcake.",
}



var cupcake = {
    src: "assets/models/fnaf1/cupcake.glb",
    corFundo: "radial-gradient(#f89cb5, #ca6882, #9c5164)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 100m",
    alvoCamera: "0m 15m 0m",
    descricao: "Os cupcakes animatrônicos são pequenos personagens animatrônicos em forma de cupcake que geralmente acompanham Chica e suas várias contrapartes. Eles são conhecidos por seus grandes olhos e sorriso amigável.",
}



var foxy = {
    src: "assets/models/fnaf1/foxy.glb",
    corFundo: "radial-gradient(#D25A37, #000)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -1,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Foxy_Clean|Foxy_Office01_Pos01_RIG_Foxy_Clean",
            nome: "Posição Inicial",
            alvoCamera: "17.25m 2m -9m",
            estatico: true,
        },
        olhar: {
            src: "RIG_Foxy_Clean|Foxy_Pos03_RIG_Foxy_Clean",
            nome: "Olhar",
            alvoCamera: "2m 1.5m 7.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "200deg 0 0",
        },
        sentado: {
            src: "RIG_Foxy_Clean|FoxyRepair_HeadMotion_RIG_Foxy_Clean",
            nome: "Sentado",
            alvoCamera: "0m 1m 0.25m",
        },
        jumpscare: {
            src: "RIG_Foxy_Clean|Foxy_Jumpscare_01_RIG_Foxy_Clean",
            nome: "Jumpscare",
            alvoCamera: "0m -0.75m -0.5m",
        },
        horaDoShow: {
            src: "RIG_Foxy_Clean|Foxy_Showtime_Loop_RIG_Foxy_Clean",
            nome: "Hora do Show",
            alvoCamera: "0m 1.5m 0m",
        },
        correndo: {
            src: "RIG_Foxy_Clean|FoxyRepair_Run_RIG_Foxy_Clean",
            nome: "Correndo",
            alvoCamera: "0m 1.5m -10m",
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 20m",
        },
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/fnaf1/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        cantando: {
            src: "assets/audios/fnaf1/foxy/cantando.ogg",
            volume: 0.5,
            nome: "Foxy Cantando",
        },
        correndo: {
            src: "assets/audios/fnaf1/foxy/correndo.ogg",
            volume: 0.5,
            nome: "Foxy Correndo",
        },
        batida: {
            src: "assets/audios/fnaf1/foxy/batida.ogg",
            volume: 0.5,
            nome: "Batida na Porta",
        },
    },
    descricao: "Foxy é uma grande raposa animatrônica de cor marrom-avermelhado e pele esfarrapada. Ele tem um gancho em sua mão direita e um tapa-olho em seu olho direito.<br><br>Foxy é o animatrônico mais rápido da franquia. É conhecido por sua personalidade pirata e por ser o único animatrônico que se esconde antes de atacar.",
}



var goldenFreddy = {
    src: "assets/models/fnaf1/golden-freddy.glb",
    corFundo: "radial-gradient(#4E4A03, #000)",
    fnaf: "1",
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 200m",
    alvoCamera: "0m 60m 15m",
    temAudio: true,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.2
        modelViewer.style.filter = "hue-rotate(10deg)"
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/fnaf1/golden-freddy/jumpscare-golden-freddy.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        voz: {
            src: "assets/audios/fnaf1/golden-freddy/voz-golden-freddy.ogg",
            volume: 0.5,
            nome: "Voz",
        },
        garotinha: {
            src: "assets/audios/fnaf1/golden-freddy/risada-garotinha.ogg",
            volume: 0.5,
            nome: "Risada do Poster",
        },
    },
    descricao: "Golden Freddy é um dos cinco principais antagonistas e um animatrônico secreto em Five Nights at Freddy's.<br><br>Ele é uma versão dourada de Freddy Fazbear que aparece no Escritório depois de uma certa sequência de eventos. Golden Freddy é conhecido por sua aparência fantasmagórica e por causar alucinações.",
}
