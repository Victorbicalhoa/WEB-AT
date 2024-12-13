const minhaDiv = document.getElementById('minhaDiv');

minhaDiv.classList.add('ativa');

minhaDiv.classList.remove('caixa');

const botao = document.createElement('button');
botao.textContent = 'Alternar Classe';

botao.addEventListener('click', () => {
  minhaDiv.classList.toggle('ativa');
  minhaDiv.classList.toggle('inativa');
});

document.body.appendChild(botao);

