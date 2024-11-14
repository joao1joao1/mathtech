function registrar() {
    const nome = document.querySelector("#nome").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const senha = document.querySelector("#senha").value

    if (nome === "" || email === "" || senha === "" || telefone === "") {
        alert("Preencha todas as informações!")
        return
    }

    const user = {
        nome,
        email,
        telefone,
        senha
    }
}

const button = document.querySelector("button")
button.addEventListener("click", (event) => {
    event.preventDefault()
    registrar()
})