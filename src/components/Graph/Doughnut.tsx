import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const emptyArr: any = [];

const generateRandomNumbers = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min));
};

let letters = "abcdef";
Array.from({ length: 10 }, () => {
  emptyArr.push({
    item: letters[Math.floor(Math.random() * letters.length)],
    cost: generateRandomNumbers(95, 20),
  });
});


export const data = {
  labels: emptyArr.map((el: any) => el.item),
  datasets: [
    {
      label: 'cost',
      data: emptyArr.map((el: any) => el.cost),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

 function Doughnuts() {
  return <Doughnut data={data} />;
}

export default Doughnuts