let botao = document.getElementById('meuBotao');

botao.addEventListener('mouseover', () => {
    botao.style.backgroundColor = 'lightblue';
});

botao.addEventListener('mouseout', () => {
    botao.style.backgroundColor = 'lightgrey';
});

botao.addEventListener('mousedown', () => {
    botao.textContent = 'Alterado';
});
