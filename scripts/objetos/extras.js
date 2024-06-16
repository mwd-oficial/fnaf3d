// Extras

var moeda3d = {
    imgSrc: "assets/images/extras/moeda-3d.webp",
    nome: "Moeda 3D",
    src: "assets/models/extras/moeda-3d.glb",
    corFundo: "radial-gradient(#E2E085, #D8A117)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 450m",
    alvoCamera: "0m 0m 0m",
    temAudio: true,
    audios: {
        moeda3dAudio: {
            src: "assets/audios/extras/moeda-3d/moeda-3d.ogg",
            volume: 0.5,
            nome: "Som moeda 3D",
        },
    },
    descricao: "As moedas 3D servem para desbloquear alguns modelos com uma certa quantia. Esse foi o primeiro deles. Continue procurando as moedas 3D escondidas nos modelos para desbloquear os outros!",
}

var purpleGuy = {
    imgSrc: "assets/images/extras/purple-guy.webp",
    nome: "Purple Guy",
    src: "assets/models/extras/purple-guy.glb",
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
            src: "assets/audios/extras/purple-guy/i-always-come-back.ogg",
            volume: 0.5,
            nome: "I always come back",
        },
        perseguicao: {
            src: "assets/audios/extras/purple-guy/perseguicao.ogg",
            volume: 0.5,
            nome: "Perseguição",
        },
        morte: {
            src: "assets/audios/extras/purple-guy/morte.ogg",
            volume: 0.5,
            nome: "\"Morte\"",
        },
    },
    descricao: "(Purple Guy é a primeira forma de William Afton)<br><br>Purple Guy, também conhecido como Purple Man e William Afton, é o co-fundador da Fazbear Entertainment Inc., além de ser o principal antagonista da série Five Nights at Freddy's. Ele foi diretamente e indiretamente responsável por inúmeros incidentes e tragédias ao longo da série. Sua participação na história da franquia é fundamental.<br><br>Purple Guy é representado nos minigames como um homem de cor roxa, com tamanho e forma de um adulto. Seu sprite muda um pouco em cada minigame, mas até o terceiro jogo, ele mantém uma aparência não muito detalhada. No entanto, seu estado emocional pode ser facilmente percebido através de seus olhos, sobrancelhas e boca. Há especulações sobre o que é o misterioso objeto que Purple Guy segura, mas ainda não se sabe ao certo.",
}

var poster = {
    imgSrc: "assets/images/extras/poster.webp",
    nome: "Pôster",
    src: "assets/models/extras/poster.glb",
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
    imgSrc: "assets/images/extras/ventilador.webp",
    nome: "Ventilador",
    src: "assets/models/extras/ventilador.glb",
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
            src: "assets/audios/extras/ventilador/ventilador-fnaf1.ogg",
            volume: 0.5,
            nome: "Fnaf 1",
        },
        fnaf2: {
            src: "assets/audios/extras/ventilador/ventilador-fnaf2.ogg",
            volume: 0.5,
            nome: "Fnaf 2",
        },
        fnaf3: {
            src: "assets/audios/extras/ventilador/ventilador-fnaf3.ogg",
            volume: 0.5,
            nome: "Fnaf 3",
        },
    },
    descricao: "Nos três primeiros jogos da série FNaF, os ventiladores desempenham um papel importante na jogabilidade. Eles estão localizados no escritório do jogador e servem para dissipar o calor gerado pelos sistemas de segurança.<br><br> O som constante do ventilador cria uma atmosfera tensa e ajuda a masca,icônico, com suas pás girando incessantemente enquanto o jogador tenta sobreviver às noites.",
}

