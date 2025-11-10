let botao = document.getElementById('enviar');
botao.addEventListener('click', clicar);

function clicar()
{
    let velocidade = Number(document.getElementById('velocidade').value);
    let res = document.getElementById('resultado');
    res.innerHTML += `Você atingiu a velocidade de ${velocidade}Km/h<br>`;
    if (velocidade > 60)
    {
        res.innerHTML += `Você ultrapassou o limite de velocidade. Você está <strong>MULTADO</strong>, seu bosta`;
    }
}