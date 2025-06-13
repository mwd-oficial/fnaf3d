// Five Nights at Freddy's 1
var freddy = {
    driveId: "1gkq22LnK0axNBkoOZNsi2IVDcAz7KMd0",
    src: "assets/models/fnaf1/freddy.glb",
    corFundo: "radial-gradient(#5B3C21, #000)",
    fnaf: "1",
    temCursor: true,
    srcImg: "assets/images/fnaf1/freddy/",
    swiperDescricao: [
        "Botão de Freddy para seu modelo 3D",
        "Freddy no menu principal",
        "Freddy no primeiro frame",
        "Freddy no segundo frame",
        "Freddy no terceiro frame",
        "Freddy no quarto frame",
        "Freddy nos jornais",
        "Os três animatrônicos no Palco",
        "Freddy, Bonnie e Chica encarando a câmera",
        "Freddy sozinho no Palco",
        "Freddy sozinho, encarando a câmera",
        "Freddy a espreita da Área de Refeições",
        "Freddy se escondendo nos Banheiros",
        "Freddy caminhando pelo Corredor Leste",
        "Freddy no Canto do Corredor Leste, olhando diretamente para a câmera",
        "Freddy arrancando sua própria cabeça em um pôster distorcido",
        "Freddy nas alucinações. Note as veias de um olho humano",
        "Freddy na tela de Game Over",
    ],
    temJumpscare: true,
    srcJumpscare: "assets/videos/fnaf1/freddy.mp4",
    orbitaCameraMaxima: "0 0 6.5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Freddy|Freddy_MenuPose_01_RIG_Freddy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
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
        parado: {
            src: "RIG_Freddy|Freddy_Pos03_Door_RIG_Freddy",
            nome: "Parado",
            alvoCamera: "-0.35m 1.25m -1.25m",
            estatico: true,
        },
        horaDoShow: {
            src: "RIG_Freddy|Freddy_Showtime_Loop_Tom_RIG_Freddy",
            nome: "Hora do show",
            alvoCamera: "0m 1.25m 0.1m",
        },
        andando: {
            src: "RIG_Freddy|Freddy_Walk_Office03_RIG_Freddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 3m",
        },
    },
    audios: {
        jumpscare: {
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
    driveId: "1_IXZqJ4O4zRUup0rGi5Ro3Er2Yq4sejP",
    src: "assets/models/fnaf1/bonnie.glb",
    corFundo: "radial-gradient(#2D3A75, #000)",
    fnaf: "1",
    temCursor: true,
    srcImg: "assets/images/fnaf1/bonnie/",
    swiperDescricao: [
        "Botão de Bonnie para seu modelo 3D",
        "Os três animatrônicos no Palco",
        "Freddy, Bonnie e Chica encarando a câmera",
        "Bonnie na luz da Área de Refeições",
        "A silhueta de Bonnie na Área de Refeições",
        "Bonnie nos Bastidores",
        "Close dos Bastidores de Bonnie",
        "Bonnie no Corredor Oeste",
        "Bonnie no Armário de Suprimentos",
        "Bonnie no Canto do Corredor Oeste.",
        "Bonnie se contorcendo nas últimas noites",
        "Bonnie aparecendo na porta. Note sua silhueta na janela",
        "Bonnie, sem olhos nas alucinações. Isso também é visto em uma tela final",
        "Uma rara tela Bonnie \"sem olhos\" com pequenas pupilas brancas que aparecem após a morte",
    ],
    temJumpscare: true,
    srcJumpscare: "assets/videos/fnaf1/bonnie.mp4",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Bonnie|Bonnie_StagePose_Guitar_RIG_Bonnie",
            nome: "Posição inicial",
            alvoCamera: "0m 1.5m 0.05m",
            estatico: true,
        },
        jumpscare: {
            src: "RIG_Bonnie|Bonnie_Jumpscare_01_RIG_Bonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.6m -0.25m",
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
        horaDoShow: {
            src: "RIG_Bonnie|Bonnie_Showtime_Loop_Tom_RIG_Bonnie",
            nome: "Hora do show",
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
        jumpscare: {
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
    driveId: "1rVC8iIGcUVxLDQNq6lnCSUFodDQHAVNy",
    src: "assets/models/fnaf1/chica.glb",
    corFundo: "radial-gradient(#DCC863, #856d1a)",
    fnaf: "1",
    temCursor: true,
    srcImg: "assets/images/fnaf1/chica/",
    swiperDescricao: [
        "Botão de Chica para seu modelo 3D",
        "Os três animatrônicos no Palco",
        "Freddy, Bonnie e Chica encarando a câmera",
        "Chica na luz da Área de Refeições",
        "Silhueta de Chica na Área de Refeições",
        "Chica nos Banheiros.",
        "Chica olhando para CAM 7",
        "Chica parada no meio do Corredor Leste",
        "Close de Chica no Corredor Leste",
        "Chica no Canto do Corredor Leste",
        "Chica se contorcendo nas últimas noites",
        "Chica aparecendo na porta",
    ],
    temJumpscare: true,
    srcJumpscare: "assets/videos/fnaf1/chica.mp4",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Chica|Chica_MenuPose_01_RIG_Chica",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: true,
        },
        jumpscare: {
            src: "RIG_Chica|Chica_Jumpscare_01_RIG_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m 0.25m",
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
        horaDoShow: {
            src: "RIG_Chica|Chica_Showtime_Loop_Tom_RIG_Chica",
            nome: "Hora do show",
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
        jumpscare: {
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



var mrCupcake = {
    driveId: "1oNWFvTiHLGmChArD3RaXA1ZPzWUZC_qm",
    src: "assets/models/fnaf1/mr-cupcake.glb",
    corFundo: "radial-gradient(#f89cb5, #ca6882, #9c5164)",
    fnaf: "1",
    temCursor: true,
    srcImg: "assets/images/fnaf1/mr-cupcake/",
    swiperDescricao: [
        "Botão de Mr. Cupcake para seu modelo 3D",
        "Mr. Cupcake no escritório",
    ],
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 100m",
    alvoCamera: "0m 15m 0m",
    descricao: "Mr. Cupcake, também conhecido simplesmente como Cupcake, é um animatrônico presente em Five Nights at Freddy's. <br><br> Ele é cor rosa, tem dois grandes olhos amarelos, um pavio de vela listrado de amarelo e branco, dentes de castor e sem papel de embrulho. Mr. Cupcake é visto sendo segurado pela bandeja de Chica, que desaparece quando Chica sai do palco. <br><br> Além disso, há outro cupcake encontrado dentro do escritório, no topo de um dos monitores à direita, mas sua presença não afeta o jogo e serve apenas para decoração.",
}



var foxy = {
    driveId: "1VPCrduPSmaGDNmnee4AgZK6SHefIfizx",
    src: "assets/models/fnaf1/foxy.glb",
    corFundo: "radial-gradient(#D25A37, #000)",
    fnaf: "1",
    temCursor: true,
    srcImg: "assets/images/fnaf1/foxy/",
    swiperDescricao: [
        "Botão de Foxy para seu modelo 3D",
        "Foxy espiando por trás da cortina na Enseada Pirata",
        "Foxy saindo da cortina, antes de ir para o escritório",
        "Foxy correndo pelo Corredor Oeste em direção ao escritório",
    ],
    temJumpscare: true,
    srcJumpscare: "assets/videos/fnaf1/foxy.mp4",
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Foxy_Clean|Foxy_Office01_Pos01_RIG_Foxy_Clean",
            nome: "Posição inicial",
            alvoCamera: "17.25m 2m -9m",
            estatico: true,
        },
        jumpscare: {
            src: "RIG_Foxy_Clean|Foxy_Jumpscare_01_RIG_Foxy_Clean",
            nome: "Jumpscare",
            alvoCamera: "0m -0.75m -0.5m",
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
        horaDoShow: {
            src: "RIG_Foxy_Clean|Foxy_Showtime_Loop_RIG_Foxy_Clean",
            nome: "Hora do show",
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
        jumpscare: {
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