var mascaraFreddy = {
    imgSrc: "assets/images/extras/mascara-freddy.webp",
    nome: "Máscara Freddy",
    src: "assets/models/extras/mascara-freddy.glb",
    corFundo: "radial-gradient(#815020, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    alvoCamera: "0m 0m 1m",
    temAudio: true,
    audios: {
        colocandoMascara: {
            src: "assets/audios/extras/mascara-freddy/colocando-mascara.ogg",
            volume: 0.5,
            nome: "Colocando máscara",
        },
        tirandoMascara: {
            src: "assets/audios/extras/mascara-freddy/tirando-mascara.ogg",
            volume: 0.5,
            nome: "Tirando máscara",
        },
        respiracao: {
            src: "assets/audios/extras/mascara-freddy/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
    },
    descricao: "A Máscara de Freddy Fazbear é uma mecânica de jogo presente em Five Nights at Freddy's 2. Ela consiste em uma cabeça vazia do traje de Freddy Fazbear, dada ao novo guarda de segurança noturno, Jeremy Fitzgerald, na Pizzaria Freddy Fazbear. <br><br> A máscara é usada para enganar os animatrônicos que tentam entrar no escritório. Quando equipada corretamente, ela impede que a maioria dos animatrônicos ataque o jogador. No entanto, usar a máscara reduz o campo de visão do jogador e impede o uso da lanterna e do monitor. Além disso, não engana The Puppet ou Withered Foxy. Curiosamente, o tempo para colocar a máscara diminui ao longo das noites, tornando-se mais desafiador conforme o jogo avança.",
}

var telefone = {
    imgSrc: "assets/images/extras/telefone.webp",
    nome: "Telefone",
    src: "assets/models/extras/telefone.glb",
    corFundo: "radial-gradient(#A9A9AA, #000)",
    fnaf: "ex",
    orbitaCameraMaxima: "0 0 500m",
    orbitaCameraMinima: "0 0 400m",
    alvoCamera: "0m 0m 0m",
    temAudio: true,
    audios: {
        fnaf1Noite1: {
            src: "assets/audios/extras/telefone/fnaf1-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 1",
        },
        fnaf1Noite2: {
            src: "assets/audios/extras/telefone/fnaf1-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 2",
        },
        fnaf1Noite3: {
            src: "assets/audios/extras/telefone/fnaf1-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 3",
        },
        fnaf1Noite4: {
            src: "assets/audios/extras/telefone/fnaf1-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 4",
        },
        fnaf1Noite5: {
            src: "assets/audios/extras/telefone/fnaf1-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 1 - Noite 5",
        },
        fnaf2Noite1: {
            src: "assets/audios/extras/telefone/fnaf2-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 1",
        },
        fnaf2Noite2: {
            src: "assets/audios/extras/telefone/fnaf2-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 2",
        },
        fnaf2Noite3: {
            src: "assets/audios/extras/telefone/fnaf2-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 3",
        },
        fnaf2Noite4: {
            src: "assets/audios/extras/telefone/fnaf2-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 4",
        },
        fnaf2Noite5: {
            src: "assets/audios/extras/telefone/fnaf2-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 5",
        },
        fnaf2Noite6: {
            src: "assets/audios/extras/telefone/fnaf2-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 2 - Noite 6",
        },
        fnaf3Noite1: {
            src: "assets/audios/extras/telefone/fnaf3-noite1.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 1",
        },
        fnaf3Noite2: {
            src: "assets/audios/extras/telefone/fnaf3-noite2.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 2",
        },
        fnaf3Noite3: {
            src: "assets/audios/extras/telefone/fnaf3-noite3.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 3",
        },
        fnaf3Noite4: {
            src: "assets/audios/extras/telefone/fnaf3-noite4.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 4",
        },
        fnaf3Noite5: {
            src: "assets/audios/extras/telefone/fnaf3-noite5.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 5",
        },
        fnaf3Noite6: {
            src: "assets/audios/extras/telefone/fnaf3-noite6.ogg",
            volume: 0.5,
            nome: "Fnaf 3 - Noite 6",
        },
    },
    descricao: "O cara do telefone é uma figura enigmática que orienta os jogadores através de mensagens gravadas, fornecendo dicas e informações sobre o passado sombrio da pizzaria. Embora nunca seja visto, sua presença é sentida em cada chamada noturna. Ele é um guia e um aviso, um lembrete constante dos perigos que espreitam nas sombras do mundo de FNAF.",
}