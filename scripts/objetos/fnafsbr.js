// Five Nights at Freddy's: Security Breach - Ruin

var prototypeGlamrockFreddy = {
    src: "assets/models/fnafsbr/prototype-glamrock-freddy.glb",
    corFundo: "radial-gradient(#E6773A, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Ruined Glamrock Freddy para seu modelo 3D",
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Prototype Glamrock Freddy, que aparece em Five Nights at Freddy's: Security Breach RUIN, é um protótipo inicial do Freddy Fazbear, utilizado antes do modelo final de Glamrock Freddy. Ele apresenta um design incompleto e funcionalidade básica, com várias partes expostas e um visual rudimentar. <br><br> Devido ao seu estado de protótipo, ele pode apresentar falhas operacionais e um comportamento menos refinado em comparação ao Glamrock Freddy finalizado. Prototype Glamrock Freddy serve como um exemplo do processo de desenvolvimento dos animatronics na Pizzaplex.",
}

var ruinedGlamrockChica = {
    src: "assets/models/fnafsbr/ruined-glamrock-chica.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Ruined Glamrock Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        teste: {
            src: "",
            nome: "Teste",
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
    descricao: "Ruined Glamrock Chica, que aparece em Five Nights at Freddy's: Security Breach RUIN, é uma versão danificada de Glamrock Chica que, mesmo em seu estado arruinado, continua a patrulhar as áreas do Pizzaplex. Ela mostra sinais de deterioração significativa, com partes quebradas, sujeira e ferrugem acumulada. <br><br> Apesar dos danos, Chica mantém seu comportamento agressivo e determinado, implacavelmente perseguindo intrusos. Seu estado arruinado reflete o caos que tomou conta do Pizzaplex, adicionando um elemento assustador à sua presença.",
}
/*

0
: 
"SK_DLC_Chica|A_DLC_Chica_CupcakeEating_In_SK_DLC_Chica"
1
: 
"SK_DLC_Chica|A_DLC_Chica_CupcakeEating_Loop_SK_DLC_Chica"
2
: 
"SK_DLC_Chica|A_DLC_Chica_CupcakeEating_Out_SK_DLC_Chica"
3
: 
"SK_DLC_Chica|A_DLC_Chica_CupcakeEating_SK_DLC_Chica"
4
: 
"SK_DLC_Chica|A_DLC_Chica_Idle_SK_DLC_Chica"
5
: 
"SK_DLC_Chica|A_DLC_Chica_Section2_8_GrabCupcake_Loop_SK_DLC_Chica"
6
: 
"SK_DLC_Chica|A_DLC_Chica_Section2_8_GrabCupcake_Start_SK_DLC_Chica"
7
: 
"SK_DLC_Chica|A_DLC_Chica_Walk_Fast_SK_DLC_Chica"
8
: 
"SK_DLC_Chica|A_DLC_Chica_WalkA_SK_DLC_Chica"
9
: 
"SK_DLC_Chica|A_DLC_ChicaJumpScareFrontA_Chica_SK_DLC_Chica"
10
: 
"SK_DLC_Chica|A_DLC_CIN_Cupcake_Section2_6_Chica_SK_DLC_Chica"
11
: 
"SK_DLC_Chica|A_DLC_CIN_Cupcake_Section2_7_Chica_SK_DLC_Chica"
12
: 
"SK_DLC_Chica|A_DLC_CIN_CupcakeSection1_5_ChicaConveyor_RW_SK_DLC_Chica"
13
: 
"SK_DLC_Chica|A_DLC_CIN_CupcakeSection2_7_Chica_AtOrigin_SK_DLC_Chica"
14
: 
"SK_DLC_Chica|A_DLC_CIN_CupcakeSection3_7_Chica_SK_DLC_Chica"
15
: 
"SK_DLC_Chica|A_DLC_CIN_CupcakeShop_Section_3_12_Chica_SK_DLC_Chica"

*/

