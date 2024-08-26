import { useState } from "react";
import CustomWidgetForm from "./customWidgetForm";
import axios from "axios";

function WidgetTabs({ data }) {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);
  // State to track which widgets are checked
  const [checkedTabs, setCheckedTabs] = useState(() => {
    if (!data) return {};
    const initialCheckedTabs = {};
    data.forEach((category) => {
      category.widgets.forEach((tab) => {
        initialCheckedTabs[tab.id] = true;
      });
    });

    return initialCheckedTabs;
  });

  // Function to handle checkbox state change
  const handleCheckboxChange = (id, tabActive) => {
    setCheckedTabs(async (prevCheckedTabs) => {
      // Update the checked state for the checkbox
      const updatedCheckedTabs = {
        ...prevCheckedTabs,
        [id]: !prevCheckedTabs[id],
      };
      // If unchecked, delete the widget from the category
      if (!updatedCheckedTabs[id]) {
        try {
          // Fetch the current category data
          const response = await axios.get(
            `http://localhost:8000/categories/${tabActive}`
          );
          const category = response.data;

          // Filter out the widget to be deleted
          const updatedWidgets = category.widgets.filter(
            (widget) => widget.id !== id
          );

          // Update the category with the new widgets list
          await axios.put(`http://localhost:8000/categories/${tabActive}`, {
            ...category,
            widgets: updatedWidgets,
          });

          console.log(`Deleted widget with id: ${id}`);
          window.location.reload();
        } catch (error) {
          console.error(`Error deleting widget with uniqueKey: ${id}`, error);
        }
      }

      return updatedCheckedTabs;
    });
  };

  return (
    <>
      {" "}
      <div className="w-full h-full flex flex-col mx-auto">
        {/* Tab navigation buttons */}
        <div className="flex border-b  border-gray-200">
          {data &&
            data.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-2 px-4 text-center ${
                  activeTab === index
                    ? "border-b-2 border-gray-700 text-gray-700"
                    : "text-gray-400"
                } focus:outline-none`}
              >
                {tab.id}
              </button>
            ))}
        </div>
        {/* List of widgets for the active tab */}
        <div className=" h-56 flex gap-3 my-5 mx-5 flex-col w-full overflow-y-scroll">
          {data &&
            data[activeTab].widgets.map((widget) => (
              <div key={widget.id} className="flex">
                <input
                  id="checkbox"
                  checked={!!checkedTabs[widget.id]}
                  onChange={() =>
                    handleCheckboxChange(widget.id, data[activeTab].id)
                  }
                  type="checkbox"
                  value={widget.id}
                  className="w-4 h-4 bg-gray-100 accent-gray-700 border-gray-300 rounded "
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900"
                >
                  {widget.title}
                </label>
              </div>
            ))}
        </div>
        {/* Form to add a new widget to the active tab */}
        <CustomWidgetForm category={data && data[activeTab].id} />
      </div>{" "}
    </>
  );
}

export default WidgetTabs;
