// Five Nights at Freddy's 2
var toyFreddy = {
    src: "assets/models/fnaf2/toy-freddy.glb",
    corFundo: "radial-gradient(#994B2A, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyFreddy|ToyFreddy_Pos_09_RIG_ToyFreddy",
            nome: "Posição inicial",
            alvoCamera: "-16m 1.25m 22m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        desligado: {
            src: "RIG_ToyFreddy|ToyFreddy_Pos_Desk_RIG_ToyFreddy",
            nome: "Desligado",
            alvoCamera: "0m 1.25m 1.75m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        jumpscare: {
            src: "RIG_ToyFreddy|ToyFreddy_Jumpscare_01_RIG_ToyFreddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.4m -1m",
            estatico: false,
        },
        andando: {
            src: "RIG_ToyFreddy|ToyFreddy_MainHallway_Walk_RIG_ToyFreddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 9.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Toy Freddy é uma versão redesenhada do Freddy Fazbear original. Ele é um urso marrom com uma coloração mais clara em sua barriga, rosto e orelhas internas.<br><br> Ele é mais ativo que o Freddy Fazbear original, por começar a ser ativo já na noite. Curiosamente, Toy Freddy parece ser o único animatrônico que muda de aparência enquanto se move pela pizzaria.",
}

var toyBonnie = {
    src: "assets/models/fnaf2/toy-bonnie.glb",
    corFundo: "radial-gradient(#6AA2EA, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
    },
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_03_RIG_ToyBonnie",
            nome: "Posição inicial",
            alvoCamera: "4.5m 1.25m 11m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-60deg 0 6m",
        },
        jumpscare: {
            src: "RIG_ToyBonnie|ToyBonnie_Jumpscare_01_RIG_ToyBonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 0 6m",
        },
        agachado: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_02_RIG_ToyBonnie",
            nome: "Agachado",
            alvoCamera: "-6m 0.75m 4.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 0 6m",
        },
        ventilacao: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_06_RIG_ToyBonnie",
            nome: "Na ventilação",
            alvoCamera: "-7m 0.5m -3m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 0 6m",
        },
        andando: {
            src: "RIG_ToyBonnie|ToyBonnie_Trans_09_03_RIG_ToyBonnie",
            nome: "Andando",
            alvoCamera: "-5m 1m 16.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 0 6m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Toy Bonnie é uma versão redesenhada do Bonnie original. Ele é colorido de um azul brilhante, com pálpebras roxas, e características mais arredondadas.<br><br> Ele carrega uma guitarra no palco, como o Bonnie original. Uma curiosidade interessante é que Toy Bonnie parece ter pupilas que mudam de tamanho, o que levou muitas pessoas a acreditar que ele está realmente vivo.",
}

var toyChica = {
    src: "assets/models/fnaf2/toy-chica.glb",
    corFundo: "radial-gradient(#FFE794, #856D1A)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 3m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyChica|ToyChica_Pos_4_RIG_ToyChica",
            nome: "Posição inicial",
            alvoCamera: "-7.25m 1.15m 11.8m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "120deg 0 5m",
        },
        jumpscare: {
            src: "RIG_ToyChica|ToyChica_Jumpscare_01_RIG_ToyChica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 0 5m",
        },
        agachada: {
            src: "RIG_ToyChica|ToyChica_Pos_1_RIG_ToyChica",
            nome: "Agachada",
            alvoCamera: "6.25m 0.75m 4.4m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 5m",
        },
        ventilacao: {
            src: "RIG_ToyChica|ToyChica_Pos_5_RIG_ToyChica",
            nome: "Na ventilação",
            alvoCamera: "10m 0.5m -2m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 5m",
        },
        andando: {
            src: "RIG_ToyChica|ToyChica_TransHallway_RIG_ToyChica",
            nome: "Andando",
            alvoCamera: "0m 1m 8.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "160deg 0 5m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "(Erro do modelo: Seu bico não é vermelho, é laranja) <br><br> Toy Chica é uma versão redesenhada da Chica original. Ela agora tem um corpo mais feminino e parece estar usando um traje rosa na parte inferior de seu corpo.<br><br> Ela pode ser vista segurando um cupcake em um prato no cartaz, assim como a encarnação original de seu personagem. Ao contrário dos outros animatrônicos de brinquedo, Toy Chica nunca é vista com os olhos de endoesqueleto.",
}

