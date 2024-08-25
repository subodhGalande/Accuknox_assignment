import { useRef } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import WidgetTabs from "./widgetTabs";

const SidebarComponent = () => {
  // Create a ref to hold the modal DOM element
  const modalRef = useRef(null);

  // Function to hide the modal (toggle visibility)
  const hideModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
  };

  // Function to show the modal (toggle visibility)
  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.style.display = "block";
    }
  };

  return (
    <div>
      <button
        onClick={showModal}
        type="button"
        className="flex gap-2 text-gray-500 hover:scale-95 duration-150 h-52 w-96 justify-center items-center  bg-white rounded-xl border  "
      >
        <IoMdAdd className="h-5 w-5" />
        Add Widget
      </button>

      {/* The modal element */}
      <div
        style={{ display: "none" }}
        ref={modalRef}
        className="fixed h-full w-auto -right-0 -top-0 bg-white z-10"
      >
        <nav className=" flex items-center justify-between px-6 h-8 w-auto bg-gray-700 text-white font-semibold">
          {" "}
          <h2>Add Widget</h2>
          <button onClick={hideModal} type="button" className="">
            <IoMdClose className="h-5 w-5" />
          </button>
        </nav>

        <h2 className="px-4 py-4 text-base">
          Personalise your Dashboard by adding the following widget
        </h2>
        <div className="flex flex-col justify-between gap-y-4">
          <WidgetTabs />
          <div className="flex justify-end h-10 gap-x-4 px-5">
            <button
              onClick={hideModal}
              className="border border-gray-700 py-1 px-4 rounded-md hover:scale-95 duration-150 "
            >
              Cancel
            </button>
            <button
              onClick={hideModal}
              className="border py-1 px-4 rounded-md bg-gray-700 text-white hover:scale-95 duration-150"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
