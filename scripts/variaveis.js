var telaCarregamentoSite = document.querySelector("#tela-carregamento-site")
var cursorImg = document.querySelector("#cursor-img");
var pointers = document.querySelectorAll(".pointers")
var alertaDiv = document.querySelector("#alerta-div")
var logomwdEl = document.querySelector("#logomwd")
var telaViraPortrait = document.querySelector("#tela-vira-portrait")
var telaViraLandscape = document.querySelector("#tela-vira-landscape")
var irTopoDiv = document.querySelector("#ir-topo-div")

// Ar
var telaAr = document.querySelector("#tela-ar")
var arBtn = document.querySelector("#ar-btn")
var carregamentoAR = document.querySelector("#carregamento-ar")
var fecharAr = document.querySelector("#fechar-ar")
var ar = false

var irArBtn = document.querySelector("#ir-ar-btn")
var url, intervaloModeloPronto
var modeloPronto = false

// Login, banco de dados e relacionados

const API_URL = "https://fnaf3d.vercel.app";
//const API_URL = "http://localhost:3000";

var userDiv = document.querySelector("#user-div")
var myUserBtn = document.querySelector("#my-user-btn")
var myUserBtnImg = document.querySelector("#my-user-btn img")

var telaDadosUser = document.querySelector("#tela-dados-user")
var telaConfigUser = document.querySelector("#tela-config-user")
var menuNaoLogado = document.querySelector("#menu-nao-logado")
var menuLogado = document.querySelector("#menu-logado")
var dadosUserImg = document.querySelector("#dados-user-img > img")
var dadosUserUsername = document.querySelector("#dados-user-username")
var dadosUserFavoritos = document.querySelector("#dados-user-favoritos")
var dadosUserLikes = document.querySelector("#dados-user-likes")
var dadosUserDislikes = document.querySelector("#dados-user-dislikes")
var dadosUserMoedas = document.querySelector("#dados-user-moedas")
var dadosUserVistos = document.querySelector("#dados-user-vistos")

var listaUsers = document.querySelector("#lista-users")
var verMais = document.querySelector("#ver-mais")
var vendoMais = false

var imagemDiv = document.querySelector("#imagem-div")
var usernameFieldset = document.querySelector("#username-fieldset")
var excluirBtn = document.querySelector("#excluir-btn")
var linkConta = document.querySelector("#link-conta")
var entrar = false, cadastrar = false, editar = false, logado = false;

var carregamentoImgDados = document.querySelector("#carregamento-img-dados")
var carregamentoImgConfig = document.querySelector("#carregamento-img-config")
var carregamentoForm = document.querySelector("#carregamento-form")
var avatarBtn = document.querySelector("#avatar-btn")
var imagemCarregada = document.querySelector("#label-imagem > img");
var urlImagem, semFoto = true, peloLocalStorage = false

var imgAnimatronic = document.querySelectorAll(".img-animatronic")

var formulario = document.querySelector("form")
var inputPreencher = document.querySelector("#input-preencher");
var inputImagem = document.querySelector("#input-imagem");
var inputUsername = document.querySelector("#input-username");
var inputEmail = document.querySelector("#input-email");
var inputPassword = document.querySelector("#input-password");
var olho = document.querySelector("#olho")
var focusInput = false

var dadosUser = limparDadosUser()

function limparDadosUser() {
    return {
        id: "",
        username: "",
        email: localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : "",
        password: localStorage.getItem("password") ? JSON.parse(localStorage.getItem("password")) : "",
        moedas3d: 0,
        favoritos: [],
        likes: [],
        dislikes: [],
        vistos: [],
        comprados: [],
        encontrados: [],
        douradosEncontrados: [],
        botoesDourados: [],
        ucnDesbloqueado: false,
        fnaf1: {
            noite: 0,
        },
        fnaf2: {
            noite: 0,
        },
        fnaf3: {
            noite: 0,
        },
        fnaf4: {
            noite: 0,
        },
        fnafsl: {
            noite: 0,
        },
        imagemId: "",
        semFoto: true,
        preencher: false,
    }
}

var favoritarBtn = document.querySelector("#favoritar-btn")
var likes = {
    btn: document.querySelector("#likes-btn"),
    qtdeEl: document.querySelector("#likes-el"),
}
var dislikes = {
    btn: document.querySelector("#dislikes-btn"),
    qtdeEl: document.querySelector("#dislikes-el"),
}
var nomeDescricaoModelo = document.querySelector("#nome-descricao-modelo")
var nomeDescricaoModeloCel = document.querySelector("#nome-descricao-modelo-cel")
var imgDescricaoModelo = document.querySelector("#img-descricao-modelo")

var iconRounded = "material-symbols-rounded"
var iconOutlined = "material-symbols-outlined"


