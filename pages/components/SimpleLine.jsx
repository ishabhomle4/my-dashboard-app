import React, { useEffect,useRef  } from 'react';
//import { AgChartsReact} from 'ag-charts-react';
//import 'ag-charts-community/styles/ag-charts.css'; // Import the styles
import {AgCharts} from 'ag-charts-community';
import { getData } from '@/pages/data';

const SimpleLine = () => {
    const chartRef = useRef(null);
  useEffect(() => {
    const dateFormatter = new Intl.DateTimeFormat("en-US");
    const tooltip = {
      renderer: ({ title, datum, xKey, yKey }) => ({
        title,
        content: `${dateFormatter.format(datum[xKey])}: ${datum[yKey]}`,
      }),
    };

    const options = {
      container: document.getElementById("myChart"),
      data: getData(),
      title: {
        text: "Road Fuel Prices",
      },
      footnote: {
        text: "Source: Department for Business, Energy & Industrial Strategy",
      },
      series: [
        {
          type: "line",
          xKey: "date",
          yKey: "petrol",
          tooltip,
        },
        {
          type: "line",
          xKey: "date",
          yKey: "diesel",
          tooltip,
        },
      ],
      axes: [
        {
          position: "bottom",
          type: "time",
          title: {
            text: "Date",
          },
          label: {
            format: "%b",
          },
        },
        {
          position: "left",
          type: "number",
          title: {
            text: "Price in Pence",
          },
        },
      ],
    };

   /* AgCharts.create(options);
  }, []);*/
  if (!chartRef.current) {
    chartRef.current = AgCharts.create(options);
  }

  return () => {
    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }
  };
}, []);

  return (
    <div id="myChart" style={{ height: '500px', width: '100%' }}></div>
  );
};

export default SimpleLine;
