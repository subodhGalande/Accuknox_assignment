import axios from "axios";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";

const CustomWidgetForm = ({ category }) => {
  // State to manage the title,text and Id of the widget

  const [widgetTitle, setWidgetTitle] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [id, setId] = useState(uuidv4());

  // Data object to hold widget information
  const data = {
    id: id,
    title: widgetTitle,
    text: widgetText,
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the category data from the server using its ID
      const response = await axios.get(
        `http://localhost:8000/categories?id=${category}`
      );
      const categoryNew = response.data[0];
      console.log("category", categoryNew);

      if (!categoryNew) {
        throw new Error("Category not found");
      }
      // Initialize widgets array if it doesn't exist
      if (!categoryNew.widgets) {
        categoryNew.widgets = [];
      }
      categoryNew.widgets.push(data); // Add new widget data to the category's widgets array

      // Update the category on the server with the new widget data
      const updateResponse = await axios.put(
        `http://localhost:8000/categories/${category}`,
        categoryNew
      );

      console.log("Widget added successfully");
    } catch (error) {
      console.error("Error adding widget", error);
    }
    // Clear input fields after submission
    setWidgetTitle("");
    setWidgetText("");

    // Reload the page to reflect changes
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className=" w-full  px-4 pb-4 h-fit">
        {/* Hidden input to hold the widget ID */}
        <input type="hidden" id="widgetId" value={id} readOnly />

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
            value={widgetTitle}
            onChange={(e) => setWidgetTitle(e.target.value)}
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
            id="widgettext"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