var ruinedRoxanneWolf = {
    src: "assets/models/fnafsbr/ruined-roxanne-wolf.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Ruined Roxanne Wolf para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        teste: {
            src: "",
            nome: "Teste",
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
    descricao: "Ruined Roxanne Wolf, que aparece em Five Nights at Freddy's: Security Breach RUIN, é Roxanne Wolf em estado arruinado, continuando a perseguir e atormentar os intrusos no Pizzaplex. Ela está danificada, com cabelo desgrenhado, olhos faltando e partes do corpo quebradas. <br><br> Mesmo assim, Roxanne mantém um semblante ameaçador, usando sua agilidade e tenacidade para caçar aqueles que ousam explorar as ruínas. Sua habilidade de enxergar em infravermelho pode estar comprometida, o que adiciona uma nova camada de desafio ao enfrentá-la.",
}
/*

0
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Idle_SalonSection2_2a_SK_Roxy_RW_DLC"
1
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Jump_SalonSection2_2a_SK_Roxy_RW_DLC"
2
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_Walk_SalonSection2_2a_SK_Roxy_RW_DLC"
3
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Roxy_WalkToStop_L_SalonSection2_2a_SK_Roxy_RW_DLC"
4
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_DeactivateA_SK_Roxy_RW_"
5
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_DeactivateB_SK_Roxy_RW_"
6
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_DeactivatedPose_SK_Roxy"
7
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_InteractLoop_SK_Roxy_RW"
8
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_KeepAliveLoop_SK_Roxy_R"
9
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_NoticePlayer_SK_Roxy_RW"
10
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_PinnedLoop_SK_Roxy_RW_D"
11
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_2_3a_Roxy_PuzzleLoop_SK_Roxy_RW_D"
12
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_RoxyRaceway_Section_3_8_Roxy_SK_Roxy_RW_DLC"
13
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Salon_Section1_1b_Roxy_AR_SK_Roxy_RW_DLC"
14
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Salon_Section1_1b_Roxy_RW_SK_Roxy_RW_DLC"
15
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_Salon_Section4_4d_Chica_SK_Roxy_RW_DLC"
16
: 
"SK_Roxy_RW_DLC|A_DLC_CIN_SalonSection4_4d_ChicaPose_SK_Roxy_RW_DLC"
17
: 
"SK_Roxy_RW_DLC|A_DLC_Key_Art_ROXY_SK_Roxy_RW_DLC"
18
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_Idle_SK_Roxy_RW_DLC"
19
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_JumpscareFrontA_SK_Roxy_RW_DLC"
20
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceAntic_Loop_SK_Roxy_RW_DLC"
21
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceAntic_SK_Roxy_RW_DLC"
22
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceJump_In_SK_Roxy_RW_DLC"
23
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceJump_Loop_SK_Roxy_RW_DLC"
24
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceJump_Out_SK_Roxy_RW_DLC"
25
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceLand_SK_Roxy_RW_DLC"
26
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceStun_Loop_SK_Roxy_RW_DLC"
27
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_PounceStunToIdle_SK_Roxy_RW_DLC"
28
: 
"SK_Roxy_RW_DLC|A_DLC_Roxy_Walk_SK_Roxy_RW_DLC"

*/

var ruinedMontgomeryGator = {
    src: "assets/models/fnafsbr/ruined-montgomery-gator.glb",
    corFundo: "radial-gradient(#7E787B, #000)",
    fnaf: "sbr",
    srcImg: "",
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Ruined Montgomery Gator, que aparece em Five Nights at Freddy's: Security Breach RUIN, é Montgomery Gator em estado destruído, ainda ativo nas ruínas do Pizzaplex. Ele está severamente danificado, com partes do corpo faltando, pele rasgada e um visual mais aterrorizante. <br><br> Sua agressividade parece aumentar à medida que perde mais partes, tornando-se mais feroz e implacável. Monty representa um perigo constante e imprevisível, com movimentos erráticos que podem pegar qualquer um de surpresa.",
}

var eclipse = {
    src: "assets/models/fnafsbr/eclipse.glb",
    corFundo: "radial-gradient(#9F9FD5, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Eclipse (Daycare Attendant)  para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -1,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Eclipse (Daycare Attendant), que aparece em Five Nights at Freddy's: Security Breach RUIN, é uma fusão entre os animatronics Sun e Moon, criando um comportamento imprevisível e intrigante. Essa entidade combina as características de ambos, mudando conforme o ambiente passa de claro para escuro. <br><br> Eclipse aparece em momentos de caos ou quando a iluminação do ambiente muda rapidamente, tornando-o uma presença instável e ameaçadora. Sua dualidade reflete o equilíbrio delicado entre luz e escuridão, adicionando uma profundidade simbólica ao seu papel no jogo.",
}

