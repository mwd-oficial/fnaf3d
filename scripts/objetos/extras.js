// Extras
// Pra Comprar
var moeda3d = {
    nome: "Moeda 3D",
    src: "assets/models/extras/pra-comprar/moeda-3d.glb",
    corFundo: "radial-gradient(#E2E085, #D8A117)",
    fnaf: "exc",
    srcImg: "assets/images/extras/pra-comprar/moeda-3d/",
    swiperDescricao: [
        "Botão de Moeda 3D para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 450m",
    alvoCamera: "0m 0m 0m",
    audios: {
        moeda3dAudio: {
            src: "assets/audios/extras/pra-comprar/moeda-3d/moeda-3d.ogg",
            volume: 0.5,
            nome: "Som moeda 3D",
        },
    },
    descricao: "As moedas 3D servem para desbloquear alguns modelos com uma certa quantia. Esse foi o primeiro deles. Continue procurando as moedas 3D escondidas nos modelos para desbloquear os outros!",
}

var purpleGuy = {
    nome: "Purple Guy",
    src: "assets/models/extras/pra-comprar/purple-guy.glb",
    corFundo: "radial-gradient(#855FAE, #000)",
    fnaf: "exc",
    temCursor: true,
    srcImg: "assets/images/extras/pra-comprar/purple-guy/",
    swiperDescricao: [
        "Botão de Purple Guy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0.5m 0m 0m",
    audios: {
        iAlwaysComeBack: {
            src: "assets/audios/fnafffps/scraptrap/i-always-come-back.ogg",
            volume: 0.5,
            nome: "I always come back",
        },
        perseguicao: {
            src: "assets/audios/extras/pra-comprar/purple-guy/perseguicao.ogg",
            volume: 0.5,
            nome: "Perseguição",
        },
        morte: {
            src: "assets/audios/extras/pra-comprar/purple-guy/morte.ogg",
            volume: 0.5,
            nome: "\"Morte\"",
        },
    },
}



































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pra encontrar




























// Fnaf 1


var goldenFreddy = {
    nome: "Golden Freddy",
    src: "assets/models/extras/pra-encontrar/fnaf1/golden-freddy.glb",
    corFundo: "radial-gradient(#4E4A03, #000)",
    fnaf: "ex1",
    temCursor: true,
    srcImg: "assets/images/extras/pra-encontrar/fnaf1/golden-freddy/",
    swiperDescricao: [
        "Botão de Golden Freddy para seu modelo 3D",
        "O pôster alternativo no Canto do Corredor Oeste, com um close do rosto de Golden Freddy",
        "Golden Freddy no escritório",
    ],
    srcJumpscare: "assets/videos/extras/pra-encontrar/fnaf1/golden-freddy.mp4",
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 200m",
    alvoCamera: "0m 60m 15m",
    configEx: () => {
        modelViewer.exposure = 0.2
        modelViewer.style.filter = "hue-rotate(10deg)"
    },
    audios: {
        jumpscareAudio: {
            src: "assets/audios/extras/pra-encontrar/fnaf1/golden-freddy/jumpscare-golden-freddy.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        voz: {
            src: "assets/audios/extras/pra-encontrar/fnaf1/golden-freddy/voz-golden-freddy.ogg",
            volume: 0.5,
            nome: "Voz",
        },
        garotinha: {
            src: "assets/audios/extras/pra-encontrar/fnaf1/golden-freddy/risada-garotinha.ogg",
            volume: 0.5,
            nome: "Risada do Poster",
        },
    },
    descricao: "Golden Freddy é um dos cinco principais antagonistas e um animatrônico secreto em Five Nights at Freddy's.<br><br>Ele é uma versão dourada de Freddy Fazbear que aparece no Escritório depois de uma certa sequência de eventos. Golden Freddy é conhecido por sua aparência fantasmagórica e por causar alucinações.",
}


var poster = {
    nome: "Pôster",
    src: "assets/models/extras/pra-encontrar/fnaf1/poster.glb",
    corFundo: "radial-gradient(#222, #000)",
    fnaf: "ex1",
    srcImg: "assets/images/extras/pra-encontrar/fnaf1/poster/",
    swiperDescricao: [
        "Botão do Pôster para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 1.5m 0m",
    rotacao: -90,
    audios: {
        fucinho: {
            src: "assets/audios/fnaf1/freddy/fucinho.ogg",
            volume: 0.5,
            nome: "Fucinho",
        },
    },
    descricao: "Um pôster icônico da série Five Nights at Freddy's (FNaF), o Celebrate! representa uma cena festiva com os personagens animatrônicos da pizzaria Freddy Fazbear's Pizza. Nele, Freddy Fazbear, Bonnie e Chica estão reunidos em uma pose alegre, com sorrisos e olhos brilhantes.<br><br>As cores vibrantes e a atmosfera convidativa contrastam com o clima sombrio do jogo. O pôster engana os jogadores, sugerindo uma experiência divertida, enquanto o jogo real é cheio de sustos e perigos. Celebrate! se tornou um ícone da franquia, representando a dualidade entre diversão e terror que permeia toda a série.",
}

// Fnaf 2

var mascaraFreddy = {
    nome: "Máscara Freddy",
    src: "assets/models/extras/pra-encontrar/fnaf2/mascara-freddy.glb",
    corFundo: "radial-gradient(#815020, #000)",
    fnaf: "ex2",
    srcImg: "assets/images/extras/pra-encontrar/fnaf2/mascara-freddy/",
    swiperDescricao: [
        "Botão de Máscara Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        posicaoInicial: {
            src: "Mask--Idle",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 1m",
            estatico: true,
        },
    },
    audios: {
        colocandoMascara: {
            src: "assets/audios/extras/pra-encontrar/fnaf2/mascara-freddy/colocando-mascara.ogg",
            volume: 0.5,
            nome: "Colocando máscara",
        },
        tirandoMascara: {
            src: "assets/audios/extras/pra-encontrar/fnaf2/mascara-freddy/tirando-mascara.ogg",
            volume: 0.5,
            nome: "Tirando máscara",
        },
        respiracao: {
            src: "assets/audios/extras/pra-encontrar/fnaf2/mascara-freddy/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
    },
    descricao: "A Máscara de Freddy Fazbear é uma mecânica de jogo presente em Five Nights at Freddy's 2. Ela consiste em uma cabeça vazia do traje de Freddy Fazbear, dada ao novo guarda de segurança noturno, Jeremy Fitzoutrosd, na Pizzaria Freddy Fazbear. <br><br> A máscara é usada para enganar os animatrônicos que tentam entrar no escritório. Quando equipada corretamente, ela impede que a maioria dos animatrônicos ataque o jogador. No entanto, usar a máscara reduz o campo de visão do jogador e impede o uso da lanterna e do monitor. Além disso, não engana The Puppet ou Withered Foxy. Curiosamente, o tempo para colocar a máscara diminui ao longo das noites, tornando-se mais desafiador conforme o jogo avança.",
}

// Fnaf sl

var lolbit = {
    nome: "Lolbit",
    src: "assets/models/extras/pra-encontrar/fnafsl/lolbit.glb",
    corFundo: "radial-gradient(#C1691F, #C1691F, #000)",
    fnaf: "exsl",
    temCursor: true,
    srcImg: "assets/images/extras/pra-encontrar/fnafsl/lolbit/",
    swiperDescricao: [
        "Botão de Lolbit para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_FuntimeFoxy|FuntimeFoxy_Pos_02_RIG_FuntimeFoxy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: true,
        },
    },
    audios: {
        som: {
            src: "assets/audios/extras/pra-encontrar/fnafsl/lolbit/som.ogg",
            volume: 0.5,
            nome: "Som",
        },
    },
    descricao: "Lolbit é um animatrônico de Five Nights at Freddy's: Sister Location. Ela é uma versão recolorida da cabeça de Funtime Foxy, aparecendo como um Easter Egg menor no jogo principal, mas também na Custom Night como um personagem personalizável. Além de sua aparência única, com cores vibrantes e um olhar enigmático, a presença de Lolbit no jogo adiciona um toque de mistério e diversão para os fãs de Five Nights at Freddy's. <br><br> Ela é frequentemente associada a teorias e especulações dentro da comunidade de jogadores, o que torna sua história ainda mais intrigante. Embora não tenha um papel central na narrativa principal, Lolbit continua sendo um dos personagens mais icônicos e memoráveis da série.",
}

var bonnet = {
    nome: "Bonnet",
    src: "assets/models/extras/pra-encontrar/fnafsl/bonnet.glb",
    corFundo: "radial-gradient(#B14AAF, #000)",
    fnaf: "exsl",
    srcImg: "assets/images/extras/pra-encontrar/fnafsl/bonnet/",
    swiperDescricao: [
        "Botão de Bonnet para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 2m",
    orbitaCameraMinima: "0 0 2m",
    animacoes: {
        posicaoInicial: {
            src: "SK_Bonbon|AS_BonBon_Splash_Pose_SK_Bonbon",
            nome: "Posição inicial",
            alvoCamera: "-0.5m 1.7m 0.25m",
            estatico: true,
        },
        jumpscare: {
            src: "SK_Bonbon|AS_BonBon_Jumpscare_SK_Bonbon",
            nome: "Jumpscare",
            alvoCamera: "0.3m 0m 0m",
            rotacao: 90,
        },
        olhar: {
            src: "SK_Bonbon|AS_SL_BR_BonBon_StagePose03_SK_Bonbon",
            nome: "Olhar",
            alvoCamera: "-0.5m 2.1m 0.25m",
            estatico: true,
        },
        acenando: {
            src: "SK_Bonbon|AS_SL_O_BonBon_PeekHallL_Idle_SK_Bonbon",
            nome: "Acenando",
            alvoCamera: "1.5m 1.1m -4.6m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/extras/pra-encontrar/fnafsl/bonnet/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fucinho: {
            src: "assets/audios/extras/pra-encontrar/fnafsl/bonnet/fucinho.ogg",
            volume: 0.5,
            nome: "Fucinho",
        },
    },
    descricao: "Bonnet é uma versão recolorida de Bon-Bon, com um corpo rosa e olhos verdes. Possui bochechas vermelhas e um laço vermelho, semelhante a Toy Bonnie e Adventure Bonnie. Bonnet mede cerca de 1,7 pés de altura. Quando ela aparece no escritório, ela se move para a esquerda e começa a rir. <br<br> Para evitar o jumpscare, clique no nariz dela. Se você demorar muito, ela vai te assustar da mesma forma que Bon-Bon. Curiosamente, Bonnet é uma das poucas animatrônicas com animação de caminhada, apesar de não ter pernas. Ela é uma adição interessante à Custom Night!",
}

// Fnaf sb

var headChefBot = {
    nome: "Head Chef Bot",
    src: "assets/models/extras/pra-encontrar/fnafsb/head-chef-bot.glb",
    corFundo: "radial-gradient(#E5AA3F, #000)",
    fnaf: "exsb",
    srcImg: "assets/images/extras/pra-encontrar/fnafsb/head-chef-bot/",
    swiperDescricao: [
        "Botão de Head Chef Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    animacoes: {
        posicaoInicial: {
            src: "SK_HeadChefBot|AS_FP_EC_HeadChefBot_Intro_SK_HeadChefBot",
            nome: "Posição inicial",
            alvoCamera: "2m 0.5m 0.25m",
            rotacao: 90,
        },
        jumpscare: {
            src: "SK_HeadChefBot|AS_FP_EL_HeadChefBot_Jumpscare_SK_HeadChefBot",
            nome: "Jumpscare",
            alvoCamera: "0.5m 0.25m 0.25m",
            rotacao: 90,
        },
    },
    descricao: "O Head Chef Bot é uma variante do S.T.A.F.F. Bot e o chef chefe do El Chip's do Mega Pizzaplex de Freddy Fazbear. Ele apareceu pela primeira vez em Five Nights at Freddy's: Help Wanted 2, e atua como um antagonista abrangente para o nível do El Chip.",
}

var blob = {
    nome: "Blob",
    src: "assets/models/extras/pra-encontrar/fnafsb/blob.glb",
    corFundo: "radial-gradient(#1F1F1E, #000)",
    fnaf: "exsb",
    srcImg: "assets/images/extras/pra-encontrar/fnafsb/blob/",
    swiperDescricao: [
        "Botão de Blob para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 15m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_Blob|Blob_Idle_RIG_Blob",
            nome: "Posição inicial",
            alvoCamera: "0m 3m 0m",
        },
        jumpscare1: {
            src: "RIG_Blob|Blob_Office_Jumpscare_RIG_Blob",
            nome: "Jumpscare 1",
            alvoCamera: "0m 0m 0m",
        },
        jumpscare2: {
            src: "RIG_Blob|Blob_Sinkhole_Jumpscare_RIG_Blob",
            nome: "Jumpscare 2",
            alvoCamera: "0m 2.5m 0m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        inspirando: {
            src: "assets/audios/extras/pra-encontrar/fnafsb/blob/inspirando.ogg",
            volume: 0.5,
            nome: "Inspirando",
        },
        expirando: {
            src: "assets/audios/extras/pra-encontrar/fnafsb/blob/expirando.ogg",
            volume: 0.5,
            nome: "Expirando",
        },
    },
    descricao: "Blob, também conhecido como Tangle, é uma fusão de vários animatrônicos que aparece em Five Nights at Freddy's: Security Breach como um antagonista secreto. Como o próprio nome sugere, Tangle é uma enorme massa de tentáculos de arame e partes animatrônicas, possuindo muitos olhos vermelhos brilhantes. <br><br> A cabeça principal de Tangle é uma máscara que parece ser Funtime Freddy. Parece ser uma versão maior de Molten Freddy após o incêndio do Freddy Fazbear's Pizzeria Simulator.",
};

var burntrap = {
    nome: "Burntrap (William Afton)",
    src: "assets/models/extras/pra-encontrar/fnafsb/burntrap.glb",
    corFundo: "radial-gradient(#440075, #000)",
    fnaf: "exsb",
    temCursor: true,
    srcImg: "assets/images/extras/pra-encontrar/fnafsb/burntrap/",
    swiperDescricao: [
        "Botão de Burntrap para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 8m",
    orbitaCameraMinima: "0 0 7m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_Burntrap|BurnTrap_Idle_RIG_Burntrap",
            nome: "Posição inicial",
            alvoCamera: "0m 1.75m 0m",
        },
        colocandoAMão: {
            src: "RIG_Burntrap|Burntrap_Hack_IN_RIG_Burntrap",
            nome: "Colocando a mão",
            alvoCamera: "0m 1.75m 0.5m",
        },
        mantendoAMão: {
            src: "RIG_Burntrap|Burntrap_Hack_Loop_RIG_Burntrap",
            nome: "Mantendo a mão",
            alvoCamera: "0m 1.75m 0.5m",
        },
        tirandoAMão: {
            src: "RIG_Burntrap|Burntrap_Hack_OUT_RIG_Burntrap",
            nome: "Tirando a mão",
            alvoCamera: "0m 1.75m 0.5m",
        },
        andando: {
            src: "RIG_Burntrap|BurnTrap_Walk_RIG_Burntrap",
            nome: "Andando",
            alvoCamera: "0m 1.75m 0.25m",
        },
        correndo: {
            src: "RIG_Burntrap|BurnTrap_Run_Full_RIG_Burntrap",
            nome: "Correndo",
            alvoCamera: "0m 1.75m 0.25m",
        },
        morrendo: {
            src: "RIG_Burntrap|Burntrap_Death_RIG_Burntrap",
            nome: "Morrendo",
            alvoCamera: "0m 1.75m 1m",
        },
    },
    audios: {
        risadas: {
            src: "assets/audios/extras/pra-encontrar/fnafsb/burntrap/risadas.ogg",
            volume: 0.5,
            nome: "Risadas",
        },
    },
    descricao: "Burntrap é um antagonista secreto em Five Nights at Freddy's: Security Breach . Ele é um animatrônico de origem enigmática que residia nas ruínas subterrâneas da Freddy Fazbear's Pizza Place , aparecendo no final do jogo base \"Burn It All Down\". <br><br> Burntrap tem uma aparência física que lembra Springtrap e Scraptrap , embora com diferenças significativas. Seu traje é verde-oliva e amarelo escuro, com uma mandíbula humana exposta com dentes.",
};


// Fnaf filme


var pizzaria = {
    nome: "Freddy Fazbear's Pizza",
    src: "assets/models/extras/pra-encontrar/filme/pizzaria.glb",
    corFundo: "radial-gradient(#787577, #000)",
    fnaf: "exf",
    srcImg: "assets/images/extras/pra-encontrar/filme/pizzaria/",
    swiperDescricao: [
        "Botão da Freddy Fazbear's Pizza para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 50m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 0m 0m",
    audios: {
        abertura: {
            src: "assets/audios/extras/pra-encontrar/filme/abertura.ogg",
            volume: 0.5,
            nome: "Abertura",
        },
        creditos: {
            src: "assets/audios/extras/pra-encontrar/filme/creditos.ogg",
            volume: 0.5,
            nome: "Créditos",
        },
    },
    descricao: "A Freddy Fazbear's Pizza é um local icônico no universo dos jogos e agora também no cinema. Localizada em uma pequena cidade, a pizzaria costumava ser um lugar animado e cheio de crianças durante o dia. No entanto, à noite, ela se transforma em um cenário sombrio e assustador. <br><br> O interior da pizzaria é decorado com cores vibrantes, mesas de plástico e um palco central onde os animatrônicos se apresentam. Os personagens principais são Freddy Fazbear, Bonnie, Chica e Foxy. Eles são robôs animados que cantam e dançam para entreter os clientes.",
}

var springBonnieFilme = {
    nome: "Spring Bonnie (William Afton)",
    src: "assets/models/extras/pra-encontrar/filme/spring-bonnie-filme.glb",
    corFundo: "radial-gradient(#D59E2E, #000)",
    fnaf: "exf",
    srcImg: "assets/images/extras/pra-encontrar/filme/spring-bonnie-filme/",
    swiperDescricao: [
        "Botão de Spring Bonnie (William Afton) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 25m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m -3.5m 0m",
    audios: {
        abertura: {
            src: "assets/audios/extras/pra-encontrar/filme/abertura.ogg",
            volume: 0.5,
            nome: "Abertura",
        },
        creditos: {
            src: "assets/audios/extras/pra-encontrar/filme/creditos.ogg",
            volume: 0.5,
            nome: "Créditos",
        },
    },
    descricao: "Spring Bonnie é um traje usado por William Afton e foi projetado para atrair jovens vítimas durante seus atos de assassinato. Ele se transforma em um assassino psicopata à noite, quando os robôs animados do Freddy Fazbear's Pizza ganham vida. O traje foi selado na sala segura do restaurante após um incidente com falhas de mola. <br><br> Afton usou o traje uma última vez ao tentar escapar dos fantasmas das vítimas que ele havia assassinado anos antes. A música \"O Coelho Amarelo\" também faz referência a Spring Bonnie, explorando temas de engano, violência e busca por controle, enquanto Afton se apresenta como uma figura amigável para atrair suas vítimas, escondendo suas verdadeiras intenções assassinas.",
}

var springBonniePixel = {
    nome: "Spring Bonnie (pixel)",
    src: "assets/models/extras/pra-encontrar/filme/spring-bonnie-pixel.glb",
    corFundo: "radial-gradient(#B69C38, #000)",
    fnaf: "exf",
    srcImg: "assets/images/extras/pra-encontrar/filme/spring-bonnie-pixel/",
    swiperDescricao: [
        "Botão de Spring Bonnie (pixel) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 12.5m",
    orbitaCameraMinima: "0 0 7.5m",
    alvoCamera: "0m 0.5m 0m",
    rotacao: -90,
    audios: {
        abertura: {
            src: "assets/audios/extras/pra-encontrar/filme/abertura.ogg",
            volume: 0.5,
            nome: "Abertura",
        },
        creditos: {
            src: "assets/audios/extras/pra-encontrar/filme/creditos.ogg",
            volume: 0.5,
            nome: "Créditos",
        },
    },
    descricao: "Spring Bonnie (versão em pixel) aparece em uma animação de abertura de Five Nights at Fredd's: O Pesadelo Sem Fim, fazendo referência aos minigames dos jogos anteriores.",
}

var balloonBoyFilme = {
    nome: "Balloon Boy (filme)",
    src: "assets/models/extras/pra-encontrar/filme/balloon-boy-filme.glb",
    corFundo: "radial-gradient(#07285E, #A10E17)",
    fnaf: "exf",
    srcImg: "assets/images/extras/pra-encontrar/filme/balloon-boy-filme/",
    swiperDescricao: [
        "Botão de Balloon Boy (filme) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 50m",
    alvoCamera: "0m 12.5m 1m",
    configEx: () => {
        modelViewer.exposure = 0.5
    },
    audios: {
        abertura: {
            src: "assets/audios/extras/pra-encontrar/filme/abertura.ogg",
            volume: 0.5,
            nome: "Abertura",
        },
        creditos: {
            src: "assets/audios/extras/pra-encontrar/filme/creditos.ogg",
            volume: 0.5,
            nome: "Créditos",
        },
    },
    descricao: "Balloon Boy é um dos personagens icônicos. Ele é conhecido por sua aparência peculiar e por ser um dos animatrônicos do restaurante Freddy Fazbear's Pizza. No entanto, sua atuação no filme é mais sinistra do que parece. Quando a noite cai, os bonecos animatrônicos ganham vida e se tornam assassinos psicopatas. Balloon Boy não é exceção, e sua presença adiciona uma dose extra de suspense e terror à trama. Assim como nos jogos, ele é um personagem que causa arrepios e mantém os espectadores à beira de seus assentos.",
}




// Outros

var ventilador = {
    nome: "Ventilador",
    src: "assets/models/extras/pra-encontrar/outros/ventilador.glb",
    corFundo: "radial-gradient(#3F4143, #000)",
    fnaf: "exo",
    srcImg: "assets/images/extras/pra-encontrar/outros/ventilador/",
    swiperDescricao: [
        "Botão de Ventilador para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 2.5m",
    orbitaCameraMinima: "0 0 2.5m",
    alvoCamera: "0m 0.25m 0m",
    rotacao: -230,
    configEx: () => {
        modelViewer.exposure = 0.5
    },
    audios: {
        fnaf1: {
            src: "assets/audios/extras/pra-encontrar/outros/ventilador/ventilador-fnaf1.ogg",
            volume: 0.5,
            nome: "Fnaf 1",
        },
        fnaf2: {
            src: "assets/audios/extras/pra-encontrar/outros/ventilador/ventilador-fnaf2.ogg",
            volume: 0.5,
            nome: "Fnaf 2",
        },
        fnaf3: {
            src: "assets/audios/extras/pra-encontrar/outros/ventilador/ventilador-fnaf3.ogg",
            volume: 0.5,
            nome: "Fnaf 3",
        },
    },
    descricao: "Nos três primeiros jogos da série FNaF, os ventiladores desempenham um papel importante na jogabilidade. Eles estão localizados no escritório do jogador e servem para dissipar o calor gerado pelos sistemas de segurança.<br><br> O som constante do ventilador cria uma atmosfera tensa e ajuda a masca,icônico, com suas pás girando incessantemente enquanto o jogador tenta sobreviver às noites.",
}

var phoneGuy = {
    nome: "Phone Guy",
    src: "assets/models/extras/pra-encontrar/outros/telefone.glb",
    corFundo: "radial-gradient(#A9A9AA, #000)",
    fnaf: "exo",
    srcImg: "assets/images/extras/pra-encontrar/outros/telefone/",
    swiperDescricao: [
        "Botão de Phone Guy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 400m",
    alvoCamera: "0m 0m 0m",
    audios: {
        fnaf1Noite1: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf1-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 1",
        },
        fnaf1Noite2: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf1-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 2",
        },
        fnaf1Noite3: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf1-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 3",
        },
        fnaf1Noite4: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf1-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 4",
        },
        fnaf1Noite5: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf1-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 5",
        },
        fnaf2Noite1: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 1",
        },
        fnaf2Noite2: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 2",
        },
        fnaf2Noite3: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 3",
        },
        fnaf2Noite4: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 4",
        },
        fnaf2Noite5: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 5",
        },
        fnaf2Noite6: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf2-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 6",
        },
        fnaf3Noite1: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 1",
        },
        fnaf3Noite2: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 2",
        },
        fnaf3Noite3: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 3",
        },
        fnaf3Noite4: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 4",
        },
        fnaf3Noite5: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 5",
        },
        fnaf3Noite6: {
            src: "assets/audios/extras/pra-encontrar/outros/telefone/fnaf3-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 6",
        },
    },
    descricao: "Phone Guy (cara do telefone) é uma figura enigmática que orienta os jogadores através de mensagens gravadas, fornecendo dicas e informações sobre o passado sombrio da pizzaria. Embora nunca seja visto, sua presença é sentida em cada chamada noturna. Ele é um guia e um aviso, um lembrete constante dos perigos que espreitam nas sombras do mundo de FNAF.",
}

