
// import React, { useEffect, useRef } from 'react';
// import * as agCharts from 'ag-charts-community';
// import getData from '@/pages/data2';

// const ChartComponent = () => {
//   const chartContainerRef = useRef(null);

//   useEffect(() => {
//     if (chartContainerRef.current) {
//       const options = {
//         container: chartContainerRef.current,
//         data: getData(),
//         title: {
//           text: "Engine Size Distribution",
//         },
//         subtitle: {
//           text: "USA 1987",
//         },
//         footnote: {
//           text: "Source: UCI",
//         },
//         series: [
//           {
//             type: "histogram",
//             xKey: "engine-size",
//             xName: "Engine Size",
//             stroke: "transparent",
//             strokeWidth: 2,
//             cornerRadius: 6,
//           },
//         ],
//         axes: [
//           {
//             position: "bottom",
//             type: "number",
//             nice: false,
//             title: {
//               text: "Engine Size (Cubic Inches)",
//             },
//           },
//           {
//             position: "left",
//             type: "number",
//             gridLine: {
//               enabled: false,
//             },
//             title: {
//               text: "Frequency",
//             },
//           },
//         ],
//       };

//       const chart = agCharts.AgCharts.create(options);

//       // Cleanup function to destroy the chart instance when the component unmounts
//       return () => {
//         chart.destroy();
//       };
//     }
//   }, []);

//   return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
// };

// export default ChartComponent;


/*here I used the api for country data
import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const apiData = await fetchData('http://127.0.0.1:8000/api/country-data/');
        setData(apiData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data) {
      const options = {
        container: chartContainerRef.current,
        data: data, // Use the fetched data here
        title: {
          text: "Country Data Histogram",
        },
        subtitle: {
          text: "API Data",
        },
        footnote: {
          text: "Source: API",
        },
        series: [
          {
            type: "histogram",
            xKey: "literacy_rate", // Replace with the actual attribute name from your API data
            xName: "Attribute",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "number",
            nice: false,
            title: {
              text: "Attribute",
            },
          },
          {
            position: "left",
            type: "number",
            gridLine: {
              enabled: false,
            },
            title: {
              text: "Frequency",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;

//focussing on publically available datasets from an api
/*import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.worldbank.org/v2/country/US/indicator/NY.GDP.MKTP.CD?format=json&date=2018:2022');
      const data = await response.json();
      const processedData = data[1].map(item => ({
        year: item.date,
        revenue: item.value
      }));
      setChartData(processedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && chartData.length > 0) {
      const options = {
        container: chartContainerRef.current,
        data: chartData,
        title: {
          text: "US Revenue Distribution",
        },
        subtitle: {
          text: "Past 5 Years",
        },
        footnote: {
          text: "Source: World Bank",
        },
        series: [
          {
            type: "histogram",
            xKey: "year",
            xName: "Year",
            yKey: "revenue",
            yName: "Revenue",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "category",
            title: {
              text: "Year",
            },
          },
          {
            position: "left",
            type: "number",
            title: {
              text: "Revenue (USD)",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [chartData]);

  return <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }}></div>;
};

export default ChartComponent;
*/

/*import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRevenueData = async () => {
      const apiUrl = `https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        // Extract revenue data for the last 5 years
        const financials = result.financials;
        if (!financials || financials.length === 0) {
          throw new Error('No financial data available');
        }
        const revenueData = financials.slice(0, 5).map(entry => ({
          year: entry.date.slice(0, 4),
          revenue: parseFloat(entry.Revenue)
        }));
        setData(revenueData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getRevenueData();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data) {
      const options = {
        container: chartContainerRef.current,
        data: data,
        title: {
          text: "Revenue Data for Last 5 Years",
        },
        subtitle: {
          text: "Financial Modeling Prep API",
        },
        footnote: {
          text: "Source: Financial Modeling Prep",
        },
        series: [
          {
            type: "column",
            xKey: "year",
            yKeys: ["revenue"],
            yNames: ["Revenue"],
            fills: ["#5A67D8"],
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "category",
            title: {
              text: "Year",
            },
          },
          {
            position: "left",
            type: "number",
            title: {
              text: "Revenue",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;
*/