var toyCupcake = {
    src: "assets/models/fnaf2/toy-cupcake.glb",
    corFundo: "radial-gradient(#fff, #DD47D2)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 15000m",
    orbitaCameraMinima: "0 0 10000m",
    alvoCamera: "0m 1000m 0m",
    descricao: "O Toy Cupcake é uma versão do Cupcake que aparece em Five Nights at Freddy's 2, geralmente visto com a Toy Chica. Ele tem olhos azuis e dentes, assim como o Cupcake original, mas difere em alguns aspectos.<br><br> Por exemplo, o Toy Cupcake tem um revestimento de glacê rosa e um único dente frontal, ao contrário do Cupcake original que tem vários dentes.",
}

var Mangle = {
    src: "assets/models/fnaf2/mangle.glb",
    corFundo: "radial-gradient(#f89cb5, #ca6882, #9c5164)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.5,
    alturaMinima: -0.5,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.5
    },
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Mangle2|Mangle_Pos_Door_RIG_Mangle2",
            nome: "Posição inicial",
            alvoCamera: "0.75m 2m 4.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "190deg 0 0",
        },
        aproximando: {
            src: "RIG_Mangle2|Mangle_EnterRoom_RIG_Mangle2",
            nome: "Se aproximando",
            alvoCamera: "0.25m 2m 3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        janela: {
            src: "RIG_Mangle2|Mangle_LWindow_Idle_RIG_Mangle2",
            nome: "Na janela",
            alvoCamera: "1.25m 2.25m -0.75m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "150deg 0 0",
        },
        desligada: {
            src: "RIG_Mangle2|Mangle_Pos_12_RIG_Mangle2",
            nome: "Desligada",
            alvoCamera: "-15.1m 0.25m 4.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-50deg 0 0",
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
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
        ruido: {
            src: "assets/audios/fnaf2/mangle-nightmare-mangle/ruido.ogg",
            volume: 0.5,
            nome: "Ruido"
        },
        andando: {
            src: "assets/audios/fnaf2/mangle/andando.ogg",
            volume: 0.5,
            nome: "Andando"
        },
    },
    descricao: "Mangle é uma versão redesenhada de Foxy. No entanto, ao contrário dos outros animatrônicos, ela está em um estado de desfiguração e contorção quase ao ponto de mutilação mecânica. Ela também possui uma segunda cabeça, que se parece inteiramente com a cabeça de um endoesqueleto, e nela está o outro olho de Mangle.<br><br>A verdadeira causa de Mangle ser um personagem severamente desfigurado é a sua exposição às crianças, que constantemente destruíram o animatrônico tirando peça por peça.",
}

var balloonBoy = {
    src: "assets/models/fnaf2/balloon-boy.glb",
    corFundo: "radial-gradient(#000050, #500000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
    },
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_BalloonBoy|BalloonBoy_Pos01_RIG_BalloonBoy",
            nome: "Posição inicial",
            alvoCamera: "-14.25m 0.75m 16.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "140deg 0 0",
        },
        jumpscare: {
            src: "RIG_BalloonBoy|BalloonBoy_Jumpscare_01_RIG_BalloonBoy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -0.3m",
            estatico: false,
        },
        bbAgachado: {
            src: "RIG_BalloonBoy|BalloonBoy_Pos02_RIG_BalloonBoy",
            nome: "Agachado",
            alvoCamera: "10m 0.5m -2m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-80deg 0 0",
        },
    },
    audios: {
        hi: {
            src: "assets/audios/fnaf2/balloon-boy/hi.ogg",
            volume: 0.5,
            nome: "Hi"
        },
        hello: {
            src: "assets/audios/fnaf2/balloon-boy/hello.ogg",
            volume: 0.5,
            nome: "Hello"
        },
        risada: {
            src: "assets/audios/fnaf2/balloon-boy/risada.ogg",
            volume: 0.5,
            nome: "Risada"
        },
    },
    descricao: "Balloon Boy, muitas vezes abreviado como BB, é um animatrônico humanoide. Ele segura um balão listrado de vermelho e amarelo em uma mão e uma placa que diz \"Balloons!\" na outra. Uma curiosidade é que Balloon Boy é o único animatrônico que não ataca diretamente o jogador.",
}

