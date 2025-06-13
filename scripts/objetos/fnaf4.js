// Five Nights at Freddy's 4
var nightmareFreddy = {
    src: "assets/models/fnaf4/nightmare-freddy.glb",
    corFundo: "radial-gradient(#2C2320, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-freddy/",
    swiperDescricao: [
        "Botão de Nightmare Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Nightmare_Freddy|Nightmare_Freddy_JumpScare_RIG_Nightmare_Freddy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.25m",
            estatico: false,
        },
        andando: {
            src: "RIG_Nightmare_Freddy|Nightmare_Freddy_Hallway_Walk_RIG_Nightmare_Freddy",
            nome: "Andando",
            alvoCamera: "0m 1.25m 35m",
            estatico: false,
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 25m",
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Nightmare Freddy, o antagonista aterrorizante de Five Nights at Freddy's 4, é a personificação dos pesadelos. Com sua pelagem marrom desgastada e olhos dourados que brilham na escuridão, ele se destaca como uma versão distorcida e exagerada do Freddy Fazbear original. <br><br> Seus dentes afiados e garras rasgadas são um testemunho de sua natureza predatória. Para evitar seu ataque fatal, os jogadores devem vigiar atentamente a cama e espantar os \"Freddles\", pequenas versões de Nightmare Freddy, antes que eles o invoquem.",
}

var freddles = {
    src: "assets/models/fnaf4/freddles.glb",
    corFundo: "radial-gradient(#5A4D4A, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/freddles/",
    swiperDescricao: [
        "Botão de Freddles para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 7.5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_Freddle02Scaled|Nightmare_Freddle_02_Gallery_Pos_RIG_Freddle02Scaled",
            nome: "Posição inicial",
            alvoCamera: "1.25m 3.175m 0.5m",
            estatico: true,
        },
        seMexendo1: {
            src: "RIG_Freddle02Scaled|Nightmare_Freddle_03_Idle_RIG_Freddle02Scaled",
            nome: "Se mexendo 1",
            alvoCamera: "0.75m -0.25m -0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        seMexendo2: {
            src: "RIG_Freddle02Scaled|Nightmare_Freddle_02_JumpScare_RIG_Freddle02Scaled",
            nome: "Se mexendo 2",
            alvoCamera: "1.25m 3m 0.5m",
            estatico: false,
        },
    },
    audios: {
        ruido: {
            src: "assets/audios/fnaf4/freddles/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
    },
    descricao: "Os Freddles são pequenas criaturas que aparecem em Five Nights at Freddy's 4 como parte das mecânicas de jogo envolvendo Nightmare Freddy. Eles são versões miniaturizadas de Nightmare Freddy, com pelagem marrom e olhos brancos que se destacam na escuridão. <br><br> Durante o jogo, os Freddles começam a se acumular na cama do jogador, e se não forem espantados a tempo, eles invocarão Nightmare Freddy, resultando em um jumpscare. <br><br> Eles representam uma ameaça constante que requer vigilância e ação rápida por parte do jogador para evitar um desfecho terrível. Os Freddles são uma das poucas entidades na série que parecem agir em grupo, o que adiciona uma camada extra de tensão e estratégia ao jogo.",
}
var nightmareBonnie = {
    src: "assets/models/fnaf4/nightmare-bonnie.glb",
    corFundo: "radial-gradient(#2D323F, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-bonnie/",
    swiperDescricao: [
        "Botão de Nightmare Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Nightmare_Bonnie|Nightmare_Bonnie_Jumpscare_RIG_Nightmare_Bonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.25m",
            estatico: false,
        },
        avancando: {
            src: "RIG_Nightmare_Bonnie|NightmareBonnie_DoorOpen_RIG_Nightmare_Bonnie",
            nome: "Avançando",
            alvoCamera: "0.25m 1.25m -0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-20deg 1.5rad 0",
        },
        recuando: {
            src: "RIG_Nightmare_Bonnie|NightmareBonnie_DoorClosed_RIG_Nightmare_Bonnie",
            nome: "Recuando",
            alvoCamera: "0.25m 1.25m -0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-20deg 1.5rad 0",
        },
        maoLevantada: {
            src: "RIG_Nightmare_Bonnie|NightmareBonnie_Idle_RIG_Nightmare_Bonnie",
            nome: "Mão levantada",
            alvoCamera: "0m 1.35m 0m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-50deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        respiracao: {
            src: "assets/audios/fnaf4/nightmare-bonnie-chica/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
    },
    descricao: "Nightmare Bonnie, o coelho animatrônico de Five Nights at Freddy's 4, é uma figura imponente e aterrorizante. Com sua pelagem azul e lilás e uma aparência severamente danificada, ele traz um ar de destruição ao jogo. Seus dentes afiados e garras são exagerados, dando-lhe um visual ameaçador. <br><br> Ele se movimenta pelo Corredor Esquerdo e os jogadores devem ouvir atentamente para evitar seu terrível jumpscare. A estratégia para se proteger de Nightmare Bonnie envolve o uso cauteloso da lanterna e a verificação constante do corredor. <br><br> Assim como outros animatrônicos \"Nightmare\", ele possui cinco dedos, uma característica dos modelos springlocks, e compartilha semelhanças com Springtrap.",
}

var nightmareChica = {
    src: "assets/models/fnaf4/nightmare-chica.glb",
    corFundo: "radial-gradient(#836127, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-chica/",
    swiperDescricao: [
        "Botão de Nightmare Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 4m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Nightmare_Chica|Nightmare_Chica_JumpScare_RIG_Nightmare_Chica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m 0.25m",
            estatico: false,
        },
        avancando: {
            src: "RIG_Nightmare_Chica|NightmareChica_DoorOpen_RIG_Nightmare_Chica",
            nome: "Avançando",
            alvoCamera: "0.25m 1.25m 3.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "200deg 1.5rad 0",
        },
        recuando: {
            src: "RIG_Nightmare_Chica|NightmareChica_DoorClosed_RIG_Nightmare_Chica",
            nome: "Recuando",
            alvoCamera: "0.25m 1.25m 3.25m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "200deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        respiracao: {
            src: "assets/audios/fnaf4/nightmare-bonnie-chica/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
        cozinha: {
            src: "assets/audios/fnaf4/nightmare-chica/cozinha.ogg",
            volume: 0.5,
            nome: "Cozinha",
        },
    },
    descricao: "Nightmare Chica, a versão pesadelo da Chica em Five Nights at Freddy's 4, é uma galinha animatrônica com um visual aterrorizante. Sua cor predominante é o amarelo, mas com um aspecto desgastado e rasgado, revelando partes do endoesqueleto e fios soltos. <br><br> Seus olhos possuem heterocromia, sendo um vermelho e o outro azul, e seu bico está repleto de dentes afiados e longos. Para evitar seu jumpscare, os jogadores devem estar atentos ao Corredor Direito e escutar cuidadosamente por sinais de sua respiração antes de usar a lanterna. <br><br> Uma curiosidade é que o Cupcake de Nightmare Chica, agora com uma boca cheia de dentes cortantes, parece ter vida própria e também pode atacar o jogador.",
}

var nightmareCupcake = {
    src: "assets/models/fnaf4/nightmare-cupcake.glb",
    corFundo: "radial-gradient(#981E5C, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-cupcake/",
    swiperDescricao: [
        "Botão de Nightmare Cupcake para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 8m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_NightmareCupcake|A_NightmareCupcake_Jumpscare_01_RIG_NightmareCupcake",
            nome: "Jumpscare",
            alvoCamera: "0m 0.5m 3m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare-agudo.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "O Nightmare Cupcake é uma versão aterrorizante do cupcake animatrônico que acompanha Chica em Five Nights at Freddy's 4. <br><br> Ele se destaca com sua cobertura rosa desbotada e uma vela com chama laranja, mas o que realmente chama a atenção é sua boca cheia de dentes afiados e olhos mecânicos brancos com íris laranja. Diferente de um simples adereço, o Nightmare Cupcake é autônomo e pode se mover sozinho. <br><br> A partir da segunda noite, ele serve como um dos capangas de Nightmare Chica, e se o jogador não mantiver o corredor direito sob controle, o Nightmare Cupcake pode realizar um jumpscare. <br><br> Sua presença adiciona uma camada de tensão e estratégia ao jogo, pois os jogadores devem estar constantemente vigilantes para evitar serem pegos de surpresa por essa pequena, mas mortal, criatura.",
}

var nightmareFoxy = {
    src: "assets/models/fnaf4/nightmare-foxy.glb",
    corFundo: "radial-gradient(#632826, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-foxy/",
    swiperDescricao: [
        "Botão de Nightmare Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Nightmare_Foxy|A_Nightmare_Foxy_Jumpscare_RIG_Nightmare_Foxy",
            nome: "Jumpscare",
            alvoCamera: "0m -0.65m -0.5m",
            estatico: false,
        },
        olhar: {
            src: "RIG_Nightmare_Foxy|Nightmare_Foxy_Hallway_Idle_RIG_Nightmare_Foxy",
            nome: "Olhar",
            alvoCamera: "0m 1.25m 0.25m",
            estatico: false,
        },
        correndo: {
            src: "RIG_Nightmare_Foxy|Nightmare_Foxy_Hallway_Run_RIG_Nightmare_Foxy",
            nome: "Correndo",
            alvoCamera: "0m 1.25m 12m",
            estatico: false,
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 15m",
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        entrando: {
            src: "assets/audios/fnaf4/nightmare-foxy/entrando.ogg",
            volume: 0.5,
            nome: "Entrando no armário",
        },
        praDireita: {
            src: "assets/audios/fnaf4/nightmare-foxy/praDireita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnaf4/nightmare-foxy/praEsquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Nightmare Foxy, o antagonista de Five Nights at Freddy's 4, é uma versão distorcida e mais sinistra do Foxy original. Com sua coloração carmesim e olhos laranjas metálicos, ele é uma figura imponente e aterrorizante. <br><br> Seu corpo apresenta um grande buraco no tronco e suas calças marrons estão rasgadas, expondo o endoesqueleto das pernas. Sua mão esquerda possui cinco dedos, enquanto a direita é substituída por um gancho metálico afiado, uma homenagem ao seu homônimo pirata. <br><br> Ele não usa um tapa-olho, diferentemente de suas versões anteriores. Nightmare Foxy se torna ativo a partir da Noite 2, e se o jogador não vigiar o Armário com cuidado, ele irá atacá-lo, resultando em um Game Over. <br><br> Sua presença é anunciada por passos rápidos, e para mantê-lo afastado, o jogador deve fechar a porta do Armário e esperar por alguns instantes.",
}

var nightmareFredbear = {
    src: "assets/models/fnaf4/nightmare-fredbear.glb",
    corFundo: "radial-gradient(#D18625, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-fredbear/",
    swiperDescricao: [
        "Botão de Nightmare Fredbear para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_NightmareFredBear|NMFB_Jumpscare_01_RIG_NightmareFredBear",
            nome: "Jumpscare",
            alvoCamera: "0m -0.375m -1m",
            estatico: false,
        },
        agachado: {
            src: "RIG_NightmareFredBear|NMFB_Idle_LeftHallDoor_RIG_NightmareFredBear",
            nome: "Agachando",
            alvoCamera: "3.5m 1.1m 2.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "210deg 1.5rad 0",
        },
        entrando: {
            src: "RIG_NightmareFredBear|NMFB_EnterRoom_Right_02_RIG_NightmareFredBear",
            nome: "Entrando",
            alvoCamera: "-2m 1.25m 2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "50deg 1.5rad 0",
            mudaOrbitaCameraMaxima: true,
            orbitaCameraMaxima: "0 0 8m",
        },
        andando: {
            src: "RIG_NightmareFredBear|NMFB_Walk_LeftHall_HalfDistance_RIG_NightmareFredBear",
            nome: "Andando",
            alvoCamera: "3.75m 1.25m 4.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        risada1: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada1.ogg",
            volume: 0.5,
            nome: "Risada 1",
        },
        risada2: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada2.ogg",
            volume: 0.5,
            nome: "Risada 2",
        },
        risada3: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada3.ogg",
            volume: 0.5,
            nome: "Risada 3",
        },
        risada4: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada4.ogg",
            volume: 0.5,
            nome: "Risada 4",
        },
        risada5: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada5.ogg",
            volume: 0.5,
            nome: "Risada 5",
        },
        risada6: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada6.ogg",
            volume: 0.5,
            nome: "Risada 6",
        },
        ruido: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
        praDireita: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praDireita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praEsquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Nightmare Fredbear é o antagonista principal de Five Nights at Freddy's 4 e representa uma versão pesadelo do Fredbear original. Ele é um urso animatrônico de cor amarelo/dourado com manchas marrons e muitos rasgos em seu traje. <br><br> Seu design inclui uma gravata-borboleta roxa e um chapéu da mesma cor com uma listra preta. Ele tem uma cabeça grande com bochechas inchadas, gengivas escuras expostas e uma boca larga cheia de dentes longos e afiados. <br><br> Seus olhos são pequenos, cinza metálico com íris vermelhas, e ele tem garras prateadas e afiadas. Curiosamente, ele tem um grande buraco na parte inferior de sua coxa esquerda e a maioria do pelo de suas orelhas está faltando. Seu estômago é redondo com uma coloração castanho escuro e uma grande fenda armada com presas afiadas. <br><br> Nightmare Fredbear aparece na Noite 5 e parte da Noite 6, e quando está ativo, não há outros animatrônicos ativos, o que pode facilitar a conclusão da noite. Para evitar seu jumpscare, os jogadores devem estar atentos tanto ao Corredor Esquerdo quanto ao Corredor Direito, e também verificar o Armário e acima da Cama.",
}

