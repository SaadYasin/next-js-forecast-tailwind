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
import CurrentWeather from "./CurrentWeather";

const MainCard = () => {
  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div className="flex flex-col items-center">
      <div className="text-white w-[22.5rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-max-content py-4 mt-8 rounded-md shadow-xl">
        <TimeAndDate />
        <Location />

        <CurrentWeather />

        <For

      </div>
    </div>
  );
};

export default MainCard;
