document.querySelector("#dados-user-total").innerHTML = modelos.length;

menuLogado.style.display = "none";

document.querySelector("#entrar-btn").addEventListener("click", function () {
    entrar = true;
    resetarInputs();
    inputUsername.required = false
    inputPassword.autocomplete = "current-password"
    irTelaConfigUser("Entrar");
})

document.querySelector("#cadastrar-btn").addEventListener("click", function () {
    cadastrar = true;
    resetarInputs();
    inputUsername.required = true
    inputPassword.autocomplete = "new-password"
    irTelaConfigUser("Cadastrar");
})

document.querySelector("#editar-btn").addEventListener("click", async function () {
    editar = true;
    resetarInputs();
    inputUsername.required = true
    inputUsername.value = dadosUser.username
    inputEmail.value = dadosUser.email
    inputPassword.autocomplete = "new-password"
    inputPassword.value = dadosUser.password;
    if (dadosUser.preencher) {
        inputPreencher.classList.add("active")
    } else {
        inputPreencher.classList.remove("active")
    }
    imagemCarregada.style.objectFit = inputPreencher.classList.contains("active") ? "cover" : "contain";
    avatarBtn.style.display = dadosUser.semFoto ? "none" : "flex"
    var timeoutCarregamento = setTimeout(() => {
        carregamentoImgConfig.style.display = "flex"
    }, 500);

    irTelaConfigUser("Editar");
    imagemCarregada.src = dadosUser.semFoto ? "assets/images/avatar.webp" : await pegarArquivo(dadosUser.imagemId, "png")
    imagemCarregada.onload = function () {
        setTimeout(() => {
            clearTimeout(timeoutCarregamento)
            carregamentoImgConfig.style.display = "none"
        }, 10);
    }
})

document.querySelector("#sair-btn").addEventListener("click", () => {
    alerta("Você saiu")
    sairConta()
})

document.querySelector("#excluir-btn").addEventListener("click", excluirConta)

document.querySelector("#voltar-tela-dados-user").addEventListener("click", () => {
    if (logado) {
        irTelaDadosUser(dadosUser.username)
    } else {
        irTelaDadosUser()
    }
})

function irTelaDadosUser(username) {
    entrar = false;
    cadastrar = false;
    editar = false;

    telaConfigUser.style.opacity = 0;
    telaDadosUser.style.display = "flex";
    telaDadosUser.style.opacity = 0;

    var timeoutCarregamento = setTimeout(() => {
        carregamentoImgDados.style.display = "flex"
    }, 500);

    setTimeout(() => {
        telaConfigUser.style.display = "none";
        telaDadosUser.scrollTo(0, 0)
        telaDadosUser.style.opacity = 1;
    }, 500);

    setTimeout(async () => {
        if (!username) {
            menuLogado.style.display = "none";
            menuNaoLogado.style.display = "flex";

            dadosUserUsername.innerHTML = "Visitante";

            dadosUserMoedas.innerHTML = 0
            dadosUserFavoritos.innerHTML = 0
            dadosUserLikes.innerHTML = 0
            dadosUserDislikes.innerHTML = 0
            dadosUserVistos.innerHTML = 0

            dadosUserImg.src = "assets/images/avatar.webp"
            myUserBtnImg.src = dadosUserImg.src
        } else if (username == dadosUser.username) {
            menuLogado.style.display = "flex";
            menuNaoLogado.style.display = "none";

            dadosUserUsername.innerHTML = `<span class='arroba'>@</span>${dadosUser.username}`

            dadosUserMoedas.innerHTML = dadosUser.moedas3d
            dadosUserFavoritos.innerHTML = dadosUser.favoritos.length
            dadosUserLikes.innerHTML = dadosUser.likes.length
            dadosUserDislikes.innerHTML = dadosUser.dislikes.length
            dadosUserVistos.innerHTML = dadosUser.vistos.length

            dadosUserImg.style.objectFit = dadosUser.preencher ? "cover" : "contain"
            myUserBtnImg.style.objectFit = dadosUser.preencher ? "cover" : "contain"

            dadosUserImg.src = dadosUser.semFoto ? "assets/images/avatar.webp" : await pegarArquivo(dadosUser.imagemId, "png")
            myUserBtnImg.src = dadosUserImg.src
        } else {
            menuLogado.style.display = "none";
            menuNaoLogado.style.display = "none";

            const res = await axios.post(`${API_URL}/users/pegarUserInfo`, {
                username: username
            });

            dadosUserUsername.innerHTML = `<span class='arroba'>@</span>${res.data.username}`

            /*
            
            */

            dadosUserImg.style.objectFit = res.data.preencher ? "cover" : "contain"
            myUserBtnImg.style.objectFit = res.data.preencher ? "cover" : "contain"

            dadosUserImg.src = !res.data.imagemId ? "assets/images/avatar.webp" : await pegarArquivo(res.data.imagemId, "png")
        }

        dadosUserImg.onload = function () {
            setTimeout(() => {
                clearTimeout(timeoutCarregamento)
                carregamentoImgDados.style.display = "none"
                document.querySelectorAll(".btns-menu-user").forEach(btn => btn.style.pointerEvents = "all")
            }, 10);
        }
    }, 500);
}

