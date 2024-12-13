const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cardsContainer = document.getElementById('cardsContainer');

function displayDeputados(deputados) {
    cardsContainer.innerHTML = ''; 
    deputados.forEach(deputado => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = deputado.urlFoto;
        card.appendChild(img);

        const name = document.createElement('h2');
        name.textContent = deputado.nome;
        card.appendChild(name);

        const partido = document.createElement('p');
        partido.textContent = `Partido: ${deputado.siglaPartido}`;
        card.appendChild(partido);

        const uf = document.createElement('p');
        uf.textContent = `UF: ${deputado.siglaUf}`;
        card.appendChild(uf);

        cardsContainer.appendChild(card);
    });
}

function fetchDeputados(nome = '') {
    const url = nome 
        ? `https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}`
        : 'https://dadosabertos.camara.leg.br/api/v2/deputados';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const deputados = data.dados.slice(0, 3);
            displayDeputados(deputados);
        })
        .catch(error => {
            console.error('Erro ao buscar os deputados:', error);
        });
}

searchButton.addEventListener('click', () => {
    const nome = searchInput.value.trim();
    fetchDeputados(nome);
});

fetchDeputados();
