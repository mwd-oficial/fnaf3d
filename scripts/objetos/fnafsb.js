// Five Nights at Freddy's: Security Breach

var glamrockFreddy = {
    src: "assets/models/fnafsb/glamrock-freddy.glb",
    corFundo: "radial-gradient(#E5A632, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Glamrock Freddy aparece em Five Nights at Freddy's: Security Breach como o deuteragonista e aliado do jogador, Gregory. Ele é o líder e mascote do Freddy Fazbear's Mega Pizzaplex, sendo o único animatrônico que não foi corrompido pelo poder de Vanny após desligar no meio de uma apresentação. <br><br> Diferentemente de seus predecessores, Glamrock Freddy ativamente auxilia e protege Gregory. Seu design é baseado no Freddy Fazbear original, com um estilo punk reminiscente da década de 1980. Ele usa um chapéu-coco adornado com uma faixa azul e uma gravata borboleta preta. <br><br> Seu corpo é predominantemente laranja ou amarelo claro, com garras azuis e canelas vermelhas. Além disso, ele possui ombreiras vermelhas, pulseiras com espinhos e maquiagem facial semelhante à de bandas de rock, como o Kiss.",
}

var glamrockChica = {
    src: "assets/models/fnafsb/glamrock-chica.glb",
    corFundo: "radial-gradient(#B9007C, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 3m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Glamrock Chica aparece em \"Five Nights at Freddy's: Security Breach\". Ela é a guitarrista da banda glamrock e tem uma aparência marcante: um frango branco com olhos roxos, maquiagem nos olhos e lábios, e um corpo curvilíneo. <br><br> Seu visual é inspirado nos anos 80, com peças de roupa rosa e roxa, braceletes e luvas sem dedos. Além disso, após ser esmagada por um compactador de lixo, ela fica severamente danificada, com o bico removido e rachaduras por todo o corpo.",
};

var roxanneWolf = {
    src: "assets/models/fnafsb/roxanne-wolf.glb",
    corFundo: "radial-gradient(#8C54D0, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Roxanne Wolf, também conhecida como \"Roxy\", é uma animatrônica glamrock que aparece em \"Five Nights at Freddy's: Security Breach\" como uma das principais antagonistas. Ela é a autoconfiante tecladista da banda glamrock, apresentando-se como uma loba de pelagem cinza com olhos amarelos brilhantes. <br><br> Roxanne usa maquiagem preta nas bochechas e batom roxo. Seus pés têm garras pintadas de roxo, enquanto as garras das mãos são verdes. Seu cabelo é longo e prateado, com uma mecha verde brilhante. <br><br> Além disso, ela veste um top vermelho, shorts curtos e ombreiras adornadas com padrões de estrelas pretas. Após ser atropelada por um mini kart no Roxy Raceway, Roxanne fica gravemente danificada, com os olhos removidos para aprimorar Glamrock Freddy.",
};

