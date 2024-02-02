import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const dialogBtn = useRef();

  return (
    <>
      <dialog ref={dialogBtn} id="my_modal_2" className="modal">
        <div className=" w-[350px] h-[200px] rounded-xl flex  flex-col justify-center items-start px-6 gap-3 relative py-5 bg-[#fff]">
          <div className="text-[23px]">Hi</div>
          <div className=" text-[17px]">
            Use 'Esc' or 'x' button for to close modal
          </div>
          <button
            onClick={() => dialogBtn.current.close()}
            className=" px-3 border rounded-lg absolute top-3 right-4   py-2"
          >
            {" "}
            x
          </button>
        </div>
      </dialog>
      <div className="show">
        <button
          onClick={() => {
            dialogBtn.current.showModal();
          }}
        >
          show modal
        </button>
      </div>
      {console.dir(dialogBtn.current)}
    </>
  );
}

export default App;