var nightmare = {
    src: "assets/models/fnaf4/nightmare.glb",
    corFundo: "radial-gradient(#101010, #000)",
    fnaf: "4",
    temCursor: true,
    srcImg: "assets/images/fnaf4/nightmare/",
    swiperDescricao: [
        "Botão de Nightmare para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 10m",
    orbitaCameraMinima: "0 0 6m",
    alvoCamera: "0m 1.75m 0m",
    temConfigEx: true,
    configEx: () => {
        modelViewer.style.exposure = 0.75
    },
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare-ruido.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        risada1: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada1.ogg",
            volume: 0.5,
            nome: "Risada 1",
        },
        risada2: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada2.ogg",
            volume: 0.5,
            nome: "Risada 2",
        },
        risada3: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada3.ogg",
            volume: 0.5,
            nome: "Risada 3",
        },
        risada4: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada4.ogg",
            volume: 0.5,
            nome: "Risada 4",
        },
        risada5: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada5.ogg",
            volume: 0.5,
            nome: "Risada 5",
        },
        risada6: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada6.ogg",
            volume: 0.5,
            nome: "Risada 6",
        },
        ruido: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
        praDireita: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praDireita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praEsquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Nightmare é o antagonista final de Five Nights at Freddy's 4, uma versão recolorida e ligeiramente translúcida de Nightmare Fredbear. Sua cor predominante é o preto, e ele possui um chapéu e gravata-borboleta amarelos. Seu corpo quase inteiramente visível devido à transparência, revela um endoesqueleto envolto em sombras. <br><br> A área ao redor de sua boca parece ter um material rasgado, expondo ainda mais seu interior mecânico. Nightmare é sádico por natureza, o que é evidente em Ultimate Custom Night, onde ele zomba de suas vítimas de maneira cruel. <br><br> Ele fala com uma voz profunda e monstruosa, adequada ao seu nome. Na jogabilidade, ele se torna ativo a partir das 4 AM na Noite 7, e os jogadores devem estar atentos tanto aos corredores quanto à cama para evitar seu jumpscare.",
}