// Tela inicial e associados
var siteCarregado = true, isCelular = false
var progressBar = document.querySelector("#progress-bar")
var progressoInterval
var conteudo = document.querySelector("#conteudo")
var telaCheia = document.querySelector("#tela-cheia")
var aviso = document.querySelector("#aviso")
var continuarAviso = document.querySelector("#continuar-aviso")
var pularJumpscare = document.querySelector("#pular-jumpscare")
var divLogoBtn = document.querySelector("#div-logo-btn")
var telaInicial = document.querySelector("#tela-inicial")
var jumpscareInicialVideo = document.querySelector("#jumpscare-inicial-video")
var telaInicialVideo = document.querySelector("#tela-inicial-video")
var fecharAbaCel = document.querySelector("#fechar-aba-cel")

var avisoProgresso = document.querySelector("#aviso-progresso")
var telaCarregamento = document.querySelector("#tela-carregamento")
var voltarCarregamento = document.querySelector("#voltar-carregamento")
var dicaP = document.querySelector("#dica-p")
var sortDica = 0, newSortDica
var dicas = [
    "Se o modelo 3D demorar muito para carregar, clique em voltar e tente novamente.",
    "Este site possui mais de 150 modelos 3D de animatronics!",
    "MWD é um grande fã do universo de Fnaf!",
    "O que são aqueles modelos Extras Dourados? Será que existe um botão dourado para desbloqueá-los?",
    "Dica: Procure por moedas 3D ao redor dos modelos. Juntando uma certa quantia você consegue desbloquear os modelos Extras!",
    "Dica: Sempre leia as descrições dos modelos. Em alguns sorteamos uma surpresa que você pode encontrar por lá!",
    "Dica: Visite a aba \"Interagindo com o Modelo 3D\". Existem efeitos bem legais para aplicar no modelo!",
    "No celular o botão para ativar o modo AR fica disponível. Vai lá conferir!"
]
var modelViewer

var telaModelosAudio, sort = -1, newSort
var telaModelosAudios = document.querySelectorAll(".tela-modelos-audios")
var telaModelosFfps = document.querySelector("#tela-modelos-ffps")
var telaModelosSb = document.querySelector("#tela-modelos-sb")
var telaModelosSbr = document.querySelector("#tela-modelos-sbr")
var telaModelosSotm = document.querySelector("#tela-modelos-sotm")
var telaModelosW = document.querySelector("#tela-modelos-w")



// Modelos e associados
var progressBarModelo = document.querySelector("#progress-bar-modelo")
var progressoModeloInterval
var nomeModelo = document.querySelector("#nome-modelo")
var btnMenu = document.querySelector("#btn-menu")
var divMenu = document.querySelector("#div-menu")
var btnHome = document.querySelector("#btn-home")
var menuJogos = document.querySelector("#menu-jogos")
var jogosBtn = document.querySelector("#jogos-btn")
var imgJogos = document.querySelector("#img-jogos")
var menuJogosImg = document.querySelectorAll("#img-jogos img")
var srcJogos = [
    "jogos/fnaf1/fnaf1.html",
    "jogos/fnaf2/fnaf2.html",
    "jogos/fnaf3/fnaf3.html",
    "jogos/fnaf4/fnaf4.html",
    "jogos/fnafsl/fnafsl.html",
    "https://github.com/mwd-oficial/fnaf3d/releases/download/v1.0/fnafffps.exe",
    "https://store.steampowered.com/app/747660/Five_Nights_at_Freddys_Security_Breach/",
    "https://store.steampowered.com/app/1924720/Five_Nights_at_Freddys_Security_Breach__Ruin/",
    "https://store.steampowered.com/app/2215390/Five_Nights_at_Freddys_Secret_of_the_Mimic/",
    "https://github.com/mwd-oficial/fnaf3d/releases/download/v1.0/fnafw.exe",
]

var menuContent = document.querySelector("#menu-content")
var menuIcon = document.querySelector("#btn-menu span")
var btnModelos = document.querySelectorAll(".btn-modelos")
var btnModelosImg = document.querySelectorAll(".btn-modelos img")
var modelosDiv = document.querySelectorAll(".modelos-div")
var modelosDivP = document.querySelectorAll(".modelos-div > p")
var primeiraVezScroll = true
var iModeloVar, iModeloAntigo = 0

var pesquisaNaoVistoDiv = document.querySelector("#pesquisa-nao-visto-div")

var maiorLength = 0
var maiorHeight = 0
var pesquisaDiv = document.querySelector("#pesquisa-div")
var pesquisaInput = document.querySelector("#pesquisa-input")
var pesquisaBtn = document.querySelector("#pesquisa-btn")
var nenhumResul = document.querySelector("#nenhum-resul")

var aindaNaoVistoDiv = document.querySelector("#ainda-nao-visto-div")
var aindaNaoVistoInput = document.querySelector("#ainda-nao-visto-input")
var vistosArray = []



// Tutorial e descrição
var tutorialDescricaoContent = document.querySelector("#tutorial-descricao-content")
var tutorialDescricaoDiv = document.querySelector("#tutorial-descricao-div")
var tutorialDescricaoBtn = document.querySelector("#tutorial-descricao-btn")
var descricaoDivWrapper = document.querySelector("#descricao-div-wrapper")
var tutorialDivWrapper = document.querySelector("#tutorial-div-wrapper")
var tutorialIcon = document.querySelector("#tutorial-descricao-btn span")
var descricaoModelo = document.querySelector("#descricao-modelo")
var imagemCards = document.querySelector("#imagem-cards")
var jumpscareVideo = document.querySelector("#jumpscare-video")
var h3Jumpscare = document.querySelector("#h3-jumpscare")

