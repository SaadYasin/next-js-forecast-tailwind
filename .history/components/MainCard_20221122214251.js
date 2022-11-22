// Import components
import TimeAndDate from "./TimeAndDate";
import Location from "./Location";

import CurrentWeather from "./CurrentWeather";
import ForecastHourly from "./ForecastHourly";
import ForecastDaily from "./ForecastDaily";

const MainCard = () => {
  const statusURL = "https://openweathermap.org/img/wn/";

  return (
    <div className="flex flex-col items-center">
      <div className="text-white w-[22.5rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-max-content py-4 mt-8 rounded-md shadow-xl">
        <TimeAndDate />
        <Location />

        <CurrentWeather />

        <ForecastHourly title="Hourly Forecast" />
        <ForecastDaily title="Daily Forecast" />
      </div>
    </div>
  );
};

export default MainCard;