var jackOBonnie = {
    src: "assets/models/fnaf4/jack-o-bonnie.glb",
    corFundo: "radial-gradient(#765024, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/jack-o-bonnie/",
    swiperDescricao: [
        "Botão de Jack-O-Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_JackOBonnie|DLC_Bonnie_Office01_Pos_01_RIG_JackOBonnie",
            nome: "Posição inicial",
            alvoCamera: "22.35m 2.25m -0.6m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        jumpscare: {
            src: "RIG_JackOBonnie|JackOBonnie_JumpScare_RIG_JackOBonnie",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -0.35m",
            estatico: false,
        },
        andando: {
            src: "RIG_JackOBonnie|DLC_Bonnie_Office01_Path_05to07_RIG_JackOBonnie",
            nome: "Andando",
            alvoCamera: "10m 1.25m -1.75m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        respiracao: {
            src: "assets/audios/fnaf4/nightmare-bonnie-chica/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
    },
    descricao: "Jack-O-Bonnie é uma variante temática de Halloween de Nightmare Bonnie, que aparece na Edição de Halloween de Five Nights at Freddy's 4. Com uma coloração laranja-marrom e detalhes em vermelho-laranja no focinho, queixo, estômago e interior das orelhas, ele se assemelha a uma abóbora de Halloween. <br><br>Seus olhos são vazios, mas brilham com um glow laranja e amarelo, e seus dentes têm um brilho amarelo claro, o que permite que sua mandíbula de endoesqueleto brilhe no escuro. Ao contrário de Nightmare Bonnie, Jack-O-Bonnie não possui um nariz nem uma cabeça de endoesqueleto, com os dentes de endoesqueleto sendo a única exceção. <br><br>Seu peito de endoesqueleto também está ausente, expondo sua coluna vertebral com dois fios de arame vermelho visíveis sob seu laço. Partes da mão esquerda de Jack-O-Bonnie parecem ser verdes em vez de laranja-marrom. Seu laço brilha em uma cor laranja/amarela. Ele é um personagem frio e intimidador que caça suas vítimas como uma besta predatória.",
}

