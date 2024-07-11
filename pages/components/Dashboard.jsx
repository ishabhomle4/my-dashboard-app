// import React, { useState } from 'react';
// import ChartComponent from '@/pages/components/ChartComponent';
// import MapKitchenSink from '@/pages/components/MapKitchenSink';
// import SimpleLine from '@/pages/components/SimpleLine';
// import PieDonut from '@/pages/components/PieDonut';
// import FullScreenModal from '@/pages/components/FullScreenModal';

// const Dashboard = () => {
//   const [modalContent, setModalContent] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (content) => {
//     setModalContent(content);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//     <div className="dashboard grid grid-cols-2 gap-4 p-4">
//       <div 
//         className="chart-tile hover:shadow-lg cursor-pointer"
//         onClick={() => openModal(<ChartComponent />)}
//       >
//         <h2>Chart 1</h2>
//         <ChartComponent />
//       </div>
//       <div 
//         className="chart-tile hover:shadow-lg cursor-pointer"
//         onClick={() => openModal(<MapKitchenSink />)}
//       >
//         <h2>Chart 2</h2>
//         <MapKitchenSink />
//       </div>
//       <div 
//         className="chart-tile hover:shadow-lg cursor-pointer"
//         onClick={() => openModal(<SimpleLine />)}
//       >
//         <h2>Chart 3</h2>
//         <SimpleLine />
//       </div>
//       <div 
//         className="chart-tile hover:shadow-lg cursor-pointer"
//         onClick={() => openModal(<PieDonut />)}
//       >
//         <h2>Chart 4</h2>
//         <PieDonut />
//       </div>

//       <FullScreenModal isOpen={isModalOpen} onClose={closeModal}>
//         {modalContent}
//       </FullScreenModal>
//     </div>
//   );
// };

// export default Dashboard;


/*this is updated code
import React, { useState } from 'react';
import ChartComponent from '@/pages/components/ChartComponent';
import MapKitchenSink from '@/pages/components/MapKitchenSink';
import SimpleLine from '@/pages/components/SimpleLine';
import PieDonut from '@/pages/components/PieDonut';

const Dashboard = () => {
  const [fullScreenChart, setFullScreenChart] = useState(null);

  const handleTileClick = (chart) => {
    setFullScreenChart(chart);
  };

  const handleExitFullScreen = () => {
    setFullScreenChart(null);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {!fullScreenChart && (
        <>
          <div onClick={() => handleTileClick('ChartComponent')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 1</h2>
            <SimpleLine />
          </div>
          <div onClick={() => handleTileClick('MapKitchenSink')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 2</h2>
            <MapKitchenSink />
          </div>
          }
          <div onClick={() => handleTileClick('ChartComponent')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 3</h2>
            <ChartComponent/>
          </div>
          <div onClick={() => handleTileClick('PieDonut')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 4</h2>
            <PieDonut />
          </div>
        </>
      )}

      {fullScreenChart && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 p-4">
          <button onClick={handleExitFullScreen} className="absolute top-4 right-4 text-xl font-bold">X</button>
          {fullScreenChart === 'ChartComponent' && <ChartComponent />}
          {fullScreenChart === 'MapKitchenSink' && <MapKitchenSink />}
          {fullScreenChart === 'SimpleLine' && <SimpleLine />}
          {fullScreenChart === 'PieDonut' && <PieDonut />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;*/

import React, { useState } from 'react';
import ChartComponent from '@/pages/components/ChartComponent';
import MapKitchenSink from '@/pages/components/MapKitchenSink';
import SimpleLine from '@/pages/components/SimpleLine';
import PieDonut from '@/pages/components/PieDonut';

const Dashboard = () => {
  const [fullScreenChart, setFullScreenChart] = useState(null);

  const handleTileClick = (chart) => {
    setFullScreenChart(chart);
  };

  const handleExitFullScreen = () => {
    setFullScreenChart(null);
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {!fullScreenChart && (
        <>
          <div onClick={() => handleTileClick('ChartComponent')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 1</h2>
            <ChartComponent />
          </div>
          <div onClick={() => handleTileClick('MapKitchenSink')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 2</h2>
            <MapKitchenSink />
          </div>
          <div onClick={() => handleTileClick('SimpleLine')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 3</h2>
            <SimpleLine />
          </div>
          <div onClick={() => handleTileClick('PieDonut')} className="chart-tile p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">Chart 4</h2>
            <PieDonut />
          </div>
        </>
      )}

      {fullScreenChart && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 p-4 overflow-auto">
          <button onClick={handleExitFullScreen} className="absolute top-4 right-4 text-xl font-bold">X</button>
          {fullScreenChart === 'ChartComponent' && <ChartComponent />}
          {fullScreenChart === 'MapKitchenSink' && <MapKitchenSink />}
          {fullScreenChart === 'SimpleLine' && <SimpleLine />}
          {fullScreenChart === 'PieDonut' && <PieDonut />}
        </div>
      )}
    </div>
  );
};

export default Dashboard;