var tutorialBotoesDiv = document.querySelector("#tutorial-botoes-div")
var tutorialBotoesContent = document.querySelector("#tutorial-botoes-content")
var tutorialBotoesContentP = document.querySelector("#tutorial-botoes-content p")
var pularTutorial = document.querySelector("#pular-tutorial")
var passoTutorial = 1
var tutorialVisto = false

// Swiper js
var swiperDiv = document.querySelector("#swiper-div")
var swiperEl = document.querySelector(".swiper")

var swiperSlide
var swiperDescricao
var swiperImg
var novoSlide, novaImg, novaDescricao, estadoBotoes = true

var imgAlternativaDiv = document.querySelector("#img-alternativa-div")
var imgAlternativa = document.querySelector("#img-alternativa")
var descricaoAlternativa = document.querySelector("#descricao-alternativa")
var setaVoltar = document.querySelector("#seta-voltar")
var setaAvancar = document.querySelector("#seta-avancar")
var iAlternativo = 0

var pagination = document.querySelector(".swiper-pagination")
var buttonPrev = document.querySelector(".swiper-button-prev")
var buttonNext = document.querySelector(".swiper-button-next")
var buttonDisabled = document.querySelector(".swiper-button-disabled")

var mouseSobreBotao = false
var slideAtual = 0


// Rotação e efeitos do tutorial
var rotacaoInput = document.querySelector("#rotacao-input")
var velocidadeInput = document.querySelector("#velocidade-input")
var pixelInput = document.querySelector("#pixel-input")
var glitchInput = document.querySelector("#glitch-input")

var outlineInput = document.querySelector("#outline-input")
var intensidadeInput = document.querySelector("#intensidade-input")
var suavizacaoInput = document.querySelector("#suavizacao-input")
var corInput = document.querySelector("#cor-input")

var effectComposer
var pixelateEffect, glitchEffect, outlineEffect, bloomEffect





// Variáveis de animações
var animacoesContainer = document.querySelector("#animacoes-container")
var animacoesDiv = document.querySelector("#animacoes-div")
var animacoesH3 = document.querySelector("#animacoes-container h3")
var h3SetaAnimacoes = document.querySelector("#h3-seta-animacoes")
var animacoesRangeDiv = document.querySelector("#animacoes-range-div")
var animacoesRange = document.querySelector("#animacoes-range")
var tempoAtualAnimacoes = document.querySelector("#tempo-atual-animacoes")
var tempoTotalAnimacoes = document.querySelector("#tempo-total-animacoes")
var iconeAnimacoes = document.querySelector("#icone-animacoes")
var semAnimacoes = document.querySelector("#sem-animacoes")
var animacoesKeys, animacoesBtn, intervaloAnimacao, animacoesAberto = false


// Variáveis de áudio
var audiosContainer = document.querySelector("#audios-container")
var audiosDiv = document.querySelector("#audios-div")
var audiosH3 = document.querySelector("#audios-container h3")
var h3SetaAudios = document.querySelector("#h3-seta-audios")
var audiosBtnPRange = document.querySelectorAll(".audios-btn-p-range")
var audiosRange = document.querySelectorAll(".audios-range")
var audiosBtnP = document.querySelectorAll(".audios-btn-p")
var audiosBtnPP = document.querySelectorAll(".audios-btn-p p")
var tempoAtual = document.querySelectorAll(".tempo-atual")
var tempoTotal = document.querySelectorAll(".tempo-total")
var iconeAudios = document.querySelectorAll(".icone-audios")
var semAudios = document.querySelector("#sem-audios")
var audiosKeys, audiosAberto = false
var audioModelo = document.querySelector("#audio-modelo")

var imagemGeral = document.querySelectorAll("img")
var audioGeral = document.querySelectorAll("audio")
var videoGeral = document.querySelectorAll("video")
var audiosTocando = []
var videosRodando = []
var midiaPausada = false



// Fnaf info
var fnafInfoImgDiv = document.querySelector("#fnaf-info-img-div")
var nomeFnafInfo = document.querySelector("#nome-fnaf-info")
var nomeFnaf = document.querySelectorAll(".nome-fnaf")
var textoFnafInfo = document.querySelector("#texto-fnaf-info")
var fnafImg = document.querySelector("#fnaf-img")
var iNomeFnaf
var texto = document.querySelector("#texto")
var trailer = document.querySelector("#trailer")
var jumpscareDivVideo = document.querySelector("#jumpscare-div-video")
var divVideo = document.querySelectorAll(".div-video")
var videosUsuario = document.querySelectorAll(".div-video video")
var playPause = document.querySelectorAll(".play-pause")
var playPauseIcon = document.querySelectorAll(".play-pause > span")
videosUsuario.forEach((video) => video.volume = 0.5)


