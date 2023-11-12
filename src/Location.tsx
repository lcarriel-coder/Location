import { Global } from "./Global";
import { useUiStore } from "./hooks";
import { SearchAddress } from "./location/pages";
import { Modal } from "./ui";
import { useLoadScript } from "@react-google-maps/api";

const KEY = Global.KEY;

function Location() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: KEY,
    libraries: ["places","geocoding"],
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