var sorteado, sorteadoAntigo = -1;
function irTelaConfigUser(acao) {
    telaDadosUser.style.opacity = 0;
    telaConfigUser.style.display = "flex";
    telaConfigUser.style.opacity = 0;
    do {
        sorteado = Math.floor(Math.random() * 5);
    } while (sorteado === sorteadoAntigo);
    sorteadoAntigo = sorteado;
    setTimeout(() => {
        document.querySelectorAll("fieldset").forEach(el => el.classList.remove("invalido"));

        imgAnimatronic.forEach((el) => el.style.display = "none")
        document.querySelector(`#img-animatronic${sorteado}`).style.display = "block"

        telaConfigUser.scrollTo(0, 0)

        telaDadosUser.style.display = "none";

        document.querySelector("#tela-config-h1").innerHTML = acao;
        document.querySelector("#enviar-btn").innerHTML = acao;
        usernameFieldset.style.display = acao == "Entrar" ? "none" : "block";
        imagemDiv.style.display = acao == "Entrar" ? "none" : "flex";
        excluirBtn.style.display = acao == "Editar" ? "block" : "none";
        inputImagem.value = ""

        if (acao !== "Editar") {
            linkConta.style.display = "block";
            linkConta.innerHTML = acao === "Entrar" ? "Ainda não tem uma conta? <a href='#' class='pointers'>Cadastrar</a>" : "Já tem uma conta? <a href='#' class='pointers'>Entrar</a>";
            atualizarPointers()

            var novaAcao = acao === "Entrar" ? "Cadastrar" : "Entrar";
            entrar = acao === "Entrar" ? true : false
            cadastrar = acao === "Cadastrar" ? true : false
            linkConta.onclick = function () {
                inputUsername.required = acao === "Entrar" ? true : false
                irTelaConfigUser(novaAcao);
                setTimeout(resetarInputs, 500)
            };
        } else {
            linkConta.style.display = "none";
        }

        telaConfigUser.style.opacity = 1;
    }, 500);
}


inputImagem.addEventListener('change', function (event) {
    const input = event.target;
    const file = input.files[0];
    const reader = new FileReader();
    const tamanho = file.size / (1024 * 1024); // Conversão de bytes para megabytes

    if (tamanho > 4) {
        alerta(`A imagem deve pesar menos que 4 MB. Tamanho atual: ${tamanho.toFixed(2)} MB`)
        return
    }

    if (file) {
        carregamentoImgConfig.style.display = "flex";
        avatarBtn.style.display = "flex";
        document.querySelector("#hover-label-imagem").style.opacity = 0;

        reader.onload = function () {
            setTimeout(() => {
                carregamentoImgConfig.style.display = "none";
                urlImagem = reader.result;
                imagemCarregada.src = urlImagem;
                dadosUser.semFoto = false
            }, 10);
        }

        reader.readAsDataURL(file);
    }
});

