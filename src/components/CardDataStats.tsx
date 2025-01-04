import React from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-3 px-5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mt-2 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center ${
            levelUp ? 'text-green-500' : levelDown ? 'text-red-500' : 'text-gray-500'
          }`}>
          {rate}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
