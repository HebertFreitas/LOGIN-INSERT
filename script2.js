//window.onload = function() {
    function voltar() {
        window.location.href = "index.html"}
    
    const botao = document.querySelector('#btn1');
                          
    botao.addEventListener("click", function() {
        let aluno = prompt("Digite o nome do novo usuário:");
        if (aluno) {
            const lista = document.querySelector('#usuario');
            const item = document.createElement('li');
            const botaoLista = document.createElement('button');
    
            item.textContent = aluno;
            botaoLista.textContent = 'Apagar';
            lista.appendChild(item);
            lista.appendChild(botaoLista);        
    
            botaoLista.addEventListener("click", function() {
                lista.removeChild(item);
                lista.removeChild(botaoLista);
            })
    
        }
        else {
            alert("Você não digitou o nome de um novo usuario");
        }
    });
    
    //}
    
    // OUTRA MANEIRA DE SELECIONAR //