avatarBtn.addEventListener("click", () => {
    avatarBtn.style.display = "none";
    carregamentoImgDados.style.display = "none"
    imagemCarregada.src = "assets/images/avatar.webp";
    inputImagem.value = "";
    dadosUser.semFoto = true;
})

inputPreencher.addEventListener("click", preencher);
document.querySelector("#preencher-p").addEventListener("click", preencher)
function preencher() {
    inputPreencher.classList.toggle("active");
    imagemCarregada.style.objectFit = inputPreencher.classList.contains("active") ? "cover" : "contain";
}

olho.addEventListener("click", function () {
    this.innerHTML = this.innerHTML == "visibility" ? "visibility_off" : "visibility";
    inputPassword.type = this.innerHTML == "visibility" ? "password" : "text";
});




async function pegarArquivo(id, tipop) {
    var tipo = tipop == "png" ? "image/png" : "model/gltf-binary"
    try {
        const res = await axios.get(`${API_URL}/pegarArquivo/${id}`, { responseType: 'arraybuffer' });
        const blob = new Blob([res.data], { type: tipo });
        const url = window.URL.createObjectURL(blob);
        console.log('URL Blob: ', url);
        return url;
    } catch (error) {
        console.error('Erro ao acessar o arquivo:', error);
    }
}

function resetarInputs() {
    formulario.reset();
    imagemCarregada.src = "assets/images/avatar.webp"
    avatarBtn.style.display = "none";
    inputPreencher.classList.remove("active")
    imagemCarregada.style.objectFit = "contain";
    inputPassword.type = "password";
    olho.innerHTML = "visibility";
}

function userEntrado() {
    logado = true
    alerta(`Seja bem-vindo,&nbsp;<span class='arroba'>@</span>${dadosUser.username}!`)
    avisoProgresso.innerHTML = "Não se preocupe: O seu progresso é salvo automaticamente."
    irTelaDadosUser(dadosUser.username)
}

function sairConta() {
    logado = false
    localStorage.setItem("email", "")
    localStorage.setItem("password", "")

    dadosUser = limparDadosUser()

    modelos.forEach(modelo => {
        modelo.favoritado = false
        modelo.comLike = false
        modelo.comDislike = false
    })

    setTimeout(() => {
        marcarInteracao(favoritarBtn, "favoritado")
        marcarInteracao(likes.btn, "comLike")
        marcarInteracao(dislikes.btn, "comDislike")
    }, 100);

    praComprar.forEach((praComprarEl) => {
        praComprarEl.classList.add("bloqueado")
    })

    praEncontrar.forEach((praEncontrarEl, iPraEncontrar) => {
        praEncontrarEl.classList.add("bloqueado")
        document.querySelectorAll(".pra-encontrar img")[iPraEncontrar].src = ""
        document.querySelectorAll(".pra-encontrar ~ p")[iPraEncontrar].innerHTML = "???"
    })

    praEncontrarDourado.forEach((praEncontrarDouradoEl, iPraEncontrarDourado) => {
        praEncontrarDouradoEl.classList.add("bloqueado")
        document.querySelectorAll(".pra-encontrar-dourado img")[iPraEncontrarDourado].src = ""
        document.querySelectorAll(".pra-encontrar-dourado ~ p")[iPraEncontrarDourado].innerHTML = "???"
    })

    botaoDourado.style.display = "none"

    ucnBtn.style.display = "none"

    dadosUser.semFoto = true
    avisoProgresso.innerHTML = "Crie uma conta para salvar o seu progresso!"
    irTelaDadosUser()
}

