const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const descricoes = document.querySelectorAll(".informacoes");

    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {

            document.querySelector(".imagem.ativa").classList.remove("ativa");
            imagens[indice].classList.add("ativa");

            document.querySelector(".informacoes.ativa").classList.remove("ativa");
            descricoes[indice].classList.add("ativa");

            document.querySelector(".botao.selecionado").classList.remove("selecionado");
            botao.classList.add("selecionado");
        })
    })