var fnaf1Info = "<p class='ajustar-font-size-info'>Clique no botão e jogue minha versão de Five Nights at Freddy's, que eu mesmo desenvolvi, só que com os modelos 3D.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's (FNaF) é uma franquia de mídia criada por Scott Cawthon. O primeiro jogo foi lançado em 8 de agosto de 2014 e se tornou um sucesso mundial. A história se passa na Pizzaria Freddy Fazbear, onde o jogador assume o papel de um vigia noturno chamado Mike Schmidt. Após desaparecimentos misteriosos e homicídios de crianças, a pizzaria é reaberta, e Mike deve sobreviver a cinco noites seguidas enquanto enfrenta animatrônicos possuídos. O objetivo é evitar ser pego e morto pelos animatrônicos durante o turno noturno.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Bem-vindo ao seu novo trabalho na temporada de verão no Freddy Fazbear's Pizza, onde adultos e crianças encontram comida e diversão sem fim! A atração principal é Freddy Fazbear, claro; e seus dois amigos. Eles são robôs animados programados para agradar o público! Entretanto, o comportamento dos robôs durante a noite se tornou de certo modo imprevisível e sairia muito mais barato contratar você como segurança do que consertá-los.</p><p class='ajustar-font-size-info'>Do seu pequeno escritório você deve monitorar as câmeras de segurança com muita atenção. Você tem uma quantidade muito limitada de eletricidade que poderá ser usada a cada noite (cortes nos gastos corporativos, você sabe né). Isso que significa que se você ficar sem eletricidade para aquela noite - nada de portas de segurança nem luzes! Se alguma coisa estiver errada - por exemplo se Freddy ou seus amigos não estiverem nos seus lugares, você deve encontrá-los pelos monitores e se proteger, caso necessário!</p><p class='ajustar-font-size-info'>Você sobreviveria por cinco noites na Pizzaria Freddy Fazbear?</p>"

var fnaf2Info = "<p class='ajustar-font-size-info'>Clique no botão e jogue minha versão de Five Nights at Freddy's 2, que eu mesmo desenvolvi, só que com os modelos 3D.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's 2 (FNaF 2) é a sequência da franquia de mídia criada por Scott Cawthon. O jogo foi lançado em 11 de novembro de 2014 e rapidamente ganhou popularidade. A história se passa na 'nova e improvisada' Pizzaria Freddy Fazbear, onde o jogador assume o papel de um novo guarda de segurança chamado Jeremy Fitzgerald. Após os eventos misteriosos do primeiro jogo, a pizzaria é reaberta com novos animatrônicos, que são amigáveis com as crianças durante o dia, mas à noite, eles andam livremente pelos corredores da pizzaria. Jeremy deve sobreviver a cinco noites seguidas enquanto enfrenta esses animatrônicos.</p><p class='ajustar-font-size-info'>Existem seis novos animatrônicos, além das versões degradadas dos cinco originais do primeiro jogo, totalizando onze antagonistas. A mecânica de sobrevivência do jogo difere do primeiro, com a remoção de portas e a adição da Máscara de Freddy Fazbear e da Lanterna. O objetivo de Jeremy é monitorar as câmeras e garantir que nada dê errado depois da hora do fechamento. Se os animatrônicos entrarem acidentalmente em seu escritório, Jeremy deve usar a cabeça do Freddy Fazbear vazia para enganá-los e evitar ser pego e morto.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Bem-vindo de volta à nova e otimizada Freddy Fazbear's Pizza!</p><p class='ajustar-font-size-info'>No Five Nights at Freddy's 2, os animatrônicos velhos e obsoletos recebem um novo elenco de personagens. Eles são amigos das crianças, foram atualizados com a tecnologia de reconhecimento facial mais recente, estão vinculados às bases de dados locais de criminosos e prometem fazer um show seguro e divertido para crianças e adultos!</p><p class='ajustar-font-size-info'>O que poderia dar errado?</p><p class='ajustar-font-size-info'>Como novo segurança noturno, seu trabalho é monitorar as câmeras e se certificar que nada dê errado após o expediente. O segurança anterior reclamou que os personagens estavam tentando entrar no escritório (desde então, ele mudou para o turno diurno). Para deixar seu trabalho mais fácil, deixamos uma cabeça de Freddy Fazbear vazia para você, assim, caso entrem no escritório por acidente, os animatrônicos podem não te reconhecer e te deixarão em paz.</p><p class='ajustar-font-size-info'>Como sempre, a Fazbear Entertainment não se responsabiliza em caso de morte ou desmembramento.</p>"