var ruinedMiniMusicMan1 = {
    src: "assets/models/fnafsbr/ruined-mini-music-man1.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Ruined Mini Music Man 1 para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        teste: {
            src: "",
            nome: "Teste",
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
    descricao: "Ruined Mini Music Man 1 (3 de 7 variações) são versões danificadas do Mini Music Man, que aparecem no jogo Five Nights at Freddy's: Security Breach RUIN, como pequenos animatronics que continuam a perseguir os jogadores com sons assustadores. Eles são pequenos e ágeis, com engrenagens expostas, sinais de desgaste e partes faltando. <br><br> Apesar do estado arruinado, continuam a emitir sons musicais distorcidos enquanto perseguem, criando uma atmosfera de tensão e desconforto. Suas aparições repentinas e movimentos rápidos os tornam adversários difíceis de evitar.",
}
/*
0
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_01"
1
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_02"
2
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_03"
3
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01"
4
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_02"
5
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_03"
6
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_01"
7
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_02"
8
: 
"SK_LMM_03|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_03"
9
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_End_SK_LMM_01"
10
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_End_SK_LMM_02"
11
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_End_SK_LMM_03"
12
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01"
13
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_02"
14
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_03"
15
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01"
16
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_02"
17
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_03"
18
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Start_SK_LMM_01"
19
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Start_SK_LMM_02"
20
: 
"SK_LMM_03|AS_FC_DJ_LMM_Tube_Start_SK_LMM_03"
21
: 
"SK_LMM_03|AS_LMM_Jumpscare_SK_LMM_01"
22
: 
"SK_LMM_03|AS_LMM_Jumpscare_SK_LMM_02"
23
: 
"SK_LMM_03|AS_LMM_Jumpscare_SK_LMM_03"
24
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_01"
25
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_02"
26
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_03"
27
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01"
28
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_02"
29
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_03"
30
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_01"
31
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_02"
32
: 
"SK_LMM_02|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_03"
33
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_End_SK_LMM_01"
34
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_End_SK_LMM_02"
35
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_End_SK_LMM_03"
36
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01"
37
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_02"
38
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_03"
39
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01"
40
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_02"
41
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_03"
42
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Start_SK_LMM_01"
43
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Start_SK_LMM_02"
44
: 
"SK_LMM_02|AS_FC_DJ_LMM_Tube_Start_SK_LMM_03"
45
: 
"SK_LMM_02|AS_LMM_Jumpscare_SK_LMM_01"
46
: 
"SK_LMM_02|AS_LMM_Jumpscare_SK_LMM_02"
47
: 
"SK_LMM_02|AS_LMM_Jumpscare_SK_LMM_03"
48
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_01"
49
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_02"
50
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_03"
51
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_01"
52
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_02"
53
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_03"
54
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_01"
55
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_02"
56
: 
"SK_LMM_01|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_03"
57
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_End_SK_LMM_01"
58
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_End_SK_LMM_02"
59
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_End_SK_LMM_03"
60
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_01"
61
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_02"
62
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_03"
63
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_01"
64
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_02"
65
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_03"
66
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Start_SK_LMM_01"
67
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Start_SK_LMM_02"
68
: 
"SK_LMM_01|AS_FC_DJ_LMM_Tube_Start_SK_LMM_03"
69
: 
"SK_LMM_01|AS_LMM_Jumpscare_SK_LMM_01"
70
: 
"SK_LMM_01|AS_LMM_Jumpscare_SK_LMM_02"
71
: 
"SK_LMM_01|AS_LMM_Jumpscare_SK_LMM_03"
*/

