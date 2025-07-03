// Five Nights at Freddy's: Security Breach - Ruin

var prototypeGlamrockFreddy = {
    src: "assets/models/fnafsbr/prototype-glamrock-freddy.glb",
    corFundo: "radial-gradient(#E6773A, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/prototype-glamrock-freddy",
    swiperDescricao: [
        "Botão de Ruined Glamrock Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_DLC_Freddy.ao|A_DLC_Freddy_Idle",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        jumpscare: {
            src: "SK_DLC_Freddy.ao|A_DLC_FreddyJumpscareFrontA_Freddy",
            nome: "Jumpscare",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        seLevantando: {
            src: "SK_DLC_Freddy.ao|A_DLC_CIN_Fazerblast_Section6_6c_FreddyTest",
            nome: "Se levantando",
            alvoCamera: "0m 1.25m 1m",
            estatico: false,
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 8m",
            mudaOrbitaCamera: true,
            orbitaCamera: "210deg 1.5rad 0",
        },
        correndo: {
            src: "SK_DLC_Freddy.ao|A_DLC_Freddy_Walk_Fast",
            nome: "Correndo",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/prototype-glamrock-freddy/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        gritando: {
            src: "assets/audios/fnafsbr/prototype-glamrock-freddy/gritando.ogg",
            volume: 0.5,
            nome: "Gritando",
        },
        rugindo: {
            src: "assets/audios/fnafsbr/prototype-glamrock-freddy/rugindo.ogg",
            volume: 0.5,
            nome: "Rugindo",
        },
    },
    descricao: "Prototype Glamrock Freddy, que aparece em Five Nights at Freddy's: Security Breach RUIN, é um protótipo inicial do Freddy Fazbear, utilizado antes do modelo final de Glamrock Freddy. Ele apresenta um design incompleto e funcionalidade básica, com várias partes expostas e um visual rudimentar. <br><br> Devido ao seu estado de protótipo, ele pode apresentar falhas operacionais e um comportamento menos refinado em comparação ao Glamrock Freddy finalizado. Prototype Glamrock Freddy serve como um exemplo do processo de desenvolvimento dos animatronics na Pizzaplex.",
}

var ruinedGlamrockChica = {
    src: "assets/models/fnafsbr/ruined-glamrock-chica.glb",
    corFundo: "radial-gradient(#8E5967, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/ruined-glamrock-chica",
    swiperDescricao: [
        "Botão de Ruined Glamrock Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 7m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "A_DLC_Chica_Idle_SK_DLC_Chica",
            nome: "Posição inicial",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        jumpscare: {
            src: "A_DLC_ChicaJumpScareFrontA_Chica_SK_DLC_Chica",
            nome: "Jumpscare",
            alvoCamera: "-0.25m 1.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        olhar: {
            src: "A_DLC_Chica_CupcakeEating_SK_DLC_Chica",
            nome: "Olhar",
            alvoCamera: "0m 1m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        andando: {
            src: "A_DLC_Chica_WalkA_SK_DLC_Chica",
            nome: "Andando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        correndo: {
            src: "A_DLC_Chica_Walk_Fast_SK_DLC_Chica",
            nome: "Correndo",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        ruido: {
            src: "assets/audios/fnafsbr/ruined-glamrock-chica/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
    },
    descricao: "Ruined Glamrock Chica, que aparece em Five Nights at Freddy's: Security Breach RUIN, é uma versão danificada de Glamrock Chica que, mesmo em seu estado arruinado, continua a patrulhar as áreas do Pizzaplex. Ela mostra sinais de deterioração significativa, com partes quebradas, sujeira e ferrugem acumulada. <br><br> Apesar dos danos, Chica mantém seu comportamento agressivo e determinado, implacavelmente perseguindo intrusos. Seu estado arruinado reflete o caos que tomou conta do Pizzaplex, adicionando um elemento assustador à sua presença.",
}

var ruinedRoxanneWolf = {
    src: "assets/models/fnafsbr/ruined-roxanne-wolf.glb",
    corFundo: "radial-gradient(#7127B1, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/ruined-roxanne-wolf",
    swiperDescricao: [
        "Botão de Ruined Roxanne Wolf para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Idle_SalonSection2_2a_SK_Roxy_RW_DLC",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "SK_Roxy_RW_DLC|A_DLC_Roxy_JumpscareFrontA_SK_Roxy_RW_DLC",
            nome: "Jumpscare",
            alvoCamera: "0m 1.25m 0.6m",
            estatico: false,
        },
        olhar: {
            src: "SK_Roxy_RW_DLC|A_DLC_Key_Art_ROXY_SK_Roxy_RW_DLC",
            nome: "Olhar",
            alvoCamera: "0m 1.4m 0.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-30deg 1.5rad 0",
        },
        morta: {
            src: "SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_DeactivatedPose_SK_Roxy",
            nome: "Morta",
            alvoCamera: "316.65m 20.25m 588.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "160deg 0 0",
        },
        pulando: {
            src: "SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Jump_SalonSection2_2a_SK_Roxy_RW_DLC",
            nome: "Pulando",
            alvoCamera: "0m 1.35m 0.1m",
            estatico: false,
        },
        noAr: {
            src: "SK_Roxy_RW_DLC|A_DLC_Roxy_PounceJump_Out_SK_Roxy_RW_DLC",
            nome: "No ar",
            alvoCamera: "0m 1.25m -0.9m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        agachada: {
            src: "SK_Roxy_RW_DLC|A_DLC_Roxy_PounceStun_Loop_SK_Roxy_RW_DLC",
            nome: "Agachada",
            alvoCamera: "0m 1m -0.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        andando: {
            src: "SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Walk_SalonSection2_2a_SK_Roxy_RW_DLC",
            nome: "Andando",
            alvoCamera: "0.1m 1.25m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/ruined-roxanne-wolf/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsbr/ruined-roxanne-wolf/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsbr/ruined-roxanne-wolf/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsbr/ruined-roxanne-wolf/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        chorando: {
            src: "assets/audios/fnafsbr/ruined-roxanne-wolf/chorando.ogg",
            volume: 0.5,
            nome: "Chorando",
        },
    },
    descricao: "Ruined Roxanne Wolf, que aparece em Five Nights at Freddy's: Security Breach RUIN, é Roxanne Wolf em estado arruinado, continuando a perseguir e atormentar os intrusos no Pizzaplex. Ela está danificada, com cabelo desgrenhado, olhos faltando e partes do corpo quebradas. <br><br> Mesmo assim, Roxanne mantém um semblante ameaçador, usando sua agilidade e tenacidade para caçar aqueles que ousam explorar as ruínas. Sua habilidade de enxergar em infravermelho pode estar comprometida, o que adiciona uma nova camada de desafio ao enfrentá-la.",
}

var ruinedMontgomeryGator = {
    src: "assets/models/fnafsbr/ruined-montgomery-gator.glb",
    corFundo: "radial-gradient(#7E787B, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/ruined-montgomery-gator",
    swiperDescricao: [
        "Botão de Ruined Montgomery Gator para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 4m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "A_DLC_Monty_Idle_SK_Monty_DLC",
            nome: "Posição inicial",
            alvoCamera: "0m 0.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "A_DLC_Monty_Jumpscare_Monty_SK_Monty_DLC",
            nome: "Jumpscare",
            alvoCamera: "0m 0.65m -0.5m",
            estatico: false,
        },
        seRastejando: {
            src: "ShatteredMonty_Crawl_SK_Monty_DLC",
            nome: "Se rastejando",
            alvoCamera: "0m 0.25m 0m",
            estatico: false,
        },
        seRastejandoRapido: {
            src: "ShatteredMonty_Crawl_Fast_SK_Monty_DLC",
            nome: "Se rastejando rápido",
            alvoCamera: "0m 0.25m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/ruined-montgomery-gator/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Ruined Montgomery Gator, que aparece em Five Nights at Freddy's: Security Breach RUIN, é Montgomery Gator em estado destruído, ainda ativo nas ruínas do Pizzaplex. Ele está severamente danificado, com partes do corpo faltando, pele rasgada e um visual mais aterrorizante. <br><br> Sua agressividade parece aumentar à medida que perde mais partes, tornando-se mais feroz e implacável. Monty representa um perigo constante e imprevisível, com movimentos erráticos que podem pegar qualquer um de surpresa.",
}

var eclipse = {
    src: "assets/models/fnafsbr/eclipse.glb",
    corFundo: "radial-gradient(#9F9FD5, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/eclipse",
    swiperDescricao: [
        "Botão de Eclipse (Daycare Attendant)  para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Moonman_DLC|A_DLC_Sunman_Idle_SK_Moonman_DLC",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-10deg 1.5rad 0",
        },
        jumpscare: {
            src: "SK_Moonman_DLC|A_DLC_Moonman_Jumpscare_FrontB_SK_Moonman_DLC",
            nome: "Jumpscare",
            alvoCamera: "0.15m 1.25m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        cabisbaixo: {
            src: "SK_Moonman_DLC|A_DLC_Moonman_Suffering_Flashlight_SK_Moonman_DLC",
            nome: "Cabisbaixo",
            alvoCamera: "0.3m 1.1m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        conversando: {
            src: "SK_Moonman_DLC|A_DLC_CIN_Daycare_Section4_2_Sun_AR_SK_Moonman_DLC",
            nome: "Conversando",
            alvoCamera: "-340m -46.85m 535m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "30deg 1.5rad 0",

        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/eclipse/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsbr/eclipse/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsbr/eclipse/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsbr/eclipse/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        seTransformando: {
            src: "assets/audios/fnafsbr/eclipse/se-transformando.ogg",
            volume: 0.5,
            nome: "Se transformando",
        },
    },
    descricao: "Eclipse (Daycare Attendant), que aparece em Five Nights at Freddy's: Security Breach RUIN, é uma fusão entre os animatronics Sun e Moon, criando um comportamento imprevisível e intrigante. Essa entidade combina as características de ambos, mudando conforme o ambiente passa de claro para escuro. <br><br> Eclipse aparece em momentos de caos ou quando a iluminação do ambiente muda rapidamente, tornando-o uma presença instável e ameaçadora. Sua dualidade reflete o equilíbrio delicado entre luz e escuridão, adicionando uma profundidade simbólica ao seu papel no jogo.",
}

var ruinedMiniMusicMan1 = {
    src: "assets/models/fnafsbr/ruined-mini-music-man1.glb",
    corFundo: "radial-gradient(#E9789A, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/ruined-mini-music-man1",
    swiperDescricao: [
        "Botão de Ruined Mini Music Man 1 para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        v1PosicaoInicial: {
            src: "SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01",
            nome: "V1 posição inicial",
            alvoCamera: "4.45m 1.45m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v1Jumpscare: {
            src: "SK_LMM_03|AS_LMM_Jumpscare_SK_LMM_01",
            nome: "V1 jumpscare",
            alvoCamera: "0m -0.1m -1.2m",
            estatico: false,
        },
        v1BatendoPratos: {
            src: "SK_LMM_03|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01",
            nome: "V1 batendo os pratos",
            alvoCamera: "0m 0.5m -1.1m",
            estatico: false,
        },
        v1Pulando: {
            src: "SK_LMM_03|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01",
            nome: "V1 pulando",
            alvoCamera: "0m 1m -1.25m",
            estatico: false,
        },
        v2PosicaoInicial: {
            src: "SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01",
            nome: "V2 posição inicial",
            alvoCamera: "4.45m 1.45m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v2Jumpscare: {
            src: "SK_LMM_02|AS_LMM_Jumpscare_SK_LMM_01",
            nome: "V2 jumpscare",
            alvoCamera: "0m -0.1m -0.2m",
            estatico: false,
        },
        v2BatendoPratos: {
            src: "SK_LMM_02|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01",
            nome: "V2 batendo os pratos",
            alvoCamera: "0m 0.5m -0.1m",
            estatico: false,
        },
        v2Pulando: {
            src: "SK_LMM_02|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01",
            nome: "V2 pulando",
            alvoCamera: "0m 1m -0.25m",
            estatico: false,
        },
        v3PosicaoInicial: {
            src: "SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01",
            nome: "V3 posição inicial",
            alvoCamera: "4.45m 1.45m 1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v3Jumpscare: {
            src: "SK_LMM_01|AS_LMM_Jumpscare_SK_LMM_01",
            nome: "V3 jumpscare",
            alvoCamera: "0m -0.1m 0.9m",
            estatico: false,
        },
        v3BatendoPratos: {
            src: "SK_LMM_01|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01",
            nome: "V3 batendo os pratos",
            alvoCamera: "0m 0.5m 0.9m",
            estatico: false,
        },
        v3Pulando: {
            src: "SK_LMM_01|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01",
            nome: "V3 pulando",
            alvoCamera: "0m 1m 0.8m",
            estatico: false,
        },
    },
    audios: {
         jumpscare: {
            src: "assets/audios/fnafsbr/jumpscare-mini-music-man.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Ruined Mini Music Man 1 (3 de 7 variações) são versões danificadas do Mini Music Man, que aparecem no jogo Five Nights at Freddy's: Security Breach RUIN, como pequenos animatronics que continuam a perseguir os jogadores com sons assustadores. Eles são pequenos e ágeis, com engrenagens expostas, sinais de desgaste e partes faltando. <br><br> Apesar do estado arruinado, continuam a emitir sons musicais distorcidos enquanto perseguem, criando uma atmosfera de tensão e desconforto. Suas aparições repentinas e movimentos rápidos os tornam adversários difíceis de evitar.",
}

var ruinedMiniMusicMan2 = {
    src: "assets/models/fnafsbr/ruined-mini-music-man2.glb",
    corFundo: "radial-gradient(#E9789A, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/ruined-mini-music-man2",
    swiperDescricao: [
        "Botão de Ruined Mini Music Man 2 para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        v4PosicaoInicial: {
            src: "SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04",
            nome: "V4 posição inicial",
            alvoCamera: "4.45m 1.45m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v4Jumpscare: {
            src: "SK_LMM_07|AS_LMM_Jumpscare_SK_LMM_04",
            nome: "V4 jumpscare",
            alvoCamera: "0m -0.1m -1.2m",
            estatico: false,
        },
        v4BatendoPratos: {
            src: "SK_LMM_07|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04",
            nome: "V4 batendo os pratos",
            alvoCamera: "0m 0.5m -1.1m",
            estatico: false,
        },
        v4Pulando: {
            src: "SK_LMM_07|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04",
            nome: "V4 pulando",
            alvoCamera: "0m 1m -1.25m",
            estatico: false,
        },
        v5PosicaoInicial: {
            src: "SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04",
            nome: "V5 posição inicial",
            alvoCamera: "4.45m 1.45m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v5Jumpscare: {
            src: "SK_LMM_06|AS_LMM_Jumpscare_SK_LMM_04",
            nome: "V5 jumpscare",
            alvoCamera: "0m -0.1m -0.2m",
            estatico: false,
        },
        v5BatendoPratos: {
            src: "SK_LMM_06|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04",
            nome: "V5 batendo os pratos",
            alvoCamera: "0m 0.5m -0.1m",
            estatico: false,
        },
        v5Pulando: {
            src: "SK_LMM_06|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04",
            nome: "V5 pulando",
            alvoCamera: "0m 1m -0.25m",
            estatico: false,
        },
        v6PosicaoInicial: {
            src: "SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04",
            nome: "V6 posição inicial",
            alvoCamera: "4.45m 1.45m 1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v6Jumpscare: {
            src: "SK_LMM_05|AS_LMM_Jumpscare_SK_LMM_04",
            nome: "V6 jumpscare",
            alvoCamera: "0m -0.1m 0.8m",
            estatico: false,
        },
        v6BatendoPratos: {
            src: "SK_LMM_05|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04",
            nome: "V6 batendo os pratos",
            alvoCamera: "0m 0.5m 0.9m",
            estatico: false,
        },
        v6Pulando: {
            src: "SK_LMM_05|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04",
            nome: "V6 pulando",
            alvoCamera: "0m 1m 0.8m",
            estatico: false,
        },
        v7PosicaoInicial: {
            src: "SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04",
            nome: "V7 posição inicial",
            alvoCamera: "4.45m 1.45m 2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        v7Jumpscare: {
            src: "SK_LMM_04|AS_LMM_Jumpscare_SK_LMM_04",
            nome: "V7 jumpscare",
            alvoCamera: "0m -0.1m 1.8m",
            estatico: false,
        },
        v7BatendoPratos: {
            src: "SK_LMM_04|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04",
            nome: "V7 batendo os pratos",
            alvoCamera: "0m 0.5m 1.9m",
            estatico: false,
        },
        v7Pulando: {
            src: "SK_LMM_04|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04",
            nome: "V7 pulando",
            alvoCamera: "0m 1m 1.8m",
            estatico: false,
        },
    },
    audios: {
         jumpscare: {
            src: "assets/audios/fnafsbr/jumpscare-mini-music-man.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Ruined Mini Music Man 2 (4 de 7 variações) são versões danificadas do Mini Music Man, que aparecem no jogo Five Nights at Freddy's: Security Breach RUIN, como pequenos animatronics que continuam a perseguir os jogadores com sons assustadores. Eles são pequenos e ágeis, com engrenagens expostas, sinais de desgaste e partes faltando. <br><br> Apesar do estado arruinado, continuam a emitir sons musicais distorcidos enquanto perseguem, criando uma atmosfera de tensão e desconforto. Suas aparições repentinas e movimentos rápidos os tornam adversários difíceis de evitar.",
}

var shatteredBot = {
    src: "assets/models/fnafsbr/shattered-bot.glb",
    corFundo: "radial-gradient(#6979A1, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsbr/shattered-bot/",
    swiperDescricao: [
        "Botão de Shattered Bot (genérico) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 4m",
    orbitaCameraMinima: "0 0 3m",
    alvoCamera: "0m 0.5m 0.1m",
    descricao: "Shattered Bot, que aparece em Five Nights at Freddy's: Security Breach RUIN, refere-se ao S.T.A.F.F Bots genéricos que foram destruídos, mas ainda apresentam alguma atividade residual. Com partes fragmentadas, peças penduradas e danos visíveis, esses bots exibem comportamentos erráticos e imprevisíveis, resultantes do estado danificado em que se encontram. <br><br> Eles representam o colapso do Pizzaplex e a degradação dos sistemas de segurança, aumentando a sensação de perigo constante.",
}

var maskBot = {
    src: "assets/models/fnafsbr/mask-bot.glb",
    corFundo: "radial-gradient(#896302, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/mask-bot/",
    swiperDescricao: [
        "Botão de Mask Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Maskbot.001",
            nome: "Posição inicial",
            alvoCamera: "0m 1.2m -0.6m",
            estatico: true,
        },
        jumpscare: {
            src: "StaffBot_NM_Jumpscare_RIG_MapBot",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/mask-bot/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsbr/mask-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsbr/mask-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsbr/mask-bot/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Mask Bot, que aparece em Five Nights at Freddy's: Security Breach RUIN, é um bot da S.T.A.F.F. que é empregado para distribuir máscaras aos clientes. Um Mask Bot entrega a Máscara da Vanny para Cassie, dando um jumpscare nela, porém isso não vai alertar animatrônicos próximos.",
}

var cassie = {
    src: "assets/models/fnafsbr/cassie.glb",
    corFundo: "radial-gradient(#990F18, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/cassie/",
    swiperDescricao: [
        "Botão de Cassie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2.5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "SK_Cassie.ao|AS_Ending_Helptrap_Cassie_Part4",
            nome: "Posição inicial",
            alvoCamera: "0m 0.65m 0m",
            estatico: false,
        },
    },
    audios: {
        fala1: {
            src: "assets/audios/fnafsbr/cassie/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsbr/cassie/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsbr/cassie/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Cassie é a personagem principal da expansão \"Ruin\" de Five Nights at Freddy's: Security Breach, uma jovem corajosa que explora as ruínas do Pizzaplex tentando sobreviver e encontrar seu amigo Gregory. <br><br> Determinada e curiosa, Cassie enfrenta inúmeros perigos enquanto desvenda segredos ocultos e escapa de animatronics hostis. Sua jornada revela muitos mistérios do Pizzaplex, proporcionando uma nova perspectiva sobre os eventos e a história dos animatronics.",
}

var entity = {
    src: "assets/models/fnafsbr/entity.glb",
    corFundo: "radial-gradient(#12254D, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/entity",
    swiperDescricao: [
        "Botão de Entity para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 6m",
    temConfigEx: true,
    configEx: () => {
        bloomEffect = document.createElement("bloom-effect")
        document.querySelector("effect-composer").appendChild(bloomEffect)
        bloomEffect.radius = "0.3"
    },
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        morrendo: {
            src: "A_DLC_CIN_Catwalks_Section_2_12b_Rabbit_AR_SK_DLC_New_Rabbit",
            nome: "Morrendo",
            alvoCamera: "0.1m 1.25m 0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        posicao1: {
            src: "A_DLC_Rabbit_Agitated05_SK_DLC_New_Rabbit",
            nome: "Posição 1",
            alvoCamera: "0m 1.25m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        posicao2: {
            src: "A_DLC_Rabbit_Alerted02_R_SK_DLC_New_Rabbit",
            nome: "Posição 2",
            alvoCamera: "-0.1m 1.25m 0.35m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        posicao3: {
            src: "A_DLC_Rabbit_Daycare_Idle_1stFloor_01_SK_DLC_New_Rabbit",
            nome: "Posição 3",
            alvoCamera: "0m 1.25m 0.3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        posicao4: {
            src: "A_DLC_Rabbit_Daycare_Idle_2ndFloor_03_SK_DLC_New_Rabbit",
            nome: "Posição 4",
            alvoCamera: "0m 1.5m 0.1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        posicao5: {
            src: "A_DLC_Rabbit_Watching03_SK_DLC_New_Rabbit",
            nome: "Posição 5",
            alvoCamera: "0m 1.5m 0.2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        posicao6: {
            src: "DLC_Rabbit_FullScreenPose_03b_SK_DLC_New_Rabbit",
            nome: "Posição 6",
            alvoCamera: "-0.1m 1m 1.1m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/entity/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        aparecendo: {
            src: "assets/audios/fnafsbr/entity/aparecendo.ogg",
            volume: 0.5,
            nome: "Aparecendo",
        },
        teleportando: {
            src: "assets/audios/fnafsbr/entity/teleportando.ogg",
            volume: 0.5,
            nome: "Teleportando",
        },
        invocandoAnimatronics: {
            src: "assets/audios/fnafsbr/entity/invocando-animatronics.ogg",
            volume: 0.5,
            nome: "Invocando animatronics",
        },
        morrendo: {
            src: "assets/audios/fnafsbr/entity/morrendo.ogg",
            volume: 0.5,
            nome: "Morrendo",
        },
    },
    descricao: "Entity, também conhecido como M.X.E.S, é um avançado sistema de segurança digital introduzido em \"Five Nights at Freddy's: Security Breach - Ruin\". <br><br> Ele atua como uma entidade virtual projetada para monitorar e proteger as áreas do Pizzaplex. Dotado de inteligência artificial sofisticada, Entity é capaz de detectar intrusos e anomalias no ambiente, ativando protocolos de defesa automatizados para garantir a segurança do local. <br><br> Sua presença constante e vigilante adiciona uma camada de desafio e tensão ao jogo, forçando os jogadores a navegar cuidadosamente para evitar sua detecção.",
}

var mimic = {
    src: "assets/models/fnafsbr/mimic.glb",
    corFundo: "radial-gradient(#302526, #000)",
    fnaf: "sbr",
    srcImg: "assets/images/fnafsbr/mimic",
    swiperDescricao: [
        "Botão de Mimic para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "A_DLC_OldEndo_IdleA_SK_DLC_Old_Endo",
            nome: "Posição inicial",
            alvoCamera: "-0.1m 1.25m 0.1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        jumpscare: {
            src: "A_DLC_OldEndo_JumpscareFrontA_SK_DLC_Old_Endo",
            nome: "Jumpscare",
            alvoCamera: "0m 1.25m 1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        andando: {
            src: "A_DLC_OldEndo_Walk_SK_DLC_Old_Endo",
            nome: "Andando",
            alvoCamera: "0m 1.25m 0.2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        correndo: {
            src: "A_DLC_OldEndo_RunA_SK_DLC_Old_Endo",
            nome: "Correndo",
            alvoCamera: "0m 1.25m 0.2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsbr/mimic/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Mimic é um animatronic habilidoso em replicar vozes e comportamentos para enganar e confundir.  Com uma estrutura flexível que permite rápidas alterações físicas, Mimic se destaca como um adversário perigoso e imprevisível. <br><br> Ele aparece em momentos de tensão, utilizando sua capacidade de transformação para manipular o ambiente e os jogadores, criando uma camada adicional de complexidade e incerteza no jogo. <br><br> Sua habilidade de imitação desafia a percepção e a confiança dos jogadores, adicionando profundidade simbólica ao seu papel em \"Five Nights at Freddy's: Security Breach - Ruin\".",
}
