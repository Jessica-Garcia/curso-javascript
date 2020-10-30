const inputTarefa = document.querySelector('.input-tarefa')
const addTarefa = document.querySelector('.add-tarefa')
const listaTarefas = document.querySelector('.tarefas')

// cria o elemento li
const criaLi = () => {
    const li = document.createElement('li')
    return li
}

// cria o botão apagar na linha
const criaBotaoApagar = (li) => {

    // cria o botão
    const botaoApagar = document.createElement('button')

    // adiciona um texto no botão

    botaoApagar.innerText = 'Apagar'

    // adiciona uma classe no botão para que ele possa ser selecionado depois
    //uma forma seria: botaoApagar.classList.add('apagar')
    // outra forma

    botaoApagar.setAttribute('class', 'apagar')

    // adiciona um espaço entre o texto que existe na linha e o botão
    li.innerText += '   '

    // adiciona o botão na linha

    li.appendChild(botaoApagar)

}

const criaTarefa = (textoInput) => {
    //cria uma linha
    const linhaDaLista = criaLi()

    // adiciona dentro da linha criada o valor escrito no input
    linhaDaLista.innerText = textoInput

    // cria o botão apagar na linha ao lado do texto do input
    criaBotaoApagar(linhaDaLista)

    // adiciona a linha com o valor e o botão na lista
    listaTarefas.appendChild(linhaDaLista)

    // limpa o input
    limpaInput()

    // salva a tarefa

    salvaTarefas()
}

// para limpar o input após criar tarefa

const limpaInput = () => {
    // passa um valor vazio para o input
    inputTarefa.value = ''

    //devolve o cursor para o input aṕos limpar o valor, sem precisar clicar no input
    inputTarefa.focus()
}

// para salvar a tarefa após criá-la, e apagá-la do localstorage quando elas forem apagadas
const salvaTarefas = () => {
    // selecionando as linhas da lista de tarefas
    const liTarefas = listaTarefas.querySelectorAll('li')

    // selecionando todos os textos das li e colocando em um array

    const todasAsTArefas = []

    for (let tarefa of liTarefas) {

        let tarefaTexto = tarefa.innerText

        // apagando o texto do botão apagar do texto selecionado da linha da tarefa e pagando os espaços em branco
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()

        // colocando todos dos textos que correspondem às tarefas no array
        todasAsTArefas.push(tarefaTexto)
    }

    // criando uma string com as tarefas a partir do array com todas as tarefas
    // converte um elemento javascript para uma string no formato JSON

    const tarefasJ = JSON.stringify(todasAsTArefas)

    // criando um local no navegador para salvar as tarefas, passando o nome do que será salvo,
    //esse nome será usado para recuperar o que foi salvo, e também deve ser passado a string recem formada com os 
    // valores que se quer salvar

    localStorage.setItem('tarefas', tarefasJ)
}

// quando site for carregado as tarefas salvas devem ser carregadas ali novamente
// crirar uma função que vai ler as tarefas e vai colocá-las de volta na lista
// obtem as tarefas do local storage e à mantém na página

const adicionaTarefasSalvas = () => {
    // obtem as tarefas do localStorage
    const tarefas = localStorage.getItem('tarefas');

    // converte a string de tarefas no formato Json para um array javascript novamente

    const listaComTarefas = JSON.parse(tarefas);

    // para cada tarefa do array com todas as tarefas cria uma tarefa com o texto dessa tarefa 
    for (let tarefa of listaComTarefas) {
        criaTarefa(tarefa)
    }
}

adicionaTarefasSalvas()

// capturando o pressionar da tecla enter dentro do input, para criar uma tarefa (keyCode da tecla enter = 13)

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

//capturando o evento de click no botão que adiciona tarefa para criar tarefa

addTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

// adicionando a funcionalidade de apagar ao botão apagar

// capturando o evento de click no documento HTML

document.addEventListener('click', (e) => {
    // vê qual elemento do html está sendo clicado
    const elemento = e.target

    // seleciona o elemento pela classe
    if (elemento.classList.contains('apagar')) {

        // quando o botão for clicado o elemento pai do botão deve ser apagado, ou seja a li onde está contido o botão

        elemento.parentElement.remove()

        // usar a função salvaTarefas para removê-la do localStorage quando ela for apagada

        salvaTarefas()
    }
})