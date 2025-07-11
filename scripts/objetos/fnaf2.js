// Five Nights at Freddy's 2
var toyFreddy = {
    src: "assets/models/fnaf2/toy-freddy.glb",
    corFundo: "radial-gradient(#994B2A, #000)",
    fnaf: "2",
    temCursor: true,
    srcImg: "assets/images/fnaf2/toy-freddy/",
    swiperDescricao: [
        "Botão de Toy Freddy para seu modelo 3D",
        "Toy Freddy, Toy Bonnie e Toy Chica no menu principal",
        "Toy Freddy e Toy Chica no menu principal, com Withered Bonnie no meio",
        "Toy Freddy e Toy Bonnie no menu principal, com Withered Chica atrás deles",
        "Toy Freddy nos jornais",
        "Todos os toy animatronics no Palco",
        "Todos os toy animatronics no Palco com a lanterna ligada",
        "Toy Freddy sozinho no Palco",
        "Toy Freddy sozinho no Palco com a lanterna ligada",
        "Toy Freddy na Área de Jogos",
        "Toy Freddy no fim do corredor",
        "Toy Freddy prestes a entrar no escritório.",
        "Toy Freddy no Escritório",
    ],
    srcJumpscare: "assets/videos/fnaf2/toy-freddy.mp4",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 4m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyFreddy|ToyFreddy_Pos_09_RIG_ToyFreddy",
            nome: "Posição inicial",
            alvoCamera: "-16m 1.25m 22m",
            estatico: true,
            rotacao: -180,
        },
        jumpscare: {
            src: "RIG_ToyFreddy|ToyFreddy_Jumpscare_01_RIG_ToyFreddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.4m -1m",
        },
        desligado: {
            src: "RIG_ToyFreddy|ToyFreddy_Pos_Desk_RIG_ToyFreddy",
            nome: "Desligado",
            alvoCamera: "0m 1.25m 1.75m",
            estatico: true,
            rotacao: -180,
        },
        andando: {
            src: "RIG_ToyFreddy|ToyFreddy_MainHallway_Walk_RIG_ToyFreddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 9.5m",
            rotacao: -180,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
}

var toyBonnie = {
    src: "assets/models/fnaf2/toy-bonnie.glb",
    corFundo: "radial-gradient(#6AA2EA, #000)",
    fnaf: "2",
    temCursor: true,
    srcImg: "assets/images/fnaf2/toy-bonnie/",
    webps: [13],
    swiperDescricao: [
        "Botão de Toy Bonnie para seu modelo 3D",
        "Toy Freddy, Toy Bonnie e Toy Chica no menu principal",
        "Toy Bonnie e Toy Chica no menu principal, com Withered Freddy",
        "Toy Bonnie e Toy Freddy no menu principal, com Withered Chica atrás deles",
        "Toy Bonnie nos jornais",
        "Todos os toy animatronics no Palco",
        "Todos os toy animatronics no Palco com a lanterna ligada",
        "Toy Bonnie segurando sua guitarra na Sala de Festas 3.",
        "Toy Bonnie encarando a câmera na Sala de Festas 4",
        "Toy Bonnie encarando a câmera na Sala de Festas 4 com a lanterna ligada",
        "Toy Bonnie na Sala de Festas 2, prestes a entrar no duto de ventilação",
        "Toy Bonnie no Duto de Ventilação Direito",
        "Toy Bonnie colocando sua cabeça para fora do Duto de Ventilação Direito",
        "Toy Bonnie deslizando no Escritório enquanto o jogador usa a Máscara de Freddy Fazbear",
        "Uma foto de Toy Bonnie sem olhos, que ocasionalmente aparece após a morte do jogador",
    ],
    srcJumpscare: "assets/videos/fnaf2/toy-bonnie.mp4",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    configEx: () => {
        modelViewer.exposure = 0.75
    },
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_03_RIG_ToyBonnie",
            nome: "Posição inicial",
            alvoCamera: "4.5m 1.25m 11m",
            estatico: true,
            rotacao: 60,
        },
        jumpscare: {
            src: "RIG_ToyBonnie|ToyBonnie_Jumpscare_01_RIG_ToyBonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -1m",
        },
        agachado: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_02_RIG_ToyBonnie",
            nome: "Agachado",
            alvoCamera: "-6m 0.75m 4.5m",
            estatico: true,
            rotacao: -90,
        },
        ventilacao: {
            src: "RIG_ToyBonnie|ToyBonnie_Pos_06_RIG_ToyBonnie",
            nome: "Na ventilação",
            alvoCamera: "-7m 0.5m -3m",
            estatico: true,
            rotacao: -90,
        },
        andando: {
            src: "RIG_ToyBonnie|ToyBonnie_Trans_09_03_RIG_ToyBonnie",
            nome: "Andando",
            alvoCamera: "-5m 1m 16.5m",
            rotacao: -90,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
}

