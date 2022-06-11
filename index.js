const respostas = ["improvável", "acho que não", "impossível", "sem a minima chance", "tem grandes chances", "bora que vai", "com certeza", "é claro que sim", "nossos telepatas estão com dificuldades tecnicas, tente novamente", "a nossa bola de cristal rachou, tente novamente", "o futuro está em manutenção, tente novamente mais tarde"]

//const elementoResposta = document.getElementById("resposta")



//clicar em fazer prgunta

function fazerPergunta() {
    setTimeout(function() {
        elementoResposta.style.opacity = 0.9
    }, 5)

    const elementoPergunta = document.querySelector("#inputPergunta")
    const elementoResposta = document.querySelector("#resposta")
    const botaoPergunta = document.querySelector("#botaoPergunta")
    botaoPergunta.setAttribute("disabled", true)
    const totalRespostas = respostas.length
    //gerar num aleatorio
    const numAleatorio = Math.floor(Math.random()*totalRespostas)
    console.log(respostas[numAleatorio])
    //console.log(elementoResposta)
    if(elementoPergunta.value == '') {
        alert("Digite a pergunta")
        return
    }
    const pergunta = "<div>"+ elementoPergunta.value + "</div>"
    elementoResposta.innerHTML = pergunta + respostas[numAleatorio]

    setTimeout(function() {
        elementoResposta.style.opacity = 0
        botaoPergunta.removeAttribute("disabled")
    }, 3000)
    
}