import './nav.js'
import '../css/lista-tarefas.css'

const bnt = document.querySelector('#btn-adicionar')

bnt.addEventListener('click', function(){
    let li = document.createElement('li')
    li.setAttribute('class','tarefa')

    let lista = document.querySelector('#lista-tarefas')
    let texto = document.querySelector('#input-nova-tarefa')

    li.innerHTML = `
	<div>${texto.value}</div>
  <button class="btn-excluir">Excluir</button>
`
  lista.appendChild(li)
});