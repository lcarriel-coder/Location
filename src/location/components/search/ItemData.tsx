import React, { ReactElement } from "react";
import { useUiStore } from "../../../hooks";
import { InputSuggestion } from "../../../interfaces";
import mapPin from "../../../assets/map-pin-gray.png";
import { useSearch } from "../../../hooks/useSearch";
import { Common } from "../../../utils/Common";
import { ModelObj } from "../../../interfaces/index";

export const ItemData: React.FC<InputSuggestion> = ({
  suggetion,
}): ReactElement => {
  const { onSearchPlaceZip } = useSearch();
  const { openDateModal } = useUiStore();

  const handleonClick = async () => {
    const datasearch = await onSearchPlaceZip(suggetion);
    if (datasearch) {
      openDateModal(Common.MessageZipOK as ModelObj);
    } else {
      openDateModal(Common.MessageOutofDelivery as ModelObj);
    }
  };

  return (
    <div
      onClick={handleonClick}
      className="flex items-center border-b border-b-2 py-2 bg-white pt-6 pb-6 box-shadow-top-left box-shadow-top-right searchShadow hover:bg-gray-100 cursor-pointer"
    >
      <img className="w-5 h-6 ml-6 mr-4" src={mapPin} alt="icono" />
      <div className="flex flex-col">
        <h2 className="text-gray-700 font-bold text-lg mb-2">
          {suggetion.structured_formatting.main_text}
        </h2>
        <p className="text-lg text-gray-400 text-left font-bold">
          {suggetion.structured_formatting.secondary_text}
        </p>
      </div>
    </div>
  );
};