async function exibirUsers() {
    listaUsers.innerHTML = ""
    //loader.style.display = "block";
    try {
        const res = await axios.get(`${API_URL}/users`);
        const usersHTMLPromises = res.data.map(async (user, i) => `
         <p class="users pointers" data-index="${i}">
            <span class="img-users">
                <img src="assets/images/favicon/192x192.png" class="loader-img">
                <img src="${user.imagemId ? await pegarArquivo(user.imagemId, "png") : "assets/images/avatar.webp"}" class="img-users-img">
            </span>
            <span class="username"><span class="arroba">@</span>${user.username}</span>
            <span class="material-symbols-rounded">open_in_new</span>
        </p>
        `);

        const usersHTML = await Promise.all(usersHTMLPromises);
        listaUsers.innerHTML = usersHTML.join('');
        //loader.style.display = "none";

        atualizarPointers()

        const loaderImg = document.querySelectorAll(".loader-img")
        loaderImg.forEach(loader => loader.style.display = "block")
        document.querySelectorAll(".img-users-img").forEach((img, i) => {
            img.style.opacity = 0
            img.addEventListener("load", () => {
                loaderImg[i].style.display = "none"
                img.style.opacity = 1
            })
        })

        document.querySelectorAll(".users").forEach((user, i) => {
            user.addEventListener("click", () => {
                const index = user.getAttribute("data-index");
                userDiv.style.display = "flex"
                telaDadosUser.style.opacity = 0;
                setTimeout(() => {
                    userDiv.style.opacity = 1
                    irTelaDadosUser(res.data[index].username)
                }, 250);
            });
        });
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        //loader.style.display = "none";
        //setTimeout(() => { alerta("Erro ao exibir os dados"); }, 100);
    }
}
exibirUsers()




document.querySelectorAll(".inputs-user").forEach((el, i) => {
    var fieldset = document.querySelectorAll("fieldset")
    el.addEventListener("blur", function () {
        if (el.checkValidity()) {
            fieldset[i].classList.remove("invalido");
        } else {
            if (el.value != "") fieldset[i].classList.add("invalido");
        }
    })
    el.addEventListener("input", function () {
        fieldset[i].classList.remove("invalido");
    })
    el.addEventListener('focus', event => {
        setTimeout(() => {
            if (isCelular) {
                event.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            focusInput = true
        }, 250);
    });
})

formulario.addEventListener("submit", async function (event) {
    event.preventDefault();
    carregamentoForm.style.display = "flex";

    document.querySelectorAll(".btns-menu-user").forEach(btn => btn.style.pointerEvents = "none")

    if (cadastrar) await cadastrarUser();
    if (editar) await editarUser();

    dadosUser.username = inputUsername.value;
    dadosUser.email = inputEmail.value;
    dadosUser.password = inputPassword.value;
    dadosUser.preencher = inputPreencher.classList.contains("active") ? true : false;

    if (entrar) {
        peloLocalStorage = false
        await entrarUser();
    }
})

async function cadastrarUser() {
    const formData = new FormData();
    formData.append("username", inputUsername.value);
    formData.append("email", inputEmail.value);
    formData.append("password", inputPassword.value);

    formData.append("moedas3d", dadosUser.moedas3d);
    formData.append("favoritos", JSON.stringify(dadosUser.favoritos));
    formData.append("likes", JSON.stringify(dadosUser.likes));
    formData.append("dislikes", JSON.stringify(dadosUser.dislikes));
    formData.append("vistos", JSON.stringify(dadosUser.vistos));

    formData.append("comprados", JSON.stringify(dadosUser.comprados));
    console.log(dadosUser.comprados)
    console.log(JSON.stringify(dadosUser.comprados))
    formData.append("encontrados", JSON.stringify(dadosUser.encontrados));
    formData.append("douradosEncontrados", JSON.stringify(dadosUser.douradosEncontrados));
    formData.append("botoesDourados", JSON.stringify(dadosUser.botoesDourados));
    formData.append("ucnDesbloqueado", JSON.stringify(dadosUser.ucnDesbloqueado));
    formData.append("fnaf1", JSON.stringify(dadosUser.fnaf1));
    formData.append("fnaf2", JSON.stringify(dadosUser.fnaf2));
    formData.append("fnaf3", JSON.stringify(dadosUser.fnaf3));
    formData.append("fnaf4", JSON.stringify(dadosUser.fnaf4));
    formData.append("fnafsl", JSON.stringify(dadosUser.fnafsl));

    formData.append("imagem", inputImagem.files[0]);
    formData.append("preencher", inputPreencher.classList.contains("active") ? true : false);
    formData.append("semFoto", dadosUser.semFoto);

    try {
        const res = await axios.post(`${API_URL}/users/cadastrar`, formData)
        console.log(res.data);
        setTimeout(() => { alerta(res.data.msg); }, 100);
        if (res.data.resultado) {
            console.log("res.data.resultado.imagemId: " + res.data.resultado.imagemId);
            dadosUser.id = res.data.resultado._id
            console.log("res.data.resultado._id: " + res.data.resultado._id)
            setTimeout(() => {
                localStorage.setItem("email", JSON.stringify(dadosUser.email));
                localStorage.setItem("password", JSON.stringify(dadosUser.password));
            }, 100);
            dadosUser.imagemId = res.data.resultado.imagemId

            praEncontrarDourado.forEach(async () => {
                numSort = Math.floor(Math.random() * document.querySelectorAll(".geral").length);
                //modelos[numSort].temBotaoDourado = true
                //modelos[numSort].botaoDouradoDesativado = false
                dadosUser.botoesDourados.push({
                    src: modelos[numSort].src,
                    desativado: false,
                })
                const res = await axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                    botoesDourados: dadosUser.botoesDourados
                })
                console.log(res.data.msg);
            })

            exibirUsers()
            setTimeout(userEntrado, 100);
        }
    } catch (erro) {
        console.error('Erro ao tentar cadastrar: ', erro);
        setTimeout(() => { alerta("Erro ao tentar cadastrar"); }, 100);
    } finally {
        carregamentoForm.style.display = "none";
    }
}

