// App.js
import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import './App.css';

function App() {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('https://salespreference-backend.onrender.com/api/sales'); // Fetch data from backend API
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchSalesData();
  }, []);
  return (
    <div className="App">
       <h1>Sales Performance Dashboard</h1>
      <Chart salesData={salesData} /> {/* Pass fetched sales data to Chart component */}
    </div>
  );
}

export default App;
