var progressBar = document.querySelector("#progress-bar")

progressBar.value = 0
var progressoInterval = setInterval(function () {
    if (progressBar.value < 100) {
        progressBar.value += 0.1
    } else {
        clearInterval(progressoInterval);
    }
}, 1);

window.addEventListener("load", function () {
    setTimeout(() => {
        progressBar.value = 100
        setTimeout(() => {
            document.querySelector("#tela-carregamento-site").style.display = "none"
        }, 500);
    }, 4500);
})