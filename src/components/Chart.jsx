import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: [
      5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000,
      55000, 60000,
    ],
    datasets: [
      {
        label: "Sales",
        data: [20, 40, 60, 80, 100],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return (
    <div className="mt-20 p-4 bg-white shadow-lg rounded-md">
      <Line data={data} />
    </div>
  );
};

export default ChartComponent;
