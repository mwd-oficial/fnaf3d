// Five Nights at Freddy's World
/*
Adventure Freddy
Adventure Bonnie
Adventure Chica
Adventure Foxy
Adventure Toy Freddy
Adventure Toy Bonnie
Adventure Toy Chica
Adventure Mangle
Adventure Balloon Boy
Adventure JJ
Adventure Withered Freddy
Adventure Withered Bonnie
Adventure Withered Chica
Adventure Withered Foxy
Adventure Golden Freddy
Adventure Endo-01
Adventure Springtrap
Adventure Phantom Freddy
Adventure Phantom Chica
Adventure Phantom Foxy
Adventure Phantom Balloon Boy
Adventure Phantom Mangle
Adventure Phantom Puppet
Adventure Nightmare Freddy
Adventure Nightmare Bonnie
Adventure Nightmare Chica
Adventure Nightmare Foxy
Adventure Nightmare Fredbear
Adventure Nightmare
Adventure Jack-O-Bonnie
Adventure Jack-O-Chica
Adventure Nightmare Mangle
Adventure Nightmarionne
Adventure Nightmare Balloon Boy
Adventure Plushtrap
Adventure Nightmare Cupcake
Adventure Funtime Foxy
Adventure Lolbit
Adventure Ennard
Adventure Yenndo
Adventure Minireena
Adventure Bonnet
Adventure Electrobab
Adventure Circus Baby
Adventure Ballora
Adventure Bidybab
Adventure Minireena 2
Adventure Shadow Freddy
Adventure RWQFSFASXC
Adventure Fredbear
Adventure Spring Bonnie
Adventure Jack-O-Lantern
Adventure Coffee
Adventure Paperpals
Adventure Purpleguy
Adventure Shadow Bonnie
Adventure RXQ
Adventure Animdude
Adventure Scott Cawthon
Adventure Chipper
Adventure Security
Adventure Seagoon
Adventure Redbear
Adventure Tangle
Adventure White Rabbit
Adventure Tangle Kitten
Adventure Bouncer
Adventure Mad Endo
Adventure Porkpatch
Adventure Colossal
Adventure Snowcone
Adventure Browboy
Adventure Gold Endo
Adventure Blacktrap
Adventure Mechrab
Adventure Purplegeist
Adventure Boxbyte
Adventure Mendo
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fnaf 1
var adventureFreddy = {
    src: "assets/models/fnafw/fnaf1/adventure-freddy.glb",
    corFundo: "radial-gradient(#B0582D, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf1/adventure-freddy/",
    swiperDescricao: [
        "Botão de Adventure Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Freddy é um personagem em FNaF World. Ele é baseado no Freddy, o protagonista e antagonista principal da série Five Nights at Freddy's. Adventure Freddy é um urso animatrônico marrom com olhos azul escuro, sobrancelhas grossas e um nariz preto e redondo. Ele segura um microfone, semelhante ao personagem principal da série, Freddy Fazbear. <br><br> Além disso, Adventure Freddy tem ataques como \"Mic Toss\", \"Pizza Wheel\" e \"Birthday\". Curiosamente, se você clicar no nariz de Freddy na tela de início do jogo, ouvirá um som semelhante ao da série Five Nights at Freddy's.",
}

var adventureBonnie = {
    src: "assets/models/fnafw/fnaf1/adventure-bonnie.glb",
    corFundo: "radial-gradient(#3E57C9, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf1/adventure-bonnie/",
    swiperDescricao: [
        "Botão de Adventure Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 4m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Bonnie é um personagem em FNaF World. Ele é baseado no Bonnie, o co-protagonista da série Five Nights at Freddy's. Adventure Bonnie é um coelho animatrônico roxo com olhos vermelhos e uma guitarra elétrica. Ele é conhecido por seus ataques como \"Guitar Smash\", \"Bash Jam\" e \"Happy Jam\". Além disso, seu design é mais simplificado e \"fofo\" em comparação com o Bonnie original da série principal.",
};

var adventureChica = {
    src: "assets/models/fnafw/fnaf1/adventure-chica.glb",
    corFundo: "radial-gradient(#F4C92A, #6d590f)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf1/adventure-chica/",
    swiperDescricao: [
        "Botão de Adventure Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 2.5m 0.5m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
        modelViewer.style.filter = "saturate(1.5)"
    },
    descricao: "Adventure Chica é um personagem em FNaF World. Ela é baseada na Chica, a animatrônica coadjuvante da série Five Nights at Freddy's. Adventure Chica é um frango animatrônico amarelo com olhos azuis e um cupcake na mão. Seus ataques incluem \"Cupcake\", \"Waterhose\" e \"Rainy Day\". Além disso, ela é conhecida por sua personalidade alegre e amor por cupcakes.",
};

var adventureFoxy = {
    src: "assets/models/fnafw/fnaf1/adventure-foxy.glb",
    corFundo: "radial-gradient(#A9101F, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf1/adventure-foxy/",
    swiperDescricao: [
        "Botão de Adventure Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 250m",
    alvoCamera: "-2m 37.5m 12.5m",
    temAltura: true,
    alturaMaxima: 20,
    alturaMinima: -20,
    descricao: "Adventure Foxy é um personagem em FNaF World. Ele é baseado no Foxy, o animatrônico pirata da série Five Nights at Freddy's. Adventure Foxy é um raposo animatrônico vermelho com olhos amarelos e uma perna de madeira. Seus ataques incluem \"Hook\", \"Hot Cheese\" e \"Jumpscare\". Além disso, ele é conhecido por sua personalidade astuta e aparência desgastada.",
};

var adventureGoldenFreddy = {
    src: "assets/models/fnafw/fnaf1/adventure-golden-freddy.glb",
    corFundo: "radial-gradient(#C5A440, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf1/adventure-golden-freddy/",
    swiperDescricao: [
        "Botão de Adventure Golden Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 17.5m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3.25m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Golden Freddy é um personagem em FNaF World. Ele é baseado no Golden Freddy, o animatrônico misterioso da série Five Nights at Freddy's. Adventure Golden Freddy é um urso animatrônico dourado com olhos brilhantes e uma aparência enigmática. Seus ataques incluem \"Mystery Box\", \"Haunting\" e \"Regen Song\". Além disso, ele é conhecido por sua natureza imprevisível e por aparecer aleatoriamente durante o jogo.",
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fnaf 2
var adventureToyFreddy = {
    src: "assets/models/fnafw/fnaf2/adventure-toy-freddy.glb",
    corFundo: "radial-gradient(#8F3B28, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-toy-freddy/",
    swiperDescricao: [
        "Botão de Adventure Toy Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Toy Freddy é um personagem em FNaF World. Ele é baseado no Toy Freddy, a versão atualizada do Freddy da série Five Nights at Freddy's 2. Adventure Toy Freddy é um urso animatrônico marrom claro com olhos azuis e um microfone. Seus ataques incluem \"Mic Toss\", \"Birthday\" e \"Pizza Wheel 2\". Além disso, ele é conhecido por sua aparência mais moderna e brinquedos de pelúcia.",
};

var adventureToyBonnie = {
    src: "assets/models/fnafw/fnaf2/adventure-toy-bonnie.glb",
    corFundo: "radial-gradient(#56AED9, #162c37)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-toy-bonnie/",
    swiperDescricao: [
        "Botão de Adventure Toy Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 4m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Toy Bonnie é um personagem em FNaF World. Ele é baseado no Toy Bonnie, a versão atualizada do Bonnie da série Five Nights at Freddy's 2. Adventure Toy Bonnie é um coelho animatrônico azul claro com olhos vermelhos brilhantes e uma guitarra elétrica. Seus ataques incluem \"Guitar Smash\", \"Bash Jam\" e \"Happy Jam\". Além disso, ele é conhecido por sua aparência mais moderna e brinquedos de pelúcia.",
};

var adventureToyChica = {
    src: "assets/models/fnafw/fnaf2/adventure-toy-chica.glb",
    corFundo: "radial-gradient(#E9CA16, #5f5209)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-toy-chica/",
    swiperDescricao: [
        "Botão de Adventure Toy Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 2.5m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
        modelViewer.style.filter = "saturate(1.5)"
    },
    descricao: "Adventure Toy Chica é um personagem em FNaF World. Ela é baseada na Toy Chica, a versão atualizada da Chica da série Five Nights at Freddy's 2. Adventure Toy Chica é uma galinha animatrônica amarela com olhos azuis e uma bandeja de cupcakes. Seus ataques incluem \"Cupcake\", \"Waterhose\" e \"Rainy Day\". Além disso, ela é conhecida por sua aparência mais moderna e amor por cupcakes.",
};

var adventureMangle = {
    src: "assets/models/fnafw/fnaf2/adventure-mangle.glb",
    corFundo: "radial-gradient(#e5b4db, #EE67D1)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-mangle/",
    swiperDescricao: [
        "Botão de Adventure Mangle para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 250m",
    alvoCamera: "-25m 37.5m 25m",
    temAltura: true,
    alturaMaxima: 20,
    alturaMinima: -20,
    descricao: "Adventure Mangle é um personagem em FNaF World. Ela é baseada na Mangle, a animatrônica desmontada da série Five Nights at Freddy's 2. Adventure Mangle é um cão animatrônico rosa e branco com olhos azuis e muitas partes soltas. Seus ataques incluem \"Munchies\", \"Prize Ball\" e \"Cosmic Song\". Além disso, ela é conhecida por sua aparência caótica e movimentos erráticos.",
};

var adventureBalloonBoy = {
    src: "assets/models/fnafw/fnaf2/adventure-balloon-boy.glb",
    corFundo: "radial-gradient(#003196, #E2332D)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-balloon-boy/",
    swiperDescricao: [
        "Botão de Adventure Balloon Boy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 40m",
    orbitaCameraMinima: "0 0 35m",
    alvoCamera: "0m 7m 0.25m",
    temAltura: true,
    alturaMaxima: 3,
    alturaMinima: -3,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
    },
    descricao: "Adventure Balloon Boy é um personagem em FNaF World. Ele é baseado no Balloon Boy, o pequeno animatrônico com um balão da série Five Nights at Freddy's 2. Adventure Balloon Boy é um garoto de cabelos vermelhos com olhos azuis e um balão na mão. Seus ataques incluem \"Balloons\", \"Hot Cheese\" e \"Bash Jam\". Além disso, ele é conhecido por sua risada irritante e por ser um dos personagens mais controversos da série.",
};

var adventurePuppet = {
    src: "assets/models/fnafw/fnaf2/adventure-puppet.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-puppet/",
    swiperDescricao: [
        "Botão de Adventure Puppet para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 25m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 6m 0m",
    temAltura: true,
    alturaMaxima: 3,
    alturaMinima: -3,
    descricao: "Adventure Puppet (Marionette) é um personagem em FNaF World. Ela é baseada na Marionette, também conhecida como The Puppet, da série Five Nights at Freddy's 2. Adventure Puppet é uma marionete com uma aparência assustadora, com olhos brancos e uma boca costurada. Seus ataques incluem \"Gift Boxes\", \"Prize Ball\" e \"Mystery Box\". Além disso, ela é conhecida por ser um dos personagens mais misteriosos e importantes da série.",
};


var adventureWitheredFreddy = {
    src: "assets/models/fnafw/fnaf2/adventure-withered-freddy.glb",
    corFundo: "radial-gradient(#8D5C49, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-withered-freddy/",
    swiperDescricao: [
        "Botão de Adventure Withered Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Withered Freddy é um personagem em FNaF World. Ele é baseado no Withered Freddy, a versão deteriorada do Freddy da série Five Nights at Freddy's 2. Adventure Withered Freddy é um urso animatrônico marrom escuro com olhos vermelhos e uma aparência desgastada. Seus ataques incluem \"Mic Toss\", \"Pizza Wheel\" e \"Birthday\". Além disso, ele representa a fase mais antiga dos animatrônicos da série principal.",
};

var adventureWitheredBonnie = {
    src: "assets/models/fnafw/fnaf2/adventure-withered-bonnie.glb",
    corFundo: "radial-gradient(#515779, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-withered-bonnie/",
    swiperDescricao: [
        "Botão de Adventure Withered Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 5.5m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Withered Bonnie é um personagem em FNaF World. Ele é baseado no Withered Bonnie, a versão deteriorada do Bonnie da série Five Nights at Freddy's 2. Adventure Withered Bonnie é um coelho animatrônico roxo escuro com olhos vermelhos e uma aparência desgastada. Seus ataques incluem \"Guitar Smash\", \"Bash Jam\" e \"Happy Jam\". Além disso, ele representa a fase mais antiga dos animatrônicos da série principal.",
};

var adventureWitheredChica = {
    src: "assets/models/fnafw/fnaf2/adventure-withered-chica.glb",
    corFundo: "radial-gradient(#F5CA2F, #5f5209)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-withered-chica/",
    swiperDescricao: [
        "Botão de Adventure Withered Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0.5m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.75
        modelViewer.style.filter = "saturate(1.5)"
    },
    descricao: "Adventure Withered Chica é um personagem em FNaF World. Ela é baseada na Withered Chica, a versão deteriorada da Chica da série Five Nights at Freddy's 2. Adventure Withered Chica é uma galinha animatrônica amarela com olhos vermelhos e uma aparência desgastada. Seus ataques incluem \"Cupcake\", \"Waterhose\" e \"Rainy Day\". Além disso, ela representa a fase mais antiga dos animatrônicos da série principal.",
};

var adventureWitheredFoxy = {
    src: "assets/models/fnafw/fnaf2/adventure-withered-foxy.glb",
    corFundo: "radial-gradient(#872524, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-withered-foxy/",
    swiperDescricao: [
        "Botão de Adventure Withered Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m -0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Withered Foxy é um personagem em FNaF World. Ele é baseado no Withered Foxy, a versão deteriorada do Foxy da série Five Nights at Freddy's 2. Adventure Withered Foxy é um raposo animatrônico vermelho com olhos amarelos e uma aparência desgastada. Seus ataques incluem \"Hook\", \"Hot Cheese\" e \"Jumpscare\". Além disso, ele representa a fase mais antiga dos animatrônicos da série principal.",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fnaf 3
var adventurePhantomFreddy = {
    src: "assets/models/fnafw/fnaf3/adventure-phantom-freddy.glb",
    corFundo: "radial-gradient(#525D39, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-phantom-freddy/",
    swiperDescricao: [
        "Botão de Adventure Phantom Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Phantom Freddy é um personagem em FNaF World. Ele é baseado no Phantom Freddy, o animatrônico assombrado da série Five Nights at Freddy's 3. Adventure Phantom Freddy é um urso animatrônico desgastado com olhos brilhantes e uma aparência fantasmagórica. Seus ataques incluem \"Haunted\", \"Toxic Bite\" e \"Mystery Box\". Além disso, ele representa a forma espectral de Freddy após os eventos do terceiro jogo.",
};

var adventurePhantomChica = {
    src: "assets/models/fnafw/fnaf3/adventure-phantom-chica.glb",
    corFundo: "radial-gradient(#415443, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-phantom-chica/",
    swiperDescricao: [
        "Botão de Adventure Phantom Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m -1.5m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original) <br><br> Adventure Phantom Chica é um personagem em FNaF World. Ela é baseada na Phantom Chica, a animatrônica assombrada da série Five Nights at Freddy's 3. Adventure Phantom Chica é uma galinha animatrônica desgastada com olhos brilhantes e uma aparência fantasmagórica. Seus ataques incluem \"Haunted\", \"Toxic Bite\" e \"Waterhose\". Além disso, ela representa a forma espectral de Chica após os eventos do terceiro jogo.",
};

var adventurePhantomFoxy = {
    src: "assets/models/fnafw/fnaf3/adventure-phantom-foxy.glb",
    corFundo: "radial-gradient(#664840, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-phantom-foxy/",
    swiperDescricao: [
        "Botão de Adventure Phantom Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Phantom Foxy é um personagem em FNaF World. Ele é baseado no Phantom Foxy, o animatrônico assombrado da série Five Nights at Freddy's 3. Adventure Phantom Foxy é um raposo animatrônico desgastado com olhos brilhantes e uma aparência fantasmagórica. Seus ataques incluem \"Haunted\", \"Toxic Bite\" e \"Jumpscare\". Além disso, ele representa a forma espectral de Foxy após os eventos do terceiro jogo.",
};

var adventurePhantomMangle = {
    src: "assets/models/fnafw/fnaf2/adventure-mangle.glb",
    corFundo: "radial-gradient(#122209, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf2/adventure-mangle/",
    swiperDescricao: [
        "Botão de Adventure Phantom Mangle para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 200m",
    orbitaCameraMinima: "0 0 250m",
    alvoCamera: "-25m 37.5m 25m",
    temAltura: true,
    alturaMaxima: 20,
    alturaMinima: -20,
    temConfigEx: true,
    configEx: () => {
        modelViewer.exposure = 0.1
        modelViewer.style.mixBlendMode = "luminosity"
    },
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original) <br><br> Adventure Phantom Mangle é um personagem em FNaF World. Ela é baseada na Phantom Mangle, a versão assombrada da Mangle da série Five Nights at Freddy's 3. Adventure Phantom Mangle é um cão animatrônico rosa e branco com olhos brilhantes e muitas partes soltas. Seus ataques incluem \"Munchies\", \"Prize Ball\" e \"Cosmic Song\". Além disso, ela representa a forma espectral da Mangle após os eventos do terceiro jogo.",
};

var adventurePhantomBalloonBoy = {
    src: "assets/models/fnafw/fnaf3/adventure-phantom-balloon-boy.glb",
    corFundo: "radial-gradient(#637143, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-phantom-balloon-boy/",
    swiperDescricao: [
        "Botão de Adventure Phantom Balloon Boy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 40m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 7m 0.25m",
    temAltura: true,
    alturaMaxima: 4,
    alturaMinima: -4,
    descricao: "Adventure Phantom Balloon Boy é um personagem em FNaF World. Ele é baseado no Phantom Balloon Boy, a versão assombrada do Balloon Boy da série Five Nights at Freddy's 3. Adventure Phantom Balloon Boy é um garoto de cabelos vermelhos com olhos brilhantes e uma aparência fantasmagórica. Seus ataques incluem \"Balloons\", \"Hot Cheese\" e \"Bash Jam\". Além disso, ele representa a forma espectral do Balloon Boy após os eventos do terceiro jogo.",
};

var adventurePhantomPuppet = {
    src: "assets/models/fnafw/fnaf3/adventure-phantom-puppet.glb",
    corFundo: "radial-gradient(#3E4930, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-phantom-puppet/",
    swiperDescricao: [
        "Botão de Adventure Phantom Puppet para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 30m",
    orbitaCameraMinima: "0 0 20m",
    alvoCamera: "0m 6m 0m",
    temAltura: true,
    alturaMaxima: 4,
    alturaMinima: -4,
    descricao: "Adventure Phantom Puppet é um personagem em FNaF World. Ele é baseado no Phantom Puppet, a versão assombrada do Marionete da série Five Nights at Freddy's 3. Adventure Phantom Puppet é um fantoche com olhos brilhantes e uma aparência fantasmagórica. Seus ataques incluem \"Mystery Box\", \"Haunting\" e \"Regen Song\". Além disso, ele representa a forma espectral do Marionete após os eventos do terceiro jogo.",
};

var adventureSpringtrap = {
    src: "assets/models/fnafw/fnaf3/adventure-springtrap.glb",
    corFundo: "radial-gradient(#8E9340, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf3/adventure-springtrap/",
    swiperDescricao: [
        "Botão de Adventure Springtrap para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 6m",
    alvoCamera: "0.85m 1m 1.20m",
    temAltura: true,
    alturaMaxima: 0.5,
    alturaMinima: -0.5,
    descricao: "Adventure Springtrap é um personagem em FNaF World. Ele é baseado no Springtrap, o animatrônico assombrado da série Five Nights at Freddy's 3. Adventure Springtrap é um coelho animatrônico deteriorado com olhos vermelhos e uma aparência sinistra. Seus ataques incluem \"Toxic Bite\", \"Springlocks\" e \"Haunted\". Além disso, ele é conhecido por ser o resultado da fusão entre o animatrônico Spring Bonnie e o Purple Guy.",
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fnaf 4
var adventureNightmareFreddy = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-freddy.glb",
    corFundo: "radial-gradient(#9C624C, #000)",
    fnaf: "w",
    temCursor: true,
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-freddy/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Freddy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 17.5m",
    orbitaCameraMinima: "0 0 17.5m",
    alvoCamera: "0m -0.5m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original - faltam os freddles) <br><br> Adventure Nightmare Freddy é um personagem em FNaF World. Ele é baseado no Nightmare Freddy, o animatrônico aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare Freddy é um urso animatrônico marrom escuro com olhos brilhantes e garras afiadas. Seus ataques incluem \"Freddy's Microphone\", \"Pizza Wheel\" e \"Birthday\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventureNightmareBonnie = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-bonnie.glb",
    corFundo: "radial-gradient(#3C4C71, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-bonnie/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 20m",
    alvoCamera: "0m 4.5m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Nightmare Bonnie é um personagem em FNaF World. Ele é baseado no Nightmare Bonnie, o animatrônico aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare Bonnie é um coelho animatrônico roxo escuro com olhos brilhantes e garras afiadas. Seus ataques incluem \"Guitar Smash\", \"Bash Jam\" e \"Happy Jam\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventureNightmareChica = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-chica.glb",
    corFundo: "radial-gradient(#ECB256, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-chica/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 50m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 3m 0m",
    temAltura: true,
    alturaMaxima: 4,
    alturaMinima: -4,
    descricao: "Adventure Nightmare Chica é um personagem em FNaF World. Ela é baseada na Nightmare Chica, a animatrônica aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare Chica é uma galinha animatrônica amarela com olhos brilhantes e garras afiadas. Seus ataques incluem \"Cupcake\", \"Waterhose\" e \"Rainy Day\". Além disso, ela representa os pesadelos do protagonista do quarto jogo.",
};

var adventureNightmareFoxy = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-foxy.glb",
    corFundo: "radial-gradient(#A5413F, #000)",
    fnaf: "w",
    temCursor: true,
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-foxy/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 6m",
    orbitaCameraMinima: "0 0 7m",
    alvoCamera: "0.75m 0.4m -0.1m",
    temAltura: true,
    alturaMaxima: 0.75,
    alturaMinima: -0.75,
    mudaOrbitaCamera: true,
    orbitaCamera: "90deg 0 0",
    descricao: "Adventure Nightmare Foxy é um personagem em FNaF World. Ele é baseado no Nightmare Foxy, o animatrônico aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare Foxy é um raposo animatrônico vermelho com olhos brilhantes e garras afiadas. Seus ataques incluem \"Hook\", \"Hot Cheese\" e \"Jumpscare\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventureNightmareFredbear = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-fredbear.glb",
    corFundo: "radial-gradient(#EDC168, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-fredbear/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Fredbear para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3.75m -0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Nightmare Fredbear é um personagem em FNaF World. Ele é baseado no Nightmare Fredbear, o animatrônico aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare Fredbear é um urso animatrônico dourado com olhos brilhantes e garras afiadas. Seus ataques incluem \"Fredbear's Microphone\", \"Pizza Wheel\" e \"Birthday\". Além disso, ele representa os pesadelos do protagonista do quarto jogo e é associado à figura do Golden Freddy.",
};

var adventureNightmare = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare.glb",
    corFundo: "radial-gradient(#292929, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare/",
    swiperDescricao: [
        "Botão de Adventure Nightmare para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3.75m -0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Nightmare é um personagem em FNaF World. Ele é baseado no Nightmare, o animatrônico aterrorizante da série Five Nights at Freddy's 4. Adventure Nightmare é um urso animatrônico marrom escuro com olhos brilhantes e garras afiadas. Seus ataques incluem \"Freddy's Microphone\", \"Pizza Wheel\" e \"Birthday\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventureJackOBonnie = {
    src: "assets/models/fnafw/fnaf4/adventure-jack-o-bonnie.glb",
    corFundo: "radial-gradient(#90553F, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-jack-o-bonnie/",
    swiperDescricao: [
        "Botão de Adventure Jack-O-Bonnie para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 20m",
    alvoCamera: "0m 4.5m -0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original) <br><br> Adventure Jack-O-Bonnie é um personagem em FNaF World. Ele é baseado no Jack-O-Bonnie, a versão temática de Halloween do Bonnie da série Five Nights at Freddy's 4. Adventure Jack-O-Bonnie é um coelho animatrônico laranja com olhos brilhantes e uma abóbora na mão. Seus ataques incluem \"Guitar Smash\", \"Bash Jam\" e \"Happy Jam\". Além disso, ele representa a versão festiva do Bonnie.",
};

var adventureJackOChica = {
    src: "assets/models/fnafw/fnaf4/adventure-jack-o-chica.glb",
    corFundo: "radial-gradient(#C07135, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-jack-o-chica/",
    swiperDescricao: [
        "Botão de Adventure Jack-O-Chica para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 50m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 3m 0m",
    temAltura: true,
    alturaMaxima: 4,
    alturaMinima: -4,
    descricao: "(Este modelo 3D não é exatamente igual ao animatronic original) <br><br> Adventure Jack-O-Chica é um personagem em FNaF World. Ela é baseada na Jack-O-Chica, a versão temática de Halloween da Chica da série Five Nights at Freddy's 4. Adventure Jack-O-Chica é uma galinha animatrônica laranja com olhos brilhantes e uma abóbora na mão. Seus ataques incluem \"Cupcake\", \"Waterhose\" e \"Rainy Day\". Além disso, ela representa a versão festiva da Chica.",
};

var adventureNightmareBalloonBoy = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmare-balloon-boy.glb",
    corFundo: "radial-gradient(#C72C32, #552B74)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmare-balloon-boy/",
    swiperDescricao: [
        "Botão de Adventure Nightmare Balloon Boy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 35m",
    orbitaCameraMinima: "0 0 40m",
    alvoCamera: "0m 5.5m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Nightmare Balloon Boy é um personagem em FNaF World. Ele é baseado no Nightmare Balloon Boy, a versão aterrorizante do Balloon Boy da série Five Nights at Freddy's 4. Adventure Nightmare Balloon Boy é um garoto de cabelos vermelhos com olhos brilhantes e garras afiadas. Seus ataques incluem \"Balloons\", \"Hot Cheese\" e \"Bash Jam\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventurePlushtrap = {
    src: "assets/models/fnafw/fnaf4/adventure-plushtrap.glb",
    corFundo: "radial-gradient(#91883F, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-plushtrap/",
    swiperDescricao: [
        "Botão de Adventure Plushtrap para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 20m",
    orbitaCameraMinima: "0 0 20m",
    alvoCamera: "0m 6m 0m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Plushtrap é um personagem em FNaF World. Ele é baseado no Plushtrap, a versão miniatura do Springtrap da série Five Nights at Freddy's 4. Adventure Plushtrap é um coelho animatrônico marrom com olhos brilhantes e uma aparência fofa. Seus ataques incluem \"Toxic Bite\", \"Springlocks\" e \"Haunted\". Além disso, ele representa a versão de pelúcia do Springtrap.",
};

var adventureNightmarionne = {
    src: "assets/models/fnafw/fnaf4/adventure-nightmarionne.glb",
    corFundo: "radial-gradient(#fff, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/fnaf4/adventure-nightmarionne/",
    swiperDescricao: [
        "Botão de Adventure Nightmarionne para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 300m",
    orbitaCameraMinima: "0 0 300m",
    alvoCamera: "0m 217.5m 5m",
    temAltura: true,
    alturaMaxima: 30,
    alturaMinima: -30,
    descricao: "Adventure Nightmarionne é um personagem em FNaF World. Ele é baseado na Nightmare Marionette, a versão aterrorizante do Marionete da série Five Nights at Freddy's 4. Adventure Nightmarionne é um fantoche com olhos brilhantes e garras afiadas. Seus ataques incluem \"Mystery Box\", \"Haunting\" e \"Regen Song\". Além disso, ele representa os pesadelos do protagonista do quarto jogo.",
};

var adventureFuntimeFoxy = {
    src: "assets/models/fnafw/adventure-funtime-foxy.glb",
    corFundo: "radial-gradient(#C73B7C, #000)",
    fnaf: "w",
    srcImg: "assets/images/fnafw/adventure-funtime-foxy/",
    swiperDescricao: [
        "Botão de Adventure Funtime Foxy para seu modelo 3D",
    ],
    orbitaCameraMaxima: "0 0 15m",
    orbitaCameraMinima: "0 0 15m",
    alvoCamera: "0m 3m 0.25m",
    temAltura: true,
    alturaMaxima: 2,
    alturaMinima: -2,
    descricao: "Adventure Funtime Foxy é uma raposa animatrônica que se assemelha a um animatrônico \"Toy\", com bochechas coradas. Ele tem três tufos de pelo acima da cabeça e usa uma grande gravata borboleta vermelha. <br><br> Embora seja baseado no Funtime Foxy de Five Nights at Freddy's: Sister Location, há algumas diferenças de design entre os dois. Em FNaF World, Adventure Funtime Foxy começa com 305 pontos de vida no nível 1 e ganha 5 pontos de vida a cada nível, chegando a 505 pontos de vida no nível 40. <br><br> Suas habilidades incluem o ataque rosa \"Cosmic Song\", que cura mais do que o Happy Jam regular, o ataque branco que invoca estrelas para atacar todos os inimigos e o ataque amarelo \"Gift Boxes\", que concede uma vida extra à equipe. Adventure Funtime Foxy é um personagem muito útil, capaz de causar alto dano, curar drasticamente o grupo e reviver membros caídos da equipe.",
};



function animacaoWorldf() {
    targetWorldInicial = modelViewer.getCameraTarget()
    animacaoWorld = setInterval(() => {
        targetWorld = modelViewer.getCameraTarget()
        if (verificacao) {
            verificacao = false
            targetWorld.y += targetWorldInicial.y / 24
        } else {
            verificacao = true
            targetWorld.y -= targetWorldInicial.y / 24
        }
        modelViewer.cameraTarget = `${targetWorldInicial.x}m ${targetWorld.y}m ${targetWorldInicial.z}m`
    }, 250);
}
