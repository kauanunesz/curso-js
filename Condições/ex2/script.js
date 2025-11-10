let botao = document.getElementById('botao');
botao.addEventListener('click', descobrirNacionalidade);

function descobrirNacionalidade() {
    const res = document.getElementById('res');
    const pais = document.getElementById('pais').value.trim().toLowerCase();

    if (pais === 'brasil') {
        res.innerHTML = 'Você é brasileiro!';
    } else if (pais === '') {
        res.innerHTML = 'Por favor, insira um país.';
    } else {
        res.innerHTML = 'Você é estrangeiro!';
    }
}
