// Extras
// Pra Comprar
var moeda3d = {
    imgSrc: "assets/images/extras/pra-comprar/moeda-3d.webp",
    nome: "Moeda 3D",
    src: "assets/models/extras/pra-comprar/moeda-3d.glb",
    corFundo: "radial-gradient(#E2E085, #D8A117)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 450m",
    alvoCamera: "0m 0m 0m",
    temAudio: true,
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
    imgSrc: "assets/images/extras/pra-comprar/purple-guy.webp",
    nome: "Purple Guy",
    src: "assets/models/extras/pra-comprar/purple-guy.glb",
    corFundo: "radial-gradient(#855FAE, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0.5m 0m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    temAudio: true,
    audios: {
        iAlwaysComeBack: {
            src: "assets/audios/extras/pra-comprar/purple-guy/i-always-come-back.ogg",
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
    descricao: "(Purple Guy é a primeira forma de William Afton)<br><br>Purple Guy, também conhecido como Purple Man e William Afton, é o co-fundador da Fazbear Entertainment Inc., além de ser o principal antagonista da série Five Nights at Freddy's. Ele foi diretamente e indiretamente responsável por inúmeros incidentes e tragédias ao longo da série. Sua participação na história da franquia é fundamental.<br><br>Purple Guy é representado nos minigames como um homem de cor roxa, com tamanho e forma de um adulto. Seu sprite muda um pouco em cada minigame, mas até o terceiro jogo, ele mantém uma aparência não muito detalhada. No entanto, seu estado emocional pode ser facilmente percebido através de seus olhos, sobrancelhas e boca. Há especulações sobre o que é o misterioso objeto que Purple Guy segura, mas ainda não se sabe ao certo.",
}



































////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pra encontrar






























var poster = {
    imgSrc: "assets/images/extras/pra-encontrar/fnaf1/poster.webp",
    nome: "Pôster",
    src: "assets/models/extras/pra-encontrar/fnaf1/poster.glb",
    corFundo: "radial-gradient(#222, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 1.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "90deg 0 0",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -1,
    temAudio: true,
    audios: {
        fucinho: {
            src: "assets/audios/fnaf1/freddy/fucinho.ogg",
            volume: 0.5,
            nome: "Fucinho",
        },
    },
    descricao: "Um pôster icônico da série Five Nights at Freddy's (FNaF), o Celebrate! representa uma cena festiva com os personagens animatrônicos da pizzaria Freddy Fazbear's Pizza. Nele, Freddy Fazbear, Bonnie e Chica estão reunidos em uma pose alegre, com sorrisos e olhos brilhantes.<br><br>As cores vibrantes e a atmosfera convidativa contrastam com o clima sombrio do jogo. O pôster engana os jogadores, sugerindo uma experiência divertida, enquanto o jogo real é cheio de sustos e perigos. Celebrate! se tornou um ícone da franquia, representando a dualidade entre diversão e terror que permeia toda a série.",
}

var ventilador = {
    imgSrc: "assets/images/extras/pra-encontrar/geral/ventilador.webp",
    nome: "Ventilador",
    src: "assets/models/extras/pra-encontrar/geral/ventilador.glb",
    corFundo: "radial-gradient(#3F4143, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 2.5m",
    orbitaCameraMinima: "0 0 2.5m",
    alvoCamera: "0m 0.25m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "230deg 0 0",
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.5
    },
    temAudio: true,
    audios: {
        fnaf1: {
            src: "assets/audios/extras/pra-encontrar/geral/ventilador/ventilador-fnaf1.ogg",
            volume: 0.5,
            nome: "Fnaf 1",
        },
        fnaf2: {
            src: "assets/audios/extras/pra-encontrar/geral/ventilador/ventilador-fnaf2.ogg",
            volume: 0.5,
            nome: "Fnaf 2",
        },
        fnaf3: {
            src: "assets/audios/extras/pra-encontrar/geral/ventilador/ventilador-fnaf3.ogg",
            volume: 0.5,
            nome: "Fnaf 3",
        },
    },
    descricao: "Nos três primeiros jogos da série FNaF, os ventiladores desempenham um papel importante na jogabilidade. Eles estão localizados no escritório do jogador e servem para dissipar o calor gerado pelos sistemas de segurança.<br><br> O som constante do ventilador cria uma atmosfera tensa e ajuda a masca,icônico, com suas pás girando incessantemente enquanto o jogador tenta sobreviver às noites.",
}

var mascaraFreddy = {
    imgSrc: "assets/images/extras/pra-encontrar/fnaf2/mascara-freddy.webp",
    nome: "Máscara Freddy",
    src: "assets/models/extras/pra-encontrar/fnaf2/mascara-freddy.glb",
    corFundo: "radial-gradient(#815020, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    alvoCamera: "0m 0m 1m",
    temAudio: true,
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
    descricao: "A Máscara de Freddy Fazbear é uma mecânica de jogo presente em Five Nights at Freddy's 2. Ela consiste em uma cabeça vazia do traje de Freddy Fazbear, dada ao novo guarda de segurança noturno, Jeremy Fitzgerald, na Pizzaria Freddy Fazbear. <br><br> A máscara é usada para enganar os animatrônicos que tentam entrar no escritório. Quando equipada corretamente, ela impede que a maioria dos animatrônicos ataque o jogador. No entanto, usar a máscara reduz o campo de visão do jogador e impede o uso da lanterna e do monitor. Além disso, não engana The Puppet ou Withered Foxy. Curiosamente, o tempo para colocar a máscara diminui ao longo das noites, tornando-se mais desafiador conforme o jogo avança.",
}

var phoneGuy  = {
    imgSrc: "assets/images/extras/pra-encontrar/geral/telefone.webp",
    nome: "Phone Guy",
    src: "assets/models/extras/pra-encontrar/geral/telefone.glb",
    corFundo: "radial-gradient(#A9A9AA, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 400m",
    alvoCamera: "0m 0m 0m",
    temAudio: true,
    audios: {
        fnaf1Noite1: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf1-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 1",
        },
        fnaf1Noite2: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf1-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 2",
        },
        fnaf1Noite3: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf1-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 3",
        },
        fnaf1Noite4: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf1-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 4",
        },
        fnaf1Noite5: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf1-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 5",
        },
        fnaf2Noite1: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 1",
        },
        fnaf2Noite2: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 2",
        },
        fnaf2Noite3: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 3",
        },
        fnaf2Noite4: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 4",
        },
        fnaf2Noite5: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 5",
        },
        fnaf2Noite6: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf2-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 6",
        },
        fnaf3Noite1: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 1",
        },
        fnaf3Noite2: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 2",
        },
        fnaf3Noite3: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 3",
        },
        fnaf3Noite4: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 4",
        },
        fnaf3Noite5: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 5",
        },
        fnaf3Noite6: {
            src: "assets/audios/extras/pra-encontrar/geral/telefone/fnaf3-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 6",
        },
    },
    descricao: "Phone Guy (cara do telefone) é uma figura enigmática que orienta os jogadores através de mensagens gravadas, fornecendo dicas e informações sobre o passado sombrio da pizzaria. Embora nunca seja visto, sua presença é sentida em cada chamada noturna. Ele é um guia e um aviso, um lembrete constante dos perigos que espreitam nas sombras do mundo de FNAF.",
}