async function entrarUser() {
    try {
        const res = await axios.post(`${API_URL}/users/validarSenha`, {
            email: dadosUser.email,
            password: dadosUser.password
        });

        if (res.data.emailEncontrado) {
            if (res.data.senhaCorreta) {
                dadosUser.id = res.data.userData._id
                dadosUser.username = res.data.userData.username;
                localStorage.setItem("email", JSON.stringify(dadosUser.email));
                localStorage.setItem("password", JSON.stringify(dadosUser.password));

                dadosUser.moedas3d = res.data.userData.moedas3d
                try { dadosUser.favoritos = JSON.parse(res.data.userData.favoritos) }
                catch { dadosUser.favoritos = res.data.userData.favoritos }
                try { dadosUser.likes = JSON.parse(res.data.userData.likes) }
                catch { dadosUser.likes = res.data.userData.likes }
                try { dadosUser.dislikes = JSON.parse(res.data.userData.dislikes) }
                catch { dadosUser.dislikes = res.data.userData.dislikes }
                try { dadosUser.vistos = JSON.parse(res.data.userData.vistos) }
                catch { dadosUser.vistos = res.data.userData.vistos }
                if (iModeloVar && dadosUser.vistos.indexOf(modelos[iModeloVar].src) == -1) dadosUser.vistos.push(modelos[iModeloVar].src)

                try { dadosUser.comprados = JSON.parse(res.data.userData.comprados) }
                catch { dadosUser.comprados = res.data.userData.comprados }
                try { dadosUser.encontrados = JSON.parse(res.data.userData.encontrados) }
                catch { dadosUser.encontrados = res.data.userData.encontrados }
                try { dadosUser.douradosEncontrados = JSON.parse(res.data.userData.douradosEncontrados) }
                catch { dadosUser.douradosEncontrados = res.data.userData.douradosEncontrados }
                try { dadosUser.botoesDourados = JSON.parse(res.data.userData.botoesDourados) }
                catch { dadosUser.botoesDourados = res.data.userData.botoesDourados }

                dadosUser.ucnDesbloqueado = res.data.userData.ucnDesbloqueado;

                try { dadosUser.fnaf1 = JSON.parse(res.data.userData.fnaf1) }
                catch { dadosUser.fnaf1 = res.data.userData.fnaf1 }
                try { dadosUser.fnaf2 = JSON.parse(res.data.userData.fnaf2) }
                catch { dadosUser.fnaf2 = res.data.userData.fnaf2 }
                try { dadosUser.fnaf3 = JSON.parse(res.data.userData.fnaf3) }
                catch { dadosUser.fnaf3 = res.data.userData.fnaf3 }
                try { dadosUser.fnaf4 = JSON.parse(res.data.userData.fnaf4) }
                catch { dadosUser.fnaf4 = res.data.userData.fnaf4 }
                try { dadosUser.fnafsl = JSON.parse(res.data.userData.fnafsl) }
                catch { dadosUser.fnafsl = res.data.userData.fnafsl }

                marcarEstadoInteracao("favoritos", "favoritado")
                marcarEstadoInteracao("likes", "comLike")
                marcarEstadoInteracao("dislikes", "comDislike")

                setTimeout(() => {
                    if (!peloLocalStorage) {
                        marcarInteracao(favoritarBtn, "favoritado")
                        marcarInteracao(likes.btn, "comLike")
                        marcarInteracao(dislikes.btn, "comDislike")
                    }
                }, 100);

                dadosUser.imagemId = res.data.userData.imagemId;
                dadosUser.preencher = JSON.parse(res.data.userData.preencher)
                dadosUser.semFoto = dadosUser.imagemId === ""

                axios.put(`${API_URL}/users/atualizarDado/${dadosUser.id}`, {
                    vistos: dadosUser.vistos
                })

                for (let i = 0; i < dadosUser.comprados.length; i++) {
                    praComprar[i].classList.remove("bloqueado")
                }

                for (let i = 0; i < dadosUser.encontrados.length; i++) {
                    var iModeloExtra
                    modelosExtras.forEach((modelo, iModelo) => {
                        if (modelo.src == dadosUser.encontrados[i]) {
                            iModeloExtra = iModelo - praComprar.length
                            praEncontrar[iModeloExtra].classList.remove("bloqueado")
                            document.querySelectorAll(".pra-encontrar img")[iModeloExtra].src = modelosExtras[iModelo].srcImg + "0.webp"
                            document.querySelectorAll(".pra-encontrar ~ p")[iModeloExtra].innerHTML = modelosExtras[iModelo].nome
                        }
                    })
                }

                for (let i = 0; i < dadosUser.douradosEncontrados.length; i++) {
                    var iModeloExtra
                    modelosExtras.forEach((modelo, iModelo) => {
                        if (modelo.src == dadosUser.douradosEncontrados[i]) {
                            iModeloExtra = iModelo - praComprar.length - praEncontrar.length
                            praEncontrarDourado[iModeloExtra].classList.remove("bloqueado")
                            document.querySelectorAll(".pra-encontrar-dourado img")[iModeloExtra].src = modelosExtras[iModelo].srcImg + "0.webp"
                            document.querySelectorAll(".pra-encontrar-dourado ~ p")[iModeloExtra].innerHTML = modelosExtras[iModelo].nome
                        }
                    })
                }

                botaoDouradof()

                if (dadosUser.ucnDesbloqueado) ucnBtn.style.display = "flex"

                setTimeout(() => {
                    alerta(res.data.msg);
                    peloLocalStorage = false
                    userEntrado();
                }, 100);
            } else {
                setTimeout(() => {
                    if (!peloLocalStorage) alerta(res.data.msg);
                    peloLocalStorage = false
                }, 100);
            }
        } else {
            setTimeout(() => {
                if (!peloLocalStorage) alerta(res.data.msg);
                peloLocalStorage = false
            }, 100);
        }
    } catch (erro) {
        console.error('Erro ao tentar entrar: ', erro);
        setTimeout(() => { if (!peloLocalStorage) alerta("Erro ao tentar entrar"); }, 100);
    } finally {
        carregamentoForm.style.display = "none";
    }
}

