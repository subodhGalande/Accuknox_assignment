import { useState } from "react";
import CustomWidgetForm from "./customWidgetForm";

function WidgetTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "CSPM", content: "This is the content for Tab 1." },
    { id: 1, label: "CWPP", content: "This is the content for Tab 2." },
    { id: 2, label: "Image", content: "This is the content for Tab 3." },
    { id: 3, label: "Ticket", content: "This is the content for Tab 3." },
  ];

  return (
    <>
      {" "}
      <div className="w-full h-full flex flex-col mx-auto">
        <div className="flex border-b  border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 text-center ${
                activeTab === tab.id
                  ? "border-b-2 border-gray-700 text-gray-700"
                  : "text-gray-400"
              } focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex border-b my-4 px-4 h-72 overflow-y-scroll ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 bg-gray-100 accent-gray-700 border-gray-300 rounded "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Default checkbox 1
          </label>
        </div>
        <CustomWidgetForm />
      </div>{" "}
    </>
  );
}

export default WidgetTabs;
