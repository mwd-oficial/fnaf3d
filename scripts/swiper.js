imagemCards.addEventListener("click", () => {
    swiperDiv.style.display = "flex"
    setTimeout(() => {
        swiperDiv.style.opacity = 1
        const botaoDesativado = document.querySelector(".swiper-button-disabled");
        if (botaoDesativado) botaoDesativado.style.opacity = 0;
    }, 125);
    document.querySelectorAll(".swiper-pagination-bullet").forEach((btn) => {
        btn.onmouseover = () => { pointarCursor(btn) }
    })
})

document.querySelector("#fechar-swiper-div-btn").addEventListener("click", () => {
    swiperDiv.style.opacity = 0
    setTimeout(() => swiperDiv.style.display = "none", 125);
})

var swiper = new Swiper(".swiper", {
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 10,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true,
    },
    mousewheel: {
        invert: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

swiper.on('slideChange', function () {
    sumirConfig()
    slideAtual = swiper.realIndex
    iAlternativo = slideAtual
    aparecerBotoes()
});

pagination.addEventListener("mouseenter", function () {
    mouseSobreBotao = true
    aparecerBotoes()
})
buttonPrev.addEventListener("mouseenter", function () {
    mouseSobreBotao = true
    aparecerBotoes()
})
buttonNext.addEventListener("mouseenter", function () {
    mouseSobreBotao = true
    aparecerBotoes()
})
pagination.addEventListener("mouseleave", function () { mouseSobreBotao = false })
buttonPrev.addEventListener("mouseleave", function () { mouseSobreBotao = false })
buttonNext.addEventListener("mouseleave", function () { mouseSobreBotao = false })

function aparecerBotoesSlide(i) {
    if (i == slideAtual) {
        aparecerBotoes()
    }
}

function aparecerBotoes() {
    estadoBotoes = false
    buttonDisabled = document.querySelector(".swiper-button-disabled")
    pagination.style.opacity = 1
    buttonPrev.style.opacity = 1
    buttonNext.style.opacity = 1
    if (buttonDisabled) buttonDisabled.style.opacity = 0.35
    aparecerConfig()
}

function aparecerConfig() {
    swiperSlide[slideAtual].style.boxShadow = "0px 0px 10px 0px #111, inset 0px 0px 10px 0px #111, 0px 0px 20px 0px #111, inset 0px 0px 20px 0px #111"
    swiperImg[slideAtual].style.transform = "scale(1.025)"
    swiperDescricao[slideAtual].style.boxShadow = "0px 0px 10px 0px #111, 0px 0px 10px 0px #111"
    swiperDescricao[slideAtual].style.opacity = 1
}

function sumirBotoes() {
    if (!mouseSobreBotao) {
        estadoBotoes = true
        buttonDisabled = document.querySelector(".swiper-button-disabled")
        pagination.style.opacity = 0
        buttonPrev.style.opacity = 0
        buttonNext.style.opacity = 0
        if (buttonDisabled) buttonDisabled.style.opacity = 0
        sumirConfig()
    }
}

function sumirConfig() {
    setTimeout(() => {
        swiperSlide[slideAtual].style.boxShadow = "0px 0px 0px 0px #1110, inset 0px 0px 0px 0px #1110"
        swiperImg[slideAtual].style.transform = "scale(1)"
        swiperDescricao[slideAtual].style.boxShadow = "0px 0px 0px 0px #1110, 0px 0px 0px 0px #1110"
        swiperDescricao[slideAtual].style.opacity = 0
    }, 1);
}

// Problemas com Swiper 
document.querySelector("#problemas-swiper").addEventListener("click", function () {
    if (swiperEl.style.display == "none") {
        this.innerHTML = "Problemas com a visualização? Clique aqui"
        document.querySelector("#problemas-swiper-div span").style.display = "none"
        swiperEl.style.display = "block"
        imgAlternativaDiv.style.display = "none"
        setaVoltar.style.display = "none"
        setaAvancar.style.display = "none"
        swiper.slideTo(iAlternativo);
        sumirBotoes()
    } else {
        this.innerHTML = "Voltar"
        imgAlternativaDiv.classList.remove("active")
        document.querySelector("#problemas-swiper-div span").style.display = "block"
        swiperEl.style.display = "none"
        imgAlternativaDiv.style.display = "flex"
        setaVoltar.style.display = "block"
        setaAvancar.style.display = "block"
        imgAlternativa.src = modelos[iModeloVar].srcImg + iAlternativo + (modelos[iModeloVar].webps?.includes(iAlternativo) ? ".webp" : ".avif")
        descricaoAlternativa.innerHTML = modelos[iModeloVar].swiperDescricao[iAlternativo]
        sumirBotoes()
        verificaSetas()
    }
})

if (isCelular) imgAlternativaDiv.addEventListener("click", imgAltHover)
function imgAltHover() {
    if (estadoBotoes) {
        imgAlternativaDiv.classList.add("active")
    } else {
        imgAlternativaDiv.classList.remove("active")
    }
    estadoBotoes = !estadoBotoes
}


setaVoltar.addEventListener("click", function () {
    if (iAlternativo > 0) {
        iAlternativo--
        verificaSetas()
        imgAlternativa.src = modelos[iModeloVar].srcImg + iAlternativo + (modelos[iModeloVar].webps?.includes(iAlternativo) ? ".webp" : ".avif")
        descricaoAlternativa.innerHTML = modelos[iModeloVar].swiperDescricao[iAlternativo]
    }
})

setaAvancar.addEventListener("click", function () {
    if (iAlternativo < modelos[iModeloVar].swiperDescricao.length) {
        iAlternativo++
        verificaSetas()
        imgAlternativa.src = modelos[iModeloVar].srcImg + iAlternativo + (modelos[iModeloVar].webps?.includes(iAlternativo) ? ".webp" : ".avif")
        descricaoAlternativa.innerHTML = modelos[iModeloVar].swiperDescricao[iAlternativo]
    }
})

function verificaSetas() {
    if (iAlternativo >= 1) {
        setaVoltar.classList.remove("desativada")
    } else {
        setaVoltar.classList.add("desativada")
    }

    if (iAlternativo <= modelos[iModeloVar].swiperDescricao.length - 2) {
        setaAvancar.classList.remove("desativada")
    } else {
        setaAvancar.classList.add("desativada")
    }
}