function marcarEstadoInteracao(item, estado) {
    for (var i = 0; i < modelos.length; i++) {
        for (var j = 0; j < dadosUser[item].length; j++) {
            if (modelos[i].src == dadosUser[item][j]) {
                modelos[i][estado] = true
            }
        }
    }
}

async function excluirConta() {
    carregamentoForm.style.display = "flex";
    try {
        const res = await axios.delete(`${API_URL}/users/excluir`, {
            data: {
                username: dadosUser.username,
                imagemId: dadosUser.imagemId
            }
        });
        console.log("username: " + dadosUser.username)
        console.log(res.data);
        setTimeout(async () => {
            alerta("Conta excluída... Lamentamos ver você partir.");

            for (let i = 0; i < modelos.length; i++) {
                for (let j = 0; j < dadosUser.likes.length; j++) {
                    if (modelos[i].src == dadosUser.likes[j]) {
                        --modelosbd[i].likes
                    }
                }
                for (let j = 0; j < dadosUser.dislikes.length; j++) {
                    if (modelos[i].src == dadosUser.dislikes[j]) {
                        --modelosbd[i].dislikes
                    }
                }
                likes.qtdeEl.innerHTML = modelosbd[iModeloVar].likes;
                dislikes.qtdeEl.innerHTML = modelosbd[iModeloVar].dislikes;
                axios.put(`${API_URL}/models/editar`, {
                    src: modelosbd[i].src,
                    likes: modelosbd[i].likes,
                    dislikes: modelosbd[i].dislikes
                });
            }


            sairConta();
            carregamentoForm.style.display = "none";

            dadosUser.vistos.push(modelos[iModeloVar].src)
        }, 100);
    } catch (erro) {
        console.error('Erro ao excluir os dados:', erro);
        setTimeout(() => { alerta("Erro ao excluir sua conta"); }, 100);
        carregamentoForm.style.display = "none";
    }
};

