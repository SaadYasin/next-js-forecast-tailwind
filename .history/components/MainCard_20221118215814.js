import TimeAndDate from './TimeAndDate'
import Location from './Location';

const MainCard = () => {

  return (
    <div className="flex flex-col items-center">

    <div className="text-white w-[23rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-max-content p-2 mt-8 rounded-md shadow-xl">
      <TimeAndDate />
      <Location />

      </div>
    </div>


  )
};

export default MainCard;