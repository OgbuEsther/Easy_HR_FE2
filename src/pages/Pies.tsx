import React from 'react'
import { Line } from "react-chartjs-2"
import Chart from 'chart.js/auto';

const Pies = () => {

  const data: any = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Income',
      data: [1000, 2000, 3000, 4000, 5000, 6000],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
    {
      label: 'Expenses',
      data: [500, 1000, 1500, 2000, 2500, 3000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

  const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

  return (
    <div>
      {/* <Line type={Chart} data={data} options={options} /> */}
    </div>
  )
}

export default Pies