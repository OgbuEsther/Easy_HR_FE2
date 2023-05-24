import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Revenue Over Time",
    },
  },
};

const emptyArr: any = [];

const generateRandomNumbers = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min));
};

let letters = "abcdefghijklmnopqrstuvwxyz";
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
      label: "cost",
      data: emptyArr.map((el: any) => el.cost),
      backgroundColor: "#fd625e",
    },
    {
      label: "item",
      data: emptyArr.map((el: any) => el.item),
      backgroundColor: "#28383c",
    },
  ],
};

function Charts() {
  return <Bar options={options} data={data} style={{
    width: '100%',
    height: '100%'
  }}/>;
}

export default Charts;