//Gráfico bar
let barGrafico = document.getElementById('barGrafico');
const config = {
    type: 'bar',
    data: { labels: [
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
    datasets: [{label: 'Número de horas trabalhadas', data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(128, 0, 128)'
      ],
    }],
    }
}

let myGraph = new Chart(barGrafico, config);
//Gráfico bar

//Gráfico pie
let pieGrafico = document.getElementById('pieGrafico');
const dataPie = {
    labels: [
      'Programadores',
      'Analistas',
      'Gerentes'
    ],
    datasets: [{
      label: 'Funcionários disponíveis',
      data: [500, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const configPie = {
    type: 'pie',
    data: dataPie,
};  


let myPieGrafico = new Chart(pieGrafico, configPie);
// Gráfico pie


// Gráfico line
let lineGrafico = document.getElementById('lineGrafico');

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];
const dataLine = {
  labels: labels,
  datasets: [{
    label: 'Quantidade de projetos',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const configLine = {
    type: 'line',
    data: dataLine,
};

let myLineGrafico = new Chart(lineGrafico, configLine);
// Gráfico line