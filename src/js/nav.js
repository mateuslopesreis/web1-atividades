import '@picocss/pico'
import '../css/global.css'

const nav =/*html*/`

    <ul>
      <li><a class="contrast" href=" ./index.html">Desenvolvimento Web 1</a></li>
    </ul>
    <!-- Menu Principal-->
    <ul>
      <li>
        <details role="list" dir="rtl">
          <summary role="link" class="contrast">Exercícios</summary> <!-- Texto menu Principal-->
          <ul role="listbox">
            <!-- Sub Menu-->
            <li><a class="primary" href="./login.html">Formulário de Acesso</a></li> <!-- Item do submenu-->
            <li><a class="primary" href="./lista-tarefas.html">Lista de Tarefas</a></li> <!-- Item do submenu-->
            <li><a class="primary" href="./conta.html">Criar Conta</a></li> <!-- Item do submenu-->
            <li><a class="primary" href="./cliente.html">Cadastro de Clientes</a></li> <!-- Item do submenu-->
            <li><a class="primary" href="./pagamento.html">Detalhes de Pagamento</a></li> <!-- Item do submenu-->
          </ul>
          <!-- fim do Sub Menu-->
        </details>
      </li>
    </ul>
    <!-- Fim do Menu Principal-->
`
const menu = document.querySelector("#menu")
menu.innerHTML = nav