var jackOChica = {
    src: "assets/models/fnaf4/jack-o-chica.glb",
    corFundo: "radial-gradient(#69411C, #000)",
    fnaf: "4",
    temCursor: true,
    srcImg: "assets/images/fnaf4/jack-o-chica/",
    swiperDescricao: [
        "Botão de Jack-O-Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_JackOChica|DLC_Chica_Office01_Pos_01_RIG_JackOChica",
            nome: "Posição inicial",
            alvoCamera: "22.25m 2.25m 0.5m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        jumpscare: {
            src: "RIG_JackOChica|JackOChica_JumpScare_RIG_JackOChica",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m 0.25m",
            estatico: false,
        },
        olhar: {
            src: "RIG_JackOChica|JackoChica_HallIdle_RIG_JackOChica",
            nome: "Olhar",
            alvoCamera: "18.5m 1.175m -4.375m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "-90deg 1.5rad 0",
        },
        andando: {
            src: "RIG_JackOChica|DLC_Chica_Office01_Path_08to09_RIG_JackOChica",
            nome: "Andando",
            alvoCamera: "-1.5m 1.25m 2.5m",
            estatico: false,
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        respiracao: {
            src: "assets/audios/fnaf4/nightmare-bonnie-chica/respiracao.ogg",
            volume: 0.5,
            nome: "Respiração",
        },
        cozinha: {
            src: "assets/audios/fnaf4/nightmare-chica/cozinha.ogg",
            volume: 0.5,
            nome: "Cozinha",
        },
    },
    descricao: "Jack-O-Chica é uma personagem do jogo Five Nights at Freddy's 4: Halloween Edition. Ela é uma versão de Halloween da personagem original, Chica, com uma aparência assustadora e características físicas distintas. Seus olhos brilham com uma luz sinistra, seus dentes são afiados como navalhas e ela carrega consigo uma abóbora iluminada, que adiciona um toque ainda mais assustador à sua figura. <br><br> No jogo, Jack-O-Chica é uma ameaça constante. Ela se move silenciosamente pelos corredores escuros, aparecendo repentinamente para assustar os jogadores. Para evitar ser pego por Jack-O-Chica, os jogadores devem usar suas habilidades de audição e reflexos rápidos. O som de sua risada distante ou o vislumbre de sua silhueta na porta são sinais de que ela está por perto. Fechar as portas a tempo é crucial para impedir sua entrada e sobreviver à noite.",
}

