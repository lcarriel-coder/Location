import { InputSearch, ItemData } from ".";
import { useSearch } from "../../../hooks/useSearch";

export const Search = () => {

  const { limitedSuggestions , status,  value, setValue} = useSearch();

  return (
    <>
      <InputSearch value={value} setValue={setValue} />

      { status === "OK" && limitedSuggestions?.map((suggetion) => (
        <ItemData key={suggetion.place_id} suggetion={suggetion} />
      ))}
    </>
  );
};
