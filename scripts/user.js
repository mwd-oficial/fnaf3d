//const API_URL = "https://backend-delta-lake.vercel.app";
const API_URL = "http://localhost:3000";

document.querySelector("#dados-user-total").innerHTML = modelos.length;

menuLogado.style.display = "none";

document.querySelector("#entrar-btn").addEventListener("click", function () {
    entrar = true;
    mostrarTelaConfigUser("Entrar");
})

document.querySelector("#cadastrar-btn").addEventListener("click", function () {
    cadastrar = true;
    mostrarTelaConfigUser("Cadastrar");
})

document.querySelector("#editar-btn").addEventListener("click", function () {
    editar = true;
    mostrarTelaConfigUser("Editar");
})

document.querySelector("#voltar-tela-mostrar-user").addEventListener("click", function () {
    entrar = false;
    cadastrar = false;
    editar = false;
    telaConfigUser.style.opacity = 0;
    telaDadosUser.style.display = "flex";
    telaDadosUser.style.opacity = 0;
    setTimeout(() => {
        telaConfigUser.scrollTo(0, 0)
        telaConfigUser.style.display = "none";
        telaDadosUser.style.opacity = 1;
    }, 500);
})

var sorteadoAntigo = -1;
function mostrarTelaConfigUser(acao) {
    telaDadosUser.style.opacity = 0;
    telaConfigUser.style.display = "flex";
    telaConfigUser.style.opacity = 0;
    setTimeout(() => {
        do {
            sorteado = Math.floor(Math.random() * 5);
            document.querySelector("#img-animatronic").src = `assets/images/${sorteado}.webp`;
        } while (sorteado === sorteadoAntigo);
        sorteadoAntigo = sorteado;

        telaConfigUser.scrollTo(0, 0)

        telaDadosUser.style.display = "none";

        document.querySelector("#tela-config-h1").innerText = acao;
        usernameFieldset.style.display = acao == "Entrar" ? "none" : "block";
        imagemDiv.style.display = acao == "Entrar" ? "none" : "flex";
        excluirBtn.style.display = acao == "Editar" ? "block" : "none";

        if (acao !== "Editar") {
            linkConta.style.display = "block";
            linkConta.innerHTML = acao === "Entrar" ? "Ainda não tem uma conta? <a href='#' class='efeito-hover'>Cadastrar</a>" : "Já tem uma conta? <a href='#' class='efeito-hover'>Entrar</a>";

            var novaAcao = acao === "Entrar" ? "Cadastrar" : "Entrar";
            linkConta.onclick = function () {
                mostrarTelaConfigUser(novaAcao);
            };
        } else {
            linkConta.style.display = "none";
        }

        telaConfigUser.style.opacity = 1;
    }, 500);
}


inputImagem.addEventListener('change', function (event) {
    carregamentoImg.forEach(el => el.style.display = "flex");
    avatarBtn.style.display = "flex";
    document.querySelector("#hover-label-imagem").style.opacity = 0;

    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        setTimeout(() => {
            carregamentoImg.forEach(el => el.style.display = "none");
            urlImagem = reader.result;
            imagemCarregada.src = urlImagem;
            dadosUser.semFoto = false
        }, 500);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

avatarBtn.addEventListener("click", () => {
    avatarBtn.style.display = "none";
    carregamentoImg.forEach(el => el.style.display = "none");
    imagemCarregada.src = "assets/images/avatar.webp";
    inputImagem.value = "";
    dadosUser.semFoto = true;
})

preencherInput.addEventListener("click", preencher);
document.querySelector("#preencher-p").addEventListener("click", preencher)
function preencher() {
    preencherInput.classList.toggle("active");
    imagemCarregada.style.objectFit = preencherInput.classList.contains("active") ? "cover" : "contain";
}

document.querySelector("#olho").addEventListener("click", function () {
    this.innerHTML = this.innerHTML == "visibility" ? "visibility_off" : "visibility";
    inputPassword.type = this.innerHTML == "visibility" ? "password" : "text";
});



formulario.addEventListener("submit", function (event) {
    event.preventDefault()
    carregamentoForm.style.display = "flex";

    dadosUser.username = inputUsername.value
    dadosUser.email = inputEmail.value
    dadosUser.password = inputPassword.value
    dadosUser.imagem = inputImagem.files[0]
    dadosUser.preencher = preencherInput.classList.contains("active") ? true : false

    if (cadastrar) cadastrarUser();
})

async function cadastrarUser() {
    const formData = new FormData();
    formData.append("username", dadosUser.username);
    formData.append("email", dadosUser.email);
    formData.append("password", dadosUser.password);
    formData.append("imagem", dadosUser.imagem);
    formData.append("preencher", dadosUser.preencher);
    formData.append("semFoto", dadosUser.semFoto);

    try {
        const res = await axios.post(`${API_URL}/cadastrar`, formData)
        console.log(res.data);
        carregamentoForm.style.display = "none";
        setTimeout(() => { alerta(res.data.msg); }, 100);
        if (res.data.resultado) {
            console.log("res.data.resultado.imagem: " + res.data.resultado.imagem);
            console.log("dadosUser.imagem: " + dadosUser.imagem);
            localStorage.setItem("email", JSON.stringify(dadosUser.email));
            localStorage.setItem("password", JSON.stringify(dadosUser.password));
            //setTimeout(userEntrado, 100);
        }
    } catch (erro) {
        console.error('Erro ao enviar os dados:', erro);
        carregamentoForm.style.display = "none";
        setTimeout(() => { alerta("Erro ao enviar os dados."); }, 100);
    }
}

async function teste() {
    try {
        const res = await axios.get(`${API_URL}/freddy/1cXecJVfhp1sN7Fii3RvczxJrn7jcEUYG`, { responseType: 'arraybuffer' });
        //const blob = new Blob([res.data], { type: 'model/gltf-binary' }); // Ajuste o tipo de acordo com o seu arquivo
        const blob = new Blob([res.data], { type: 'image/jpeg' }); // Ajuste o tipo de acordo com o seu arquivo
        const url = window.URL.createObjectURL(blob);
        console.log('URL Blob: ', url);
        return url; 
    } catch (error) {
        console.error('Erro ao acessar o arquivo:', error);
    }
}

