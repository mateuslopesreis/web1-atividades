import './nav.js'
import '../css/lista-tarefas.css'

const bnt = document.querySelector('#btn-adicionar')
let lista = document.querySelector('#lista-tarefas')
let texto = document.querySelector('#input-nova-tarefa')

bnt.addEventListener('click', function(){
    let li = document.createElement('li')
    li.setAttribute('class','tarefa')

   

    li.innerHTML = `
	<div>${texto.value}</div>
  <button class="btn-excluir">Excluir</button>
`
  lista.appendChild(li)

  texto.value="";
  texto.focus();

  

});


let li = document.createElement('li')
// adicionar um atributo ao elemento
li.setAttribute('class','tarefa')


console.log(lista)
lista.addEventListener('click',function(event){

  if(event.target.className === 'btn-excluir'){
    let tarefa = (event.target).parentNode
    
    lista.removeChild(tarefa)
  }

})