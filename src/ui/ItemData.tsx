
import mapPin from '../assets/map-pin-gray.png';

export const ItemData = () => {
  return (
    
    <div className="flex items-center border-b border-b-2 py-2 bg-white pt-7 pb-7 box-shadow-top-left box-shadow-top-right">
    <img className="w-5 h-6 ml-6 mr-4" src={mapPin} alt="icono" />
    <div className="flex flex-col">
      <h2 className="text-gray-700 font-bold text-lg mb-2">
        Título del contenido
      </h2>
      <p className="text-lg text-gray-400 text-center font-bold">
        Detalle del contenido
      </p>
    </div>
  </div>

  )
}
