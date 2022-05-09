let canvasElement = document.getElementById('grafico');
let config = {
    type: 'bar',
    data: {labels: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ], 
    datasets: [{label: 'Numero de horas trabalhadas', data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]}],
}
}

let myGraph = new Chart(canvasElement, config);