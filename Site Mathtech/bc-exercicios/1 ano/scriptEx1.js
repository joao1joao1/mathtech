import { exercicios } from "../../questões/primeiroano"

let pergunta= 1
let contadorTema= 0
let contadorPergunta= 0
let resposta = ""
let idInputResposta = ""
let respostaCorretaId = ""
let questao= document.getElementById("questao")
let assuntoTitulo= document.querySelector("h1")
let botaoEnviar= document.getElementById("botaoResolucao")


function alterarAssunto () {
    console.log(assuntoTitulo)
    assuntoTitulo.innerHTML=`Exercício ${pergunta,'-', exercicios[contadorTema].title} `
}

alterarAssunto()

function montarPergunta(){
    questao.innerHTML= `
      <div id="pergunta">
                <p> ${exercicios[contador].questions.question[contadorPergunta]}
                </p>
                <div id="alternativas">
                    <span>(A) ${exercicios[contador].questions.question[contadorPergunta].options[0]}</span>
                    <span>(B) ${exercicios[contador].questions.question[contadorPergunta].options[1]}</span>
                    <span>(C) ${exercicios[contador].questions.question[contadorPergunta].options[2]}</span>
                    <span>(D) ${exercicios[contador].questions.question[contadorPergunta].options[3]}</span>
                    <span>(E) ${exercicios[contador].questions.question[contadorPergunta].options[4]}</span>
                </div>
            </div>
    
    `
}