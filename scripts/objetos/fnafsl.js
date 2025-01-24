// Five Nights at Freddy's: Sister Location

var circusBaby = {
    src: "assets/models/fnafsl/circus-baby.glb",
    corFundo: "radial-gradient(#7D1726, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/circus-baby/",
    swiperDescricao: [
        "Botão de Circus Baby para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6.5m",
    orbitaCameraMinima: "0 0 6m",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_CircusBaby|AS_SL_O_CB_Ice_IClose_L_SK_CircusBaby",
            nome: "Posição inicial",
            alvoCamera: "0m 1.35m -1.75m",
            estatico: false,
        },
        jumpscare: {
            src: "SK_CircusBaby|AS_SL_O_CircusBaby_JumpScare_Anim_SK_CircusBaby",
            nome: "Jumpscare",
            alvoCamera: "1m -0.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        abrindoCavidade: {
            src: "SK_CircusBaby|AS_SL_O_CB_Ice_Open_L_SK_CircusBaby",
            nome: "Abrindo cavidade",
            alvoCamera: "0m 1.35m -1.5m",
            estatico: false,
        },
        fechandoCavidade: {
            src: "SK_CircusBaby|AS_SL_O_CB_Ice_Close_L_SK_CircusBaby",
            nome: "Fechando cavidade",
            alvoCamera: "0m 1.35m -1.75m",
            estatico: false,
        },
        andando: {
            src: "SK_CircusBaby|AS_SL_O_CircusBaby_StepIn_R_SK_CircusBaby",
            nome: "Andando",
            alvoCamera: "0m 1.25m 3.75m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "175deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsl/circus-baby/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsl/circus-baby/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsl/circus-baby/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Circus Baby, também conhecida como simplesmente \"Baby\", é a principal antagonista de Five Nights at Freddy's: Sister Location. Ela é um animatrônico feminino com uma aparência geral semelhante à de um palhaço. <br><br> Baby tem cabelos vermelhos em tranças, um vestido vermelho e um pequeno nariz vermelho. Seus olhos costumavam ser azuis, mas agora são verdes. Ela também segura um microfone em sua mão esquerda. No entanto, tenha cuidado! Ela é traiçoeira e perigosa. <br><br> Para evitá-la, siga as dicas do jogo e fique atento aos seus movimentos. Uma curiosidade: Baby é a alma da filha de William Afton, Elizabeth, e também abriga sua própria consciência.",
}

var funtimeFreddy = {
    src: "assets/models/fnafsl/funtime-freddy.glb",
    corFundo: "radial-gradient(#B96FA3, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/funtime-freddy/",
    swiperDescricao: [
        "Botão de Funtime Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_FTFreddy|AS_FTFreddy_Splash_Pose_SK_FTFreddy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: true,
        },
        jumpscare: {
            src: "SK_FTFreddy|AS_SL_BR_FTFreddy_Jumpscare_SK_FTFreddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.75m",
            estatico: false,
        },
        seAproximando: {
            src: "SK_FTFreddy|AS_SL_BR_FTFreddy_ConsoleAdvL01_SK_FTFreddy",
            nome: "Se aproximando",
            alvoCamera: "0m 1.25m -0.5m",
            estatico: false,
        },
        seAfastando: {
            src: "SK_FTFreddy|AS_SL_BR_FTFreddy_ConsoleRetL01_SK_FTFreddy",
            nome: "Se afastando",
            alvoCamera: "0m 1.25m -0.5m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare-fre.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsl/funtime-freddy/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsl/funtime-freddy/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsl/funtime-freddy/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        praDireita: {
            src: "assets/audios/fnafsl/funtime-freddy/pra-direita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnafsl/funtime-freddy/pra-esquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Funtime Freddy é um animatrônico e um dos antagonistas principais de Five Nights at Freddy's: Sister Location. Ele é a versão \"Funtime\" de Freddy Fazbear, o principal antagonista nos outros jogos da série Five Nights at Freddy's. <br><br> O design de Funtime Freddy tem um esquema de cores branco metálico com detalhes em malva. Ele tem um fantoche de mão Bonnie substituindo sua mão direita. Durante o jogo, ele se refere ao fantoche como \"Bon-Bon\". Funtime Freddy também possui duas placas faciais que podem se abrir. <br><br> Durante a terceira noite e a Noite Personalizada, o fantoche de mão pode se mover e atacar o jogador. Funtime Freddy é uma das atrações principais da Circus Baby's Entertainment and Rental.",
}

var bonBon = {
    src: "assets/models/fnafsl/bon-bon.glb",
    corFundo: "radial-gradient(#0D47A5, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/bon-bon/",
    swiperDescricao: [
        "Botão de Bon-Bon para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 2m",
    orbitaCameraMinima: "0 0 2m",
    temAltura: true,
    alturaMaxima: 0.175,
    alturaMinima: -0.175,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Bonbon|AS_BonBon_Splash_Pose_SK_Bonbon",
            nome: "Posição inicial",
            alvoCamera: "-0.5m 1.7m 0.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        jumpscare: {
            src: "SK_Bonbon|AS_BonBon_Jumpscare_SK_Bonbon",
            nome: "Jumpscare",
            alvoCamera: "0.3m 0m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        olhar: {
            src: "SK_Bonbon|AS_SL_BR_BonBon_StagePose03_SK_Bonbon",
            nome: "Olhar",
            alvoCamera: "-0.5m 2.1m 0.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        acenando: {
            src: "SK_Bonbon|AS_SL_O_BonBon_PeekHallL_Idle_SK_Bonbon",
            nome: "Acenando",
            alvoCamera: "1.5m 1.1m -4.6m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare-enn-bon-bal.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        movimentacao: {
            src: "assets/audios/fnafsl/bon-bon/movimentacao.ogg",
            volume: 0.5,
            nome: "Movimentação",
        },
        defesa: {
            src: "assets/audios/fnafsl/bon-bon/defesa.ogg",
            volume: 0.5,
            nome: "Defesa",
        },
    },
    descricao: "Bon-Bon, também chamado de \"Bonnie Puppet\", é um personagem secundário em Five Nights at Freddy's: Sister Location e um antagonista na Custom Night do jogo. Ele é o fantoche de mão de Funtime Freddy, uma versão em miniatura do próprio Bonnie. <br><br> Sua aparência física é semelhante à de Bonnie, com uma coloração azul metálica e detalhes em azul claro. Ele tem olhos roxos e usa um laço vermelho. <br><br> Durante o jogo, Bon-Bon ajuda a acalmar Funtime Freddy e mantê-lo sob controle. No entanto, os jogadores devem ficar atentos, pois ele pode se esconder e pular para um susto se não pressionarem o botão sob seu laço a tempo. Em resumo, para evitar Bon-Bon, é importante prestar atenção aos seus movimentos e seguir as instruções do jogo.",
}

var ballora = {
    src: "assets/models/fnafsl/ballora.glb",
    corFundo: "radial-gradient(#443F7F, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/ballora/",
    swiperDescricao: [
        "Botão de Ballora para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5.5m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Ballora|AS_SL_BG_Ballora_WalkPirouette_SK_Ballora",
            nome: "Posição inicial",
            alvoCamera: "0m 1.175m 0m",
            estatico: true,
        },
        jumpscare: {
            src: "SK_Ballora|AS_Ballora_Jumpscare_SK_Ballora",
            nome: "Jumpscare",
            alvoCamera: "0.5m -0.5m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        dancando: {
            src: "SK_Ballora|AS_SL_BG_Ballora_WalkPirouette_Spin_SK_Ballora",
            nome: "Dançando",
            alvoCamera: "0m 1.175m 0m",
            estatico: true,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare-enn-bon-bal.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        musica: {
            src: "assets/audios/fnafsl/ballora/musica.ogg",
            volume: 0.5,
            nome: "Música",
        },
        cantando: {
            src: "assets/audios/fnafsl/ballora/cantando.ogg",
            volume: 0.5,
            nome: "Cantando",
        },
    },
    descricao: "Ballora, a misteriosa animatrônica bailarina de Five Nights at Freddy's: Sister Location, é uma figura intrigante. Ela se assemelha a uma verdadeira bailarina, com um corpo esguio e curvas graciosas. <br><br> Em termos de comportamento e história, Ballora era originalmente a principal atração da Ballora Gallery na Circus Baby's Entertainment and Rental. Ela faz parte da série \"Funtime\" de animatrônicos criados por William Afton para sequestrar e assassinar crianças. <br><br> Uma curiosidade fascinante sobre Ballora é que ela é sempre vista em seus sapatos de ponta, como uma verdadeira bailarina, e seus olhos permanecem fechados, exceto durante seu jumpscare na Ballora Gallery. Sua presença misteriosa e movimentos graciosos escondem sua verdadeira natureza sinistra.",
}

var funtimeFoxy = {
    src: "assets/models/fnafsl/funtime-foxy.glb",
    corFundo: "radial-gradient(#905380, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/funtime-foxy/",
    swiperDescricao: [
        "Botão de Funtime Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "SK_FTFoxy|AS_FTFoxy_Jumpscare_SK_FTFoxy",
            nome: "Jumpscare",
            alvoCamera: "0.75m -0.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-95deg 0 0",
        },
        olhar: {
            src: "SK_FTFoxy|AS_SL_O_FTFoxy_CurtainPose_A_SK_FTFoxy",
            nome: "Olhar",
            alvoCamera: "-37.75m 1.25m 8.9m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        correndo: {
            src: "SK_FTFoxy|AS_SL_O_FTFoxy_Run_Hallway_SK_FTFoxy",
            nome: "Correndo",
            alvoCamera: "-56.5m 1.25m 8.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 15m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare-enn-fox.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        batidas: {
            src: "assets/audios/fnafsl/funtime-foxy/batidas.ogg",
            volume: 0.5,
            nome: "Batidas",
        },
    },
    descricao: "Funtime Foxy, também conhecido como apenas \"F.F.\", é um antagonista em Five Nights at Freddy's: Sister Location. Ele é um animatrônico branco com detalhes em rosa, com um longo rabo peludo e olhos amarelo-alaranjados. <br><br> Ele tem um laço vermelho, unhas afiadas e cinco dedos. Durante o jogo, você pode evitá-lo monitorando seus movimentos e usando a lanterna para verificar se ele está se aproximando. Funtime Foxy é uma das atrações principais da Circus Baby's Entertainment and Rental.",
}

