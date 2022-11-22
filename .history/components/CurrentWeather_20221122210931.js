import React from 'react'
import Image from "next/image";

// Import react icons
import {
  WiThermometer,
  WiHumidity,
  WiSunrise,
  WiSunset,
  WiRain,
} from "react-icons/wi";
import { TbArrowNarrowDown, TbArrowNarrowUp, TbWind } from "react-icons/tb";

const CurrentWeather = () => {

  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div>
      {/* Card middle start */}
      <div className="flex justify-between items-center mt-12 pr-4 md:px-12">
        {/* Weather status and description */}
        <div className="flex flex-col items-center">
          {/* <WiDayCloudy size={50} /> */}
          <Image
            src={`${statusURL}03d@2x.png`}
            width={80}
            height={80}
            alt=" weather status icon"
          />

          <h3 className="text-sm text-yellow-200 font-light -mt-4">Cloudy</h3>
        </div>

        {/* Current temperature */}
        <div>
          <h1 className="text-3xl text-yellow-300 ml-4 pl-4">
            15<span>&deg;</span>
          </h1>
        </div>

        {/* More weather data - wind speed, humidity, real feel */}
        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center">
            <WiThermometer size={25} />
            <span className="text-xs font-light">Real feel:</span>
            <span className="text-xs font-medium ml-1">15</span>
            <span>&deg;</span>
          </div>
          <div className="flex items-center">
            <WiHumidity size={25} />
            <span className="text-xs font-light">Humidity:</span>
            <span className="text-xs font-medium ml-1">43</span>
            <span>%</span>
          </div>
          <div className="flex items-center">
            <TbWind size={20} />
            <span className="text-xs font-light ml-1">Wind:</span>
            <span className="text-xs font-medium ml-1">3</span>
            <span className="text-xs font-light ml-2">km/hr</span>
          </div>
        </div>
      </div>

      {/* Info data line start */}
      <div className="flex flex-wrap justify-center mt-8 px-4 gap-x-16">
        <div className="flex items-center gap-1">
          <WiSunrise size={25} />
          <h5 className="text-xs">Rise:</h5>
          <span className="text-xs">6:55</span>
          <span className="text-xs">AM</span>
        </div>
        <div className="flex items-center gap-1">
          <WiSunset size={25} />
          <h5 className="text-xs">Set:</h5>
          <span className="text-xs">6:22</span>
          <span className="text-xs">PM</span>
        </div>
        <div className="flex items-center gap-1">
          <TbArrowNarrowUp size={25} />
          <h5 className="text-xs">High temp:</h5>
          <span className="text-xs">21</span>
          <span className="text-xs">&deg;</span>
        </div>
        <div className="flex items-center gap-1">
          <TbArrowNarrowDown size={25} />
          <h5 className="text-xs">Low temp:</h5>
          <span className="text-xs">12</span>
          <span className="text-xs">&deg;</span>
        </div>
      </div>
      {/* Info data line end */}

      {/* Card middle end */}
    </div>
  );
}

export default CurrentWeather;