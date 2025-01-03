import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import { useEffect } from 'react';
import '../../js/us-aea-en';

interface MapOneProps {
  setSelectedState: (state: string | null) => void;
}

const MapOne: React.FC<MapOneProps> = ({ setSelectedState }) => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'us_aea_en',
      zoomButtons: false,

      regionStyle: {
        initial: {
          fill: '#C8D0D8',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },

      regionLabelStyle: {
        initial: {
          fontFamily: 'Satoshi',
          fontWeight: 'semibold',
          fill: '#000', // Change this to black
        },
        hover: {
          cursor: 'pointer',
        },
      },

      labels: {
        regions: {
          render(code: string) {
            return code.split('-')[1];
          },
        },
      },

      // Handle region clicks
      onRegionClick: (_event: any, code: string) => {
        const regionName = code.split('-')[1]; // Extract the state name
        setSelectedState(regionName); // Update the parent state
      },
    });

    return () => {
      // Cleanup map on component unmount
      mapOne.destroy();
    };
  }, [setSelectedState]); // Include setSelectedState in the dependency array

  return (
    <div className="col-span-12 flex justify-center items-center rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div id="mapOne" className="mapOne map-btn h-90 w-full max-w-4xl"></div>
    </div>
  );
};

export default MapOne;
