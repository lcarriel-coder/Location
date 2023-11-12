import { Global } from "./Global";
import { useUiStore } from "./hooks";
import { SearchAddress } from "./location/pages";
import { Modal } from "./ui";
import { useLoadScript,Libraries } from "@react-google-maps/api";

const KEY = Global.KEY;
const libraries: Libraries = ["places", "geocoding"];

function Location() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: KEY,
    libraries: libraries,
  });

  const { isDateModalOpen } = useUiStore();

  return (
    <>
      {isLoaded && (
        <div className="mx-auto max-w-2xl">
          <SearchAddress />
        </div>
      )}

      {isDateModalOpen && <Modal />}
    </>
  );
}

export default Location;