var fnaf3Info = "<p class='ajustar-font-size-info'>Clique no botão e jogue minha versão de Five Nights at Freddy's 3, que eu mesmo desenvolvi, só que com os modelos 3D.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's 3 (FNaF 3) é a terceira entrada na franquia de mídia criada por Scott Cawthon. O jogo foi lançado em 2 de março de 2015. O jogador assume o papel de um guarda de segurança em uma atração de terror que faz referência aos acontecimentos ocorridos na pizzaria. O objetivo é sobreviver a cinco noites enquanto enfrenta um único animatrônico real, Springtrap, além de vários 'animatrônicos fantasmas' que não podem prejudicar o jogador diretamente, mas podem obstruir seus esforços para evitar Springtrap.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Trinta anos após a Freddy Fazbear's Pizza fechar as portas, os eventos que aconteceram lá se tornaram nada mais que rumores e memórias de infância, mas os donos da 'Fazbear's Fright: A Atração de Horror' estão determinados a ressuscitar a lenda e tornar a experiência mais autêntica o possível para os clientes, indo às últimas consequências para encontrar qualquer coisa que tenha sobrevivido a décadas de descuido e decadência.</p><p class='ajustar-font-size-info'>No começo havia apenas cascos vazios, uma mão, um gancho, uma velha boneca de prato de papel, até que uma descoberta incrível foi feita...</p><p class='ajustar-font-size-info'>A atração agora tem um animatrônico.</p>"

var fnaf4Info = "<p class='ajustar-font-size-info'>Clique no botão e jogue minha versão de Five Nights at Freddy's 4, que eu mesmo desenvolvi, só que com os modelos 3D.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's 4 (FNaF 4) é a quarta entrada na franquia de mídia criada por Scott Cawthon. O jogo foi lançado em 23 de julho de 2015. A história se passa em uma casa, onde o jogador assume o papel de uma criança assustada. Diferente dos jogos anteriores, que se passavam em pizzarias, o cenário de FNaF 4 é o quarto de um garotinho. Durante o dia, ele brinca com seus brinquedos e à noite, pesadelos terríveis começam.</p><p class='ajustar-font-size-info'>O jogador deve sobreviver a cinco noites enquanto enfrenta versões pesadelo dos animatrônicos originais. O objetivo é sobreviver das 12:00 horas da noite até às 06:00 horas da manhã. O jogador deve verificar as portas, o armário e a cama, usando a lanterna para ver se algum animatrônico está se aproximando. Se um animatrônico estiver muito próximo, o jogador deve fechar a porta até que o perigo passe. O som é um elemento crucial neste jogo, pois os ruídos sutis podem indicar a aproximação dos animatrônicos. Five Nights at Freddy's 4 introduziu uma nova mecânica de jogo, onde o jogador deve ouvir atentamente para sobreviver, tornando a experiência ainda mais aterrorizante.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>No capítulo mais recente da história original de Five Nights at Freddy's, você deve mais uma vez se defender de Freddy Fazbear, Chica, Bonnie, Foxy e de outras coisas bem piores que espreitam na escuridão. Jogando como uma criança cujo o papel ainda é desconhecido, você deve se proteger até às 6 da manhã observando as portas, assim como evitando criaturas indesejadas que possam aparecer no seu armário ou na cama, atrás de você.</p><p class='ajustar-font-size-info'>Você só tem uma lanterna com a qual se proteger. Ela é capaz de espantar coisas que possam estar se arrastando na outra ponta dos corredores, mas tome cuidado, e escute. Caso algo tenha se aproximado demais, apontar a sua lanterna para os olhos desta coisa decretará o seu fim.</p>"

var fnafslInfo = "<p class='ajustar-font-size-info'>Clique no botão e jogue minha versão de Five Nights at Freddy's: Sister Location, que eu mesmo desenvolvi, só que com os modelos 3D.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's: Sister Location (FNaF SL) é a quinta entrada na franquia de mídia criada por Scott Cawthon. O jogo foi lançado em 7 de outubro de 2016. A história se passa na 'Circus Baby Pizza World', onde o jogador assume o papel de um técnico noturno. Após os eventos dos jogos anteriores, a Circus Baby Pizza World é inaugurada com novos animatrônicos, que são amigáveis com as crianças durante o dia, mas à noite, eles se movem livremente pelos corredores da pizzaria.</p><p class='ajustar-font-size-info'>O jogo se distingue das mecânicas e narrativas dos jogos anteriores da série, oferecendo ao jogador acesso a qualquer área do jogo, cada uma com seu próprio objetivo que o jogador deve realizar. Ao longo do jogo, o jogador interage com um novo elenco de personagens animatrônicos, agora liderados pela novata Circus Baby. O objetivo do jogador é passar de sala em sala, a fim de cumprir uma série de objetivos que mudam durante cada uma das cinco noites. Por exemplo, a segunda noite exige que o jogador passe por um auditório escuro e reinicie um grupo de disjuntores, enquanto que para a quarta noite, o jogador é colocado dentro de um traje e deve manter suas molas fechadas enquanto sacode as Minireenas que escalam sobre o jogador.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Bem-vindos ao Pizza World da Circus Baby, onde a diversão e a interatividade em família vão além de tudo o que você já viu naquelas *outras* pizzarias! Com animadores animatrônicos de última geração que vão deixar suas crianças de cabelo em pé, além de um buffet personalizado de pizzas, nenhuma festa está completa sem a Circus Baby e sua trupe!</p><p class='ajustar-font-size-info'>Contratando: Técnico/a para a madrugada. Precisa gostar de espaços apertados e se sentir confortável ao redor de maquinário em funcionamento. Não assumimos responsabilidade por morte ou desmembramento.</p>"

