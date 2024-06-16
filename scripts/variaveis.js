// Tela inicial e associados
var siteCarregado = true, primeiraVez = true, isCelular = false
var conteudo = document.querySelector("#conteudo")
var telaCheia = document.querySelector("#tela-cheia")
var aviso = document.querySelector("#aviso")
var telaInicial = document.querySelector("#tela-inicial")
var telaInicialVideo = document.querySelector("#tela-inicial video")
var telaInicialAudio = document.querySelector("#tela-inicial audio")
var fecharAbaCel = document.querySelector("#fechar-aba-cel")

var avisoLocalStorageDiv = document.querySelector("#aviso-local-storage-div")
var resetarConfig = document.querySelector("#resetar-config")

var telaCarregamento = document.querySelector("#tela-carregamento")
var modelViewer

var telaModelosAudio, sort = -1, newSort



// Modelos e associados
var nomeModelo = document.querySelector("#nome-modelo")
var btnMenu = document.querySelector("#btn-menu")
var divMenu = document.querySelector("#div-menu")
var btnHome = document.querySelector("#btn-home")
var menuContent = document.querySelector("#menu-content")
var menuIcon = document.querySelector("#btn-menu span")
var btnModelos = document.querySelectorAll(".btn-modelos")
var modelosDivP = document.querySelectorAll(".modelos-div > p")
var primeiraVezScroll = true
var iModeloVar


// Tutorial e descrição
var tutorialDescricaoContent = document.querySelector("#tutorial-descricao-content")
var tutorialDescricaoDiv = document.querySelector("#tutorial-descricao-div")
var tutorialDescricaoBtn = document.querySelector("#tutorial-descricao-btn")
var tutorialIcon = document.querySelector("#tutorial-descricao-btn span")

var tutorialBotoesDiv = document.querySelector("#tutorial-botoes-div")
var tutorialBotoesContent = document.querySelector("#tutorial-botoes-content")
var tutorialBotoesContentP = document.querySelector("#tutorial-botoes-content p")
var passoTutorial = 1


// Rotação e efeitos do tutorial
var rotacaoInput = document.querySelector("#rotacao-input")
var velocidadeInput = document.querySelector("#velocidade-input")
var pixelInput = document.querySelector("#pixel-input")
var glitchInput = document.querySelector("#glitch-input")

var outlineInput = document.querySelector("#contorno-input")
var intensidadeInput = document.querySelector("#intensidade-input")
var suavizacaoInput = document.querySelector("#suavizacao-input")
var corInput = document.querySelector("#cor-input")

var effectComposer
var pixelateEffect, glitchEffect, outlineEffect




// Altura
var inputAlturaDiv = document.querySelector("#input-altura-div")
var inputAltura = document.querySelector("#input-altura")
var altura = 0
var alvoX, alvoY, alvoZ


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



// Fnaf info
var jogarFnaf = document.querySelector("#jogar-fnaf")
var fnafInfoImgDiv = document.querySelector("#fnaf-info-img-div")
var nomeFnafInfo = document.querySelector("#nome-fnaf-info")
var nomeFnaf = document.querySelectorAll(".nome-fnaf")
var textoFnafInfo = document.querySelectorAll(".texto-fnaf-info")
var fnafImg = document.querySelector("#fnaf-img")
var iNomeFnaf

var ucnInfoImgDiv = document.querySelector("#ucn-info-img-div")
var ucnBtn = document.querySelector("#ucn-btn")
var ucnDesbloqueado = false

// Moeda 3D e modelos bloqueados
var moeda3dImg = document.querySelector("#moeda-3d-img")
var quantidadeMoedas3dDiv = document.querySelector("#quantidade-moedas-3d-div")
var moedas3dNumDiv = document.querySelector("#moedas-3d-num-div")
var moedas3dNum

var valor = document.querySelectorAll(".valor")
var praComprarArray = []
var praComprar = document.querySelectorAll(".pra-comprar")
var extraDesbloqueado = document.querySelector("#extra-desbloqueado")
var extraDesbloqueadoImg = document.querySelector("#modelo-div #btn-modelo img")
var extraDesbloqueadoP = document.querySelector("#modelo-div p")

var numSort
var praEncontrarArray = []
var praEncontrar = document.querySelectorAll(".pra-encontrar")
var iModeloExtra