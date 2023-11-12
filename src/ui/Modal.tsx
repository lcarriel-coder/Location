import { useUiStore } from "../hooks";

export const Modal = () => {

  const { isDateModalOpen ,closeDateModal ,activeContentModal} =useUiStore();

  return (
    <div>
     

      {isDateModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex justify-end items-center">
                <button
                  onClick={closeDateModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none text-3xl"
                >
                  X
                </button>
              </div>

              {/* Contenido del modal */}
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                <h3 className="text-3xl leading-6 font-bold">{activeContentModal?.title}</h3>
                <div className="mt-10">
                  <p className="text-xl font-bold">{activeContentModal?.subtitle}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xl font-bold">{activeContentModal?.detail}</p>
                </div>

                <div className="mt-5">
                  <p className="text-xl font-bold">{activeContentModal?.footer}</p>
                </div>
              </div>
              {/* Botones del modal */}
              <div className=" px-4 py-6 text-center mt-15 ">
                <button
                  onClick={closeDateModal}
                  type="button"
                  className="rounded-full border border-transparent px-12 py-2 bg-pink-500 text-lg font-medium text-white  hover:bg-pink-700 hover:text-gray-100"
                >
                  UNDERSTOOD
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
