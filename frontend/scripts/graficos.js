//Gráfico bar
let barGrafico = document.getElementById('barGrafico');
const config = {
    type: 'bar',
    data: { labels: [
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
        'Projeto 6',
        'Projeto 7',
        'Projeto 8',
        'Projeto 9',
        'Projeto 10',
        'Projeto 11',
        'Projeto 12'
    ], 
    datasets: [{label: 'Horas de cada Projeto', data: [300, 500, 300, 400, 500, 550, 450, 500, 500, 550, 300, 550],
    backgroundColor: [
        ' #247BA0',
        ' #0A2463',
        ' #605F5E'
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
      'Programadores JavaScript',
      'Gerentes',
      'Analistas de sistema',
      'Programadores Pyton'
    ],
    datasets: [{
      label: 'Disponibilidade Horas/Funções',
      data: [500, 50, 100, 100],
      backgroundColor: [
        ' #247BA0',
        ' #605F5E',
        ' #e53420',
        ' #0A2463'
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


let mixedGrafico = document.getElementById('mixedGrafico');
const confige = {
    type: 'bar',
    data: { labels: [
        'Janeiro',
        'Feverreiro',
        'Marco',
        'Abril',
        'Maio',
        'Junho',
        'Julho ',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ], 
    datasets: [{label: 'Horas/Projeto', data: [900, 500, 800, 800, 900, 700, 900, 550, 600, 900, 600, 800],
    backgroundColor: [
        ' #0A2463',
        ' #247BA0',
        ' #605F5E',
      ],
    order: 2
    }, {  
      label: 'Limite de horas',
           data: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
           type: 'line',
           borderColor: '#FB3640',
           order: 1
    }
  ],
    }
}

let myGrapho = new Chart(mixedGrafico, confige);




let lineGrafico = document.getElementById('lineGrafico');

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const data = {
  labels: labels,
  datasets: [{
    label: 'Grafico Area',
    fill: true,
    backgroundColor: ' #247BA0',
    borderColor: ' #0A2463',
    data: [10, 35, 32, 35, 30, 37, 45],
  }]
};

const configg = {
  type: 'line',
  data: data,
  options: {}
};

let myGraphy = new Chart(lineGrafico, configg);