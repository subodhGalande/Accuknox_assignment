import { IoMdAdd } from "react-icons/io";

const CustomWidgetForm = ({ category }) => {
  console.log(category);
  return (
    <>
      <form className=" w-full border-b px-4 pb-4 h-fit">
        <div className="mb-5 w-3/4">
          <label
            htmlFor="title"
            className="block mb-2 text-left text-sm font-medium text-gray-900"
          >
            Widget Title
          </label>
          <input
            type="text"
            id="widgettitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-5 w-3/4">
          <label
            htmlFor="text"
            className="block mb-2 text-left text-sm font-medium text-gray-900"
          >
            Widget Text{" "}
          </label>
          <input
            type="text"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>

        <button
          type="submit"
          className="text-gray-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center flex gap-x-2 border border-gray-400 hover:scale-95 duration-150 "
        >
          {" "}
          <IoMdAdd className="h-5 w-5" />
          Add Widget
        </button>
      </form>
    </>
  );
};

export default CustomWidgetForm;
