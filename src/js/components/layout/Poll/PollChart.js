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

  componentDidMount(){
    const ctx = document.getElementById("chart");

    function newNumber(){
      return Math.floor(Math.random() * 256);
    }

    let colors           = this.props.labels.map(l => [newNumber(), newNumber(), newNumber()]),
        backgroundColors = colors.map(c => `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.2)`),
        borderColors     = colors.map(c => `rgba(${c[0]}, ${c[1]}, ${c[2]}, 1)`);

    let chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.props.labels,
        datasets: [{
          label: '# of Votes',
          data: this.props.data,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
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
