let numeroEmpresa = "5532987028338";                  // basta mudar aqui o numero para testes :)


function botaoGerarLink() {
    let texto;
    let somaTotal = 0;
    let elemento;
    const prato = document.querySelector(".selecionado1 h3").innerHTML;
    const bebida = document.querySelector(".selecionado2 h3").innerHTML;
    const sobremesa = document.querySelector(".selecionado3 h3").innerHTML;
    let valorPrato = document.querySelector(".selecionado1 span").innerHTML;
    let valorBebida = document.querySelector(".selecionado2 span").innerHTML;
    let valorSobremesa = document.querySelector(".selecionado3 span").innerHTML;
    valorPrato = valorPrato.replace(",", ".");
    valorBebida = valorBebida.replace(",", ".");
    valorSobremesa = valorSobremesa.replace(",", ".");
    valorPrato = Number(valorPrato);
    valorBebida = Number(valorBebida);
    valorSobremesa = Number(valorSobremesa);
    somaTotal = (valorPrato + valorBebida + valorSobremesa)
    texto = `Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${somaTotal.toFixed(2)}`
    texto = encodeURIComponent(texto);
    let link = `https://wa.me/${numeroEmpresa}?text=${texto}`
    document.querySelector("a").href=link;
}

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
        botaoGerarLink();
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
        botaoGerarLink();
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
        botaoGerarLink();
    }
} 

