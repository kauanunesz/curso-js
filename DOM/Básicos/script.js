let a = document.getElementById('area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrou);
a.addEventListener('mouseout', saiu);
// Mesma coisa somente em JS

function clicar()
{
    a.innerText = 'Clicou';
    a.style.backgroundColor = 'red';    
}
function entrou()
{
    a.innerText = 'Entrou!';
}
function saiu()
{
    a.innerText = 'Saiu!';
    a.style.backgroundColor = 'aquamarine';    
}