var nightmareMangle = {
    src: "assets/models/fnaf4/nightmare-mangle.glb",
    corFundo: "radial-gradient(#7B2651, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmare-mangle/",
    swiperDescricao: [
        "Botão de Nightmare Mangle para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 1500m",
    orbitaCameraMinima: "0 0 1250m",
    alvoCamera: "-25m 300m 25m",
    temAudio: true,
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
    },
    descricao: "Nightmare Mangle é uma contraparte aterrorizante de Mangle e aparece na Edição de Halloween de Five Nights at Freddy's 4, substituindo Nightmare Foxy. Com uma coloração branca e rosa, este animatrônico possui um aspecto ainda mais despedaçado que os outros, com partes do endoesqueleto expostas e uma aparência sinistra. <br><br> Seu rosto é adornado com bochechas vermelhas e batom, enquanto a segunda cabeça se assemelha a um crânio humano. Possui apenas uma mão no braço direito e três pernas de endoesqueleto, diferentemente do Mangle original. No jogo, Nightmare Mangle tenta entrar no quarto a partir da Noite 2, e se conseguir, irá para o armário. <br><br> Se o jogador não verificar o armário com frequência, Nightmare Mangle sairá e atacará, causando um Game Over. Sua presença é marcada por sons de estática de rádio, aumentando a dificuldade da noite para o jogador.",
}

