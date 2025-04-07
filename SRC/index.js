const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        botao.classList.add("selecionado");

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        console.log(botaoSelecionado);
        botaoSelecionado.classList.remove("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");

    })
});


