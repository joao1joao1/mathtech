const button = document.querySelector("#botao")

function logar() {
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value

    if (senha === "" || email === "") {
        alert("Preencha todas as informações!")
    }
}

button.addEventListener("click", (event)=> {
    logar()
})