async function editarUser() {
    const formData = new FormData();
    formData.append("oldUsername", dadosUser.username);
    formData.append("oldEmail", dadosUser.email);
    formData.append("oldImagemId", dadosUser.imagemId)
    formData.append("username", inputUsername.value);
    formData.append("email", inputEmail.value);
    formData.append("password", inputPassword.value);
    formData.append("imagem", inputImagem.files[0]);
    formData.append("preencher", inputPreencher.classList.contains("active") ? true : false);
    formData.append("semFoto", dadosUser.semFoto);

    try {
        const res = await axios.put(`${API_URL}/users/editar/${dadosUser.id}`, formData)
        console.log(res.data);
        setTimeout(() => { alerta(res.data.msg); }, 100);
        if (res.data.resultado) {
            console.log("res.data.resultado.imagemId: " + res.data.resultado.imagemId);
            dadosUser.imagemId = res.data.resultado.imagemId
            setTimeout(() => {
                localStorage.setItem("email", JSON.stringify(dadosUser.email));
                localStorage.setItem("password", JSON.stringify(dadosUser.password));
            }, 100);
            setTimeout(() => irTelaDadosUser(dadosUser.username), 100);
        }
    } catch (erro) {
        console.error('Erro ao tentar cadastrar: ', erro);
        setTimeout(() => { alerta("Erro ao tentar cadastrar"); }, 100);
    } finally {
        carregamentoForm.style.display = "none";
    }
}