// import React, { useEffect, useRef } from 'react';
// import { AgCharts } from 'ag-charts-enterprise';
// import { getData } from '@/pages/data3';

// const PieDonut = () => {
//   const chartRef = useRef(null);
//   const chartContainerRef = useRef(null);
//   const numFormatter = new Intl.NumberFormat("en-US");

//   useEffect(() => {
//     const data = getData();
//     const total = data.reduce((sum, d) => sum + d["count"], 0);

//     const options = {
//       container: chartContainerRef.current,
//       data,
//       title: {
//         text: "Dwelling Fires (UK)",
//       },
//       footnote: {
//         text: "Source: Home Office",
//       },
//       series: [
//         {
//           type: "donut",
//           calloutLabelKey: "type",
//           angleKey: "count",
//           sectorLabelKey: "count",
//           calloutLabel: {
//             enabled: false,
//           },
//           sectorLabel: {
//             formatter: ({ datum, sectorLabelKey }) => {
//               const value = datum[sectorLabelKey];
//               return numFormatter.format(value);
//             },
//           },
//           title: {
//             text: "Annual Count",
//           },
//           innerRadiusRatio: 0.7,
//           innerLabels: [
//             {
//               text: numFormatter.format(total),
//               fontSize: 24,
//             },
//             {
//               text: "Total",
//               fontSize: 16,
//               spacing: 10,
//             },
//           ],
//           tooltip: {
//             renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
//               return {
//                 title,
//                 content: `${datum[calloutLabelKey]}: ${numFormatter.format(datum[sectorLabelKey])}`,
//               };
//             },
//           },
//           sectorSpacing: 3,
//         },
//       ],
//     };

//     if (chartContainerRef.current) {
//       chartRef.current = AgCharts.create(options);
//     }

//     // Cleanup function to destroy the chart instance when the component unmounts
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//         chartRef.current = null;
//       }
//     };
//   }, []);

//   return <div ref={chartContainerRef} style={{ width: '100%', height: '90%' }}></div>;
// };

// export default PieDonut;

import React, { useEffect, useRef, useState } from 'react';
import { AgCharts } from 'ag-charts-community';

const fetchCoinData = async () => {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data.slice(0, 10); // Get top 10 cryptocurrencies
  } catch (error) {
    console.error('Fetching data failed', error);
    throw error;
  }
};

const PieDonut = () => {
  const chartRef = useRef(null);
  const chartContainerRef = useRef(null);
  const numFormatter = new Intl.NumberFormat("en-US");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      try {
        const apiData = await fetchCoinData();
        const processedData = apiData.map(item => ({
          type: item.name,
          count: parseFloat(item.marketCapUsd)
        }));
        setData(processedData);
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
      const total = data.reduce((sum, d) => sum + d.count, 0);

      const options = {
        container: chartContainerRef.current,
        data,
        title: {
          text: "Top 10 Cryptocurrencies by Market Cap",
        },
        footnote: {
          text: "Source: CoinCap API",
        },
        series: [
          {
            type: "donut",
            calloutLabelKey: "type",
            angleKey: "count",
            sectorLabelKey: "count",
            calloutLabel: {
              enabled: false,
            },
            sectorLabel: {
              formatter: ({ datum, sectorLabelKey }) => {
                const value = datum[sectorLabelKey];
                return numFormatter.format(value);
              },
            },
            title: {
              text: "Market Cap (USD)",
            },
            innerRadiusRatio: 0.7,
            innerLabels: [
              {
                text: numFormatter.format(total),
                fontSize: 24,
              },
              {
                text: "Total",
                fontSize: 16,
                spacing: 10,
              },
            ],
            tooltip: {
              renderer: ({ datum, calloutLabelKey, title, sectorLabelKey }) => {
                return {
                  title,
                  content: `${datum[calloutLabelKey]}: $${numFormatter.format(datum[sectorLabelKey])}`,
                };
              },
            },
            sectorSpacing: 3,
          },
        ],
      };

      chartRef.current = AgCharts.create(options);
    }

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div ref={chartContainerRef} style={{ width: '100%', height: '90%' }}></div>;
};

export default PieDonut;
