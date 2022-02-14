

const BuscarCep = () => {
    
    const cep = document.getElementById('cep').value.replace("-", "")
    if(cep === ""){
        alert('Digite o cep')
    }else{
        const url = `http://viacep.com.br/ws/${cep}/json/`

        const endereco = document.getElementById('logradouro')
        const complemento = document.getElementById('complemento')
        const bairro = document.getElementById('bairro')
        const localidade = document.getElementById('localidade')
        const uf = document.getElementById('uf')

        

        fetch(url, { method: 'GET' })
            .then(reponse => {
                console.log(reponse)
                reponse.json()
                    .then(data => {
                        console.log(data)
                        endereco.value = data.logradouro
                        complemento.value = data.complemento
                        bairro.value = data.bairro
                        localidade.value = data.localidade
                        uf.value = data.uf
                    })
                    
            })
        
    }
}
/* document.getElementById('cep')

if(cep.lenght === ""){
    limpa_formulário_cep()
}

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('logradouro').value = ("");
    document.getElementById('complemento').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('localidade').value = ("");
    document.getElementById('uf').value = ("");
} */