/*import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const tickers = ['WTFCP', 'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB']; // Replace with actual tickers

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const requests = tickers.slice(0, 100).map(ticker => // Fetching data for first 100 tickers
          fetchData(`http://127.0.0.1:8000/api/live/${ticker}/`)
        );

        const responses = await Promise.all(requests);
        const aggregatedData = responses.flat();

        setData(aggregatedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      const options = {
        container: chartContainerRef.current,
        data: data, // Use the fetched data here
        title: {
          text: "Stock Data",
        },
        subtitle: {
          text: "API Data",
        },
        footnote: {
          text: "Source: API",
        },
        series: [
          {
            type: "histogram",
            xKey: "avg_stock_price_5yrs", // Use avg_stock_price_5yrs from your API data
            xName: "Average Stock Price (5 years)",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "number",
            nice: false,
            title: {
              text: "Average Stock Price (5 years)",
            },
          },
          {
            position: "left",
            type: "number",
            gridLine: {
              enabled: false,
            },
            title: {
              text: "Frequency",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;*/


/*import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const tickers = ['WTFCP', 'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB','AB','AAT','AAPL']; // Replace with actual tickers

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const requests = tickers.slice(0, 100).map(ticker =>
          fetchData(`http://127.0.0.1:8000/api/live/${ticker}/`)
        );

        const responses = await Promise.all(requests);
        const aggregatedData = responses.flat();
        console.log('Aggregated Data:', aggregatedData); // Log aggregated data to check

        setData(aggregatedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      console.log('Data to render:', data); // Log data before rendering chart

      const options = {
        container: chartContainerRef.current,
        data: data, // Use the fetched data here
        title: {
          text: "Stock Data",
        },
        subtitle: {
          text: "API Data",
        },
        footnote: {
          text: "Source: API",
        },
        series: [
          {
            type: "histogram",
            xKey: "avg_stock_price_5yrs", // Use avg_stock_price_5yrs from your API data
            xName: "Average Stock Price (5 years)",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "number",
            nice: false,
            title: {
              text: "Average Stock Price (5 years)",
            },
          },
          {
            position: "left",
            type: "number",
            gridLine: {
              enabled: false,
            },
            title: {
              text: "Frequency",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;*/

/*import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const tickers = ['WTFCP', 'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB']; // Replace with actual tickers

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const requests = tickers.slice(0, 100).map(ticker =>
          fetchData(`http://127.0.0.1:8000/api/live/${ticker}/`)
        );
        const responses = await Promise.all(requests);
        console.log(responses)
        const aggregatedData = responses.flat();
        setData(aggregatedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      const options = {
        container: chartContainerRef.current,
        data: data,        
        title: {
          text: data.company_name,
        },
        subtitle: {
          text: "CHART",
        },
        footnote: {
          text: "Source: API",
        },
        series: [
          {
            type: "histogram",
            xKey: "avg_stock_price_5yrs",
            xName: "Average Stock Price (5 years)",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
            label: {
              text: {
                formatter: params => `${params.datum.company_location}: ${params.value}` // Display company location and value in the tooltip
              }
            }
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "number",
            nice: false,
            title: {
              text: "Average Stock Price (5 years)",
            },
          },
          {
            position: "left",
            type: "number",
            gridLine: {
              enabled: false,
            },
            title: {
              text: "Frequency",
            },
          },
        ],
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;*/

import React, { useEffect, useRef, useState } from 'react';
import * as agCharts from 'ag-charts-community';

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const tickers = ['WTFCP', 'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB']; // Replace with actual tickers

const ChartComponent = () => {
  const chartContainerRef = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const requests = tickers.slice(0, 100).map(ticker =>
          fetchData(`http://127.0.0.1:8000/api/live/${ticker}/`)
        );
        const responses = await Promise.all(requests);
        const aggregatedData = responses.flat();
        setData(aggregatedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (chartContainerRef.current && data.length > 0) {
      const options = {
        container: chartContainerRef.current,
        data: data,        
        title: {
          text: 'Company Data',
        },
        subtitle: {
          text: "Average Revenue over 5 years",
        },
        footnote: {
          text: "Source: API",
        },
        series: [
          {
            type: "histogram",
            xKey: "avg_revenue_5yrs",
            xName: "Average Revenue (5 years)",
            stroke: "transparent",
            strokeWidth: 2,
            cornerRadius: 6,
            label: {
              formatter: (params) => `${params.datum.company_name}: $${params.value.toFixed(2)}`, // Display company name and value in the tooltip
            }
          },
        ],
        axes: [
          {
            position: "bottom",
            type: "number",
            nice: false,
            title: {
              text: "Average Revenue (5 years)",
            },
          },
          {
            position: "left",
            type: "number",
            gridLine: {
              enabled: false,
            },
            title: {
              text: "Frequency",
            },
          },
        ],
        legend: {
          enabled: true,
        },
        tooltip: {
          enabled: true,
        }
      };

      const chart = agCharts.AgCharts.create(options);

      // Cleanup function to destroy the chart instance when the component unmounts
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '80%' }}></div>;
};

export default ChartComponent;