var puppet = {
    src: "assets/models/fnaf2/puppet.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Marionette|Puppet_Jumpscare_01_RIG_Marionette",
            nome: "Jumpscare",
            alvoCamera: "0m 0m -1.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        saindoDaCaixa: {
            src: "RIG_Marionette|Puppet_OutBox_RIG_Marionette",
            nome: "Saindo da caixa",
            alvoCamera: "0m 2.5m 0m",
            estatico: false,
        },
        andando: {
            src: "RIG_Marionette|Puppet_Walk_01_RIG_Marionette",
            nome: "Andando",
            alvoCamera: "0m 2m 5m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
        musicBox: {
            src: "assets/audios/fnaf2/puppet-nightmarionne/music-box.ogg",
            volume: 0.5,
            nome: "Music Box"
        },
        perseguicao: {
            src: "assets/audios/fnaf2/puppet/perseguicao.ogg",
            volume: 0.5,
            nome: "Perseguição"
        },
    },
    descricao: "Puppet, também conhecida como Marionette, é um fantoche animatrônico e o principal antagonista de Five Nights at Freddy's 2. Ela fica na Prize Corner e só aparecerá se a caixa de música for deixada desenrolada por muito tempo.",
}

var witheredFreddy = {
    src: "assets/models/fnaf2/withered-freddy.glb",
    corFundo: "radial-gradient(#8B412D, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Pos_Door_RIG_WitheredFreddy",
            nome: "Posição inicial",
            alvoCamera: "-0.75m 1.25m 4.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        jumpscare: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Jumpscare_RIG_WitheredFreddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.8m",
            estatico: false,
        },
        olhar: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Pos_Office_RIG_WitheredFreddy",
            nome: "Olhar",
            alvoCamera: "0m 1.25m 1.75m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0m",
        },
        desligado: {
            src: "RIG_WitheredFreddy|WitheredFreddy_PosStart_RIG_WitheredFreddy",
            nome: "Desligado",
            alvoCamera: "6m 0.25m 18m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "50deg 0 0",
        },
        andando: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Path_IN_01_RIG_WitheredFreddy",
            nome: "Andando",
            alvoCamera: "0m 1.5m 1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Freddy é um urso animatrônico masculino de cor marrom que aparece em Five Nights at Freddy's 2 como um antagonista principal a partir da noite 3. Ele caiu em mau estado, assim como os outros três animatrônicos do primeiro jogo. <br><br>Comparado aos outros, Withered Freddy parece estar um pouco menos danificado, talvez o menos. Seus danos nos braços são semelhantes aos de Foxy, mostrando partes de seu endoesqueleto. Além disso, seu joelho esquerdo também está danificado, com fios visíveis pulando para fora.",
}

var witheredBonnie = {
    src: "assets/models/fnaf2/withered-bonnie.glb",
    corFundo: "radial-gradient(#3D3374, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Idle_03_Rig_WitheredBonnie",
            nome: "Posição inicial",
            alvoCamera: "1.75m 1.75m -8.35m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-50deg 1.5rad 0",
        },
        jumpscare: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Jumpscare_Rig_WitheredBonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.75m -0.5m",
            estatico: false,
             mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        olhar1: {
            src: "Rig_WitheredBonnie|WitheredBonnie_DoorOpen_Rig_WitheredBonnie",
            nome: "Olhar 1",
            alvoCamera: "1m 1.75m -0.75m",
            estatico: false,
             mudaOrbitaCamera: true,
            orbitaCamera: "-50deg 1.5rad 0",
        },
        olhar2: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Idle_Door_Rig_WitheredBonnie",
            nome: "Olhar 2",
            alvoCamera: "-1.25m 1.75m -3m",
            estatico: false,
             mudaOrbitaCamera: true,
            orbitaCamera: "90deg 1.5rad 0",
        },
        naVentilacao: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Pos05_Rig_WitheredBonnie",
            nome: "Na ventilação",
            alvoCamera: "12.5m 0.675m -2m",
            estatico: false,
             mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        andando: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Path_IN_01_Rig_WitheredBonnie",
            nome: "Andando",
            alvoCamera: "0m 1.75m 0m",
            estatico: false,
             mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Bonnie, um coelho animatrônico masculino de cor azul, também aparece em Five Nights at Freddy's 2. No segundo jogo, Withered Bonnie tem um design muito diferente - assim como Withered Freddy, ele também tem dois botões em seu peitoral.<br><br> Seu rosto está eviscerado, com a maior parte dele removida, deixando apenas a sua mandíbula, com mais dentes do que ele possui no primeiro jogo. Ele não possui braço esquerdo, tendo em seu lugar um monte de fios.",
}

