import Image from "next/image";

// Import components
import TimeAndDate from "./TimeAndDate";
import Location from "./Location";

// Import react icons
import {
  WiThermometer,
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiDayCloudy,
} from "react-icons/wi";
import { TbArrowNarrowDown, TbArrowNarrowUp, TbWind } from "react-icons/tb";

const MainCard = () => {
  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div className="flex flex-col items-center">
      <div className="text-white w-[22.5rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-max-content py-4 mt-8 rounded-md shadow-xl">
        <TimeAndDate />
        <Location />

        {/* Card middle */}
        <div className="flex justify-between items-center mt-12 pr-4 md:gap-28 lg:gap-52">
          {/* Weather status and description */}
          <div className="flex flex-col items-center">
            {/* <WiDayCloudy size={50} /> */}
            <Image
                      src={`${statusURL}03d@2x.png`}
                      width={80}
                      height={80}
                      alt=" weather status icon"
            />
            
            <h3 className="text-sm text-yellow-200">Cloudy</h3>
          </div>

          {/* Current temperature */}
          <div>
            <h1 className="text-3xl text-yellow-300 ml-4 pl-4">
              20<span>&deg;</span>
            </h1>
          </div>

          {/* More weather data - wind speed, humidity, real feel */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center">
              <WiThermometer size={25} />
              <span className="text-xs font-light">Real feel: 19</span>
              <span>&deg;</span>
            </div>
            <div className="flex items-center">
              <WiHumidity size={25} />
              <span className="text-xs font-light">Humidity: 40</span>
              <span>%</span>
            </div>
            <div className="flex items-center">
              <TbWind size={20} />
              <span className="text-xs font-light ml-1">Wind: 3</span>
              <span className="text-xs font-light ml-1">km/hr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
