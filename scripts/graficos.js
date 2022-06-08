//Gráfico bar
let barGrafico = document.getElementById('barGrafico');
const config = {
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
    datasets: [{label: 'humanResources', data: [5400, 6900, 7200, 7100, 5600, 6010, 5000, 6000, 5600, 5000, 5750, 5590],
    backgroundColor: [
      ' #247BA0',
    ],
  order: 2
  }, {  
    label: 'Workload Needed',
         data: [6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500, 6500],
         type: 'line',
         borderColor: '	#cccc00',
  order: 1
  }, {  
    label: 'IT Limitation Internal and third parties',
         data: [5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500, 5500],
         type: 'line',
         borderColor: '#FB3640',
  order: 1
  }, {  
    label: 'IT Limitation only with internal resources',
         data: [2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500, 2500],
         type: 'line',
         borderColor: '#FB3640',
         order: 1
  }
],
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
    datasets: [{label: 'Horas/Projetos', data: [5400, 6900, 7200, 7100, 5500, 6000, 5000, 6000, 4500, 5000, 7000, 6000],
    backgroundColor: [
        ' #247BA0',
      ],
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