var ennard = {
    src: "assets/models/fnafsl/ennard.glb",
    corFundo: "radial-gradient(#609EC1, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/ennard/",
    swiperDescricao: [
        "Botão de Ennard para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6.5m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Ennard|AS_SL_O_Ennard_Left_Hallway_02_SK_Ennard",
            nome: "Posição inicial",
            alvoCamera: "-84m 1.5m -9.75m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        jumpscare: {
            src: "SK_Ennard|AS_SL_O_Ennard_JumpScare_SK_Ennard",
            nome: "Jumpscare",
            alvoCamera: "0.75m -0.65m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        naVentilacao: {
            src: "SK_Ennard|AS_SL_O_Ennard_Crawl_SK_Ennard",
            nome: "Na ventilação",
            alvoCamera: "6m 2.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        andando: {
            src: "SK_Ennard|AS_SL_O_Ennard_Walk_LeftDoor_SK_Ennard",
            nome: "Andando",
            alvoCamera: "0m 1.5m -6m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare-enn-bon-bal.ogg",
            volume: 0.5,
            nome: "Jumpscare 1",
        },
        jumpscare2: {
            src: "assets/audios/fnafsl/jumpscare-enn-fox.ogg",
            volume: 0.5,
            nome: "Jumpscare 2",
        },
        jumpscare3: {
            src: "assets/audios/fnafsl/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare 3",
        },
        fucinho: {
            src: "assets/audios/fnafsl/ennard/fucinho.ogg",
            volume: 0.5,
            nome: "Fucinho",
        },
    },
    descricao: "Ennard é o verdadeiro antagonista principal de Sister Location. Ele é a forma combinada de Circus Baby, Ballora, Funtime Foxy e Funtime Freddy, além da máscara de palhaço do Módulo de Controle Primário (evidente pelo seu desaparecimento na Noite 5), e usou o corpo de Michael Afton para escapar coletivamente das instalações. <br><br> Seu corpo é uma amalgamação distorcida de fios expostos, com uma máscara de palhaço, olhos azuis (ou roxos no final real) e dentes afiados semelhantes aos de Ballora. <br><br> Ennard é notavelmente maior e mais volumoso do que os animatrônicos convencionais, e seus olhos pendurados são provenientes dos animatrônicos que se combinaram para criá-lo.",
}

