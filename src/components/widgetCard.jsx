import { useEffect, useState } from "react";

const WidgetCard = ({ key, widgetTitle, widgetText }) => {
  return (
    <>
      <div
        key={key}
        className="flex flex-col h-52 w-96 justify-around items-start p-4 bg-white  rounded-xl border overflow-hidden"
      >
        <h1 className="text-xl font-bold text-gray-900 ">{widgetTitle}</h1>
        <p className=" w-full mt-5 ">{widgetText}</p>
      </div>
    </>
  );
};

export default WidgetCard;
