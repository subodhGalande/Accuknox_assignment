import { useRef } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import WidgetTabs from "./widgetTabs";

const SidebarComponent = ({ data }) => {
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
      {/* Button to show the modal */}
      <button
        onClick={showModal}
        type="button"
        className="flex h-auto w-auto items-center justify-center gap-x-1 text-gray-500 text-sm bg-white border px-4 py-2 rounded-md hover:scale-95 duration-150 ease-in"
      >
        {" "}
        <IoMdAdd className="h-5 w-5 " /> Add Widget{" "}
      </button>

      {/* Modal element for adding widgets */}
      <div
        style={{ display: "none" }}
        ref={modalRef}
        className="fixed h-full w-auto -right-0 -top-0 bg-white z-10"
      >
        {/* Modal header with close button */}
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
          {/* WidgetTabs component to display available widgets */}
          <WidgetTabs data={data} />
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