var lolbit = {
    imgSrc: "assets/images/extras/pra-encontrar/fnafsl/lolbit.webp",
    nome: "Lolbit",
    src: "assets/models/extras/pra-encontrar/fnafsl/lolbit.glb",
    corFundo: "radial-gradient(#C1691F, #C1691F, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_FuntimeFoxy|FuntimeFoxy_Pos_02_RIG_FuntimeFoxy",
            nome: "Posição Inicial",
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
    imgSrc: "assets/images/extras/pra-encontrar/fnafsl/bonnet.webp",
    nome: "Bonnet",
    src: "assets/models/extras/pra-encontrar/fnafsl/bonnet.glb",
    corFundo: "radial-gradient(#B14AAF, #000)",
    fnaf: "ex",
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
            nome: "Posição Inicial",
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

var pizzaria = {
    imgSrc: "assets/images/extras/pra-encontrar/filme/pizzaria.webp",
    nome: "Freddy Fazbear's Pizza",
    src: "assets/models/extras/pra-encontrar/filme/pizzaria.glb",
    corFundo: "radial-gradient(#787577, #000)",
    fnaf: "exf",
    orbitaCameraMaxima: "0 0 50m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 0m 0m",
    temAudio: true,
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
    imgSrc: "assets/images/extras/pra-encontrar/filme/spring-bonnie-filme.webp",
    nome: "Spring Bonnie (William Afton)",
    src: "assets/models/extras/pra-encontrar/filme/spring-bonnie-filme.glb",
    corFundo: "radial-gradient(#D59E2E, #000)",
    fnaf: "exf",
    orbitaCameraMaxima: "0 0 25m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m -3.5m 0m",
    temAltura: true,
    alturaMaxima: 3.5,
    alturaMinima: -3.5,
    temAudio: true,
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
    imgSrc: "assets/images/extras/pra-encontrar/filme/spring-bonnie-pixel.webp",
    nome: "Spring Bonnie (pixel)",
    src: "assets/models/extras/pra-encontrar/filme/spring-bonnie-pixel.glb",
    corFundo: "radial-gradient(#B69C38, #000)",
    fnaf: "exf",
    orbitaCameraMaxima: "0 0 12.5m",
    orbitaCameraMinima: "0 0 7.5m",
    alvoCamera: "0m 0.5m 0m",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -1.5,
    mudaOrbitaCamera: true,
    orbitaCamera: "90deg 0 0",
    temAudio: true,
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
    imgSrc: "assets/images/extras/pra-encontrar/filme/balloon-boy-filme.webp",
    nome: "Balloon Boy (filme)",
    src: "assets/models/extras/pra-encontrar/filme/balloon-boy-filme.glb",
    corFundo: "radial-gradient(#07285E, #A10E17)",
    fnaf: "exf",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 50m",
    alvoCamera: "0m 12.5m 1m",
    temAltura: true,
    alturaMaxima: 5,
    alturaMinima: -7.5,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.5
    },
    temAudio: true,
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