const BuscarCep = () => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`

    const endereco = document.getElementById('logradouro')
    const complemento = document.getElementById('complemento')
    const bairro = document.getElementById('bairro')
    const localidade = document.getElementById('localidade')
    const uf = document.getElementById('uf')
    
    fetch(url, {method: 'GET'})
        .then(reponse => {
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