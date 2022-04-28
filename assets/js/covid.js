// ChartJS for resident covid 19

// Weekly Graph
var mychartcolors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]
var labels = ['4 Apr 22', '5 Apr 22', '6 Apr 22', '7 Apr 22', '8 Apr 22', '9 Apr 22','10 Apr 22']

const barChartCtx = document.getElementById('weeklyCovidGraph').getContext('2d');
const barChartChart = new Chart(barChartCtx, {
type: 'bar',
data: {
    labels: labels,
    datasets: [
        {
            label: 'New Cases',
            data: [3,5,1,2,4,5,2],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor:'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Active Cases',
            data: [12, 19, 11,12,7,7,9],
            backgroundColor: 'rgba(54, 162, 235, .2)',
            borderColor:'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }
    ]
},
options: {
    responsive: true,
    scales: {
    x: {
        stacked: true,
    },
    y: {
        stacked: false
    }
    }
}
});
// END Stacked Bar Chart

// Daily Chart
const dailyCovidActiveData = {
    labels: [
      'Block A',
      'Block B',
      'Block C',
      'Block D',
    ],
    datasets: [{
      label: 'Yesterday Cases',
      data: [10, 5, 0, 1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth:1,
      hoverOffset: 4
    }]
  };


const dailyChartCtx = document.getElementById('dailyActiveCovidGraph').getContext('2d');
const dailyChartChart = new Chart(dailyChartCtx, {
type: 'pie',
data: dailyCovidActiveData,

});


// Monthly Cases
const monthlyCasesChart = document.getElementById('monthlyActiveCovidGraph').getContext('2d');
const monthlyChart = new Chart(monthlyCasesChart, {
    type: 'bar',
    data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26'],
        datasets: [{
            label: '# of Cases',
            data: [12,2,4,6,2,7,8,2,6,5,12,16,5,3,4,8,9,6,5,6,4,3,4,8,6,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(13, 110, 253, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(13, 110, 253, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});