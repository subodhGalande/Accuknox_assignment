import { useState } from "react";

import Navbar from "./navbar";
import WidgetCard from "./widgetCard";
import AddWidgetCard from "./addWidgetCard";
import SidebarComponent from "./widgetMenuSide";

const Dashboard = () => {
  const [Open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!Open);
  };
  return (
    <>
      {/*Title and Add Widget button ribbon */}
      <Navbar />

      <div className="w-auto">
        <div className=" flex w-full bg-color px-6 py-4  mx-auto items-center justify-between ">
          <h1 className="w-auto h-full text-md font-semibold">
            CNAPP Dashboard
          </h1>
          <button onClick={toggle}>
            <SidebarComponent />
          </button>
        </div>
        <div className="w-auto mx-10 flex flex-col">
          <h2 className=" py-2  items-center font-semibold text-sm">
            CSPM Executive Dashboard
          </h2>
          <div className="flex justify-start flex-wrap gap-2 ">
            <WidgetCard />
            <button onClick={toggle}>
              <AddWidgetCard />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