/*
0
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceAntic_Loop_RIG_Glamrock_Roxy"
1
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceAntic_RIG_Glamrock_Roxy"
2
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceJump_In_RIG_Glamrock_Roxy"
3
: 

4
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceJump_Out_RIG_Glamrock_Roxy"
5
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceLand_RIG_Glamrock_Roxy"
6
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceStun_Loop_RIG_Glamrock_Roxy"
7
: 
"RIG_Glamrock_Roxy|Glamrock_Roxy_PounceStunToIdle_RIG_Glamrock_Roxy"
67
: 

68
: 
"RIG_Glamrock_Roxy|Roxy_GolfPose_RIG_Glamrock_Roxy"
69
: 
"RIG_Glamrock_Roxy|Roxy_Idle_LOOP_add_RIG_Glamrock_Roxy"
70
: 

71
: 
"RIG_Glamrock_Roxy|Roxy_Idle_ScanLeft_RIG_Glamrock_Roxy"
72
: 
"RIG_Glamrock_Roxy|Roxy_Idle_ScanRight_RIG_Glamrock_Roxy"
73
: 
"RIG_Glamrock_Roxy|Roxy_Idle_Thrash_RIG_Glamrock_Roxy"
74
: 

75
: 

76
: 
"RIG_Glamrock_Roxy|Roxy_PepTalk_02_RIG_Glamrock_Roxy"
77
: 
"RIG_Glamrock_Roxy|Roxy_PepTalk_Idle_RIG_Glamrock_Roxy"
78
: 

79
: 
"RIG_Glamrock_Roxy|Roxy_Play_00_Slow_RIG_Glamrock_Roxy"
80
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_IDLE_Location_01_RIG_Glamrock_Roxy"
81
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_IDLE_Location_03_RIG_Glamrock_Roxy"
82
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_JUMP_Location_03_RIG_Glamrock_Roxy"
83
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_Location02_RIG_Glamrock_Roxy"
84
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_Location_01_RIG_Glamrock_Roxy"
85
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_Location_03_RIG_Glamrock_Roxy"
86
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_Location_04_RIG_Glamrock_Roxy"
87
: 
"RIG_Glamrock_Roxy|Roxy_Raceway_RUN_Location_01_RIG_Glamrock_Roxy"
88
: 

89
: 
"RIG_Glamrock_Roxy|Roxy_RunToStop_L_RIG_Glamrock_Roxy"
90
: 
"RIG_Glamrock_Roxy|Roxy_RunToStop_R_RIG_Glamrock_Roxy"
91
: 

92
: 

93
: 
"RIG_Glamrock_Roxy|Roxy_Search_FirstAid_RIG_Glamrock_Roxy"
94
: 
"RIG_Glamrock_Roxy|Roxy_Search_Kiosk_RIG_Glamrock_Roxy"
95
: 
"RIG_Glamrock_Roxy|Roxy_Search_Locker_RIG_Glamrock_Roxy"
96
: 

97
: 

98
: 
"RIG_Glamrock_Roxy|Roxy_Search_Stroller_RIG_Glamrock_Roxy"
99
: 

100
: 
"RIG_Glamrock_Roxy|Roxy_Stun_Loop_RIG_Glamrock_Roxy"
101
: 
"RIG_Glamrock_Roxy|Roxy_Stun_OUT_RIG_Glamrock_Roxy"
102
: 
"RIG_Glamrock_Roxy|Roxy_TailPos_RIG_Glamrock_Roxy"
103
: 
"RIG_Glamrock_Roxy|Roxy_TailPosAdd_RIG_Glamrock_Roxy"
104
: 

105
: 

106
: 
"RIG_Glamrock_Roxy|Roxy_Walk_Look_Both_RIG_Glamrock_Roxy"
107
: 
"RIG_Glamrock_Roxy|Roxy_Walk_Look_L_RIG_Glamrock_Roxy"
108
: 
"RIG_Glamrock_Roxy|Roxy_Walk_Look_R_RIG_Glamrock_Roxy"
109
: 

110
: 
"RIG_Glamrock_Roxy|Roxy_WalkToStop_L_RIG_Glamrock_Roxy"
111
: 
"RIG_Glamrock_Roxy|Roxy_WalkToStop_R_RIG_Glamrock_Roxy"
112
: 
"RIG_Glamrock_Roxy|Roxy_ZeroPos_RIG_Glamrock_Roxy"
113
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_100_RIG_Glamrock_Roxy"
114
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_200_RIG_Glamrock_Roxy"
115
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_300_RIG_Glamrock_Roxy"
116
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_400_RIG_Glamrock_Roxy"
117
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_500_RIG_Glamrock_Roxy"
118
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_600_RIG_Glamrock_Roxy"
119
: 
"RIG_Glamrock_Roxy|RoxyIntro_Roxy_Shot_900_RIG_Glamrock_Roxy"
120
: 
"RIG_Glamrock_Roxy|RoxyIntro_ShatteredRoxy_Shot_700_RIG_Glamrock_Roxy"
121
: 
"RIG_Glamrock_Roxy|RoxyIntro_ShatteredRoxy_Shot_800_RIG_Glamrock_Roxy"
*/