var fnafffpsInfo = "<p class='ajustar-font-size-info'>Instale e jogue o Five Nights at Freddy's: Freddy Fazbear's Pizzeria Simulator original de forma gratuita e totalmente livre de vírus e malware. Este jogo foi disponibilizado diretamente no site Game Jolt pelo próprio Scott Cawthon. Ao clicar no botão de download, você baixará automaticamente o arquivo fnafffps.exe</p><p class='ajustar-font-size-info'>Five Nights at Freddy's: Pizzeria Simulator (FNaF FFPS) é a sexta entrada na franquia de mídia criada por Scott Cawthon. O jogo foi lançado em 4 de dezembro de 2017. A história se passa em uma pizzaria, onde o jogador assume o papel de um gerente. Após os eventos dos jogos anteriores, o jogador agora é o proprietário de uma pizzaria. Durante o dia, o jogador deve cuidar dos pedidos dos clientes, gerenciar os estoques e garantir que tudo funcione sem problemas. No entanto, à noite, as coisas ficam aterrorizantes.</p><p class='ajustar-font-size-info'>O jogo combina a simulação de uma pizzaria com um jogo de sobrevivência de horror. O jogador deve se sentar em um escritório até o horário de fechamento para se defender dos animatrônicos recuperados que se escondem dentro enquanto terminam suas tarefas. Se o jogador não conseguir manter a pizzaria segura, pode ser processado e possivelmente correr o risco de falência se for processado muitas vezes. O verdadeiro jogo começa depois que o jogador termina de montar sua pizzaria.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Possível proprietário de um restaurante franqueado Freddy Fazbear's Pizza, nós queremos você!</p><p class='ajustar-font-size-info'>O que começa como simples diversão de jogar pizza se transforma em algo muito, muito superior. Atravesse o jogo de fliperama todo defeituoso e descubra que você está em sua própria Freddy Fazbear's Pizzeria!</p><p class='ajustar-font-size-info'>Pesquise nossos catálogos e compre suas primeiras atrações e animatrônicos, personalize suas decorações e, acima de tudo, certifique-se de que todo o equipamento esteja funcionando corretamente antes de abrir as portas da sua novíssima Freddy Fazbear's Pizzeria!</p><p class='ajustar-font-size-info'>Depois de um dia atarefado, encerre a papelada e feche sua empresa (muitas vezes até tarde da noite enquanto constrói sua própria empresa!). Tenha cuidado, contudo, com o que possa estar escondido nos respiradouros. Se alguma coisa chamar sua atenção, aponte a lanterna direto para o respiradouro para repelir o que for. A Fazbear Entertainment fornece pilhas gratuitamente a todos os seus franqueados!</p><p class='ajustar-font-size-info'>No dia seguinte, supondo que você tenha sobrevivido à noite, reinvista sua receita de ontem em novos equipamentos. Desenvolva sua pequena pizzaria, dia após dia, para vê-la se tornar um império de alimentação e entretenimento! A Fazbear Entertainment fornece aos seus franqueados todas as ferramentas e conhecimentos necessários para criar e gerenciar um local acolhedor, seguro e lucrativo.</p><p class='ajustar-font-size-info'>Ah, e se você quiser e puder, tente salvar alguns dos animatrônicos que vagam do lado de fora do seu restaurante. Eles já estão tentando entrar há meses, é melhor não perder a oportunidade de pegar peças de reposição e arrecadar alguma receita adicional. Se detectar qualquer instabilidade ou agressividade em algum deles, utilize o taser de autodefesa que a Fazbear Entertainment disponibiliza gratuitamente a todos os seus franqueados.</p><p class='ajustar-font-size-info'>Isso conclui a assistência que a lei nos obriga a fornecer. A Fazbear Entertainment não pode ser responsabilizada por desaparecimentos, mortes ou mutilações que possam ocorrer como resultado da operação da franquia Freddy Fazbear's Pizza.</p><p class='ajustar-font-size-info'>Não espere mais, comece hoje mesmo!</p>"

