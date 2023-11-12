import usePlacesAutocomplete, {
  GeoArgs,
  Suggestion,
  getGeocode,
  getZipCode,
} from "use-places-autocomplete";
import { Common } from "../utils/Common";

const ListZipAllow = Common.ListZIPAllow;

const convertAutocompleteSuggestionToGeoArgs = (
  suggestion: Suggestion
): GeoArgs => {
  return {
    placeId: suggestion.place_id,
  };
};

export const useSearch = () => {
  const {
    value,
    setValue,
    suggestions: { status, data },
  } = usePlacesAutocomplete();

  const limitedSuggestions = data.slice(0, 3);

  const onSearchPlaceZip = async (suggention: Suggestion): Promise<boolean> => {
    try {
      const converArg = convertAutocompleteSuggestionToGeoArgs(suggention);
      const results = await getGeocode(converArg);
      const resultsZip = await getZipCode(results[0], false);
      //Obtén el código postal
      if (resultsZip !== "") {
        const searchIsAllowZipCode = ListZipAllow?.some(
          (e: string) => e === resultsZip
        );
        if (searchIsAllowZipCode) {
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return {
    status,
    limitedSuggestions,
    onSearchPlaceZip,
    value,
    setValue,
  };
};
