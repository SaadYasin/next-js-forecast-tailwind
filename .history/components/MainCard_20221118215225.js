import TimeAndDate from './TimeAndDate'
import Location from './Location';

const MainCard = () => {

  return (
    <div className="flex">

    <div className="text-white mx-auto w-[23.5rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-max-content p-2 mt-8 rounded-md shadow-xl">
      <TimeAndDate />
      <Location />

      </div>
    </div>


  )
};

export default MainCard;