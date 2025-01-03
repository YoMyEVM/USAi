import React, { useState } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';

const ECommerce: React.FC = () => {
  // Manage selected state from MapOne
  const [selectedState, setSelectedState] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Total Views" total="$3.456K" rate="0.43%" levelUp />
        <CardDataStats title="Total Profit" total="$45.2K" rate="4.35%" levelUp />
        <CardDataStats title="Total Products" total="2.450" rate="2.59%" levelUp />
        <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* ChartThree receives selectedState */}
        <ChartThree selectedState={selectedState} />

        {/* MapOne updates selectedState */}
        <MapOne setSelectedState={setSelectedState} />

        <ChartTwo />
        <ChartOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
