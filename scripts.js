function botaoComida(elemento) {
    const marcado = document.querySelector(".selecionado1");
    if (marcado !== null) {
        marcado.classList.remove("selecionado1");
    }
    elemento.classList.add("selecionado1");

    const observarBebida = document.querySelector(".selecionado2");
    const observarSobremesa = document.querySelector(".selecionado3");
    if (observarBebida !== null && observarSobremesa !== null){
        const antigoBotao = document.querySelector(".sem-selecao");
        const novoBotao = document.querySelector(".com-selecao");
        antigoBotao.classList.add("desliga");
        novoBotao.classList.remove("desliga");
    }
} 


function botaoBebida(elemento) {
    const marcado = document.querySelector(".selecionado2");
    if (marcado !== null) {
        marcado.classList.remove("selecionado2");
    }
    elemento.classList.add("selecionado2");
   
    const observarComida = document.querySelector(".selecionado1");
    const observarSobremesa = document.querySelector(".selecionado3");
    if (observarComida !== null && observarSobremesa !== null){
        const antigoBotao = document.querySelector(".sem-selecao");
        const novoBotao = document.querySelector(".com-selecao");
        antigoBotao.classList.add("desliga");
        novoBotao.classList.remove("desliga");
    }
} 

function botaoSobremesa(elemento) {
    const marcado = document.querySelector(".selecionado3");
    if (marcado !== null) {
        marcado.classList.remove("selecionado3");
    }
    elemento.classList.add("selecionado3");

    const observarBebida = document.querySelector(".selecionado2");
    const observarComida = document.querySelector(".selecionado1");
    if (observarBebida !== null && observarComida !== null){
        const antigoBotao = document.querySelector(".sem-selecao");
        const novoBotao = document.querySelector(".com-selecao");
        antigoBotao.classList.add("desliga");
        novoBotao.classList.remove("desliga");
    }
} 