var nightmareBalloonBoy = {
    src: "assets/models/fnaf4/nightmare-balloon-boy.glb",
    corFundo: "radial-gradient(#E84036, #300E2D)",
    fnaf: "4",
    temCursor: true,
    srcImg: "assets/images/fnaf4/nightmare-balloon-boy/",
    swiperDescricao: [
        "Botão de Nightmare Balloon Boy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_NightmareBB|NMBB_IdleMid_RIG_NightmareBB",
            nome: "Posição inicial",
            alvoCamera: "0.05m 0.5m 2.25m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
        jumpscare: {
            src: "RIG_NightmareBB|A_NMBB_Jumpscare_01_RIG_NightmareBB",
            nome: "Jumpscare",
            alvoCamera: "0m -0.15m -1.05m",
            estatico: false,
        },
        seEscondendo: {
            src: "RIG_NightmareBB|NMBB_Idle_BLD_RIG_NightmareBB",
            nome: "Se escondendo",
            alvoCamera: "1.25m 0.675m 0.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        correndo: {
            src: "RIG_NightmareBB|NMBB_Trans_Mid_FRD_RIG_NightmareBB",
            nome: "Correndo",
            alvoCamera: "-1.5m 0.65m 1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "220deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare-agudo.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        hi: {
            src: "assets/audios/fnaf4/nightmare-balloon-boy/hi.ogg",
            volume: 0.5,
            nome: "Hi",
        },
        hello: {
            src: "assets/audios/fnaf4/nightmare-balloon-boy/hello.ogg",
            volume: 0.5,
            nome: "Hello",
        },
        risada: {
            src: "assets/audios/fnaf4/nightmare-balloon-boy/risada.ogg",
            volume: 0.5,
            nome: "Risada",
        },
    },
    descricao: "O Nightmare Balloon Boy é uma versão aterrorizante do personagem Balloon Boy em Five Nights at Freddy's 4. Ele é conhecido por sua aparência sinistra e comportamento ameaçador. Suas características físicas incluem uma pele desgastada e rasgada, com olhos vazios e brilhantes. <br><br> Seus dentes têm um brilho amarelo, e sua mandíbula de endoesqueleto também brilha no escuro. Diferentemente do Balloon Boy original, ele não possui um nariz e sua cabeça de endoesqueleto é visível. Além disso, partes de sua mão esquerda parecem ser verdes em vez de laranja-marrom. <br><br> Para evitá-lo, os jogadores devem monitorar seus movimentos e evitar olhar diretamente para ele quando ele aparecer. Ele é um dos personagens mais assustadores do jogo e adiciona uma dose extra de tensão durante as noites. ",
}

var plushtrap = {
    src: "assets/models/fnaf4/plushtrap.glb",
    corFundo: "radial-gradient(#B0A45D, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/plushtrap/",
    swiperDescricao: [
        "Botão de Plushtrap para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        posicaoInicial: {
            src: "RIG_PlushTrap|Plushtrap_Idle_Mid_RIG_PlushTrap",
            nome: "Posição inicial",
            alvoCamera: "0m 0.75m 3.75m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
        jumpscare: {
            src: "RIG_PlushTrap|A_Plushtrap_Jumpscare_01_RIG_PlushTrap",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -1.35m",
            estatico: false,
        },
        sentado: {
            src: "RIG_PlushTrap|Plushtrap_Idle_Chair_RIG_PlushTrap",
            nome: "Sentado",
            alvoCamera: "0m 2.5m 11.35m",
            estatico: true,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        seEscondendo: {
            src: "RIG_PlushTrap|Plushtrap_Idle_BLD_RIG_PlushTrap",
            nome: "Se escondendo",
            alvoCamera: "4m 0.75m 7.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 0 0",
        },
        correndo: {
            src: "RIG_PlushTrap|Plushtrap_Trans_Mid_FRD_RIG_PlushTrap",
            nome: "Correndo",
            alvoCamera: "-3m 1m 2m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "220deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare-agudo.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        praDireita: {
            src: "assets/audios/fnaf4/plushtrap/praDireita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnaf4/plushtrap/praEsquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Plushtrap é um antagonista menor em Five Nights at Freddy's 4 e também aparece no jogo Ultimate Custom Night. Ele é uma versão \"pesadelo\" de um brinquedo de pelúcia do personagem Spring Bonnie. Sua aparência é semelhante à de Springtrap do terceiro jogo, mas mais cartunesca e menos danificada.<br><br> Plushtrap tem cores verde-amareladas em seu corpo e dentes com tons de verde escuro. Ele é o único antagonista que aparece em seu próprio minijogo, chamado \"Fun with Plushtrap\", onde os jogadores usam uma lanterna para pará-lo enquanto ele corre de um lado para o outro em um corredor escuro.",
}

var nightmarionne = {
    src: "assets/models/fnaf4/nightmarionne.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "4",
    srcImg: "assets/images/fnaf4/nightmarionne/",
    swiperDescricao: [
        "Botão de Nightmarionne Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 7.5m",
    orbitaCameraMinima: "0 0 5m",
    temAnimacao: true,
    temAudio: true,
    animacoes: {
        jumpscare: {
            src: "RIG_Nightmarrionette|A_Nightmarrionette_Jumpscare_01_RIG_Nightmarrionette",
            nome: "Jumpscare",
            alvoCamera: "0m -0.5m -1m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "0 1.5rad 0",
        },
        andando: {
            src: "RIG_Nightmarrionette|Nightmarrionette_WalkHallway_Left_RIG_Nightmarrionette",
            nome: "Andando",
            alvoCamera: "5m 1.5m 7.5m",
            estatico: false,
            mudaOrbitaCamera: true,
            orbitaCamera: "180deg 1.5rad 0",
        },
    },
    audios: {
        jumpscare: {
            src: "assets/audios/fnaf4/jumpscare-ruido.ogg",
            volume: 0.5,
            nome: "Jumpscare",
        },
        musicBox: {
            src: "assets/audios/fnaf2/puppet-nightmarionne/music-box.ogg",
            volume: 0.5,
            nome: "Music Box"
        },
        risada1: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada1.ogg",
            volume: 0.5,
            nome: "Risada 1",
        },
        risada2: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada2.ogg",
            volume: 0.5,
            nome: "Risada 2",
        },
        risada3: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada3.ogg",
            volume: 0.5,
            nome: "Risada 3",
        },
        risada4: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada4.ogg",
            volume: 0.5,
            nome: "Risada 4",
        },
        risada5: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada5.ogg",
            volume: 0.5,
            nome: "Risada 5",
        },
        risada6: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/risada6.ogg",
            volume: 0.5,
            nome: "Risada 6",
        },
        ruido: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/ruido.ogg",
            volume: 0.5,
            nome: "Ruido",
        },
        praDireita: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praDireita.ogg",
            volume: 0.5,
            nome: "Passos pra direita",
        },
        praEsquerda: {
            src: "assets/audios/fnaf4/nightmare-fredbear-nightmarionne/praEsquerda.ogg",
            volume: 0.5,
            nome: "Passos pra esquerda",
        },
    },
    descricao: "Nightmarionne (também chamada de Nightmare Puppet ou Nightmarionnette) é um animatrônico \"Nightmare\" secreto e um antagonista em Five Nights at Freddy's 4. Junto com Nightmare Balloon Boy e Nightmare Mangle, eles estão entre os novos animatrônicos Nightmare introduzidos na atualização de Halloween. <br><br> Nightmarionne é uma versão Nightmare de The Puppet. Seu corpo esguio se assemelha a um esqueleto humano, com três botões ausentes. Ela ostenta um grande sorriso cheio de pequenos dentes afiados e é muito mais escuro na cor, quase incolor. <br><br> Os olhos de Nightmarionne têm pupilas brancas, semelhantes aos dos animatrônicos fantasmas do terceiro jogo, e brilham com uma misteriosa luz branca. Ela se comporta da mesma forma que Nightmare, atacando a partir da Cama, Armário, Corredor Esquerdo e Corredor Direito.",
}