var toyChica = {
    src: "assets/models/fnaf2/toy-chica.glb",
    corFundo: "radial-gradient(#FFE794, #856D1A)",
    fnaf: "2",
    temCursor: true,
    srcImg: "assets/images/fnaf2/toy-chica/",
    swiperDescricao: [
        "Botão de Toy Chica para seu modelo 3D",
        "Toy Freddy, Toy Bonnie e Toy Chica no menu principal",
        "Toy Chica e Toy Bonnie no menu principal, com Withered Freddy",
        "Toy Chica e Toy Freddy no menu principal, com Withered Bonnie no meio",
        "Toy Chica nos jornais",
        "Todos os toy animatronics no Palco",
        "Todos os toy animatronics no Palco com a lanterna ligada",
        "Toy Chica no Salão Principal",
        "Toy Chica no Salão Principal com a lanterna ligada",
        "Toy Chica no corredor em frente ao Escritório",
        "Toy Chica na Sala de Festas 4",
        "Toy Chica na Sala de Festas 1, prestes a entrar no tubo de ventilação",
        "Toy Chica no Tubo de Ventilação Esquerdo",
        "Toy Chica colocando sua cabeça para fora do Tubo de Ventilação Esquerdo",
    ],
    srcJumpscare: "assets/videos/fnaf2/toy-chica.mp4",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 3m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_ToyChica|ToyChica_Pos_4_RIG_ToyChica",
            nome: "Posição inicial",
            alvoCamera: "-7.25m 1.15m 11.8m",
            estatico: true,
            rotacao: -120,
        },
        jumpscare: {
            src: "RIG_ToyChica|ToyChica_Jumpscare_01_RIG_ToyChica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -1m",
        },
        agachada: {
            src: "RIG_ToyChica|ToyChica_Pos_1_RIG_ToyChica",
            nome: "Agachada",
            alvoCamera: "6.25m 0.75m 4.4m",
            estatico: true,
            rotacao: 90,
        },
        ventilacao: {
            src: "RIG_ToyChica|ToyChica_Pos_5_RIG_ToyChica",
            nome: "Na ventilação",
            alvoCamera: "10m 0.5m -2m",
            estatico: true,
            rotacao: 90,
        },
        andando: {
            src: "RIG_ToyChica|ToyChica_TransHallway_RIG_ToyChica",
            nome: "Andando",
            alvoCamera: "0m 1m 8.5m",
            rotacao: -160,
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/toy-cupcake/",
    swiperDescricao: [
        "Botão de Toy Cupcake para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15000m",
    orbitaCameraMinima: "0 0 10000m",
    alvoCamera: "0m 1000m 0m",
    descricao: "O Toy Cupcake é uma versão do Cupcake que aparece em Five Nights at Freddy's 2, geralmente visto com a Toy Chica. Ele tem olhos azuis e dentes, assim como o Cupcake original, mas difere em alguns aspectos.<br><br> Por exemplo, o Toy Cupcake tem um revestimento de glacê rosa e um único dente frontal, ao contrário do Cupcake original que tem vários dentes.",
}

var mangle = {
    src: "assets/models/fnaf2/mangle.glb",
    corFundo: "radial-gradient(#f89cb5, #ca6882, #9c5164)",
    fnaf: "2",
    temCursor: true,
    srcImg: "assets/images/fnaf2/mangle/",
    swiperDescricao: [
        "Botão de Mangle para seu modelo 3D",
        "Mangle no Canto das Crianças",
        "Mangle na Área de Jogos",
        "Mangle no Canto das Premiações",
        "Mangle no Salão Principal",
        "Mangle na Sala de Festas 1",
        "Mangle na Sala de Festas 2",
        "Mangle no Duto de Ventilação Direito",
        "Mangle encarando o jogador no corredor em frente ao Escritório",
        "Withered Foxy prestes a atacar o jogador enquanto Mangle assiste tudo",
        "Mangle saindo do Duto de Ventilação Direito",
        "Mangle pendurado no teto do Escritório",
    ],
    srcJumpscare: "assets/videos/fnaf2/mangle.mp4",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/balloon-boy/",
    swiperDescricao: [
        "Botão de Balloon Boy para seu modelo 3D",
        "BB na Área de Jogos",
        "BB na Área de Jogos com a lanterna ligada",
        "BB no Duto de Ventilação Esquerdo",
        "BB saindo do Duto de Ventilação Esquerdo",
        "BB no Escritório",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    configEx: () => {
        modelViewer.exposure = 0.75
    },
    animacoes: {
        posicaoInicial: {
            src: "RIG_BalloonBoy|BalloonBoy_Pos01_RIG_BalloonBoy",
            nome: "Posição inicial",
            alvoCamera: "-14.25m 0.75m 16.25m",
            estatico: true,
            rotacao: -140,
        },
        jumpscare: {
            src: "RIG_BalloonBoy|BalloonBoy_Jumpscare_01_RIG_BalloonBoy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.25m -0.3m",
        },
        bbAgachado: {
            src: "RIG_BalloonBoy|BalloonBoy_Pos02_RIG_BalloonBoy",
            nome: "Agachado",
            alvoCamera: "10m 0.5m -2m",
            estatico: true,
            rotacao: 80,
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/puppet/",
    swiperDescricao: [
        "Botão de Balloon Boy para seu modelo 3D",
        "The Puppet emergindo da caixa",
        "The Puppet prestes a sair da caixa.",
        "Alucinação de Puppet no Salão Principal, variação 1",
        "Alucinação de Puppet no Salão Principal, variação 2",
        "Alucinação de Puppet no Salão Principal, variação 3",
        "Puppet na quarta cena do sonho",
    ],
    srcJumpscare: "assets/videos/fnaf2/puppet.mp4",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        jumpscare: {
            src: "RIG_Marionette|Puppet_Jumpscare_01_RIG_Marionette",
            nome: "Jumpscare",
            alvoCamera: "0m 0m -1.5m",
        },
        saindoDaCaixa: {
            src: "RIG_Marionette|Puppet_OutBox_RIG_Marionette",
            nome: "Saindo da caixa",
            alvoCamera: "0m 2.5m 0m",
        },
        andando: {
            src: "RIG_Marionette|Puppet_Walk_01_RIG_Marionette",
            nome: "Andando",
            alvoCamera: "0m 2m 5m",
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/withered-freddy/",
    swiperDescricao: [
        "Botão de Withered Freddy para seu modelo 3D",
        "Withered Freddy no menu principal, com Toy Bonnie e Toy Chica",
        "Withered Freddy, Withered Chica e Withered Bonnie na sala de Partes & Serviços",
        "Withered Freddy sozinho na sala de Partes & Serviços",
        "Withered Freddy no Salão Principal",
        "Withered Freddy encarando a câmera da Sala de Festas 3",
        "Withered Freddy encarando a câmera da Sala de Festas 3 com a lanterna ligada",
        "Withered Freddy no corredor em frente ao Escritório",
        "Withered Freddy dentro do Escritório",
        "A rara tela de Withered Freddy sem olhos, que pode aparecer após a inicialização do jogo",
    ],
    srcJumpscare: "assets/videos/fnaf2/withered-freddy.mp4",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Pos_Door_RIG_WitheredFreddy",
            nome: "Posição inicial",
            alvoCamera: "-0.75m 1.25m 4.25m",
            rotacao: -180,
        },
        jumpscare: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Jumpscare_RIG_WitheredFreddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.8m",
        },
        olhar: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Pos_Office_RIG_WitheredFreddy",
            nome: "Olhar",
            alvoCamera: "0m 1.25m 1.75m",
            rotacao: -180,
        },
        desligado: {
            src: "RIG_WitheredFreddy|WitheredFreddy_PosStart_RIG_WitheredFreddy",
            nome: "Desligado",
            alvoCamera: "6m 0.25m 18m",
            estatico: true,
            rotacao: -50,
        },
        andando: {
            src: "RIG_WitheredFreddy|WitheredFreddy_Path_IN_01_RIG_WitheredFreddy",
            nome: "Andando",
            alvoCamera: "0m 1.5m 1m",
            rotacao: -180,
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/withered-bonnie/",
    swiperDescricao: [
        "Botão de Withered Bonnie para seu modelo 3D",
        "Withered Bonnie no menu principal, entre Toy Freddy e Toy Chica",
        "Withered Bonnie na sala de Partes & Serviços",
        "Withered Bonnie indo ao jogador através do Salão Principal",
        "Withered Bonnie prestes a entrar no Duto de Ventilação Esquerdo através da Sala de Festas 1",
        "Withered Bonnie no Duto de Ventilação Esquerdo",
        "Withered Bonnie fora do Escritório",
        "Withered Bonnie em frente ao jogador",
    ],
    srcJumpscare: "assets/videos/fnaf2/withered-bonnie.mp4",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        posicaoInicial: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Idle_03_Rig_WitheredBonnie",
            nome: "Posição inicial",
            alvoCamera: "1.75m 1.75m -8.35m",
            rotacao: 50,
        },
        jumpscare: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Jumpscare_Rig_WitheredBonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.75m -0.5m",
        },
        olhar1: {
            src: "Rig_WitheredBonnie|WitheredBonnie_DoorOpen_Rig_WitheredBonnie",
            nome: "Olhar 1",
            alvoCamera: "1m 1.75m -0.75m",
            rotacao: 50,
        },
        olhar2: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Idle_Door_Rig_WitheredBonnie",
            nome: "Olhar 2",
            alvoCamera: "-1.25m 1.75m -3m",
            rotacao: -90,
        },
        naVentilacao: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Pos05_Rig_WitheredBonnie",
            nome: "Na ventilação",
            alvoCamera: "12.5m 0.675m -2m",
            rotacao: 90,
        },
        andando: {
            src: "Rig_WitheredBonnie|WitheredBonnie_Path_IN_01_Rig_WitheredBonnie",
            nome: "Andando",
            alvoCamera: "0m 1.75m 0m",
            rotacao: -180,
            orbitaCameraMaxima: "0 0 8m",
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/withered-chica/",
    swiperDescricao: [
        "Botão de Withered Chica para seu modelo 3D",
        "Withered Chica junto com Toy Freddy e Toy Bonnie no menu principal",
        "Withered Chica na sala Partes & Serviços",
        "Withered Chica na sala Partes & Serviços logo após Withered Bonnie ter saído",
        "Withered Chica na Sala de Festas 2",
        "Withered Chica na Sala de Festas 2 com a lanterna ligada",
        "Withered Chica na Sala de Festas 2 com a lanterna desligada",
        "Withered Chica no Duto de Ventilação Esquerdo",
        "Withered Chica no Escritório",
    ],
    srcJumpscare: "assets/videos/fnaf2/withered-chica.mp4",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredChica|WitheredChica_Idle_02_RIG_WitheredChica",
            nome: "Posição inicial",
            alvoCamera: "-5.8m 1.5m 3m",
            rotacao: -120,
        },
        jumpscare: {
            src: "RIG_WitheredChica|WitheredChica_Jumpscare_RIG_WitheredChica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.675m 0m",
        },
        olhar1: {
            src: "RIG_WitheredChica|WitheredChica_DoorOpen_RIG_WitheredChica",
            nome: "Olhar 1",
            alvoCamera: "0.75m 1.25m 0.5m",
            rotacao: -240,
        },
        olhar2: {
            src: "RIG_WitheredChica|WitheredChica_Idle_Door_RIG_WitheredChica",
            nome: "Olhar 2",
            alvoCamera: "-1m 1.4m -2.5m",
            rotacao: -90,
        },
        naVentilacao: {
            src: "RIG_WitheredChica|WitheredChica_Pos06_RIG_WitheredChica",
            nome: "Na ventilação",
            alvoCamera: "-7.5m 0.5m -3m",
            rotacao: -90,
        },
        andando: {
            src: "RIG_WitheredChica|WitheredChica_Path_IN_00_RIG_WitheredChica",
            nome: "Andando",
            alvoCamera: "0m 1.5m 0m",
            rotacao: -210,
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/withered-foxy/",
    swiperDescricao: [
        "Botão de Withered Foxy para seu modelo 3D",
        "Withered Foxy sozinho em Partes & Serviços",
        "Withered Foxy no final do corredor",
        "Uma rara tela de Withered Foxy sem olhos, que pode aparecer quando o jogador inicia uma noite",
    ],
    srcJumpscare: "assets/videos/fnaf2/withered-foxy.mp4",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5.5m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Idle_04_RIG_WitheredFoxy",
            nome: "Posição inicial",
            alvoCamera: "-2m 1.5m -11.75m",
        },
        jumpscare: {
            src: "RIG_WitheredFoxy|WitheredFoxy_JumpScare_WS_RIG_WitheredFoxy",
            nome: "Jumpscare",
            alvoCamera: "0.5m 1.5m -3m",
            rotacao: -90,
        },
        desligado: {
            src: "RIG_WitheredFoxy|WitheredFoxy_PosStart_RIG_WitheredFoxy",
            nome: "Desligado",
            alvoCamera: "6.5m 1.5m 23.25m",
            estatico: true,
            rotacao: -70,
        },
        olhar: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Pos03_Idle_RIG_WitheredFoxy",
            nome: "Olhar",
            alvoCamera: "1.75m 1.5m 7m",
            rotacao: -200,
        },
        correndo: {
            src: "RIG_WitheredFoxy|WitheredFoxy_Path_IN_04_RIG_WitheredFoxy",
            nome: "Correndo",
            alvoCamera: "-2.5m 1.75m -6.75m",
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
    temCursor: true,
    srcImg: "assets/images/fnaf2/withered-golden-freddy/",
    swiperDescricao: [
        "Botão de Withered Golden Freddy para seu modelo 3D",
        "Withered Golden Freddy no corredor a frente do Escritório",
        "Withered Golden Freddy sentado no Escritório",
    ],
    srcJumpscare: "assets/videos/fnaf2/withered-golden-freddy.mp4",
    orbitaCameraMaxima: "0 0 60m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 17.5m 2.5m",
    configEx: () => {
        modelViewer.exposure = 0.25
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf2/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare"
        },
    },
    descricao: "Withered Golden Freddy, faz uma aparição em Five Nights at Freddy's 2. Ele parece estar em um estado decrépito, com sua orelha esquerda faltando, manchas marrons escuras em seu traje e uma boa quantidade de fios expostos.<br><br> Assim como os demais animatrônicos originais, ele tem dentes em sua mandíbula superior e seu traje está desbotado e rasgado. Visivelmente aparece segurando o microfone, ao invés de apenas deixá-lo na palma de sua mão. Withered Golden Freddy só se tornará ativo na Noite 2 (embora raramente), Noite 6 e na Custom Night se ele for ativado pelo jogador.<br><br> Ao acaso, Withered Golden Freddy pode aparecer no corredor ou dentro do Escritório, sentado em uma posição semelhante a do Golden Freddy do primeiro jogo, enquanto que, no corredor, sua cabeça aparece flutuando à uma distância considerável. <br><br>Para evitar ser morto por Withered Golden Freddy, o jogador deve por colocar a Máscara de Freddy Fazbear no instante em que avistá-lo ou desligar a lanterna enquanto ele estiver no corredor.",
}
