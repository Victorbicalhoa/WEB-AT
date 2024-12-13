const lista = document.getElementById('minhaLista');

const botaoAlterar = document.getElementById('alterarTexto');
botaoAlterar.addEventListener('click', () => {
    const item3 = lista.children[2];
    item3.textContent = 'Texto 3 Alterado';
});

const botaoRemover = document.getElementById('removerItem');
botaoRemover.addEventListener('click', () => {
    lista.removeChild(lista.lastElementChild);
});

const botaoAdicionar = document.getElementById('adicionarItem');
botaoAdicionar.addEventListener('click', () => {
    
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo Item';
    lista.appendChild(novoItem);
});
