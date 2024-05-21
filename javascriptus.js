const burg = document.querySelector(".burg");
const navMenu = document.querySelector(".nav-menu");

burg.addEventListener("click", () => {
    burg.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. 
    addEventListener("click", () => {
        burg.classList.remove("active");
        navMenu.classList.remove("active");
    }))



    const solicitarOrcamento = (event) => {
        // Pegar valores dos inputs
        let valorNome = document.getElementById("firstName").value
        let valorSobreNome = document.getElementById("lastName").value
        let valorEmail = document.getElementById("email").value
        let valorMobile = document.getElementById("mobile").value
    
        // Organizar objeto com os valores
        let dadosForm = {
            nome: valorNome,
            nome: valorSobreNome
            email: valorEmail,
            descricao: valorDescricao
        }
    
        // Enviar requisicao para a api
        // 127.0.0.1 = localhost
        // Método HTTP POST - Create -> Cadastrar ou criar 
        fetch("http://127.0.0.1:3000/solicitacoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        })
        .then(resposta => {
            console.log(resposta)
    
            // Limpar os campos (inputs)
            document.querySelector("#contato form").reset()
    
            // Mostrar alert com msg de sucesso
            alert("Solicitação cadastrada")
        })
        .catch(erro => {
            // CASO ERRO - alert com msg erro
            console.error(erro)
            alert("Erro na requisição")
        })
    
        event.preventDefault()
    }