var fnafsbInfo = "<p class='ajustar-font-size-info'>Clique no botão para acessar Five Nights at Freddy's: Security Breach diretamente na Steam para comprá-lo e jogá-lo.</p><p class='ajustar-font-size-info'>Five Nights at Freddy's: Security Breach é a mais recente adição à popular série de jogos de terror Five Nights at Freddy's, criada por Scott Cawthon. Este novo jogo leva a franquia a um novo patamar, introduzindo um ambiente expansivo e uma jogabilidade mais imersiva.</p><p class='ajustar-font-size-info'>Neste jogo, você se encontra no Mega Pizzaplex de Freddy Fazbear, um complexo de entretenimento de três andares durante a noite. Como Gregory, você deve navegar pelos corredores escuros e salas temáticas do Pizzaplex, enquanto tenta evitar os animatrônicos que ganharam vida. Os animatrônicos, que antes eram atrações divertidas durante o dia, se tornam predadores à noite. Cada um deles tem suas próprias habilidades e táticas de caça, tornando cada encontro único e aterrorizante. Além disso, novos personagens foram introduzidos, adicionando uma nova camada de suspense e terror ao jogo.</p><p class='ajustar-font-size-info'>A sobrevivência não depende apenas de se esconder ou fugir dos animatrônicos. Você também deve usar as ferramentas e recursos disponíveis no ambiente para distrair ou desviar os animatrônicos. Cada decisão que você toma pode ser a diferença entre a sobrevivência e ser pego. Além da intensa jogabilidade de sobrevivência, 'Five Nights at Freddy's: Security Breach' também oferece uma rica história para descobrir. À medida que você explora o Mega Pizzaplex, você descobrirá segredos obscuros e aprenderá mais sobre os eventos misteriosos que ocorreram ali.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Five Nights at Freddy's: Security Breach é o mais novo jogo da série de terror para toda a família amada por milhões de jogadores de todo o mundo. Jogue como Gregory, um garotinho preso durante a noite no Freddy Fazbear's Mega Pizzaplex. Com a ajuda do próprio Freddy Fazbear, Gregory deve sobreviver aos personagens reimaginados de Five Nights at Freddy's que estão atrás dele — além de novas ameaças horripilantes.</p><p class='ajustar-font-size-info'>OS CAÇADORES E O CAÇADO — Quando os protocolos noturnos são ativados, os animatrônicos do Fazbear's Mega Pizzaplex perseguem todos os intrusos implacavelmente. Glamrock Chica, Roxanne Wolf, Montgomery Gator e Vanessa, a guarda noturna do Pizzaplex, vão revirar todos os carrinhos de pizza de algodão-doce se for preciso — é melhor não ficar muito tempo no mesmo lugar.</p><p class='ajustar-font-size-info'>ADAPTE-SE PARA SOBREVIVER - Acesse as câmeras de segurança do prédio para examinar o ambiente e planejar sua rota para evitar o perigo. Distraia inimigos derrubando latas de tinta e brinquedos — mas escape antes que os inimigos sejam atraídos para a sua posição. Esconda-se até o perigo passar ou tente correr mais que os caçadores. Jogue do seu jeito, mas esteja pronto para adaptar-se.</p><p class='ajustar-font-size-info'>EXPLORE E DESCUBRA — O Freddy Fazbear's Mega Pizzaplex oferece uma variedade de atrações para os convidados: Monty Golf, Roxy Raceway, Bonnie Bowl, os esgotos e.... esgotos? O Pizzaplex é vasto e cheio de coisas para descobrir.</p>"

var fnafsbrInfo = "<p class='ajustar-font-size-info'>Clique no botão para acessar Five Nights at Freddy's: Security Breach Ruin diretamente na Steam para jogá-lo (para jogar essa DLC você precisa comprar o jogo base primeiro).</p><p class='ajustar-font-size-info'>Five Nights at Freddy's: Security Breach é um marco na série de jogos de terror de sobrevivência criada por Scott Cawthon. O jogo, que se passa no Mega Pizzaplex de Freddy Fazbear, apresenta uma nova dimensão de medo e suspense. Agora, o palco está pronto para a DLC 'Ruin'. Nesta expansão gratuita, o Mega Pizzaplex, outrora vibrante e cheio de vida, agora é um lugar sombrio e abandonado. As luzes se apagaram, os animatrônicos estão desligados e o riso das crianças é apenas uma memória distante.</p><p class='ajustar-font-size-info'>A DLC 'Ruin' oferece uma nova perspectiva sobre o universo de Five Nights at Freddy's. Ela desafia os jogadores a explorar o Pizzaplex de uma maneira totalmente nova, enquanto tentam desvendar seus segredos e sobreviver aos perigos que espreitam nas sombras.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Você pode correr, mas não se esconder...</p><p class='ajustar-font-size-info'>Entre nas ruínas do Freddy Fazbear's Mega Pizzaplex no DLC GRÁTIS de Five Nights at Freddy's: Security Breach!</p><p class='ajustar-font-size-info'>Gregory está preso de novo no agora abandonado Pizzaplex e precisa da sua ajuda! Jogue como Cassie, a melhor amiga de Gregory, uma Faz-fanática e aspirante a salvadora, enquanto ela desbrava a sombria, lúgubre e dilapidada pizzaria. Ela está armada apenas de uma Faz-Ferramenta, um Roxy-Talky e uma estranha máscara de coelho, e você precisa ajudá-la a encontrar seu amigo, libertá-lo e escapar das ruínas em segurança.</p><p class='ajustar-font-size-info'>Será que você consegue salvar seu amigo, a si mesma e o Pizzaplex? Descubra no DLC 100% grátis Five Nights at Freddy's: Security Breach - Ruin.</p>"

