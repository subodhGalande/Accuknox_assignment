import axios from "axios";
import { IoMdClose } from "react-icons/io";

const WidgetCard = ({ uniqueKey, widgetTitle, widgetText, categoryId }) => {
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/categories/${categoryId}`
      );
      const category = response.data;

      const updatedWidgets = category.widgets.filter(
        (widget) => widget.id !== uniqueKey
      );

      await axios.put(`http://localhost:8000/categories/${categoryId}`, {
        ...category,
        widgets: updatedWidgets,
      });

      console.log(`Deleted widget with uniqueKey: ${uniqueKey}`);
      window.location.reload();
    } catch (error) {
      console.error(
        `Error deleting widget with uniqueKey: ${uniqueKey}`,
        error
      );
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
