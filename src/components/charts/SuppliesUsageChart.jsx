import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SuppliesUsageChart = ({ usage }) => {
  // Dummy data for medicine usage
  const medicineUsage = [
    { name: "Aspirin", usage: 30 },
    { name: "Ibuprofen", usage: 25 },
    { name: "Paracetamol", usage: 40 },
    { name: "Amoxicillin", usage: 20 },
    { name: "Metformin", usage: 15 },
  ];

  const barChartData = {
    labels: medicineUsage.map(medicine => medicine.name), // Medicine names
    datasets: [
      {
        label: 'Usage',
        data: medicineUsage.map(medicine => medicine.usage), // Usage values
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Medicine Usage',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Bar data={barChartData} options={barChartOptions} />
    </div>
  );
};

export default SuppliesUsageChart;
