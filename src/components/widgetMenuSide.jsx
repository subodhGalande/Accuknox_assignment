import { useRef, useEffect, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import WidgetTabs from "./widgetTabs";
import axios from "axios";

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

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Base_URL = "http://localhost:8000/dashboard";

  useEffect(() => {
    axios
      .get(Base_URL)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex w-full h-screen text-2xl font-bold justify-center items-center animate-pulse">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex w-full h-screen text-2xl font-bold justify-center items-center">
        Error: {error.message}
      </div>
    );

  return (
    <div>
      <button
        onClick={showModal}
        type="button"
        className="flex h-auto w-auto items-center justify-center gap-x-1 text-gray-500 text-sm bg-white border px-4 py-2 rounded-md hover:scale-95 duration-150 ease-in"
      >
        {" "}
        <IoMdAdd className="h-5 w-5 " /> Add Widget{" "}
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
          <WidgetTabs data={data} />
          <div className="flex justify-end h-10 gap-x-4 px-5">
            <button
              onClick={hideModal}
              className="border border-gray-700 py-1 px-4 rounded-md hover:scale-95 duration-150 "
            >
              Cancel
            </button>
            <button className="border py-1 px-4 rounded-md bg-gray-700 text-white hover:scale-95 duration-150">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
