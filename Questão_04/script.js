const lista = document.getElementById('minhaLista');
const primeiroItem = lista.firstElementChild;
console.log("Primeiro item:", primeiroItem.textContent);

const ultimoItem = lista.lastElementChild;
console.log("Último item:", ultimoItem.textContent);

const novoItem = document.createElement('li');
novoItem.textContent = 'Novo Item';
lista.appendChild(novoItem);
