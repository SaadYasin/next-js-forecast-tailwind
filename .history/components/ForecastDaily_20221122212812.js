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

const ForecastDaily = ( { title } ) => {

  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div>
      {/* Daily forecast start */}
      <div className="px-4 mt-10">
        <h3 className="border-b pb-1 text-yellow-400 uppercase">
          {Daily forecast}
        </h3>

        {/* Forecast container */}
        <div className="flex flex-wrap justify-evenly p-4 gap-2 md:gap-10 lg:gap-10">
          {/* Day 1 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Sunday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 2 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Monday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 3 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Tuesday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 4 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Wendsday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 5 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Thursday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 6 */}
          <div className="flex flex-col items-center p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Friday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>

          {/* Day 7 */}
          <div className="flex flex-col items-center  p-2 rounded-3xl">
            <h5 className="text-xs font-medium">Saturday</h5>
            <h5 className="text-md font-medium text-yellow-200">
              18<span>&deg;</span>
            </h5>

            <Image
              src={`${statusURL}03d@2x.png`}
              width={40}
              height={40}
              alt=" weather status icon"
            />
            <div className="flex items-center mb-1">
              <WiRain size={20} />
              <h6 className="text-xs">0%</h6>
            </div>

            <h5 className="text-md font-medium text-yellow-200">
              10<span>&deg;</span>
            </h5>
          </div>
        </div>
      </div>
      {/* Daily forecast end */}
    </div>
  );
}

export default ForecastDaily;