var witheredChica = {
    src: "assets/models/fnaf2/withered-chica.glb",
    corFundo: "radial-gradient(#CCAB52, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredChica|WitheredChica_Idle_02_RIG_WitheredChica",
            nome: "Posição inicial",
            alvoCamera: "-5.8m 1.5m 3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "120deg 1.5rad 0m",
        },
        jumpscare: {
            src: "RIG_WitheredChica|WitheredChica_Jumpscare_RIG_WitheredChica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.675m 0m",
            estatico: false,
        },
        olhar1: {
            src: "RIG_WitheredChica|WitheredChica_DoorOpen_RIG_WitheredChica",
            nome: "Olhar 1",
            alvoCamera: "0.75m 1.25m 0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "240deg 1.5rad 0m",
        },
        olhar2: {
            src: "RIG_WitheredChica|WitheredChica_Idle_Door_RIG_WitheredChica",
            nome: "Olhar 2",
            alvoCamera: "-1m 1.4m -2.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 1.5rad 0m",
        },
        naVentilacao: {
            src: "RIG_WitheredChica|WitheredChica_Pos06_RIG_WitheredChica",
            nome: "Na ventilação",
            alvoCamera: "-7.5m 0.5m -3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 1.5rad 0m",
        },
        andando: {
            src: "RIG_WitheredChica|WitheredChica_Path_IN_00_RIG_WitheredChica",
            nome: "Andando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "210deg 1.5rad 0m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Chica é uma galinha animatrônica feminina de cor amarela que aparece em Five Nights at Freddy's 2. Ela caiu em desuso, assim como os outros animatrônicos originais. A forma de Chica mudou muito, até um ponto que ela mal se assemelha a sua aparência original.<br><br> Seu bico foi reformulado e se transformou em uma mandíbula como a de Withered Freddy e Withered Bonnie. Seu bico também parece mais aguçado, semelhante ao de uma galinha real, e ela agora possui mais dentes na parte superior e inferior desse bico.",
}

var witheredFoxy = {
    src: "assets/models/fnaf2/withered-foxy.glb",
    corFundo: "radial-gradient(#D74037, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5.5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Idle_04_RIG_WitheredFoxy",
            nome: "Posição inicial",
            alvoCamera: "-2m 1.5m -11.75m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_WitheredFoxy|WitheredFoxy_JumpScare_WS_RIG_WitheredFoxy",
            nome: "Jumpscare",
            alvoCamera: "0.5m 1.5m -3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "90deg 0 0",
        },
        desligado: {
            src: "RIG_WitheredFoxy|WitheredFoxy_PosStart_RIG_WitheredFoxy",
            nome: "Desligado",
            alvoCamera: "6.5m 1.5m 23.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "70deg 1.5rad 0",
        },
        olhar: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Pos03_Idle_RIG_WitheredFoxy",
            nome: "Olhar",
            alvoCamera: "1.75m 1.5m 7m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "200deg 0 0",
        },
        correndo: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Path_IN_04_RIG_WitheredFoxy",
            nome: "Correndo",
            alvoCamera: "-2.5m 1.75m -6.75m",
            estatico: false,
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 15m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Foxy é uma raposa animatrônica masculina de cor carmesim que aparece em Five Nights at Freddy's 2. Ele está em um estado esfarrapado, assim como os animatrônicos originais que apareceram no segundo jogo. <br><br>O traje de Withered Foxy tornou-se ainda mais esfarrapado, e sua orelha esquerda é completamente mecânica agora. Os dentes de seu endoesqueleto são bastante visíveis, assim como o dos outros animatrônicos antigos.",
}

var witheredGoldenFreddy = {
    src: "assets/models/fnaf2/withered-golden-freddy.glb",
    corFundo: "radial-gradient(#593906, #000)",
    fnaf: "2",
    orbitaCameraMaxima: "0 0 60m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 17.5m 2.5m",
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.25
    },
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Golden Freddy, faz uma aparição em Five Nights at Freddy's 2. Ele parece estar em um estado decrépito, com sua orelha esquerda faltando, manchas marrons escuras em seu traje e uma boa quantidade de fios expostos.<br><br> Assim como os demais animatrônicos originais, ele tem dentes em sua mandíbula superior e seu traje está desbotado e rasgado. Visivelmente aparece segurando o microfone, ao invés de apenas deixá-lo na palma de sua mão. Withered Golden Freddy só se tornará ativo na Noite 2 (embora raramente), Noite 6 e na Custom Night se ele for ativado pelo jogador.<br><br> Ao acaso, Withered Golden Freddy pode aparecer no corredor ou dentro do Escritório, sentado em uma posição semelhante a do Golden Freddy do primeiro jogo, enquanto que, no corredor, sua cabeça aparece flutuando à uma distância considerável. <br><br>Para evitar ser morto por Withered Golden Freddy, o jogador deve por colocar a Máscara de Freddy Fazbear no instante em que avistá-lo ou desligar a lanterna enquanto ele estiver no corredor.",
}
