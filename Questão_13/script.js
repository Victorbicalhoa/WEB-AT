const formulario = document.getElementById('formularioWhatsApp');
const inputTelefone = document.getElementById('telefone');
const inputMensagem = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', () => {
    const telefone = inputTelefone.value.trim();
    const mensagem = encodeURIComponent(inputMensagem.value.trim());

    if (telefone && mensagem) {
        const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagem}`;
        
        window.open(urlWhatsApp, '_blank');
    } else {
        alert('Por favor, preencha o número de telefone e a mensagem.');
    }
});
