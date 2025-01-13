import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import useFetchData from '../../hooks/UseFetchData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { getUserId } from "../../utils/TokenHelpers";
import { ForecastingService } from '../../services/ForecastingService';
import { UserService } from '../../services/UserService';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DemandFluctuationsChart = () => {
  const userId = getUserId();
  const [selectedSupply, setSelectedSupply] = useState(null);
  const [alpha, setAlpha] = useState(0.5);
  const [forecastValues, setForecastValues] = useState({ actual: [], predicted: [] });

  const { data: supplies, error, loading, refetch } = useFetchData(() => UserService.getAllSuppliesByUser(userId), [userId]);

  useEffect(() => {
    if (selectedSupply && alpha) {
      const fetchForecast = async () => {
        try {
          const response = await ForecastingService.forecastByUser(userId, selectedSupply.id, alpha);
          setForecastValues({
            actual: response.actualValues || [],
            predicted: response.forecastedValues || [],
          });
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };
      fetchForecast();
    }
  }, [userId, selectedSupply, alpha]);

  const handleSupplyChange = (event) => {
    const selected = supplies.find(supply => supply.id === parseInt(event.target.value));
    setSelectedSupply(selected);
  };

   // Generate labels for each quarter in each year (Q1 to Q4)
   const labels = Array.from({ length: Math.max(forecastValues.actual.length, forecastValues.predicted.length) }, (_, i) => {
    const year = Math.floor(i / 4) + 1;  // Determine the year (1 for first year, 2 for second year, etc.)
    const quarter = (i % 4) + 1;         // Determine the quarter (1, 2, 3, or 4)
    return `Year ${year} Q${quarter} `;
  });

  const demandData = {
    labels,
    datasets: [
      {
        label: 'Actual Demand',
        data: forecastValues.actual,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Predicted Demand',
        data: forecastValues.predicted,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Medicine Demand Forecasting',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw} units`,
        },
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
<div className="container my-4">
  {/* Supply and Alpha Value Inputs Inline */}
  <div className="d-flex justify-content-between mb-4">
    {/* Supply Selection */}
    <div className="me-3" style={{ flex: '1' }}>
      <label htmlFor="supplySelect" className="form-label fw-bold">
        Select Supply:
      </label>
      <select
        id="supplySelect"
        className="form-select"
        onChange={handleSupplyChange}
        value={selectedSupply ? selectedSupply.id : ''}
      >
        <option value="" disabled>
          Select a supply
        </option>
        {supplies.map((supply) => (
          <option key={supply.id} value={supply.id}>
            {supply.brandName} ({supply.genericName})
          </option>
        ))}
      </select>
    </div>

    {/* Alpha Value Input */}
    <div style={{ flex: '1' }}>
      <label htmlFor="alphaValue" className="form-label fw-bold">
        Alpha Value:
      </label>
      <input
        id="alphaValue"
        type="number"
        step="0.1"
        min="0.1"
        max="9"
        value={alpha}
        onChange={(event) => {
          let value = parseFloat(event.target.value);
          if (value < 0.1) value = 0.1; // Enforce min value
          if (value > 9) value = 9; // Enforce max value
          value = parseFloat(value.toFixed(1)); // Ensure one decimal place
          setAlpha(value);
        }}
        className="form-control"
      />
    </div>
  </div>

  {/* Chart */}
  <div className="card">
    <div className="card-body">
      <div style={{ width: '100%', height: '400px' }}>
        <Line data={demandData} options={options} />
      </div>
    </div>
  </div>
</div>

  );
};

export default DemandFluctuationsChart;
