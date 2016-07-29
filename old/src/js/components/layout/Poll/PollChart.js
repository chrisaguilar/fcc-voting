//Poll chart goes here (using Chart.js)
import React from 'react';
import Chart from 'chart.js';

export default class PollChart extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      labels: []
    }
  }

  componentWillReceiveProps(){}

  componentDidMount(){
    const ctx = document.getElementById("chart");
    let chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: '# of Votes',
          data: this.props.data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              fixedStepSize: 2
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero:true,
              fixedStepSize: 2
            }
          }],
        }
      }
    });
  }
  render() {
    return (
      <canvas id="chart" width="300" height="200"></canvas>
    );
  }
}
