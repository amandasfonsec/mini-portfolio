/*
OBJETIVO - quando clicarmos na aba temos que mostar o conteúdo da aba que foi clicada pelo usuário e
esconder o conteúdo da aba anterior

- passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
- passo 2 - dar um jeito de identificar o clique no elemento da aba
- passo 3 - quando o usuário clicar, desmarcar a aba selecionada
- passo 4 - marcar a aba clicada como selecionado
- passo 5 - esconder o conteúdo anterior
- passo 6 - mostrar o conteúdo da aba selecionada

*/

//PASSO 1
//Mostra no log e busca termos 
//console.log(document.querySelectorAll());

// joga tudo da classe para var abas
const abas = document.querySelectorAll(".aba");

//PASSO 2

abas.forEach(aba => {
    //console.log(aba)
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return; //ele para a execução da função
        }
        
        //Funções para interação ao selecionar aba e mostar as infos
        selecionarAba(aba)

        mostrarInfoDaAba(aba)

    });

    
});

function selecionarAba(aba){

    //PASSO 3
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //PASSO 4
    aba.classList.add("selecionado");

}

function mostrarInfoDaAba(aba){

    //PASSO 5
    const infoSelecionada = document.querySelector(".informacao.selecionado");
    infoSelecionada.classList.remove("selecionado");

    //PASSO 6
    const idDoElementoDeInfoDaAba = `informacao-${aba.id}`

    const infoASerMostrada = document.getElementById(idDoElementoDeInfoDaAba)
    infoASerMostrada.classList.add("selecionado");

}