var montgomeryGator = {
    src: "assets/models/fnafsb/montgomery-gator.glb",
    corFundo: "radial-gradient(#5D9D17, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
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
            alvoCamera: "0m 1.2m 0m",
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
            src: "RIG_Glamrock_Roxy|Roxy_DoorSlam_RIG_Glamrock_Roxy",
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
            alvoCamera: "0m 1.1m 0.25m",
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
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        pulando: {
            src: "RIG_Montgomery_Gator|Monty_Jump_RIG_Montgomery_Gator",
            nome: "Pulando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        noAr: {
            src: "RIG_Montgomery_Gator|Monty_PounceJump_Loop_RIG_Montgomery_Gator",
            nome: "No ar",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        caindo1: {
            src: "RIG_Montgomery_Gator|Monty_Land_RIG_Montgomery_Gator",
            nome: "Caindo 1",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        caindo2: {
            src: "RIG_Montgomery_Gator|MontyOutro_Monty_Shot300_RIG_Montgomery_Gator",
            nome: "Caindo 2",
            alvoCamera: "0m 1m 0m",
            estatico: false,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Montgomery Gator, também conhecido como Monty, é um animatrônico glamrock que aparece em Five Nights at Freddy's: Security Breach e RUIN como um dos principais antagonistas. <br><br> Ele é o baixista da banda glamrock, tendo substituído Glamrock Bonnie antes de ser derrubado das passarelas acima de sua atração por Gregory e ter suas garras removidas por Glamrock Freddy. <br><br> Sua aparência normal inclui dentes pontiagudos, garras pretas, um moicano vermelho, calças com textura de escamas verdes e manchas nos braços e bochechas.",
};

/*
30
: 

31
: 

32
: 
"RIG_Montgomery_Gator|Monty_GolfPose_RIG_Montgomery_Gator"
33
: 
"RIG_Montgomery_Gator|Monty_Idle_LOOP_Add_RIG_Montgomery_Gator"
34
: 

35
: 

36
: 
"RIG_Montgomery_Gator|Monty_Idle_ScanLeft_RIG_Montgomery_Gator"
37
: 
"RIG_Montgomery_Gator|Monty_Idle_ScanRight_RIG_Montgomery_Gator"
38
: 
"RIG_Montgomery_Gator|Monty_InAir_RIG_Montgomery_Gator"
39
: 

40
: 

41
: 

42
: 

43
: 
"RIG_Montgomery_Gator|Monty_Play_00_Slow_RIG_Montgomery_Gator"
44
: 
"RIG_Montgomery_Gator|Monty_PounceAntic_Loop_RIG_Montgomery_Gator"
45
: 
"RIG_Montgomery_Gator|Monty_PounceAntic_RIG_Montgomery_Gator"
46
: 
"RIG_Montgomery_Gator|Monty_PounceJump_In_RIG_Montgomery_Gator"
47
: 

48
: 
"RIG_Montgomery_Gator|Monty_PounceJump_Out_RIG_Montgomery_Gator"
49
: 
"RIG_Montgomery_Gator|Monty_PounceLand_RIG_Montgomery_Gator"
50
: 
"RIG_Montgomery_Gator|Monty_PounceStun_Loop_RIG_Montgomery_Gator"
51
: 

52
: 

53
: 
"RIG_Montgomery_Gator|Monty_RunToStop_L_RIG_Montgomery_Gator"
54
: 
"RIG_Montgomery_Gator|Monty_RunToStop_R_RIG_Montgomery_Gator"
55
: 
"RIG_Montgomery_Gator|Monty_Scan_Down_Left_RIG_Montgomery_Gator"
56
: 
"RIG_Montgomery_Gator|Monty_Scan_Down_Right_RIG_Montgomery_Gator"
57
: 

58
: 
"RIG_Montgomery_Gator|Monty_Search_FirstAidBooth_RIG_Montgomery_Gator"
59
: 
"RIG_Montgomery_Gator|Monty_Search_Kiosk_RIG_Montgomery_Gator"
60
: 
"RIG_Montgomery_Gator|Monty_Search_Locker_RIG_Montgomery_Gator"
61
: 

62
: 

63
: 
"RIG_Montgomery_Gator|Monty_Search_Stroller_RIG_Montgomery_Gator"
64
: 

65
: 

66
: 
"RIG_Montgomery_Gator|Monty_Stun_Loop_RIG_Montgomery_Gator"
67
: 
"RIG_Montgomery_Gator|Monty_Stun_OUT_RIG_Montgomery_Gator"
68
: 
"RIG_Montgomery_Gator|Monty_Tail_Pose_RIG_Montgomery_Gator"
69
: 
"RIG_Montgomery_Gator|Monty_Walk_IP_RIG_Montgomery_Gator"
70
: 
"RIG_Montgomery_Gator|Monty_Walk_Look_Both_RIG_Montgomery_Gator"
71
: 
"RIG_Montgomery_Gator|Monty_Walk_Look_L_RIG_Montgomery_Gator"
72
: 
"RIG_Montgomery_Gator|Monty_Walk_Look_R_RIG_Montgomery_Gator"
73
: 

74
: 
"RIG_Montgomery_Gator|Monty_WalkToStop_L_RIG_Montgomery_Gator"
75
: 
"RIG_Montgomery_Gator|Monty_WalkToStop_R_RIG_Montgomery_Gator"
76
: 
"RIG_Montgomery_Gator|Monty_ZeroPose_RIG_Montgomery_Gator"
77
: 
"RIG_Montgomery_Gator|MontyIntro_Monty_Shot200_RIG_Montgomery_Gator"
78
: 
"RIG_Montgomery_Gator|MontyIntro_Monty_Shot300_RIG_Montgomery_Gator"
79
: 
"RIG_Montgomery_Gator|MontyIntro_Monty_Shot400_RIG_Montgomery_Gator"
80
: 
"RIG_Montgomery_Gator|MontyIntro_Monty_Shot500_RIG_Montgomery_Gator"
81
: 
"RIG_Montgomery_Gator|MontyOutro_Monty_Shot100_RIG_Montgomery_Gator"
82
: 
"RIG_Montgomery_Gator|MontyOutro_Monty_Shot200_RIG_Montgomery_Gator"
83
: 

84
: 
"RIG_Montgomery_Gator|MontyOutro_Monty_Shot400_RIG_Montgomery_Gator"
85
: 
"RIG_Montgomery_Gator|MontyOutro_Monty_Shot500_RIG_Montgomery_Gator"
86
: 
"RIG_Montgomery_Gator|MontyOutro_Monty_Shot600_RIG_Montgomery_Gator"
*/

var shatteredGlamrockChica = {
    src: "assets/models/fnafsb/shattered-glamrock-chica.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Chica|ShatteredChica_Idle_RIG_Shattered_Chica",
            nome: "Posição inicial",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Shattered_Chica|ShatteredChica_Jumpscare_RIG_Shattered_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Shattered_Chica|ShatteredChica_Idle_LookL_RIG_Shattered_Chica",
            nome: "Olhar",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_Kiosk_RIG_Shattered_Chica",
            nome: "Procurando 1",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando2: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_FirstAid_RIG_Shattered_Chica",
            nome: "Procurando 2",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        procurando3: {
            src: "RIG_Shattered_Chica|ShatteredChica_Search_ServiceCart_RIG_Shattered_Chica",
            nome: "Procurando 3",
            alvoCamera: "0m 1.1m 0.5m",
            estatico: false,
        },
        atordoada: {
            src: "RIG_Shattered_Chica|ShatteredChica_Stun_out_RIG_Shattered_Chica",
            nome: "Atordoada",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        andando: {
            src: "RIG_Shattered_Chica|ShatteredChica_Walk_RIG_Shattered_Chica",
            nome: "Andando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Shattered_Chica|ShatteredChica_Run_RIG_Shattered_Chica",
            nome: "Correndo",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Shattered Glamrock Chica é a versão despedaçada de Glamrock Chica que aparece em Five Nights at Freddy's: Security Breach. <br><br> Ela é a guitarrista da banda glamrock, mas após ser esmagada por um compactador de lixo, sua aparência se deteriora drasticamente. Seu bico é arrancado, revelando o endoesqueleto, e seu corpo está repleto de rachaduras e buracos.",
};

/*
0
: 
"RIG_Shattered_Chica|ShatteredChica_Idle_Add_RIG_Shattered_Chica"
1
: 

2
: 
"RIG_Shattered_Chica|ShatteredChica_Idle_LookR_RIG_Shattered_Chica"
3
: 
"RIG_Shattered_Chica|ShatteredChica_Idle_Pose_RIG_Shattered_Chica"
4
: 

5
: 

6
: 
"RIG_Shattered_Chica|ShatteredChica_Run_IP_RIG_Shattered_Chica"
7
: 

8
: 
"RIG_Shattered_Chica|ShatteredChica_RunToStop_L_RIG_Shattered_Chica"
9
: 
"RIG_Shattered_Chica|ShatteredChica_RunToStop_R_RIG_Shattered_Chica"
10
: 

11
: 

12
: 
"RIG_Shattered_Chica|ShatteredChica_Search_Locker_RIG_Shattered_Chica"
13
: 

14
: 
"RIG_Shattered_Chica|ShatteredChica_Search_Stroller_RIG_Shattered_Chica"
15
: 

16
: 
"RIG_Shattered_Chica|ShatteredChica_Walk_IP_RIG_Shattered_Chica"
17
: 

18
: 
"RIG_Shattered_Chica|ShatteredChica_WalkToStop_L_RIG_Shattered_Chica"
19
: 
"RIG_Shattered_Chica|ShatteredChica_WalkToStop_R_RIG_Shattered_Chica"
*/

var shatteredRoxanneWolf = {
    src: "assets/models/fnafsb/shattered-roxanne-wolf.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_Idle_RIG_Shattered_Roxy",
            nome: "Posição inicial",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
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
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        procurando1: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_Search_Kiosk_RIG_Shattered_Roxy",
            nome: "Procurando 1",
            alvoCamera: "0m 1.1m 0.5m",
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
        atordoada: {
            src: "RIG_Shattered_Chica|ShatteredChica_Stun_out_RIG_Shattered_Chica",
            nome: "Atordoada",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        noAr: {
            src: "RIG_Shattered_Roxy|Shattered_Roxy_PounceJump_Loop_RIG_Shattered_Roxy",
            nome: "No ar",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        chorando: {
            src: "RIG_Shattered_Roxy|ShatteredRoxy_WeepIdle_RIG_Shattered_Roxy",
            nome: "Chorando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
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
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Shattered Roxanne Wolf é uma animatrônica glamrock que aparece em Five Nights at Freddy's: Security Breach. <br><br> Ela é a autoproclamada tecladista egocêntrica da banda glamrock, com um visual de lobo cinza, olhos amarelos e maquiagem preta nas bochechas. Após ser atropelada pelo Driver Assist Bot, seus olhos são removidos para aprimorar Glamrock Freddy, deixando-a cega e com danos severos. <br><br> Seu cabelo prateado está emaranhado, e partes de sua carcaça estão quebradas, expondo o endoesqueleto.",
};

/*
0
: 
"RIG_Shattered_Roxy|RoxyIntro_ShatteredRoxy_Shot_700_RIG_Shattered_Roxy"
1
: 
"RIG_Shattered_Roxy|RoxyIntro_ShatteredRoxy_Shot_800_RIG_Shattered_Roxy"
2
: 
"RIG_Shattered_Roxy|Shattered_Roxy_Idle_Add_RIG_Shattered_Roxy"
3
: 

4
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceAntic_Loop_RIG_Shattered_Roxy"
5
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceAntic_RIG_Shattered_Roxy"
6
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceJump_In_RIG_Shattered_Roxy"
7
: 

8
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceJump_Out_RIG_Shattered_Roxy"
9
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceLand_RIG_Shattered_Roxy"
10
: 

11
: 
"RIG_Shattered_Roxy|Shattered_Roxy_PounceStunToIdle_RIG_Shattered_Roxy"
12
: 
"RIG_Shattered_Roxy|Shattered_Roxy_Walk_IP_RIG_Shattered_Roxy"
13
: 

14
: 
"RIG_Shattered_Roxy|Shattered_Roxy_WalkToStop_L_RIG_Shattered_Roxy"
15
: 
"RIG_Shattered_Roxy|Shattered_Roxy_WalkToStop_R_RIG_Shattered_Roxy"
16
: 

17
: 

18
: 
"RIG_Shattered_Roxy|ShatteredRoxy_RunToStop_L_RIG_Shattered_Roxy"
19
: 
"RIG_Shattered_Roxy|ShatteredRoxy_RunToStop_R_RIG_Shattered_Roxy"
20
: 
"RIG_Shattered_Roxy|ShatteredRoxy_Search_FirstAid_RIG_Shattered_Roxy"
21
: 

22
: 
"RIG_Shattered_Roxy|ShatteredRoxy_Search_Locker_RIG_Shattered_Roxy"
23
: 

24
: 

25
: 
"RIG_Shattered_Roxy|ShatteredRoxy_Search_Stroller_RIG_Shattered_Roxy"
26
: 

27
: 

28
: 
"RIG_Shattered_Roxy|ShatterRoxy_Broken_RIG_Shattered_Roxy"
*/

var shatteredMontgomeryGator = {
    src: "assets/models/fnafsb/shattered-montgomery-gator.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Idle_RIG_Shattered_Montgomery",
            nome: "Posição inicial",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Jumpscare_RIG_Shattered_Montgomery",
            nome: "Jumpscare",
            alvoCamera: "0m 1.2m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Scan_RIG_Shattered_Montgomery",
            nome: "Olhar",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        atordoado: {
            src: "RIG_Shattered_Montgomery|Shattered_Monty_Stun_In_RIG_Shattered_Montgomery",
            nome: "Atordoado",
            alvoCamera: "0m 1.1m 0m",
            estatico: false,
        },
        seRastejando: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Crawl_RIG_Shattered_Montgomery",
            nome: "Se rastejando",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
        seRastejandoRapido: {
            src: "RIG_Shattered_Montgomery|ShatteredMonty_Crawl_Fast_RIG_Shattered_Montgomery",
            nome: "Se rastejando rápido",
            alvoCamera: "0m 1m 0m",
            estatico: false,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Shattered Montgomery Gator, também conhecido como \"Monty\", é um animatrônico glamrock que aparece em Five Nights at Freddy's: Security Breach. Ele foi derrubado das passarelas acima de sua atração por Gregory para remover suas garras e dar para Glamrock Freddy. <br><br> Após ser jogado das passarelas, ele fica gravemente danificado, com a mandíbula deslocada, um braço faltando e partes expostas do endoesqueleto.",
};

/*
0
: 
"RIG_Shattered_Montgomery|Shattered_Monty_Idle_Pose_RIG_Shattered_Montgomery"
1
: 

2
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceAntic_Loop_RIG_Shattered_Montgomery"
3
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceAntic_RIG_Shattered_Montgomery"
4
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceJump_In_RIG_Shattered_Montgomery"
5
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceJump_Out_RIG_Shattered_Montgomery"
6
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceLand_RIG_Shattered_Montgomery"
7
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceStun_Loop_RIG_Shattered_Montgomery"
8
: 
"RIG_Shattered_Montgomery|Shattered_Monty_PounceStunToIdle_RIG_Shattered_Montgomery"
9
: 

10
: 

11
: 
"RIG_Shattered_Montgomery|Shattered_Monty_Stun_Loop_RIG_Shattered_Montgomery"
12
: 
"RIG_Shattered_Montgomery|Shattered_Monty_Stun_Out_RIG_Shattered_Montgomery"
13
: 
"RIG_Shattered_Montgomery|ShatteredMonty_CrashPose_RIG_Shattered_Montgomery"
14
: 
"RIG_Shattered_Montgomery|ShatteredMonty_Crawl_Fast_IP_RIG_Shattered_Montgomery"
15
: 

16
: 
"RIG_Shattered_Montgomery|ShatteredMonty_Crawl_IP_RIG_Shattered_Montgomery"
17
: 

18
: 
"RIG_Shattered_Montgomery|ShatteredMonty_Crawl_RM_RIG_Shattered_Montgomery"
19
: 
"RIG_Shattered_Montgomery|ShatteredMonty_ExitVent_RM_RIG_Shattered_Montgomery"
20
: 

*/

var sun = {
    src: "assets/models/fnafsb/sun.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Sun é uma versão de Daycare Attendant, animatrônico do Five Nights at Freddy's: Security Breach. Ele tem uma aparência jocosa, com uma cabeça em forma de sol de cor bege-clara, olhos brancos e um sorriso largo. Seu corpo é esguio, com membros longos e mãos grandes de cinco dedos. <br><br> Sun usa uma camisa bege-âmbar, calças amarelas com listras marrom e um sash de tecido marrom-claro. Curiosamente, Sun tem uma marca em forma de crescente no rosto, que se sobrepõe ao nariz e cria a ilusão de uma lua sorridente, fazendo referência ao seu contraparte, Moon.",
};

var moon = {
    src: "assets/models/fnafsb/moon.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Moon é uma versão de Daycare Attendant, animatrônico do Five Nights at Freddy's: Security Breach. Depois de se transformar em Moon, os raios solares que cercam o rosto de Sun são retraídos em sua cabeça. <br><br> A metade esquerda de seu rosto fica preta com os detalhes em seus dentes e olhos ainda visíveis, e o lado direito de seu rosto, em forma de lua crescente, fica branco, dando à ilusão da lua sorridente mais contraste e destaque."
};

var glamrockEndo = {
    src: "assets/models/fnafsb/glamrock-endo.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Endo.ao|Endo_Idle_01_LOOP",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        jumpscare: {
            src: "RIG_Endo.ao|Endo_Jumpscare",
            nome: "Jumpscare",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        preso: {
            src: "RIG_Endo.ao|Endo_HangingPose_12",
            nome: "Preso",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        seSoltando: {
            src: "RIG_Endo.ao|Endo_OffHook",
            nome: "Se soltando",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Endo.ao|Endo_Idle_LOOP03",
            nome: "Olhar",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        atordoado: {
            src: "RIG_Endo.ao|Endo_Stun_Loop_01",
            nome: "Atordoado",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        engatinhando: {
            src: "RIG_Endo.ao|Endo_Crawl",
            nome: "Engatinhando",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oAndarDaChica: {
            src: "RIG_Endo.ao|Endo_Walk_01_LOOP",
            nome: "O andar da Chica",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oAndarDaRoxy: {
            src: "RIG_Endo.ao|Endo_Walk_LOOP02",
            nome: "O andar da Roxy",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oAndarDoMonty: {
            src: "RIG_Endo.ao|Endo_Walk_LOOP03",
            nome: "O andar do Monty",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oCorrerDaChica: {
            src: "RIG_Endo.ao|Endo_Run_01",
            nome: "O correr da Chica",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oCorrerDaRoxy: {
            src: "RIG_Endo.ao|Endo_Run_LOOP02",
            nome: "O correr da Roxy",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        oCorrerDoMonty: {
            src: "RIG_Endo.ao|Endo_Run_LOOP03",
            nome: "O correr do Monty",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "O Glamrock Endo, também conhecido como Glamrock Endoskeleton, são os endoesqueletos projetados para os animatrônicos glamrock do Mega Pizzaplex e aparecem em Five Nights at Freddy's: Security Breach e RUIN como um grupo de inimigos hostis. <br><br> Ele é uma versão muito high-tech do endoesqueleto original, sendo de cor cinza como de costume como Endo-01 e Endo-02, mas tendo uma construção muito mais forte, com seu tronco sendo coberto por fios de ouro, e seus olhos brilhando vermelho. <br><br> Os Glamrock Endos só se movem quando o jogador não está olhando para eles, permanecendo em suas posições originais quando está sendo olhado. Quando o jogador desvia o olhar, ele se move em direção a eles para atacar em alta velocidade.",
};

/*
0
: 

1
: 
"RIG_Endo.ao|Endo_HangingPose_01"
2
: 
"RIG_Endo.ao|Endo_HangingPose_02"
3
: 
"RIG_Endo.ao|Endo_HangingPose_03"
4
: 
"RIG_Endo.ao|Endo_HangingPose_04"
5
: 
"RIG_Endo.ao|Endo_HangingPose_05"
6
: 
"RIG_Endo.ao|Endo_HangingPose_06"
7
: 
"RIG_Endo.ao|Endo_HangingPose_07"
8
: 
"RIG_Endo.ao|Endo_HangingPose_08"
9
: 
"RIG_Endo.ao|Endo_HangingPose_09"
10
: 
"RIG_Endo.ao|Endo_HangingPose_10"
11
: 
"RIG_Endo.ao|Endo_HangingPose_11"
12
: 

13
: 
"RIG_Endo.ao|Endo_Idle_01"
14
: 

15
: 
"RIG_Endo.ao|Endo_Idle_02"
16
: 
"RIG_Endo.ao|Endo_Idle_LOOP02"
17
: 

18
: 

19
: 

20
: 

21
: 

22
: 

23
: 
"RIG_Endo.ao|Endo_SpawnIN_Bowling"
24
: 
25
: 
"RIG_Endo.ao|Endo_Stun_Loop_02"
26
: 
"RIG_Endo.ao|Endo_Stun_Out_01"
27
: 
"RIG_Endo.ao|Endo_Stun_OUT_02"
28
: 

29
: 

30
: 

*/

var djMusicMan = {
    src: "assets/models/fnafsb/dj-music-man.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "DJ Music Man, conhecido como DJMM, é um animatrônico gigante que apareceu pela primeira vez em Five Nights at Freddy's: Security Breach como um antagonista menor. Ele reside em Fazcade como o DJ principal. <br><br> DJ Music Man é drasticamente diferente em comparação com sua contraparte original no Freddy Fazbear's Pizzeria Simulator. Toda a sua estrutura corporal foi completamente renovada, agora muito mais parecida com uma aranha do que sua contraparte anterior. Seus olhos são pretos e funcionam como LEDs para várias imagens diferentes. <br><br> Suas texturas em seu rosto também são alteradas, com suas sobrancelhas e bochechas sendo um azul claro em vez de roxo e rosa. Ele parece não ter as listras rosas nas laterais de seu rosto, e em vez de duas manchas rosas em seu queixo, ele tem uma única faixa azul clara.",
};

var miniMusicMan = {
    src: "assets/models/fnafsb/mini-music-man.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Mini Music Man é um pequeno animatrônico que aparece em Five Nights at Freddy's: Security Breach como um antagonista menor que persegue Gregory na ventilação. <br><br> Mini Music Man é um pequeno brinquedo de relógio semelhante ao seu homólogo original, mas ele parece estar muito mais sujo e quebrado, tendo um dente ausente e vários dentes rachados ou danificados. Ele tem uma chave de enrolar na parte de trás do corpo.",
};

var staffBot = {
    src: "assets/models/fnafsb/staff-bots/staff-bot.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os S.T.A.F.F. Bots são robôs de funcionários feitos pela Fazbear Entertainment LLC para o Mega Pizzaplex de Freddy Fazbear. Eles apareceram pela primeira vez em Five Nights at Freddy's: Security Breach. <br><br> Embora todos os Bots S.T.A.F.F. variem em esquema de cores dependendo de sua função, todos eles compartilham o mesmo design básico. <br><br> Os bots da S.T.A.F.F. executam trabalhos normalmente feitos por humanos ao redor do Pizzaplex, e podem ser vistos trabalhando como garçons, seguranças e faxineiros. A maioria de suas variantes são passivas, e não tentarão machucar o jogador.",
};

var shatteredBot = {
    src: "assets/models/fnafsb/staff-bots/shattered-bot.glb",
    corFundo: "radial-gradient(#6979A1, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 4m",
    orbitaCameraMinima: "0 0 3m",
    alvoCamera: "0m 0.5m 0.1m",
    temAltura: true,
    alturaMaxima: 0.25,
    alturaMinima: -0.25,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os Shattered Bots em Five Nights at Freddy's: Security Breach são variantes danificadas dos regulares S.T.A.F.F. Bots. Eles têm arranhões no peito e no rosto, com partes amassadas e afundadas.",
};

var securityBot = {
    src: "assets/models/fnafsb/staff-bots/security-bot.glb",
    corFundo: "radial-gradient(#767F8A, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0.5m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os Security Bots patrulham o Mega Pizzaplex de Freddy Fazbear durante a noite. Esses Bots S.T.A.F.F. são os mais comuns ao longo do jogo, e seguem rotas de patrulha definidas, ocasionalmente parando e realizando uma volta completa antes de retomar suas rodadas. <br><br> Se Gregory entrar no feixe de luz, o Bot de Segurança o assustará e soará um alarme, alertando um Glamrock Animatronic sobre sua posição.",
};

var mapBot = {
    src: "assets/models/fnafsb/staff-bots/map-bot.glb",
    corFundo: "radial-gradient(#755007, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os Map Bots são bots S.T.A.F.F. que são empregados para distribuir mapas aos clientes. Eles têm o hábito de pular assustando Gregory, no entanto, isso não alertará os animatrônicos próximos. Em vez disso, eles seguirão com um pedido para que ele pegue um mapa.",
};

var partyBot = {
    src: "assets/models/fnafsb/staff-bots/party-bot.glb",
    corFundo: "radial-gradient(#4B259C, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os Party Bots são bots S.T.A.F.F. que ficam em frente às entradas de determinadas atrações Se Gregory tiver um Party Pass, eles dançarão no local enquanto o jogo o leva a dá-lo a eles, e eles desaparecerão imediatamente depois de receber o Party Pass. Se Gregory não tiver um passe, eles o impedirão de entrar na atração que guardam.",
};

var chefBot = {
    src: "assets/models/fnafsb/staff-bots/chef-bot.glb",
    corFundo: "radial-gradient(#717171, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "O Pizza Bot, também chamado de Chef Bot nos arquivos, é um bot S.T.A.F.F. que é empregado para fazer pizzas através do Mega Pizzaplex Quick Delivery Virtual System da Freddy Fazbear. Ele é a única variante de bot S.T.A.F.F. que pode ser totalmente controlada pelo jogador. Gregory usa isso para fazer uma pizza para distrair Glamrock Chica, que a ataca no processo.",
};

var serverBot = {
    src: "assets/models/fnafsb/staff-bots/server-bot.glb",
    corFundo: "radial-gradient(#810B1A, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "O Server Bot é um bot S.T.A.F.F. que é empregado para servir comida às pessoas. O Server Bot usa uma camisa listrada azul, laranja e vermelha, eles também usam um boné roxo claro e vermelho com uma hélice vermelha e azul. Uma versão quebrada pode ser encontrada no final dos esgotos.",
};

var sewerBot = {
    src: "assets/models/fnafsb/staff-bots/sewer-bot.glb",
    corFundo: "radial-gradient(#2C2F26, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 10m",
    alvoCamera: "0m 3.25m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "O Sewer Bot é uma variante dos S.T.A.F.F. Bots que aparece no jogo Five Nights at Freddy's: Security Breach. Ele tem uma aparência mais sinistra e desgastada em comparação com os outros S.T.A.F.F. Bots. Ele é encontrado no esgoto do Pizzaplex e tem uma cabeça oval com olhos vermelhos brilhantes e uma boca com dentes afiados. Seu corpo é composto por segmentos metálicos e ele se move sobre rodas.",
};

var nightmarionneBot = {
    src: "assets/models/fnafsb/staff-bots/nightmarionne-bot.glb",
    corFundo: "radial-gradient(#453830, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 12.5m",
    orbitaCameraMinima: "0 0 7.5m",
    alvoCamera: "0m 2.75m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 2.5,
    alturaMinima: -2.5,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Os Bots Nightmarionne S.T.A.F.F. ou Alpha S.T.A.F.F. Bots são as contrapartes vandalizadas dos Bots S.T.A.F.F. regulares que se assemelham ao Nightmarionne, daí seu nome. <br><br> Eles podem ser vistos nos esgotos do Pizzaplex e são os únicos bots S.T.A.F.F. que podem matar diretamente o jogador, tornando-os os bots mais perigosos do jogo. No entanto, eles são letais apenas nos esgotos e atuam como Bots de Segurança em todos os outros encontros.",
};

var cautionBot = {
    src: "assets/models/fnafsb/caution-bot.glb",
    corFundo: "radial-gradient(#C8AB29, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 4m",
    alvoCamera: "0m 0.5m 0m",
    mudaOrbitaCamera: true,
    orbitaCamera: "0 1.5rad 0",
    temAltura: true,
    alturaMaxima: 0.25,
    alturaMinima: -0.25,
    temAudio: true,
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "O Caution Bot, também conhecido extraoficialmente como Wet Floor Bot, é um letreiro robótico de piso molhado localizado ao redor do Mega Pizzaplex de Freddy Fazbear. Ele estreou em Five Nights at Freddy's: Security Breach e fez outra aparição no DLC RUIN.",
};

var gregory = {
    src: "assets/models/fnafsb/gregory.glb",
    corFundo: "radial-gradient(#1F396A, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2m",
    temAltura: true,
    alturaMaxima: 0.5,
    alturaMinima: -0.5,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Gregory é o principal protagonista de Five Nights at Freddy's: Security Breach, o personagem com quem o jogador joga. Ele é uma criança pequena e magra com pele cor de damasco, cabelo castanho bagunçado e olhos castanhos. <br><br> Ele tem bandagens na bochecha direita e no joelho esquerdo. Ele veste uma camiseta azul com gola azul-claro e duas listras brancas posicionadas horizontalmente no peito. <br><br> Ele tem uma lanterna que pode usar para ver em lugares escuros que recebeu no Superstar Daycare, e carrega um Faz-Watch em seu pulso, onde pode acessar suas missões, o sistema de câmeras e o mapa do Freddy Fazbear's Mega Pizzaplex. <br><br> Ele também pode usar armas para atordoar temporariamente os inimigos, como a Faz Camera e o Fazerblaster.",
};

var vanessa = {
    src: "assets/models/fnafsb/vanessa.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Vanessa é uma antagonista menor de Five Nights at Freddy's: Security Breach. Ela é a chefe de segurança no Freddy Fazbear's Mega Pizzaplex. Vanessa é uma jovem mulher de pele clara, cabelos loiros na altura dos ombros, sardas, olhos verdes e lábios brilhantes.",
};

var vanny = {
    src: "assets/models/fnafsb/vanny.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Vanny é uma antagonista de Five Nights at Freddy's: Security Breach. Ela é uma seguidora de Glitchtrap e uma vilã sinistra que não usa um traje animatrônico, mas sim um disfarce de coelho feito à mão enquanto percorre os corredores do Pizzaplex. <br><br> Sua presença misteriosa e habilidade de sempre encontrar o jogador tornam-a uma figura intrigante e assustadora no jogo",
};

var blob = {
    src: "assets/models/fnafsb/blob.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Blob|Blob_Idle_RIG_Blob",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        jumpscare1: {
            src: "RIG_Blob|Blob_Office_Jumpscare_RIG_Blob",
            nome: "Jumpscare 1",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
        jumpscare2: {
            src: "RIG_Blob|Blob_Sinkhole_Jumpscare_RIG_Blob",
            nome: "Jumpscare 2",
            alvoCamera: "0m 0m 0m",
            estatico: false,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Blob, também conhecido como Tangle, é uma fusão de vários animatrônicos que aparece em Five Nights at Freddy's: Security Breach como um antagonista secreto. Como o próprio nome sugere, Tangle é uma enorme massa de tentáculos de arame e partes animatrônicas, possuindo muitos olhos vermelhos brilhantes. <br><br> A cabeça principal de Tangle é uma máscara que parece ser Funtime Freddy. Parece ser uma versão maior de Molten Freddy após o incêndio do Freddy Fazbear's Pizzeria Simulator.",
};

var burntrap = {
    src: "assets/models/fnafsb/burntrap.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sb",
    orbitaCameraMaxima: "0 0 100m",
    orbitaCameraMinima: "0 0 0m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "",
            nome: "Posição inicial",
            alvoCamera: "0m 0m 0m",
            estatico: true,
        },
    },
    audios: {
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Burntrap é um antagonista secreto em Five Nights at Freddy's: Security Breach . Ele é um animatrônico de origem enigmática que residia nas ruínas subterrâneas da Freddy Fazbear's Pizza Place , aparecendo no final do jogo base \"Burn It All Down\". <br><br> Burntrap tem uma aparência física que lembra Springtrap e Scraptrap , embora com diferenças significativas. Seu traje é verde-oliva e amarelo escuro, com uma mandíbula humana exposta com dentes.",
};