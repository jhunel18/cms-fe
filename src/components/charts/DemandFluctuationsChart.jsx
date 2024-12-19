import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import useFetchData from '../../hooks/UseFetchData';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { getUserId } from "../../utils/TokenHelpers";
import { ForecastingService } from '../../services/ForecastingService';
import { UserService } from '../../services/UserService'; // Import UserService

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DemandFluctuationsChart = () => {
  const userId = getUserId(); // Get userId from token
  // const [supplies, setSupplies] = useState([]); // State to store supplies
  const [selectedSupply, setSelectedSupply] = useState(null); // Selected supply
  const [alpha, setAlpha] = useState(0.5); // Alpha value for forecasting
  const [forecastValues, setForecastValues] = useState({ actual: [], predicted: [] }); // Forecast data

  // Fetch supplies when the component mounts
  const {
    data: supplies,
    error,
    loading,
    refetch,
  } = useFetchData(() => UserService.getAllSuppliesByUser(userId), [userId]);


  // Fetch forecast data when supply or alpha value changes
  useEffect(() => {
    if (selectedSupply && alpha) {
      const fetchForecast = async () => {
        try {
          const response = await ForecastingService.forecastByUser(userId, selectedSupply.id, alpha);
          
          // Update the state with actual and predicted values
          setForecastValues({
            actual: response.actualValues, // Map to actualValues
            predicted: response.forecastedValues, // Map to forecastedValues
          });
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      };
  
      fetchForecast();
    }
  }, [userId, selectedSupply, alpha]);

  // Handle supply selection
  const handleSupplyChange = (event) => {
    const selected = supplies.find(supply => supply.id === parseInt(event.target.value));
    setSelectedSupply(selected);
  };

  // Handle alpha value change
  const handleAlphaChange = (event) => {
    setAlpha(parseFloat(event.target.value));
  };

  // Chart data based on forecast values
  const demandData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Quarters of the year
    datasets: [
      {
        label: 'Actual Demand',
        data: forecastValues.actual, // Actual data from API response
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Predicted Demand',
        data: forecastValues.predicted, // Predicted data from API response
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
        labels: {
          font: {
            size: 14,
          },
          color: '#333', // Legend text color
        },
      },
      title: {
        display: true,
        text: 'Quarterly Medicine Demand Fluctuations',
        font: {
          size: 18,
          weight: 'bold',
        },
        color: '#333', // Title color
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 12 },
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw} units`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e0e0e0', // Lighter grid lines
          borderDash: [5, 5], // Dashed grid lines
        },
        title: {
          display: true,
          text: 'Demand (Units)',
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#666', // Axis title color
        },
        ticks: {
          font: { size: 12 },
          color: '#555', // Tick color
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        title: {
          display: true,
          text: 'Quarters',
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#666', // Axis title color
        },
        ticks: {
          font: { size: 12 },
          color: '#555', // Tick color
        },
      },
    },
  };
  

  return (
      <div className="container my-4">
        {/* Supply and Alpha Value Inputs Inline */}
        <div className="d-flex align-items-center justify-content-between mb-4">
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
