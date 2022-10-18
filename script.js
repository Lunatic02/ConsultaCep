const spanRua = document.querySelector('.rua')
const spanCidade = document.querySelector('.cidade')
const spanEstado = document.querySelector('.estado')
const spanBairro = document.querySelector('.bairro')
const erro = document.querySelector('.erro')
const options = {
    'CORS': 'no-cors'
}
botao.addEventListener('click', function(e){
    e.preventDefault()
})

botao.addEventListener('click', async function getCep(){
    const input = document.querySelector('input#cep')
    const botao = document.querySelector('input#botao')
    const id = input.value;
    const url = fetch(`https://viacep.com.br/ws/${id}/json/`, options);
    (await url).json()
    .then((a)=>{
        let rua = a.logradouro;
        let cidade = a.localidade;
        let estado = a.uf;
        let bairro = a.bairro;
        spanRua.innerText = rua;
        spanBairro.innerText = bairro;
        spanCidade.innerText = cidade;
        spanEstado.innerText = estado;
        erro.classList.remove('ativo')
    }).catch(b=>{
        spanRua.innerText = '';
        spanBairro.innerText = '';
        spanCidade.innerText = '';
        spanEstado.innerText = '';
        erro.classList.add('ativo')
    })
})