var fnafsotmInfo = "lorem"

var fnafwInfo = "<p class='ajustar-font-size-info'>Instale e jogue o Five Nights at Freddy's World original de forma gratuita e totalmente livre de vírus e malware. Este jogo foi disponibilizado diretamente no site Game Jolt pelo próprio Scott Cawthon. Ao clicar no botão de download, você baixará automaticamente o arquivo fnafw.exe</p><p class='ajustar-font-size-info'>Five Nights at Freddy's World é um spin-off da série de survival horror Five Nights at Freddy's desenvolvido por Scott Cawthon. Foi lançado para PC no dia 21/01/2016. Alguns dias depois do lançamento, foi removido do Steam para melhorias no jogo. No dia 08/02/2016, ele foi re-lançado no Game Jolt com uma nova atualização. A versão portátil do jogo foi lançada para Android no dia 12/01/2017, mas um dia depois foi excluída da Google Play. A versão para iOS foi anunciada, mas não foi lançada. Diferente de seus antecessores, ele é um jogo de RPG ao invés de horror.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Com 48 personagens jogáveis, diversos finais, diversas dificuldades e ótimas trilhas sonoras desenvolvidas por Leon Riskin, FNaF World está a toda velocidade e não para. Tome controle de Freddy e sua turma e parta para uma missão no mundo debaixo dos mundos, um mundo que reflete as ações e os atos do 'flipside', onde as coisas haviam começado a ficar distorcidas e quebradas. Guie o seu time até as profundezas desse mundo digital para descobrir a origem dessas distorções e monstros, e restaure isso que foi designado para ser um paraíso seguro.</p><p class='ajustar-font-size-info'>Mas tenha cuidado, atrás das cortinas pode existir algo ainda mais sinistro controlando as marionetes...</p>"

var fnafexfInfo = "<p class='ajustar-font-size-info'>Clique no botão e assita Five Nights At Freddy's: O Pesadelo Sem Fim no Prime Video!</p><p class='ajustar-font-size-info'>Five Nights At Freddy's: O Pesadelo Sem Fim é a primeira adaptação cinematográfica da famosa franquia homônima de jogos lançada em 2014 e criada por Scott Cawthon. O filme, dirigido por Emma Tammi, se passa em um restaurante familiar tipicamente americano chamado Freddy Fazbear's Pizza. Durante o dia, robôs animados fazem a festa das crianças, mas à noite, eles se transformam em assassinos psicopatas.</p><p class='ajustar-font-size-info'>O protagonista, Mike Schmidt (interpretado por Josh Hutcherson), é contratado como vigia noturno da pizzaria e descobre o segredo obscuro dos bonecos animatrônicos que ganham vida na escuridão. O filme foi lançado em outubro de 2023. Uma curiosidade é que a franquia de jogos original conquistou os fãs de survival horror e agora chega às telonas com uma adaptação arrepiante.</p><h3>Sinopse:</h3><p class='ajustar-font-size-info'>Você consegue sobreviver por cinco noites? O assustador fenômeno dos jogos de terror, 'Five Nights at Freddy's' (FNAF), se torna um evento cinematográfico arrepiante, já que a Blumhouse -- produtora de M3GAN, O Telefone Preto e O Homem Invisível -- traz a adaptação Five Nights at Freddy's - O Pesadelo sem Fim para as telas.</p>"


var jogarFnaf = document.querySelector("#jogar-fnaf")
var fnafffpsDownload = document.querySelector("#fnafffps-download")
var fnafwDownload = document.querySelector("#fnafw-download")
var fnafsbSteam = document.querySelector("#fnafsb-steam")
var fnafsbrSteam = document.querySelector("#fnafsbr-steam")
var fnafsotmSteam = document.querySelector("#fnafsotm-steam")
var fnafFilme = document.querySelector("#fnaf-filme")
var downloadP = document.querySelector("#download-p")

var ucnInfoImgDiv = document.querySelector("#ucn-info-img-div")
var ucnBtn = document.querySelector("#ucn-btn")

// Moeda 3D e modelos bloqueados
var moeda3dImg = document.querySelector("#moeda-3d-img")

var valor = document.querySelectorAll(".valor")
//var praComprarArray = []
var praComprar = document.querySelectorAll(".pra-comprar")
var extraDesbloqueado = document.querySelector("#extra-desbloqueado")
var fecharExtraDesbloqueado = document.querySelector("#fechar-extra-desbloqueado")
var extraDesbloqueadoImg = document.querySelector("#modelo-div #btn-modelo img")
var extraDesbloqueadoP = document.querySelector("#modelo-div p")

var numSort
//var praEncontrarArray = []
var praEncontrar = document.querySelectorAll(".pra-encontrar")

var praEncontrarDouradoArray = []
var praEncontrarDourado = document.querySelectorAll(".pra-encontrar-dourado")
var botaoDourado = document.querySelector("#botao-dourado")

var geralSorteado = []
var botaoDouradoDesativadoArray = []

var verificacao = true
var animacaoWorld, targetWorld, targetWorldInicial