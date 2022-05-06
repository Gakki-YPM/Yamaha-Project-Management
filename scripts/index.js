//PEDRO
let botaoSim =  document.getElementById('btnradio1');
let botaoNao = document.getElementById('btnradio2');

let tipo1 = document.getElementById('labelTipo1');
let tipo2 = document.getElementById('labelTipo2');

botaoSim.addEventListener('click', () =>{
    if(botaoSim.checked){
        tipo1.innerHTML = 'Registro';
        tipo2.innerHTML = 'Governança';
    }
});

botaoNao.addEventListener('click', () =>{
    if(botaoNao.checked){
        tipo1.innerHTML = 'Empresa';
        tipo2.innerHTML = 'Duração do contrato';
    }
});