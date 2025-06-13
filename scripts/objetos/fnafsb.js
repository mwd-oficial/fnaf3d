// Five Nights at Freddy's: Security Breach

var glamrockFreddy = {
    src: "assets/models/fnafsb/glamrock-freddy.glb",
    corFundo: "radial-gradient(#E5A632, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/glamrock-freddy/",
    swiperDescricao: [
        "Botão de Glamrock Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Glamrock_Freddy|Freddy_Idle_Standard_Loop_RIG_Glamrock_Freddy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Glamrock_Freddy|Freddy_Jumpscare_RIG_Glamrock_Freddy",
            nome: "Jumpscare",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        abrindoCavidade: {
            src: "RIG_Glamrock_Freddy|Freddy_OpenChest_RIG_Glamrock_Freddy",
            nome: "Abrindo cavidade",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        fechandoCavidade: {
            src: "RIG_Glamrock_Freddy|Freddy_CloseChest_RIG_Glamrock_Freddy",
            nome: "Fechando cavidade",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        deitado: {
            src: "RIG_Glamrock_Freddy|Freddy_EyeLook_Center_RIG_Glamrock_Freddy",
            nome: "Deitado",
            alvoCamera: "0m -1.4m -1m",
            estatico: true,
        },
        deitadoMachucado: {
            src: "RIG_Glamrock_Freddy|Freddy_Idle_Sick_Down_RIG_Glamrock_Freddy",
            nome: "Deitado machucado",
            alvoCamera: "0m 0.35m -0.15m",
            estatico: false,
        },
        horaDoShow: {
            src: "RIG_Glamrock_Freddy|Freddy_Play_00_RIG_Glamrock_Freddy",
            nome: "Hora do show",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Glamrock_Freddy|Freddy_Cinematic_Ending_Idle_RIG_Glamrock_Freddy",
            nome: "Olhar",
            alvoCamera: "0m 1m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.75rad 0",
        },
        machucado: {
            src: "RIG_Glamrock_Freddy|Freddy_Idle_Sick_RIG_Glamrock_Freddy",
            nome: "Machucado",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        apontando: {
            src: "RIG_Glamrock_Freddy|Freddy_Cinematic_Showtime_Tutorial_LS_RIG_Glamrock_Freddy",
            nome: "Apontando",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        acenando1: {
            src: "RIG_Glamrock_Freddy|Freddy_Wave_02_RIG_Glamrock_Freddy",
            nome: "Acenando 1",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        acenando2: {
            src: "RIG_Glamrock_Freddy|Freddy_Wave_RIG_Glamrock_Freddy",
            nome: "Acenando 2",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        possuido: {
            src: "RIG_Glamrock_Freddy|Freddy_Corrupted_Stun_Loop_RIG_Glamrock_Freddy",
            nome: "Possuido",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        pulando: {
            src: "RIG_Glamrock_Freddy|Freddy_VentPull_RIG_Glamrock_Freddy",
            nome: "Pulando",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        andando: {
            src: "RIG_Glamrock_Freddy|Freddy_Walk_RIG_Glamrock_Freddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 0.15m",
            estatico: false,
        },
        andandoMachucado: {
            src: "RIG_Glamrock_Freddy|Freddy_Walk_Sick_RIG_Glamrock_Freddy",
            nome: "Andando machucado",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Glamrock_Freddy|Freddy_Run_RIG_Glamrock_Freddy",
            nome: "Correndo",
            alvoCamera: "0m 1.25m 0.15m",
            estatico: false,
        },
        correndoMachucado: {
            src: "RIG_Glamrock_Freddy|Freddy_Run_Sick_RIG_Glamrock_Freddy",
            nome: "Correndo machucado",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare 1",
        },
        jumpscare2: {
            src: "assets/audios/fnafsb/glamrock-freddy/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare 2",
        },
        fala1: {
            src: "assets/audios/fnafsb/glamrock-freddy/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/glamrock-freddy/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/glamrock-freddy/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        fala4: {
            src: "assets/audios/fnafsb/glamrock-freddy/fala4.ogg",
            volume: 0.5,
            nome: "Fala 4",
        },
        fala5: {
            src: "assets/audios/fnafsb/glamrock-freddy/fala5.ogg",
            volume: 0.5,
            nome: "Fala 5",
        },
    },
    descricao: "Glamrock Freddy aparece em Five Nights at Freddy's: Security Breach como o deuteragonista e aliado do jogador, Gregory. Ele é o líder e mascote do Freddy Fazbear's Mega Pizzaplex, sendo o único animatrônico que não foi corrompido pelo poder de Vanny após desligar no meio de uma apresentação. <br><br> Diferentemente de seus predecessores, Glamrock Freddy ativamente auxilia e protege Gregory. Seu design é baseado no Freddy Fazbear original, com um estilo punk reminiscente da década de 1980. Ele usa um chapéu-coco adornado com uma faixa azul e uma gravata borboleta preta. <br><br> Seu corpo é predominantemente laranja ou amarelo claro, com garras azuis e canelas vermelhas. Além disso, ele possui ombreiras vermelhas, pulseiras com espinhos e maquiagem facial semelhante à de bandas de rock, como o Kiss.",
}

var glamrockChica = {
    src: "assets/models/fnafsb/glamrock-chica.glb",
    corFundo: "radial-gradient(#B9007C, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/glamrock-chica/",
    swiperDescricao: [
        "Botão de Glamrock Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 3m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Glamrock_Chica|Chica_Idle_LOOP_RIG_Glamrock_Chica",
            nome: "Posição inicial",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Glamrock_Chica|Chica_Jumpscare_RIG_Glamrock_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m 0m",
            estatico: false,
        },
        horaDoShow1: {
            src: "RIG_Glamrock_Chica|Chica_Play_00_RIG_Glamrock_Chica",
            nome: "Hora do show 1",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        horaDoShow2: {
            src: "RIG_Glamrock_Chica|Chica_Shredding_RIG_Glamrock_Chica",
            nome: "Hora do show 2",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Glamrock_Chica|Chica_Idle_ScanBoth_RIG_Glamrock_Chica",
            nome: "Olhar",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        comendoLixo: {
            src: "RIG_Glamrock_Chica|Chica_Rummage_LOOP_RIG_Glamrock_Chica",
            nome: "Comendo lixo",
            alvoCamera: "0m 0.85m 0.15m",
            estatico: false,
        },
        batendoNaPorta: {
            src: "RIG_Glamrock_Chica|Chica_DoorSlam_RIG_Glamrock_Chica",
            nome: "Batendo na porta",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Glamrock_Chica|Chica_Search_Cart_RIG_Glamrock_Chica",
            nome: "Procurando 1",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Glamrock_Chica|Chica_Search_Photobooth_RIG_Glamrock_Chica",
            nome: "Procurando 2",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Glamrock_Chica|Chica_Search_ServiceCart_RIG_Glamrock_Chica",
            nome: "Procurando 3",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        atordoada: {
            src: "RIG_Glamrock_Chica|Chica_Stun_In_RIG_Glamrock_Chica",
            nome: "Atordoada",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        andando: {
            src: "RIG_Glamrock_Chica|Chica_Walk_LOOP_RIG_Glamrock_Chica",
            nome: "Andando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Glamrock_Chica|Chica_Run_RIG_Glamrock_Chica",
            nome: "Correndo",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/glamrock-chica/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/glamrock-chica/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/glamrock-chica/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        solo: {
            src: "assets/audios/fnafsb/glamrock-chica/solo.ogg",
            volume: 0.5,
            nome: "Solo",
        },
    },
    descricao: "Glamrock Chica aparece em \"Five Nights at Freddy's: Security Breach\". Ela é a guitarrista da banda glamrock e tem uma aparência marcante: um frango branco com olhos roxos, maquiagem nos olhos e lábios, e um corpo curvilíneo. <br><br> Seu visual é inspirado nos anos 80, com peças de roupa rosa e roxa, braceletes e luvas sem dedos. Além disso, após ser esmagada por um compactador de lixo, ela fica severamente danificada, com o bico removido e rachaduras por todo o corpo.",
};

var roxanneWolf = {
    src: "assets/models/fnafsb/roxanne-wolf.glb",
    corFundo: "radial-gradient(#8C54D0, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/roxanne-wolf/",
    swiperDescricao: [
        "Botão de Roxanne Wolf para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Glamrock_Roxy|Roxy_Idle_LOOP_RIG_Glamrock_Roxy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Glamrock_Roxy|Roxy_Jumpscare_RIG_Glamrock_Roxy",
            nome: "Jumpscare",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        horaDoShow1: {
            src: "RIG_Glamrock_Roxy|Roxy_Play_00_RIG_Glamrock_Roxy",
            nome: "Hora do show 1",
            alvoCamera: "0.25m 1.5m -0.1m",
            estatico: false,
        },
        conversando: {
            src: "RIG_Glamrock_Roxy|Roxy_PepTalk_01_RIG_Glamrock_Roxy",
            nome: "Conversando",
            alvoCamera: "-0.25m 1.5m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Glamrock_Roxy|Glamrock_Roxy_PounceStun_Loop_RIG_Glamrock_Roxy",
            nome: "Olhar",
            alvoCamera: "0m 1.2m -0.15m",
            estatico: false,
        },
        batendoNaPorta: {
            src: "RIG_Glamrock_Roxy|Roxy_DoorSlam_RIG_Glamrock_Roxy",
            nome: "Batendo na porta",
            alvoCamera: "0m 1.5m 0.25m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Glamrock_Roxy|Roxy_Search_Cart_RIG_Glamrock_Roxy",
            nome: "Procurando 1",
            alvoCamera: "0m 1.5m 0.5m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Glamrock_Roxy|Roxy_Search_Photobooth_RIG_Glamrock_Roxy",
            nome: "Procurando 2",
            alvoCamera: "0m 1.5m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Glamrock_Roxy|Roxy_Search_ServiceCart_RIG_Glamrock_Roxy",
            nome: "Procurando 3",
            alvoCamera: "0m 1.5m 0.5m",
            estatico: false,
        },
        atordoada: {
            src: "RIG_Glamrock_Roxy|Roxy_Stun_In_RIG_Glamrock_Roxy",
            nome: "Atordoada",
            alvoCamera: "0m 1.5m 0.1m",
            estatico: false,
        },
        pulando: {
            src: "RIG_Glamrock_Roxy|Roxy_Vent_Jump_RIG_Glamrock_Roxy",
            nome: "Pulando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        caindo: {
            src: "RIG_Glamrock_Roxy|Roxy_Vent_Land_RIG_Glamrock_Roxy",
            nome: "Caindo",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        noAr: {
            src: "RIG_Glamrock_Roxy|Glamrock_Roxy_PounceJump_Loop_RIG_Glamrock_Roxy",
            nome: "No ar",
            alvoCamera: "0m 1.2m -0.75m",
            estatico: false,
        },
        andando: {
            src: "RIG_Glamrock_Roxy|Roxy_Walk_LOOP_RIG_Glamrock_Roxy",
            nome: "Andando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Glamrock_Roxy|Roxy_Run_LOOP_RIG_Glamrock_Roxy",
            nome: "Correndo",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/roxanne-wolf/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/roxanne-wolf/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        chorando: {
            src: "assets/audios/fnafsb/roxanne-wolf/chorando.ogg",
            volume: 0.5,
            nome: "Chorando",
        },
    },
    descricao: "Roxanne Wolf, também conhecida como \"Roxy\", é uma animatrônica glamrock que aparece em \"Five Nights at Freddy's: Security Breach\" como uma das principais antagonistas. Ela é a autoconfiante tecladista da banda glamrock, apresentando-se como uma loba de pelagem cinza com olhos amarelos brilhantes. <br><br> Roxanne usa maquiagem preta nas bochechas e batom roxo. Seus pés têm garras pintadas de roxo, enquanto as garras das mãos são verdes. Seu cabelo é longo e prateado, com uma mecha verde brilhante. <br><br> Além disso, ela veste um top vermelho, shorts curtos e ombreiras adornadas com padrões de estrelas pretas. Após ser atropelada por um mini kart no Roxy Raceway, Roxanne fica gravemente danificada, com os olhos removidos para aprimorar Glamrock Freddy.",
};

var montgomeryGator = {
    src: "assets/models/fnafsb/montgomery-gator.glb",
    corFundo: "radial-gradient(#5D9D17, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/montgomery-gator/",
    swiperDescricao: [
        "Botão de Montgomery Gator para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5.5m",
    orbitaCameraMinima: "0 0 4.5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Montgomery_Gator|Monty_Idle_LOOP_RIG_Montgomery_Gator",
            nome: "Posição inicial",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Montgomery_Gator|Monty_Jumpscare_RIG_Montgomery_Gator",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m -0.2m",
            estatico: false,
        },
        horaDoShow1: {
            src: "RIG_Montgomery_Gator|Monty_Play_00_RIG_Montgomery_Gator",
            nome: "Hora do show 1",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Montgomery_Gator|Monty_Idle_ScanBoth_RIG_Montgomery_Gator",
            nome: "Olhar",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        batendoNaPorta: {
            src: "RIG_Montgomery_Gator|Monty_DoorSlam_RIG_Montgomery_Gator",
            nome: "Batendo na porta",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        golpe: {
            src: "RIG_Montgomery_Gator|Monty_FenceBreak_RIG_Montgomery_Gator",
            nome: "Golpe",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        rugindo: {
            src: "RIG_Montgomery_Gator|Monty_PounceStunToIdle_RIG_Montgomery_Gator",
            nome: "Rugindo",
            alvoCamera: "0m 1.1m 0.1m",
            estatico: false,
        },
        quebrando: {
            src: "RIG_Montgomery_Gator|Monty_Smash_RIG_Montgomery_Gator",
            nome: "Quebrando",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Montgomery_Gator|Monty_Search_Cart_RIG_Montgomery_Gator",
            nome: "Procurando 1",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Montgomery_Gator|Monty_Search_Photobooth_RIG_Montgomery_Gator",
            nome: "Procurando 2",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Montgomery_Gator|Monty_Search_ServiceCart_RIG_Montgomery_Gator",
            nome: "Procurando 3",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        atordoado: {
            src: "RIG_Montgomery_Gator|Monty_Stun_In_RIG_Montgomery_Gator",
            nome: "Atordoado",
            alvoCamera: "0m 1.15m 0.1m",
            estatico: false,
        },
        pulando: {
            src: "RIG_Montgomery_Gator|Monty_Jump_RIG_Montgomery_Gator",
            nome: "Pulando",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        noAr: {
            src: "RIG_Montgomery_Gator|Monty_PounceJump_Loop_RIG_Montgomery_Gator",
            nome: "No ar",
            alvoCamera: "0.2m 1.5m -0.5m",
            estatico: false,
        },
        caindo1: {
            src: "RIG_Montgomery_Gator|Monty_Land_RIG_Montgomery_Gator",
            nome: "Caindo 1",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        caindo2: {
            src: "RIG_Montgomery_Gator|MontyOutro_Monty_Shot300_RIG_Montgomery_Gator",
            nome: "Caindo 2",
            alvoCamera: "34.25m 18.75m -6.85m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 0 0",
        },
        andando: {
            src: "RIG_Montgomery_Gator|Monty_Walk_LOOP_RIG_Montgomery_Gator",
            nome: "Andando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Montgomery_Gator|Monty_Run_LOOP_RIG_Montgomery_Gator",
            nome: "Correndo",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/montgomery-gator/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/montgomery-gator/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/montgomery-gator/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        rugindo: {
            src: "assets/audios/fnafsb/montgomery-gator/rugindo.ogg",
            volume: 0.5,
            nome: "Rugindo",
        },
    },
    descricao: "Montgomery Gator, também conhecido como Monty, é um animatrônico glamrock que aparece em Five Nights at Freddy's: Security Breach como um dos principais antagonistas. <br><br> Ele é o baixista da banda glamrock, tendo substituído Glamrock Bonnie antes de ser derrubado das passarelas acima de sua atração por Gregory e ter suas garras removidas por Glamrock Freddy. <br><br> Sua aparência normal inclui dentes pontiagudos, garras pretas, um moicano vermelho, calças com textura de escamas verdes e manchas nos braços e bochechas.",
};

var shatteredGlamrockChica = {
    src: "assets/models/fnafsb/shattered-glamrock-chica.glb",
    corFundo: "radial-gradient(#B9007C, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/shattered-glamrock-chica/",
    swiperDescricao: [
        "Botão de Shattered Glamrock Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 13m",
    orbitaCameraMinima: "0 0 10m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Chica|ShatteredChica_Idle_RIG_Shattered_Chica",
            nome: "Posição inicial",
            alvoCamera: "0m 2.75m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Shattered_Chica|ShatteredChica_Jumpscare_RIG_Shattered_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m 3m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Shattered_Chica|ShatteredChica_Idle_LookL_RIG_Shattered_Chica",
            nome: "Olhar",
            alvoCamera: "0m 2.75m 0m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_Kiosk_RIG_Shattered_Chica",
            nome: "Procurando 1",
            alvoCamera: "0m 2.75m 0.25m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_FirstAid_RIG_Shattered_Chica",
            nome: "Procurando 2",
            alvoCamera: "0m 2.75m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_ServiceCart_RIG_Shattered_Chica",
            nome: "Procurando 3",
            alvoCamera: "0m 2.75m 0.5m",
            estatico: false,
        },
        atordoada: {
            src: "RIG_Shattered_Chica|ShatteredChica_Stun_out_RIG_Shattered_Chica",
            nome: "Atordoada",
            alvoCamera: "0m 2.75m 0m",
            estatico: false,
        },
        andando: {
            src: "RIG_Shattered_Chica|ShatteredChica_Walk_RIG_Shattered_Chica",
            nome: "Andando",
            alvoCamera: "0m 3m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Shattered_Chica|ShatteredChica_Run_RIG_Shattered_Chica",
            nome: "Correndo",
            alvoCamera: "0m 3m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/shattered-glamrock-chica/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        ruido: {
            src: "assets/audios/fnafsb/shattered-glamrock-chica/ruido.ogg",
            volume: 0.5,
            nome: "Ruído",
        },
    },
    descricao: "Shattered Glamrock Chica é a versão despedaçada de Glamrock Chica que aparece em Five Nights at Freddy's: Security Breach. <br><br> Ela é a guitarrista da banda glamrock, mas após ser esmagada por um compactador de lixo, sua aparência se deteriora drasticamente. Seu bico é arrancado, revelando o endoesqueleto, e seu corpo está repleto de rachaduras e buracos.",
};

var shatteredRoxanneWolf = {
    src: "assets/models/fnafsb/shattered-roxanne-wolf.glb",
    corFundo: "radial-gradient(#8C54D0, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/shattered-roxanne-wolf/",
    swiperDescricao: [
        "Botão de Shattered Roxanne Wolf para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_Idle_RIG_Shattered_Roxy",
            nome: "Posição inicial",
            alvoCamera: "0m 1m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-20deg 1.5rad 0",
        },
        jumpscare: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Jumpscare_RIG_Shattered_Roxy",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_PounceStun_Loop_RIG_Shattered_Roxy",
            nome: "Olhar",
            alvoCamera: "0m 0.85m -0.1m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Search_Kiosk_RIG_Shattered_Roxy",
            nome: "Procurando 1",
            alvoCamera: "0m 1.1m 0.25m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Search_Photobooth_RIG_Shattered_Roxy",
            nome: "Procurando 2",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Search_ServiceCart_RIG_Shattered_Roxy",
            nome: "Procurando 3",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        noAr: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_PounceJump_Loop_RIG_Shattered_Roxy",
            nome: "No ar",
            alvoCamera: "0m 1m -0.5m",
            estatico: false,
        },
        chorando: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_WeepIdle_RIG_Shattered_Roxy",
            nome: "Chorando",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-20deg 1.5rad 0",
        },
        andando: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_Walk_RIG_Shattered_Roxy",
            nome: "Andando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        andandoChorando: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Walk_Weeping_RIG_Shattered_Roxy",
            nome: "Andando chorando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_BipedalRun_Loop_RIG_Shattered_Roxy",
            nome: "Correndo",
            alvoCamera: "0m 1m 0.25m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/shattered-roxanne-wolf/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        gritando: {
            src: "assets/audios/fnafsb/shattered-roxanne-wolf/gritando.ogg",
            volume: 0.5,
            nome: "Gritando",
        },
        rosnando: {
            src: "assets/audios/fnafsb/shattered-roxanne-wolf/rosnando.ogg",
            volume: 0.5,
            nome: "Rosnando",
        },
        fala1: {
            src: "assets/audios/fnafsb/shattered-roxanne-wolf/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/shattered-roxanne-wolf/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
    },
    descricao: "Shattered Roxanne Wolf é uma animatrônica glamrock que aparece em Five Nights at Freddy's: Security Breach. <br><br> Ela é a autoproclamada tecladista egocêntrica da banda glamrock, com um visual de lobo cinza, olhos amarelos e maquiagem preta nas bochechas. Após ser atropelada pelo Driver Assist Bot, seus olhos são removidos para aprimorar Glamrock Freddy, deixando-a cega e com danos severos. <br><br> Seu cabelo prateado está emaranhado, e partes de sua carcaça estão quebradas, expondo o endoesqueleto.",
};

var shatteredMontgomeryGator = {
    src: "assets/models/fnafsb/shattered-montgomery-gator.glb",
    corFundo: "radial-gradient(#5D9D17, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/shattered-montgomery-gator/",
    swiperDescricao: [
        "Botão de Shattered Montgomery Gator para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 4m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Idle_RIG_Shattered_Montgomery",
            nome: "Posição inicial",
            alvoCamera: "0m 0.4m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Jumpscare_RIG_Shattered_Montgomery",
            nome: "Jumpscare",
            alvoCamera: "0m 0.65m -0.5m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Scan_RIG_Shattered_Montgomery",
            nome: "Olhar",
            alvoCamera: "0m 0.4m 0m",
            estatico: false,
        },
        atordoado: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Stun_In_RIG_Shattered_Montgomery",
            nome: "Atordoado",
            alvoCamera: "0m 0.4m 0m",
            estatico: false,
        },
        seRastejando: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Crawl_RIG_Shattered_Montgomery",
            nome: "Se rastejando",
            alvoCamera: "0m 0.3m 0m",
            estatico: false,
        },
        seRastejandoRapido: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Crawl_Fast_RIG_Shattered_Montgomery",
            nome: "Se rastejando rápido",
            alvoCamera: "0m 0.4m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/shattered-montgomery-gator/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala: {
            src: "assets/audios/fnafsb/shattered-montgomery-gator/fala.ogg",
            volume: 0.5,
            nome: "Fala",
        },
    },
    descricao: "Shattered Montgomery Gator, também conhecido como \"Monty\", é um animatrônico glamrock que aparece em Five Nights at Freddy's: Security Breach. Ele foi derrubado das passarelas acima de sua atração por Gregory para remover suas garras e dar para Glamrock Freddy. <br><br> Após ser jogado das passarelas, ele fica gravemente danificado, com a mandíbula deslocada, um braço faltando e partes expostas do endoesqueleto.",
};

var sun = {
    src: "assets/models/fnafsb/sun.glb",
    corFundo: "radial-gradient(#F8D1AC, #BD8343)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/sun/",
    swiperDescricao: [
        "Botão de Sun (Daycare Attendant) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 9m",
    orbitaCameraMinima: "0 0 6m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Sunman|Sunman_Blocking_Idle_RIG_Sunman",
            nome: "Posição inicial",
            alvoCamera: "0m 1.5m 0.25m",
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
            estatico: false,
        },
        pulando: {
            src: "RIG_Sunman|SunMan_Cinematic_Intro_RIG_Sunman",
            nome: "Pulando",
            alvoCamera: "-251.5m 38m 446.25m",
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 15m",
            estatico: false,
        },
        bracosLevantados: {
            src: "RIG_Sunman|SunMan_GatorGolf_Idle_RIG_Sunman",
            nome: "Braços levantados",
            alvoCamera: "0m 1.9m 0m",
            estatico: false,
        },
        carregandoGregory: {
            src: "RIG_Sunman|SunMan_Walk_Carry_RIG_Sunman",
            nome: "Carregando Gregory",
            alvoCamera: "0m 1.75m 0.25m",
            estatico: false,
        },
        agachado: {
            src: "RIG_Sunman|SunMan_NoiseMaker_Panic_RIG_Sunman",
            nome: "Agachado",
            alvoCamera: "0m 1.25m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        montandoBrinquedo: {
            src: "RIG_Sunman|SunMan_NoiseMaker_Reset_03_RIG_Sunman",
            nome: "Montando brinquedo",
            alvoCamera: "0m 1.5m 0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        chorando: {
            src: "RIG_Sunman|Sunman_Idle_Sad_RIG_Sunman",
            nome: "Chorando",
            alvoCamera: "-0.1m 1.25m 0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        seTransformandoEmMoon: {
            src: "RIG_Sunman|SunMan_Cinematic_Transformation_RIG_Sunman",
            nome: "Se transformando em Moon",
            alvoCamera: "-256.75m 26m 527m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-100deg 0 0",
        },
        andando: {
            src: "RIG_Sunman|SunMan_Walk_RIG_Sunman",
            nome: "Andando",
            alvoCamera: "0m 2m 0.25m",
            estatico: false,
        },
    },
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/sun/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/sun/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/sun/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        fala4: {
            src: "assets/audios/fnafsb/sun/fala4.ogg",
            volume: 0.5,
            nome: "Fala 4",
        },
        fala5: {
            src: "assets/audios/fnafsb/sun/fala5.ogg",
            volume: 0.5,
            nome: "Fala 5",
        },
        fala6: {
            src: "assets/audios/fnafsb/sun/fala6.ogg",
            volume: 0.5,
            nome: "Fala 6",
        },
        somMecanico: {
            src: "assets/audios/fnafsb/sun/som-mecanico.ogg",
            volume: 0.5,
            nome: "Som mecânico",
        },
    },
    descricao: "Sun é uma versão de Daycare Attendant, animatrônico do Five Nights at Freddy's: Security Breach. Ele tem uma aparência jocosa, com uma cabeça em forma de sol de cor bege-clara, olhos brancos e um sorriso largo. Seu corpo é esguio, com membros longos e mãos grandes de cinco dedos. <br><br> Sun usa uma camisa bege-âmbar, calças amarelas com listras marrom e um sash de tecido marrom-claro. Curiosamente, Sun tem uma marca em forma de crescente no rosto, que se sobrepõe ao nariz e cria a ilusão de uma lua sorridente, fazendo referência ao seu contraparte, Moon.",
};

var moon = {
    src: "assets/models/fnafsb/moon.glb",
    corFundo: "radial-gradient(#02137C, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/moon/",
    swiperDescricao: [
        "Botão de Moon (Daycare Attendant) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_MoonMan|MoonMan_Idle_RCorner_02_Loop_RIG_MoonMan",
            nome: "Posição inicial",
            alvoCamera: "-0.35m 0.9m -0.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-15deg 90deg 0",
        },  
        jumpscare: {
            src: "RIG_MoonMan|MoonMan_Jumpscare_RIG_MoonMan",
            nome: "Jumpscare",
            alvoCamera: "0m 1.05m -0.25m",
            estatico: false,
        },
        pulando: {
            src: "RIG_MoonMan|MoonMan_Idle_Creepy_01_RIG_MoonMan",
            nome: "Pulando",
            alvoCamera: "0m 1.05m 0.2m",
            estatico: false,
        },
        cambalhota: {
            src: "RIG_MoonMan|MoonMan_Idle_Creepy_02_RIG_MoonMan",
            nome: "Cambalhota",
            alvoCamera: "0m 1.05m 0.2m",
            estatico: false,
        },
        dancando: {
            src: "RIG_MoonMan|Moonman_Idle_Creepy_03_RIG_MoonMan",
            nome: "Dançando",
            alvoCamera: "0m 1m 0.2m",
            estatico: false,
        },
        voando: {
            src: "RIG_MoonMan|Moonman_Idle_Creepy_04_RIG_MoonMan",
            nome: "Voando",
            alvoCamera: "0m 1.3m 0.2m",
            estatico: false,
        },
        acenando: {
            src: "RIG_MoonMan|Moonman_IdLe_Creepy_06_Cieling_RIG_MoonMan",
            nome: "Acenando",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        seContorcendo: {
            src: "RIG_MoonMan|MoonMan_Idle_Creepy_08_RIG_MoonMan",
            nome: "Se contorcendo",
            alvoCamera: "0.15m 0.4m 0.375m",
            estatico: false,
        },
        chamando: {
            src: "RIG_MoonMan|Moonman_Idle_RCorner_01_RIG_MoonMan",
            nome: "Chamando",
            alvoCamera: "0.075m 1m -0.3m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-20deg 90deg 0",
        },
        agachado: {
            src: "RIG_MoonMan|MoonMan_NoiseMaker_Panic_RIG_MoonMan",
            nome: "Agachado",
            alvoCamera: "0m 0.9m 0.15m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        montandoBrinquedo: {
            src: "RIG_MoonMan|MoonMan_NoiseMaker_Reset_03_RIG_MoonMan",
            nome: "Montando brinquedo",
            alvoCamera: "0.1m 1m 0.2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        andando: {
            src: "RIG_MoonMan|MoonMan_Walk_00_RIG_MoonMan",
            nome: "Andando",
            alvoCamera: "0m 0.9m 0.05m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        andando2: {
            src: "RIG_MoonMan|MoonMan_WalK_OnHands_RIG_MoonMan",
            nome: "Andando 2",
            alvoCamera: "0m 0.625m 0.1m",
            estatico: false,
        },
        engatinhando: {
            src: "RIG_MoonMan|Moonman_Skitter_Flat_RIG_MoonMan",
            nome: "Engatinhando",
            alvoCamera: "0m 0.5m -0.4m",
            estatico: false,
        },
        correndo: {
            src: "RIG_MoonMan|MoonMan_Run_RIG_MoonMan",
            nome: "Correndo",
            alvoCamera: "0m 1m 0.05m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/moon/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/moon/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/moon/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        risada: {
            src: "assets/audios/fnafsb/moon/risada.ogg",
            volume: 0.5,
            nome: "Risada",
        },
    },
    descricao: "Moon é uma versão de Daycare Attendant, animatrônico do Five Nights at Freddy's: Security Breach. Depois de se transformar em Moon, os raios solares que cercam o rosto de Sun são retraídos em sua cabeça. <br><br> A metade esquerda de seu rosto fica preta com os detalhes em seus dentes e olhos ainda visíveis, e o lado direito de seu rosto, em forma de lua crescente, fica branco, dando à ilusão da lua sorridente mais contraste e destaque."
};

var glamrockEndo = {
    src: "assets/models/fnafsb/glamrock-endo.glb",
    corFundo: "radial-gradient(#3E3B3C, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/glamrock-endo/",
    swiperDescricao: [
        "Botão de Glamrock Endo para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6.5m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Endo.ao|Endo_Idle_01_LOOP",
            nome: "Posição inicial",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Endo.ao|Endo_Jumpscare",
            nome: "Jumpscare",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        pendurado: {
            src: "RIG_Endo.ao|Endo_HangingPose_12",
            nome: "Pendurado",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        seDespendurando: {
            src: "RIG_Endo.ao|Endo_OffHook",
            nome: "Se despendurando",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Endo.ao|Endo_Idle_LOOP03",
            nome: "Olhar",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        atordoado: {
            src: "RIG_Endo.ao|Endo_Stun_Loop_01",
            nome: "Atordoado",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        engatinhando: {
            src: "RIG_Endo.ao|Endo_Crawl",
            nome: "Engatinhando",
            alvoCamera: "0m 0.5m 0m",
            estatico: false,
        },
        oAndarDaChica: {
            src: "RIG_Endo.ao|Endo_Walk_01_LOOP",
            nome: "O andar da Chica",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        oAndarDaRoxy: {
            src: "RIG_Endo.ao|Endo_Walk_LOOP02",
            nome: "O andar da Roxy",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        oAndarDoMonty: {
            src: "RIG_Endo.ao|Endo_Walk_LOOP03",
            nome: "O andar do Monty",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        oCorrerDaChica: {
            src: "RIG_Endo.ao|Endo_Run_01",
            nome: "O correr da Chica",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        oCorrerDaRoxy: {
            src: "RIG_Endo.ao|Endo_Run_LOOP02",
            nome: "O correr da Roxy",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
        oCorrerDoMonty: {
            src: "RIG_Endo.ao|Endo_Run_LOOP03",
            nome: "O correr do Monty",
            alvoCamera: "0m 1.25m 0m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/glamrock-endo/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "O Glamrock Endo, também conhecido como Glamrock Endoskeleton, são os endoesqueletos projetados para os animatrônicos glamrock do Mega Pizzaplex e aparecem em Five Nights at Freddy's: Security Breach e RUIN como um grupo de inimigos hostis. <br><br> Ele é uma versão muito high-tech do endoesqueleto original, sendo de cor cinza como de costume como Endo-01 e Endo-02, mas tendo uma construção muito mais forte, com seu tronco sendo coberto por fios de ouro, e seus olhos brilhando vermelho. <br><br> Os Glamrock Endos só se movem quando o jogador não está olhando para eles, permanecendo em suas posições originais quando está sendo olhado. Quando o jogador desvia o olhar, ele se move em direção a eles para atacar em alta velocidade.",
};

var djMusicMan = {
    src: "assets/models/fnafsb/dj-music-man.glb",
    corFundo: "radial-gradient(#F78BE4, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/dj-music-man/",
    swiperDescricao: [
        "Botão de DJ Music Man para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_DJ_Music_Man|DJMM_Idle_Disabled_RIG_DJ_Music_Man",
            nome: "Posição inicial",
            alvoCamera: "18.5m 4.35m 51.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-40deg 90deg 0",
        },
        jumpscare: {
            src: "RIG_DJ_Music_Man|DJMM_Jumpscare_RIG_DJ_Music_Man",
            nome: "Jumpscare",
            alvoCamera: "0m 0.4m -1.75m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
        seMovimentando: {
            src: "RIG_DJ_Music_Man|DJMM_Idle_RtoL_RIG_DJ_Music_Man",
            nome: "Se movimentando",
            alvoCamera: "16m 4.25m 46.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "190deg 90deg 0",
        },
        horaDoShow: {
            src: "RIG_DJ_Music_Man|DJMM_Idle_DJing_SingleLoop_RIG_DJ_Music_Man",
            nome: "Hora do show",
            alvoCamera: "18.75m 4.5m 51.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-50deg 90deg 0",
        },
        andando: {
            src: "RIG_DJ_Music_Man|DJMM_Walk_RIG_DJ_Music_Man",
            nome: "Andando",
            alvoCamera: "0m 0.4m -0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 90deg 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/dj-music-man/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "DJ Music Man, conhecido como DJMM, é um animatrônico gigante que apareceu pela primeira vez em Five Nights at Freddy's: Security Breach como um antagonista menor. Ele reside em Fazcade como o DJ principal. <br><br> DJ Music Man é drasticamente diferente em comparação com sua contraparte original no Freddy Fazbear's Pizzeria Simulator. Toda a sua estrutura corporal foi completamente renovada, agora muito mais parecida com uma aranha do que sua contraparte anterior. Seus olhos são pretos e funcionam como LEDs para várias imagens diferentes. <br><br> Suas texturas em seu rosto também são alteradas, com suas sobrancelhas e bochechas sendo um azul claro em vez de roxo e rosa. Ele parece não ter as listras rosas nas laterais de seu rosto, e em vez de duas manchas rosas em seu queixo, ele tem uma única faixa azul clara.",
};

var miniMusicMan = {
    src: "assets/models/fnafsb/mini-music-man.glb",
    corFundo: "radial-gradient(#E9789A, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/mini-music-man/",
    swiperDescricao: [
        "Botão de Mini Music Man para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Little_DJ_Music_Man|LMM_Cinematic_Spawn_IN_RIG_Little_DJ_Music_Man",
            nome: "Posição inicial",
            alvoCamera: "0m 0.3m 0.1m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Little_DJ_Music_Man|LMM_Jumpscare_RIG_Little_DJ_Music_Man",
            nome: "Jumpscare",
            alvoCamera: "0m 0.3m 0.1m",
            estatico: false,
        },
        pulando: {
            src: "RIG_Little_DJ_Music_Man|LMM_Spawn_OUT_RIG_Little_DJ_Music_Man",
            nome: "Pulando",
            alvoCamera: "0m 0.3m 0.1m",
            estatico: false,
        },
        caindo: {
            src: "RIG_Little_DJ_Music_Man|LMM_Spawn_IN_RIG_Little_DJ_Music_Man",
            nome: "Caindo",
            alvoCamera: "0m 0.3m 0.1m",
            estatico: false,
        },
        andando: {
            src: "RIG_Little_DJ_Music_Man|LMM_Walk_RIG_Little_DJ_Music_Man",
            nome: "Andando",
            alvoCamera: "0m 0.3m 0.1m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Mini Music Man é um pequeno animatrônico que aparece em Five Nights at Freddy's: Security Breach como um antagonista menor que persegue Gregory na ventilação. <br><br> Mini Music Man é um pequeno brinquedo de relógio semelhante ao seu homólogo original, mas ele parece estar muito mais sujo e quebrado, tendo um dente ausente e vários dentes rachados ou danificados. Ele tem uma chave de enrolar na parte de trás do corpo.",
};

var staffBot = {
    src: "assets/models/fnafsb/staff-bots/staff-bot.glb",
    corFundo: "radial-gradient(#97AAD2, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/staff-bot/",
    swiperDescricao: [
        "Botão de S.T.A.F.F Bot (genérico) para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 6m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "staffbot_RIG_Staffbot_skeleton|StaffBot_Idle_keepAlive",
            nome: "Posição inicial",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "staffbot_RIG_Staffbot_skeleton|Jumpscare",
            nome: "Jumpscare",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        conversando: {
            src: "staffbot_RIG_Staffbot_skeleton|RulesBot_00001",
            nome: "Conversando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
        desligando: {
            src: "staffbot_RIG_Staffbot_skeleton|Staffbot_Stun",
            nome: "Desligando",
            alvoCamera: "0m 1.5m 0m",
            estatico: false,
        },
    },
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/staff-bots/staff-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/staff-bots/staff-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/staff-bots/staff-bot/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Os S.T.A.F.F. Bots são robôs de funcionários feitos pela Fazbear Entertainment LLC para o Mega Pizzaplex de Freddy Fazbear. Eles apareceram pela primeira vez em Five Nights at Freddy's: Security Breach. <br><br> Embora todos os Bots S.T.A.F.F. variem em esquema de cores dependendo de sua função, todos eles compartilham o mesmo design básico. <br><br> Os bots da S.T.A.F.F. executam trabalhos normalmente feitos por humanos ao redor do Pizzaplex, e podem ser vistos trabalhando como garçons, seguranças e faxineiros. A maioria de suas variantes são passivas, e não tentarão machucar o jogador.",
};

var securityBot = {
    src: "assets/models/fnafsb/staff-bots/security-bot.glb",
    corFundo: "radial-gradient(#767F8A, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/security-bot/",
    swiperDescricao: [
        "Botão de Security Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0.5m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/staff-bots/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Os Security Bots patrulham o Mega Pizzaplex de Freddy Fazbear durante a noite. Esses Bots S.T.A.F.F. são os mais comuns ao longo do jogo, e seguem rotas de patrulha definidas, ocasionalmente parando e realizando uma volta completa antes de retomar suas rodadas. <br><br> Se Gregory entrar no feixe de luz, o Bot de Segurança o assustará e soará um alarme, alertando um Glamrock Animatronic sobre sua posição.",
};

var mapBot = {
    src: "assets/models/fnafsb/staff-bots/map-bot.glb",
    corFundo: "radial-gradient(#755007, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/map-bot/",
    swiperDescricao: [
        "Botão de Map Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/staff-bots/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/staff-bots/map-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/staff-bots/map-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/staff-bots/map-bot/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
        fala4: {
            src: "assets/audios/fnafsb/staff-bots/map-bot/fala4.ogg",
            volume: 0.5,
            nome: "Fala 4",
        },
    },
    descricao: "Os Map Bots são bots S.T.A.F.F. que são empregados para distribuir mapas aos clientes. Eles têm o hábito de pular assustando Gregory, no entanto, isso não alertará os animatrônicos próximos. Em vez disso, eles seguirão com um pedido para que ele pegue um mapa.",
};

var partyBot = {
    src: "assets/models/fnafsb/staff-bots/party-bot.glb",
    corFundo: "radial-gradient(#4B259C, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/party-bot/",
    swiperDescricao: [
        "Botão de Party Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/staff-bots/party-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/staff-bots/party-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/staff-bots/party-bot/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Os Party Bots são bots S.T.A.F.F. que ficam em frente às entradas de determinadas atrações Se Gregory tiver um Party Pass, eles dançarão no local enquanto o jogo o leva a dá-lo a eles, e eles desaparecerão imediatamente depois de receber o Party Pass. Se Gregory não tiver um passe, eles o impedirão de entrar na atração que guardam.",
};

var chefBot = {
    src: "assets/models/fnafsb/staff-bots/chef-bot.glb",
    corFundo: "radial-gradient(#717171, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/chef-bot/",
    swiperDescricao: [
        "Botão de Chef Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/staff-bots/chef-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/staff-bots/chef-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
    },
    descricao: "O Pizza Bot, também chamado de Chef Bot nos arquivos, é um bot S.T.A.F.F. que é empregado para fazer pizzas através do Mega Pizzaplex Quick Delivery Virtual System da Freddy Fazbear. Ele é a única variante de bot S.T.A.F.F. que pode ser totalmente controlada pelo jogador. Gregory usa isso para fazer uma pizza para distrair Glamrock Chica, que a ataca no processo.",
};

var serverBot = {
    src: "assets/models/fnafsb/staff-bots/server-bot.glb",
    corFundo: "radial-gradient(#810B1A, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/server-bot/",
    swiperDescricao: [
        "Botão de Server Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    descricao: "O Server Bot é um bot S.T.A.F.F. que é empregado para servir comida às pessoas. O Server Bot usa uma camisa listrada azul, laranja e vermelha, eles também usam um boné roxo claro e vermelho com uma hélice vermelha e azul. Uma versão quebrada pode ser encontrada no final dos esgotos.",
};

var sewerBot = {
    src: "assets/models/fnafsb/staff-bots/sewer-bot.glb",
    corFundo: "radial-gradient(#2C2F26, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/sewer-bot/",
    swiperDescricao: [
        "Botão de Sewer Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.25m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/staff-bots/sewer-bot/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/staff-bots/sewer-bot/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
    },
    descricao: "O Sewer Bot é uma variante dos S.T.A.F.F. Bots que aparece no jogo Five Nights at Freddy's: Security Breach. Ele tem uma aparência mais sinistra e desgastada em comparação com os outros S.T.A.F.F. Bots. Ele é encontrado no esgoto do Pizzaplex e tem uma cabeça oval com olhos vermelhos brilhantes e uma boca com dentes afiados. Seu corpo é composto por segmentos metálicos e ele se move sobre rodas.",
};

var nightmarionneBot = {
    src: "assets/models/fnafsb/staff-bots/nightmarionne-bot.glb",
    corFundo: "radial-gradient(#453830, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/staff-bots/nightmarionne-bot/",
    swiperDescricao: [
        "Botão de Nightmarionne Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.25m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare 1",
        },
        jumpscare2: {
            src: "assets/audios/fnafsb/staff-bots/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare 2",
        },
    },
    descricao: "Os Bots Nightmarionne S.T.A.F.F. ou Alpha S.T.A.F.F. Bots são as contrapartes vandalizadas dos Bots S.T.A.F.F. regulares que se assemelham ao Nightmarionne, daí seu nome. <br><br> Eles podem ser vistos nos esgotos do Pizzaplex e são os únicos bots S.T.A.F.F. que podem matar diretamente o jogador, tornando-os os bots mais perigosos do jogo. No entanto, eles são letais apenas nos esgotos e atuam como Bots de Segurança em todos os outros encontros.",
};

var cautionBot = {
    src: "assets/models/fnafsb/caution-bot.glb",
    corFundo: "radial-gradient(#C8AB29, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/caution-bot/",
    swiperDescricao: [
        "Botão de Caution Bot para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 4m",
    alvoCamera: "0m 0.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    descricao: "O Caution Bot, também conhecido extraoficialmente como Wet Floor Bot, é um letreiro robótico de piso molhado localizado ao redor do Mega Pizzaplex de Freddy Fazbear. Ele estreou em Five Nights at Freddy's: Security Breach e fez outra aparição no DLC RUIN.",
};

var gregory = {
    src: "assets/models/fnafsb/gregory.glb",
    corFundo: "radial-gradient(#1F396A, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/gregory/",
    swiperDescricao: [
        "Botão de Gregory para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Gregory|Gregory_Idle_Standard",
            nome: "Posição inicial",
            alvoCamera: "0m 0.6m 0.05m",
            estatico: false,
        },
        agachado: {
            src: "RIG_Gregory|Gregory_Idle_Standard_Crouched",
            nome: "Agachado",
            alvoCamera: "0m 0.4m -0.05m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Gregory|Gregory_Run_Forward",
            nome: "Correndo",
            alvoCamera: "0m 0.6m 0.05m",
            estatico: false,
        },
        andando: {
            src: "RIG_Gregory|Gregory_Walk_Forward",
            nome: "Andando",
            alvoCamera: "0m 0.6m 0.05m",
            estatico: false,
        },
        andandoAgachado: {
            src: "RIG_Gregory|Gregory_Walk_Forward_Crouched",
            nome: "Andando agachado",
            alvoCamera: "0m 0.4m 0.05m",
            estatico: false,
        },
    },
    audios: {
        fala1: {
            src: "assets/audios/fnafsb/gregory/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/gregory/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/gregory/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Gregory é o principal protagonista de Five Nights at Freddy's: Security Breach, o personagem com quem o jogador joga. Ele é uma criança pequena e magra com pele cor de damasco, cabelo castanho bagunçado e olhos castanhos. <br><br> Ele tem bandagens na bochecha direita e no joelho esquerdo. Ele veste uma camiseta azul com gola azul-claro e duas listras brancas posicionadas horizontalmente no peito. <br><br> Ele tem uma lanterna que pode usar para ver em lugares escuros que recebeu no Superstar Daycare, e carrega um Faz-Watch em seu pulso, onde pode acessar suas missões, o sistema de câmeras e o mapa do Freddy Fazbear's Mega Pizzaplex. <br><br> Ele também pode usar armas para atordoar temporariamente os inimigos, como a Faz Camera e o Fazerblaster.",
};

var vanessa = {
    src: "assets/models/fnafsb/vanessa.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    srcImg: "assets/images/fnafsb/vanessa/",
    swiperDescricao: [
        "Botão de Vanessa para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 4m",
    orbitaCameraMinima: "0 0 4.5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "Vanessa|Vanessa_Idle_00",
            nome: "Posição inicial",
            alvoCamera: "0m 0.95m 0.25m",
            estatico: false,
        },
        jumpscare: {
            src: "Vanessa|Vanessa_Jumpscare",
            nome: "Jumpscare",
            alvoCamera: "0m 0.95m 0.25m",
            estatico: false,
        },
        procurando1: {
            src: "Vanessa|Vanessa_Idle_Scanning_01",
            nome: "Procurando 1",
            alvoCamera: "0m 0.95m 0.35m",
            estatico: false,
        },
        procurando2: {
            src: "Vanessa|Vanessa_Idle_Scanning_02",
            nome: "Procurando 2",
            alvoCamera: "0m 0.95m 0.25m",
            estatico: false,
        },
        atordoada: {
            src: "Vanessa|Vanessa_Stunned_IN",
            nome: "Atordoada",
            alvoCamera: "0m 0.95m 0m",
            estatico: false,
        },
        andando: {
            src: "Vanessa|Vanessa_Walk",
            nome: "Andando",
            alvoCamera: "0m 0.95m 0.15m",
            estatico: false,
        },
        procurandoEAndando: {
            src: "Vanessa|Vanessa_Walk_L180Scan",
            nome: "Procurando e andando",
            alvoCamera: "0m 0.95m 0m",
            estatico: false,
        },
        correndo: {
            src: "Vanessa|Vanessa_Jog",
            nome: "Correndo",
            alvoCamera: "0m 0.95m 0.15m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnafsb/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/vanessa/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/vanessa/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/vanessa/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Vanessa é uma antagonista menor de Five Nights at Freddy's: Security Breach. Ela é a chefe de segurança no Freddy Fazbear's Mega Pizzaplex. Vanessa é uma jovem mulher de pele clara, cabelos loiros na altura dos ombros, sardas, olhos verdes e lábios brilhantes.",
};

var vanny = {
    src: "assets/models/fnafsb/vanny.glb",
    corFundo: "radial-gradient(#9F9E98, #000)",
    fnaf: "sb",
    temCursor: true,
    srcImg: "assets/images/fnafsb/vanny/",
    swiperDescricao: [
        "Botão de Vanny para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 8m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Vanny|Vanny_Idle_RIG_Vanny",
            nome: "Posição inicial",
            alvoCamera: "0m 2.25m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Vanny|Vanny_JumpScare_RIG_Vanny",
            nome: "Jumpscare",
            alvoCamera: "0m 2.25m 0m",
            estatico: false,
        },
        acenando: {
            src: "RIG_Vanny|Vanny_WindowWave_LS_RIG_Vanny",
            nome: "Acenando",
            alvoCamera: "0m 2.25m 0m",
            estatico: false,
        },
        saltitando: {
            src: "RIG_Vanny|Vanny_Skip_00_RIG_Vanny",
            nome: "Saltitando",
            alvoCamera: "0m 2.25m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Vanny|Vanny_Run_00_RIG_Vanny",
            nome: "Correndo",
            alvoCamera: "0m 2.25m 0.25m",
            estatico: false,
        },
    },
    audios: {
         jumpscare: {
            src: "assets/audios/fnafsb/vanny/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        fala1: {
            src: "assets/audios/fnafsb/vanny/fala1.ogg",
            volume: 0.5,
            nome: "Fala 1",
        },
        fala2: {
            src: "assets/audios/fnafsb/vanny/fala2.ogg",
            volume: 0.5,
            nome: "Fala 2",
        },
        fala3: {
            src: "assets/audios/fnafsb/vanny/fala3.ogg",
            volume: 0.5,
            nome: "Fala 3",
        },
    },
    descricao: "Vanny é uma antagonista de Five Nights at Freddy's: Security Breach. Ela é uma seguidora de Glitchtrap e uma vilã sinistra que não usa um traje animatrônico, mas sim um disfarce de coelho feito à mão enquanto percorre os corredores do Pizzaplex. <br><br> Sua presença misteriosa e habilidade de sempre encontrar o jogador tornam-a uma figura intrigante e assustadora no jogo",
};
