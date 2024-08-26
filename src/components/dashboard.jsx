import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import WidgetCard from "./widgetCard";

import SidebarComponent from "./widgetMenuSide";

const Dashboard = () => {
  const [Open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Base_URL = "http://localhost:8000/categories";

  const toggle = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    axios
      .get(Base_URL)
      .then((response) => {
        setData(response.data);
        console.log("data:", response.data);
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
    <>
      {/*Title and Add Widget button ribbon */}
      <Navbar data={data} />

      <div className="w-auto">
        <div className=" flex w-full bg-color px-6 py-4  mx-auto items-center justify-between ">
          <h1 className="w-auto h-full text-md font-semibold">
            CNAPP Dashboard
          </h1>

          <SidebarComponent onClick={toggle} data={data} />
        </div>

        {data &&
          data.map((category) => (
            <div key={category.id} className="w-auto mx-10 mb-8 flex flex-col">
              <h2 className=" py-2  items-center font-semibold text-sm">
                {category.name}
              </h2>
              <div className="flex justify-start flex-wrap gap-2 ">
                {category.widgets.length > 0 ? (
                  category.widgets.map((widget) => (
                    <WidgetCard
                      categoryId={category.id}
                      key={widget.id}
                      uniqueKey={widget.id}
                      widgetTitle={widget.title}
                      widgetText={widget.text}
                      error={error}
                    />
                  ))
                ) : (
                  <h1>No data available</h1>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Dashboard;