var ruinedMiniMusicMan2 = {
    src: "assets/models/fnafsbr/ruined-mini-music-man2.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Ruined Mini Music Man 2 para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        teste: {
            src: "",
            nome: "Teste",
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
    descricao: "Ruined Mini Music Man 2 (4 de 7 variações) são versões danificadas do Mini Music Man, que aparecem no jogo Five Nights at Freddy's: Security Breach RUIN, como pequenos animatronics que continuam a perseguir os jogadores com sons assustadores. Eles são pequenos e ágeis, com engrenagens expostas, sinais de desgaste e partes faltando. <br><br> Apesar do estado arruinado, continuam a emitir sons musicais distorcidos enquanto perseguem, criando uma atmosfera de tensão e desconforto. Suas aparições repentinas e movimentos rápidos os tornam adversários difíceis de evitar.",
}
/*
0
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_04"
1
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_05"
2
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_06"
3
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_07"
4
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04"
5
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_05"
6
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_06"
7
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_07"
8
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_04"
9
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_05"
10
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_06"
11
: 
"SK_LMM_07|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_07"
12
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_End_SK_LMM_04"
13
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_End_SK_LMM_05"
14
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_End_SK_LMM_06"
15
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_End_SK_LMM_07"
16
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04"
17
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_05"
18
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_06"
19
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_07"
20
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04"
21
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_05"
22
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_06"
23
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_07"
24
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Start_SK_LMM_04"
25
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Start_SK_LMM_05"
26
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Start_SK_LMM_06"
27
: 
"SK_LMM_07|AS_FC_DJ_LMM_Tube_Start_SK_LMM_07"
28
: 
"SK_LMM_07|AS_LMM_Jumpscare_SK_LMM_04"
29
: 
"SK_LMM_07|AS_LMM_Jumpscare_SK_LMM_05"
30
: 
"SK_LMM_07|AS_LMM_Jumpscare_SK_LMM_06"
31
: 
"SK_LMM_07|AS_LMM_Jumpscare_SK_LMM_07"
32
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_04"
33
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_05"
34
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_06"
35
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_07"
36
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04"
37
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_05"
38
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_06"
39
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_07"
40
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_04"
41
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_05"
42
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_06"
43
: 
"SK_LMM_06|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_07"
44
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_End_SK_LMM_04"
45
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_End_SK_LMM_05"
46
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_End_SK_LMM_06"
47
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_End_SK_LMM_07"
48
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04"
49
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_05"
50
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_06"
51
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_07"
52
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04"
53
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_05"
54
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_06"
55
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_07"
56
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Start_SK_LMM_04"
57
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Start_SK_LMM_05"
58
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Start_SK_LMM_06"
59
: 
"SK_LMM_06|AS_FC_DJ_LMM_Tube_Start_SK_LMM_07"
60
: 
"SK_LMM_06|AS_LMM_Jumpscare_SK_LMM_04"
61
: 
"SK_LMM_06|AS_LMM_Jumpscare_SK_LMM_05"
62
: 
"SK_LMM_06|AS_LMM_Jumpscare_SK_LMM_06"
63
: 
"SK_LMM_06|AS_LMM_Jumpscare_SK_LMM_07"
64
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_04"
65
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_05"
66
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_06"
67
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_07"
68
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04"
69
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_05"
70
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_06"
71
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_07"
72
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_04"
73
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_05"
74
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_06"
75
: 
"SK_LMM_05|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_07"
76
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_End_SK_LMM_04"
77
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_End_SK_LMM_05"
78
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_End_SK_LMM_06"
79
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_End_SK_LMM_07"
80
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04"
81
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_05"
82
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_06"
83
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_07"
84
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04"
85
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_05"
86
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_06"
87
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_07"
88
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Start_SK_LMM_04"
89
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Start_SK_LMM_05"
90
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Start_SK_LMM_06"
91
: 
"SK_LMM_05|AS_FC_DJ_LMM_Tube_Start_SK_LMM_07"
92
: 
"SK_LMM_05|AS_LMM_Jumpscare_SK_LMM_04"
93
: 
"SK_LMM_05|AS_LMM_Jumpscare_SK_LMM_05"
94
: 
"SK_LMM_05|AS_LMM_Jumpscare_SK_LMM_06"
95
: 
"SK_LMM_05|AS_LMM_Jumpscare_SK_LMM_07"
96
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_04"
97
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_05"
98
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_06"
99
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_End_SK_LMM_07"

100
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_04"
101
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_05"
102
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_06"
103
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Loop_SK_LMM_07"
104
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_04"
105
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_05"
106
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_06"
107
: 
"SK_LMM_04|AS_FC_DJ_LMM_BeatDisrupt_Start_SK_LMM_07"
108
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_End_SK_LMM_04"
109
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_End_SK_LMM_05"
110
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_End_SK_LMM_06"
111
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_End_SK_LMM_07"
112
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_04"
113
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_05"
114
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_06"
115
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Jump_SK_LMM_07"
116
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_04"
117
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_05"
118
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_06"
119
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Loop_SK_LMM_07"
120
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Start_SK_LMM_04"
121
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Start_SK_LMM_05"
122
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Start_SK_LMM_06"
123
: 
"SK_LMM_04|AS_FC_DJ_LMM_Tube_Start_SK_LMM_07"
124
: 
"SK_LMM_04|AS_LMM_Jumpscare_SK_LMM_04"
125
: 
"SK_LMM_04|AS_LMM_Jumpscare_SK_LMM_05"
126
: 
"SK_LMM_04|AS_LMM_Jumpscare_SK_LMM_06"
127
: 
"SK_LMM_04|AS_LMM_Jumpscare_SK_LMM_07"

*/

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
    temAltura: true,
    alturaMaxima: 0.25,
    alturaMinima: -0.25,
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
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Mask Bot, que aparece em Five Nights at Freddy's: Security Breach RUIN, é um bot da S.T.A.F.F. que é empregado para distribuir máscaras aos clientes. Um Mask Bot entrega a Máscara da Vanny para Cassie, dando um jumpscare nela, porém isso não vai alertar animatrônicos próximos.",
}

