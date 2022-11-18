import './nav.js'
import '../css/pagamento.css'

const inputNumeroCartao = document.querySelector('#mudaTam')
const inputNomeCartao = document.querySelector('#mudaTam1')
const inputDataCartao = document.querySelector('#mudaTam2')
const divNumeroCartaoImg = document.querySelector('.card-number')
const divNomeCartao = document.querySelector('.card-holder')
const divDataCartao = document.querySelector('.expiration')

inputNumeroCartao.addEventListener('input', function(){
    divNumeroCartaoImg.innerHTML = inputNumeroCartao.value;
    divNomeCartao.innerHTML = inputCartao.value;
    divDataCartao.innerHTML = inputCartao.value;
})

inputNomeCartao.addEventListener('input', function(){
    divNomeCartao.innerHTML = inputNomeCartao.value;
})

inputDataCartao.addEventListener('input', function(){
    divDataCartao.innerHTML = inputDataCartao.value;
})