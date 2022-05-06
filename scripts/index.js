//PEDRO
let botaoSim =  document.getElementById('btnradio1');
let botaoNao = document.getElementById('btnradio2');

let tipo1 = document.getElementById('labelTipo1');
let tipo2 = document.getElementById('labelTipo2');

let tipoPosicao1 = document.getElementById('tipo1');
let tipoPosicao2 = document.getElementById('tipo2');

botaoSim.addEventListener('click', () =>{
    if(botaoSim.checked){

        tipoPosicao1.setAttribute('name', 'registro');
        tipoPosicao2.setAttribute('name', 'governanca');

        tipo1.innerHTML = 'Registro';
        tipo2.innerHTML = 'Governança';

        console.log(tipoPosicao1);
        console.log(tipoPosicao2);
    }
});

botaoNao.addEventListener('click', () =>{
    if(botaoNao.checked){

        tipoPosicao1.setAttribute('name', 'empresa');
        tipoPosicao2.setAttribute('name', 'duracaocontrato');

        tipo1.innerHTML = 'Empresa';
        tipo2.innerHTML = 'Duração do contrato';

        console.log(tipoPosicao1);
        console.log(tipoPosicao2);
    }
});