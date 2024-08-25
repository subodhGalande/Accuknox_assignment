import { useState } from "react";
import CustomWidgetForm from "./customWidgetForm";

function WidgetTabs({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  //   const tabs = [
  //     { id: 0, label: "CSPM", content: "This is the content for Tab 1." },
  //     { id: 1, label: "CWPP", content: "This is the content for Tab 2." },
  //     { id: 2, label: "Image", content: "This is the content for Tab 3." },
  //     { id: 3, label: "Ticket", content: "This is the content for Tab 3." },
  //   ];
  console.log(data);
  return (
    <>
      {" "}
      <div className="w-full h-full flex flex-col mx-auto">
        <div className="flex border-b  border-gray-200">
          {data &&
            data.categories.map((tab, index) => (
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
        <div className=" h-80 flex flex-col w-full overflow-y-scroll">
          {data &&
            data.categories[activeTab].widgets.map((widget) => (
              <div key={widget.id} className="flex my-4 px-4   ">
                <input
                  id="checkbox"
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

        <CustomWidgetForm />
      </div>{" "}
    </>
  );
}

export default WidgetTabs;