var dreadbear = {
    nome: "Dreadbear",
    // AR indisponível: modelo pesa 200MB
    src: "assets/models/extras/pra-encontrar/outros/dreadbear.glb",
    corFundo: "radial-gradient(#71765D, #000)",
    fnaf: "exo",
    srcImg: "assets/images/extras/pra-encontrar/outros/dreadbear/",
    swiperDescricao: [
        "Botão de Dreadbear para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 6m",
    animacoes: {
        posicaoInicial: {
            src: "RIG_DLC1_Freddy|DLC_Freddy_SplashScreen_RIG_DLC1_Freddy",
            nome: "Posição inicial",
            alvoCamera: "0.5m 1m 0m",
            rotacao: 90,
        },
        jumpscare: {
            src: "RIG_DLC1_Freddy|A_DLC_Freddy_JumpScare_RIG_DLC1_Freddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.75m",
        },
        posicaoGameOver: {
            src: "RIG_DLC1_Freddy|DLC_Freddy_Gameover_Idle_Start_RIG_DLC1_Freddy",
            nome: "Posição game over",
            alvoCamera: "-0.5m 1.35m -0.25m",
            rotacao: 90,
        },
        choque1: {
            src: "RIG_DLC1_Freddy|DLC_Freddy_Idle_04_RIG_DLC1_Freddy",
            nome: "Choque 1",
            alvoCamera: "0m 0.25m 0.5m",
        },
        choque2: {
            src: "RIG_DLC1_Freddy|DLC_Freddy_Shock_RIG_DLC1_Freddy",
            nome: "Choque 2",
            alvoCamera: "0m 0.25m 0.5m",
        },
        quebrandoAPorta: {
            src: "RIG_DLC1_Freddy|DLCFreddy_DoorBreak_RIG_DLC1_Freddy",
            nome: "Quebrando a porta",
            alvoCamera: "-0.25m 1.5m 2m",
            rotacao: -190,
        },
        andando: {
            src: "RIG_DLC1_Freddy|DLC_Freddy_Hall_Walk_RootMotion_RIG_DLC1_Freddy",
            nome: "Andando",
            alvoCamera: "0m 1.5m 0.15m",
            orbitaCameraMaxima: "0 0 20m",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Dreadbear, anteriormente conhecido como Franken Freddy durante seu desenvolvimento inicial, é um dos antagonistas mais assustadores da série \"Five Nights at Freddy's: Help Wanted\". Inspirado no Monstro de Frankenstein, Dreadbear possui uma aparência ameaçadora, com parafusos na mandíbula, costuras pelo corpo, olhos amarelos brilhantes, uma cartola preta e uma gravata borboleta, predominantemente verde musgo. <br><br> No jogo, ele aparece principalmente no modo \"Curse of Dreadbear\", oferecendo desafios intensos, como em \"Danger! Keep Out!\", onde caminha pelos corredores, quebra facilmente as tábuas da porta direita e termina o jogo com um jumpscare, e em \"Spooky Mansion\", onde o jogador precisa programar corretamente o cérebro de Dreadbear para evitar um jumpscare. <br><br> Algumas curiosidades sobre Dreadbear incluem seu nome inicial, \"Franken Freddy\", sua inspiração no Monstro de Frankenstein, suas aparições no menu inicial da DLC e na tela de Game Over, além de várias figuras colecionáveis, como um Funko plushie e uma figura de ação.",
}












////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pra encontrar dourado
















var fnaf1Mapa = {
    nome: "Mapa FNaF 1",
    src: "assets/models/extras/pra-encontrar-dourado/fnaf1-mapa.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "exd",
    srcImg: "",
    swiperDescricao: [
        "",
    ],
    orbitaCameraMaxima: "0 0 0m",
    orbitaCameraMinima: "0 0 0m",
    alvoCamera: "0m 0m 0m",
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "",
}

var mascaraVanny = {
    nome: "Máscara Vanny",
    src: "assets/models/extras/pra-encontrar-dourado/mascara-vanny.glb",
    corFundo: "radial-gradient(#815020, #000)",
    fnaf: "exd",
    srcImg: "",
    swiperDescricao: [
        "",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    alvoCamera: "0m 0m 1m",
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "",
}















