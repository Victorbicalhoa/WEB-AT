let inputTarefa = document.getElementById('novaTarefa');
let botaoAdicionar = document.getElementById('adicionarTarefa');
let listaTarefas = document.getElementById('listaTarefas');


function adicionarTarefa() {
    let textoTarefa = inputTarefa.value.trim();
    if (textoTarefa !== '') {
        let novaTarefa = document.createElement('li');
        novaTarefa.className = 'tarefa';

        novaTarefa.textContent = textoTarefa;

        let botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.addEventListener('click', () => {
            listaTarefas.removeChild(novaTarefa);
        });

        novaTarefa.appendChild(botaoRemover);

        listaTarefas.appendChild(novaTarefa);

        inputTarefa.value = '';
    }
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});
