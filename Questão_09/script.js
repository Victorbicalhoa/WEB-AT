const botao = document.getElementById('meuBotao');

botao.addEventListener('click', () => {
    console.log('Click');
    botao.textContent = botao.textContent === 'Clique em mim' ? 'Você me clicou!' : 'Clique em mim';
});

const paragrafo = document.getElementById('meuParagrafo');


paragrafo.addEventListener('mouseover', () => {
    paragrafo.style.color = 'blue';
});

paragrafo.addEventListener('mouseout', () => {
    paragrafo.style.color = 'black';
});
