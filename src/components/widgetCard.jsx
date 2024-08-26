import axios from "axios";
import { IoMdClose } from "react-icons/io";

const WidgetCard = ({ uniqueKey, widgetTitle, widgetText, categoryId }) => {
  // Handle the click event to delete the widget

  const handleClick = async () => {
    try {
      // Fetch the category data based on the categoryId
      const response = await axios.get(
        `http://localhost:8000/categories/${categoryId}`
      );
      const category = response.data;

      // Filter out the widget to be deleted from the category's widgets
      const updatedWidgets = category.widgets.filter(
        (widget) => widget.id !== uniqueKey
      );

      // Update the category with the new widgets list
      await axios.put(`http://localhost:8000/categories/${categoryId}`, {
        ...category,
        widgets: updatedWidgets,
      });

      // Reload the page to reflect changes
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        key={uniqueKey}
        className="flex h-52 w-96 justify-between items-start p-4 bg-white  rounded-xl border overflow-hidden"
      >
        {" "}
        <div className="w-3/4 ">
          <h1 className="text-xl font-bold text-gray-900 ">{widgetTitle}</h1>
          {/* Conditional rendering for widget text */}
          {widgetText ? (
            <p className="w-full mt-5">{widgetText}</p>
          ) : (
            <h1 className="text-lg font-semibold text-gray-500 mt-5">
              No text data available
            </h1>
          )}
        </div>
        <div>
          <button onClick={handleClick}>
            <IoMdClose className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WidgetCard;
