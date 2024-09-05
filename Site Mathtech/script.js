const botao = document.querySelector("#faleconosco > #falediv > #falediv2 > #faleconoscoQuadro > #inputs > #botaoEnviar")
const modal= document.querySelector("dialog")
const botaoFechar= document.querySelector("dialog > div> #botaoFechar")

botao.onclick = function() {
    modal.showModal()
}

botaoFechar.onclick = function() {
    modal.close()
}
