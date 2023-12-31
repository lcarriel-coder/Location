
import React, { ReactElement} from 'react';
import mapPin from '../../../assets/map-pin.png';
import { InputSearchProps } from '../../../interfaces';



export const InputSearch: React.FC<InputSearchProps> = ({ value, setValue }) : ReactElement => {


  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    
    <div className="flex items-center border-b border-b-2  py-2 bg-white pt-5 pb-5 mt-12 searchShadow">
      <img className="w-6 h-6 ml-6 mr-4" src={mapPin} alt="icono" />
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold text-lg"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>

  )
}
