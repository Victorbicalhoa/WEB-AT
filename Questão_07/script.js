let textos = [
    "A persistência é o caminho do êxito.",
    "A vida é 10% o que acontece a você e 90% como você reage a isso.",
    "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz."
];

function obterTextoAleatorio() {
    let indice = Math.floor(Math.random() * textos.length);
    return textos[indice];
}

let botao = document.getElementById('adicionarParagrafo');
let conteiner = document.getElementById('conteiner');

botao.addEventListener('click', () => {
    let novoParagrafo = document.createElement('p');
    novoParagrafo.textContent = obterTextoAleatorio();
    conteiner.appendChild(novoParagrafo);
});
