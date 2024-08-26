import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ data }) => {
  const [Open, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const extractWidgetTitles = (data) => {
    return data.flatMap((category) =>
      category.widgets.map((widget) => widget.title)
    );
  };
  const widgetTitles = extractWidgetTitles(data);
  const filteredTitles = widgetTitles.filter((title) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFocus = () => setIsOpen(true);
  const handleBlur = () => setTimeout(() => setIsOpen(false), 100);

  return (
    <>
      {/* navigation bar with a widget searchbar */}
      <nav className="bg-white border-b p-4 h-10 w-auto flex justify-between items-center">
        <h1 className="text-gray-800 w-auto text-base font-bold"> Dashboard</h1>
        <div className="flex flex-col ">
          {" "}
          <div className="fixed items-center py-2 w-80 right-2 -top-0 ">
            <FaSearch className=" absolute h-3 w-3 left-2 top-3.5 text-gray-400" />
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search widget"
              className="px-6 py-[.11rem] w-full bg-color rounded-md border text-sm "
            />
          </div>
          {Open && (
            <ul className="fixed right-2 top-9 px-2 w-80 gap-y-10 py-2  bg-white rounded-md">
              <li className="text-xs text-gray-400">Search Result</li>
              {searchTerm.length >= 2 && (
                <ul className="results-list">
                  {filteredTitles.length > 0 ? (
                    filteredTitles.map((title, index) => (
                      <li key={index} className="result-item">
                        {title}
                      </li>
                    ))
                  ) : (
                    <li className="result-item">No results found</li>
                  )}
                </ul>
              )}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