var cassie = {
    src: "assets/models/fnafsbr/cassie.glb",
    corFundo: "radial-gradient(#990F18, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Cassie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 3m",
    orbitaCameraMinima: "0 0 2.5m",
    temAltura: true,
    alturaMaxima: 0.5,
    alturaMinima: -0.5,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Cassie é a personagem principal da expansão \"Ruin\" de Five Nights at Freddy's: Security Breach, uma jovem corajosa que explora as ruínas do Pizzaplex tentando sobreviver e encontrar seu amigo Gregory. <br><br> Determinada e curiosa, Cassie enfrenta inúmeros perigos enquanto desvenda segredos ocultos e escapa de animatronics hostis. Sua jornada revela muitos mistérios do Pizzaplex, proporcionando uma nova perspectiva sobre os eventos e a história dos animatronics.",
}

var entity = {
    src: "assets/models/fnafsbr/entity.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Entity para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 10m",
    temAltura: true,
    alturaMaxima: 0,
    alturaMinima: -0,
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        teste: {
            src: "",
            nome: "Teste",
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
    descricao: "Entity, também conhecido como M.X.E.S, é um avançado sistema de segurança digital introduzido em \"Five Nights at Freddy's: Security Breach - Ruin\". <br><br> Ele atua como uma entidade virtual projetada para monitorar e proteger as áreas do Pizzaplex. Dotado de inteligência artificial sofisticada, Entity é capaz de detectar intrusos e anomalias no ambiente, ativando protocolos de defesa automatizados para garantir a segurança do local. <br><br> Sua presença constante e vigilante adiciona uma camada de desafio e tensão ao jogo, forçando os jogadores a navegar cuidadosamente para evitar sua detecção.",
}
/*

0
: 
"A_DLC_CIN_Catwalks_Section_2_12b_Rabbit_AR_SK_DLC_New_Rabbit"
1
: 
"A_DLC_CIN_CupcakeShop_Section_1_3_Rabbit_SK_DLC_New_Rabbit"
2
: 
"A_DLC_CIN_Sinkhole_Section_5_B2_Rabbit_SK_DLC_New_Rabbit"
3
: 
"A_DLC_Rabbit_Agitated01_SK_DLC_New_Rabbit"
4
: 
"A_DLC_Rabbit_Agitated03_SK_DLC_New_Rabbit"
5
: 
"A_DLC_Rabbit_Agitated05_SK_DLC_New_Rabbit"
6
: 
"A_DLC_Rabbit_Alerted01_L_SK_DLC_New_Rabbit"
7
: 
"A_DLC_Rabbit_Alerted01_R_SK_DLC_New_Rabbit"
8
: 
"A_DLC_Rabbit_Alerted02_L_SK_DLC_New_Rabbit"
9
: 
"A_DLC_Rabbit_Alerted02_R_SK_DLC_New_Rabbit"
10
: 
"A_DLC_Rabbit_Alerted03_SK_DLC_New_Rabbit"
11
: 
"A_DLC_Rabbit_Daycare_Idle_1stFloor_01_SK_DLC_New_Rabbit"
12
: 
"A_DLC_Rabbit_Daycare_Idle_1stFloor_02_SK_DLC_New_Rabbit"
13
: 
"A_DLC_Rabbit_Daycare_Idle_1stFloor_03_SK_DLC_New_Rabbit"
14
: 
"A_DLC_Rabbit_Daycare_Idle_1stFloor_04_SK_DLC_New_Rabbit"
15
: 
"A_DLC_Rabbit_Daycare_Idle_1stFloor_05_SK_DLC_New_Rabbit"
16
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_01_SK_DLC_New_Rabbit"
17
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_02_SK_DLC_New_Rabbit"
18
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_03_SK_DLC_New_Rabbit"
19
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_04_SK_DLC_New_Rabbit"
20
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_05_SK_DLC_New_Rabbit"
21
: 
"A_DLC_Rabbit_Daycare_Idle_2ndFloor_06_SK_DLC_New_Rabbit"
22
: 
"A_DLC_Rabbit_Watching01_SK_DLC_New_Rabbit"
23
: 
"A_DLC_Rabbit_Watching02_SK_DLC_New_Rabbit"
24
: 
"A_DLC_Rabbit_Watching03_Head_SK_DLC_New_Rabbit"
25
: 
"A_DLC_Rabbit_Watching03_SK_DLC_New_Rabbit"
26
: 
"DLC_Rabbit_FullScreenPose_01a_SK_DLC_New_Rabbit"
27
: 
"DLC_Rabbit_FullScreenPose_01b_SK_DLC_New_Rabbit"
28
: 
"DLC_Rabbit_FullScreenPose_02a_SK_DLC_New_Rabbit"
29
: 
"DLC_Rabbit_FullScreenPose_02b_SK_DLC_New_Rabbit"
30
: 
"DLC_Rabbit_FullScreenPose_03a_SK_DLC_New_Rabbit"
31
: 
"DLC_Rabbit_FullScreenPose_03b_SK_DLC_New_Rabbit"
32
: 
"DLC_Rabbit_FullScreenPose_04a_SK_DLC_New_Rabbit"
33
: 
"DLC_Rabbit_FullScreenPose_04b_SK_DLC_New_Rabbit"
34
: 
"DLC_Rabbit_FullScreenPose_05a_SK_DLC_New_Rabbit"
35
: 
"DLC_Rabbit_FullScreenPose_05b_SK_DLC_New_Rabbit"
36
: 
"DLC_Rabbit_TempPose_01_SK_DLC_New_Rabbit"
37
: 
"DLC_Rabbit_TempPose_02_SK_DLC_New_Rabbit"
38
: 
"DLC_Rabbit_TempPose_03_SK_DLC_New_Rabbit"
39
: 
"DLC_Rabbit_TempPose_04_SK_DLC_New_Rabbit"
40
: 
"DLC_Rabbit_TempPose_05_SK_DLC_New_Rabbit"
41
: 
"DLC_Rabbit_TestIdle_SK_DLC_New_Rabbit"

*/

var mimic = {
    src: "assets/models/fnafsbr/mimic.glb",
    corFundo: "radial-gradient(#302526, #000)",
    fnaf: "sbr",
    srcImg: "",
    swiperDescricao: [
        "Botão de Mimic para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAltura: true,
    alturaMaxima: 1,
    alturaMinima: -1,
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
        teste: {
            src: "",
            volume: 0.5,
            nome: "Teste",
        },
    },
    descricao: "Mimic é um animatronic habilidoso em replicar vozes e comportamentos para enganar e confundir.  Com uma estrutura flexível que permite rápidas alterações físicas, Mimic se destaca como um adversário perigoso e imprevisível. <br><br> Ele aparece em momentos de tensão, utilizando sua capacidade de transformação para manipular o ambiente e os jogadores, criando uma camada adicional de complexidade e incerteza no jogo. <br><br> Sua habilidade de imitação desafia a percepção e a confiança dos jogadores, adicionando profundidade simbólica ao seu papel em \"Five Nights at Freddy's: Security Breach - Ruin\".",
}