var bidybab = {
    src: "assets/models/fnafsl/bidybab.glb",
    corFundo: "radial-gradient(#CFB7A7, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/bidybab/",
    swiperDescricao: [
        "Botão de Bidybab para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 600m",
    orbitaCameraMinima: "0 0 600m",
    alvoCamera: "0m 100m 0m",
    temAltura: true,
    alturaMaxima: 50,
    alturaMinima: -50,
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsl/bidybab/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsl/bidybab/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsl/bidybab/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        som: {
            src: "assets/audios/fnafsl/bidybab/som.ogg",
            volume: 0.5,
            nome: "Som",
        },
    },
    descricao: "Bidybab é um animatrônico que aparece em Five Nights at Freddy's: Sister Location. Ela faz parte de um grupo de pequenos animatrônicos bebês que atuam como seguidores da Circus Baby. <br><br> Os Bidybabs têm uma aparência de boneca, com pele pálida e olhos que variam entre roxo claro, laranja e azul-esverdeado. Eles possuem um nariz triangular laranja, dentes quadrados semelhantes a um quebra-nozes clássico, mãos com cinco dedos e um botão de metal no peito. <br><br> Durante o jogo, eles aparecem na segunda noite, tentando abrir a porta da mesa onde o jogador se esconde. Para evitá-los, basta manter a porta fechada.",
}

var minireena = {
    src: "assets/models/fnafsl/minireena.glb",
    corFundo: "radial-gradient(#CAA272, #000)",
    fnaf: "sl",
    temCursor: true,
    srcImg: "assets/images/fnafsl/minireena/",
    swiperDescricao: [
        "Botão de Minireena para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 100m",
    alvoCamera: "0m 45m 2.5m",
    temAltura: true,
    alturaMaxima: 25,
    alturaMinima: -25,
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsl/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        risada: {
            src: "assets/audios/fnafsl/minireena/risada.ogg",
            volume: 0.5,
            nome: "Risada",
        },
    },
    descricao: "As Minireenas são pequenos animatrônicos com rostos semelhantes a máscaras, olhos pretos e bocas sorridentes sem dentes. Elas usam tutus brancos e marrons, lembrando bailarinas. <br><br> Durante o jogo, elas dançam ao lado de Ballora e, em uma das noites, tentam se esconder no seu traje de mola para dar um susto. Curiosamente, elas lembram a Puppet de FNaF 2."
}