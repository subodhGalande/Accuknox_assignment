import { useState } from "react";
import CustomWidgetForm from "./customWidgetForm";

function WidgetTabs({ data, onClick }) {
  const [unCheckedids, setUnCheckedids] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [checkedTabs, setCheckedTabs] = useState(() => {
    if (!data || !data.categories) return {};
    const initialCheckedTabs = {};
    data.categories.forEach((category) => {
      category.widgets.forEach((tab) => {
        initialCheckedTabs[tab.id] = true;
      });
    });

    return initialCheckedTabs;
  });

  const handleClose = () => {
    onClick();
  };

  const handleCheckboxChange = (id) => {
    setCheckedTabs((prevCheckedTabs) => {
      const updatedCheckedTabs = {
        ...prevCheckedTabs,
        [id]: !prevCheckedTabs[id],
      };

      if (!updatedCheckedTabs[id]) {
        let unChecked = [];
        unChecked.push(id);
      }

      return updatedCheckedTabs;
    });
  };
  //   const tabs = [
  //     { id: 0, label: "CSPM", content: "This is the content for Tab 1." },
  //     { id: 1, label: "CWPP", content: "This is the content for Tab 2." },
  //     { id: 2, label: "Image", content: "This is the content for Tab 3." },
  //     { id: 3, label: "Ticket", content: "This is the content for Tab 3." },
  //   ];

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
        <div className=" h-72 flex gap-3 my-5 mx-5 flex-col w-full overflow-y-scroll">
          {data &&
            data.categories[activeTab].widgets.map((widget) => (
              <div key={widget.id} className="flex">
                <input
                  id="checkbox"
                  checked={!!checkedTabs[widget.id]}
                  onChange={() => handleCheckboxChange(widget.id)}
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

        <CustomWidgetForm category={data && data.categories[activeTab].id} />
        <div className="flex justify-end h-10 gap-x-4 px-5 mt-5">
          <button
            onClick={handleClose}
            className="border border-gray-700 py-1 px-4 rounded-md hover:scale-95 duration-150 "
          >
            Cancel
          </button>
          <button className="border py-1 px-4 rounded-md bg-gray-700 text-white hover:scale-95 duration-150">
            Confirm
          </button>
        </div>
      </div>{" "}
    </>
  );
}

export default WidgetTabs;
