import React from 'react';

interface ChartThreeProps {
  selectedState: string | null;
}

const ChartThree: React.FC<ChartThreeProps> = ({ selectedState }) => {
  const handleBuyClick = () => {
    console.log(`Buy clicked for ${selectedState}`);
  };

  const handleSellClick = () => {
    console.log(`Sell clicked for ${selectedState}`);
  };

  return (
    <div className="sm:px-7.5 col-span-12 xl:col-span-5 rounded-sm border border-stroke bg-boxdark px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark flex flex-col justify-between h-full">
      {/* Display the selected state's name */}
      <div className="flex justify-center items-center mb-5">
        <h1 className="text-4xl font-bold text-white">
          {selectedState ? `${selectedState} State` : 'Select a State'}
        </h1>
      </div>

      {/* Buy and Sell Buttons */}
      <div className="flex space-x-4 mt-auto">
        <button
          className="w-1/2 px-6 py-4 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleBuyClick}
        >
          Buy
        </button>
        <button
          className="w-1/2 px-6 py-4 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleSellClick}
        >
          Sell
        </button>
      </div>
    </div>
  );
};

export default ChartThree;
