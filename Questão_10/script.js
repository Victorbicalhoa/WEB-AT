window.addEventListener('load', () => {
    console.log('Página carregada!');

    const language = navigator.language || navigator.userLanguage;
    const url = window.location.href;

    const infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = `<p>Linguagem do navegador: ${language}</p>
                               <p>URL atual: ${url}</p>`;

    if (infoContainer.innerHTML.includes(language) && infoContainer.innerHTML.includes(url)) {
        alert('Informações inseridas na página com sucesso!');
        
        window.location.href = 'https://www.infnet.edu.br/';
    }
});
