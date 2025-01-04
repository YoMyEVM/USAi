import React, { useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import TableOne from '../../components/Tables/TableOne';
import MapOne from '../../components/Maps/MapOne';

const Home: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <>
{/* Stats Section */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 -mb-6 bg-boxdark py-1">
        <CardDataStats title="USAI Price" total="$3.456" rate="0.0%" levelUp />
        <CardDataStats title="Total Value Locked" total="$45.2K" rate="0.0%" levelUp />
        <CardDataStats title="Total Supply" total="2.450" rate="0.0%" levelUp />
        <CardDataStats title="Market Cap" total="3.456" rate="0.0%" levelUp />
        <CardDataStats title="States Founded" total="1" rate="0.0%" levelDown />
        <CardDataStats title="Weekly Volume" total="$45.2K" rate="0.0%" levelUp />
        <CardDataStats title="Total Users" total="1" rate="0.0%" levelUp />
        <CardDataStats title="Nation's Treasury" total="3.456" rate="0.0%" levelUp />
      </div>


      {/* Full-Width Map Section */}
      <div className="bg-boxdark py-6">
      <ChartOne /> 
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-12 gap-6 bg-boxdark py-6 px-6">
        <div className="col-span-12 xl:col-span-6 bg-boxdark rounded-sm p-6">
          <MapOne setSelectedState={setSelectedState} />
        </div>
        <div className="col-span-12 xl:col-span-6 bg-boxdark rounded-sm p-6">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            {selectedState ? `${selectedState} State` : 'Select a State'}
          </h1>
          <div className="flex justify-center gap-4">
            <button className="w-1/2 px-6 py-4 bg-green-500 text-black font-bold text-lg rounded hover:bg-green-600">
              Buy
            </button>
            <button className="w-1/2 px-6 py-4 bg-red-500 text-black font-bold text-lg rounded hover:bg-red-600">
              Sell
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width Table Section */}
      <div className="bg-boxdark py-6 px-6">
        <TableOne />
      </div>
    </>
  );
};

export default Home;
