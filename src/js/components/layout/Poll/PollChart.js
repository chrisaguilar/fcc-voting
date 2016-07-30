import React from 'react';
import Chart from 'chart.js';

export default class PollChart extends React.Component {
  componentDidMount(){
    const ctx = document.getElementById("chart");

    function newNumber(){
      return Math.floor(Math.random() * 256);
    }

    let data             = this.props.data.sort((a,b) => (b.votes - a.votes))
        colors           = data.map(l => [newNumber(), newNumber(), newNumber()]),
        backgroundColors = colors.map(c => `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.2)`),
        borderColors     = colors.map(c => `rgba(${c[0]}, ${c[1]}, ${c[2]}, 1)`),
        names            = data.map(d => d.name),
        votes            = data.map(d => d.votes);

    let chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: names,
        datasets: [{
          label: '# of Votes',
          data: votes,
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
