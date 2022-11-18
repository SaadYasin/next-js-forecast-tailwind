import { GoSearch, GoLocation } from 'react-icons/go';
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from 'react-icons/tb';

const Input = () => {

  return (
    <div className="flex items-center justify-between mt-1">
      <form className="flex items-center rounded-lg bg-blue-900 h-10">
        <input type="text" placeholder="Enter city name . . ." className="bg-transparent focus:outline-none pl-2 capitalize"/>

        <div>
        <button className="px-2 border-l h-10 transition ease-out hover:bg-yellow-600"><GoSearch size={15}/></button>
        <button className="px-2 border-l h-10 transition ease-out hover:bg-yellow-600"><GoLocation size={15}/></button>
        </div>

        </form>

        <div className="flex font-medium text-md bg-yellow-600 h-10 rounded-lg p-1">
        <button  name="metric" className="border-r pr-1"><TbTemperatureCelsius size={22} /></button>
        <button name="imperial" ><TbTemperatureFahrenheit size={22}/></button>
        </div>  
    </div>

  )
}

export default Input;