import React from 'react'
import Image from "next/image";

// Import react icons
import {
  WiRain,
} from "react-icons/wi";
import { TbArrowNarrowDown, TbArrowNarrowUp, TbWind } from "react-icons/tb";

const ForecastHourly = ({ title }) => {
  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div>
      {/* Hourly forecast start */}
      <div className="px-4 mt-10">
        <h3 className="border-b pb-1 text-yellow-400 uppercase">{title}</h3>

        {/* Forecast container */}
        <div className="flex flex-wrap justify-evenly p-4 gap-4 md:gap-10 lg:gap-10">
          {/* Hour 1 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 2 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 3 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 4 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 5 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 6 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 7 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>

          {/* Hour 8 */}
          <div className="flex flex-col items-center bg-cyan-700 p-2 rounded-3xl">
            <h5 className="text-xs">3 PM</h5>

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
              18<span>&deg;</span>
            </h5>
          </div>
        </div>
      </div>
      {/* Hourly forecast end */}
    </div>
  );
};

export default ForecastHourly;