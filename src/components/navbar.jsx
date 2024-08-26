import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ data }) => {
  // State to manage the visibility of the search results dropdown
  const [Open, setIsOpen] = useState(false);
  // State to manage the search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Extract widget titles from the provided data

  const extractWidgetTitles = (data) => {
    return data.flatMap((category) =>
      category.widgets.map((widget) => widget.title)
    );
  };

  // Get all widget titles
  const widgetTitles = extractWidgetTitles(data);

  // Filter widget titles based on the search term
  const filteredTitles = widgetTitles.filter((title) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Show the search results dropdown when input is focused
  const handleFocus = () => setIsOpen(true);
  // Hide the search results dropdown after a short delay when input loses focus
  const handleBlur = () => setTimeout(() => setIsOpen(false), 100);

  return (
    <>
      {/* navigation bar with a widget searchbar */}
      <nav className="bg-white border-b p-4 h-10 w-auto flex justify-between items-center">
        <h1 className="text-gray-800 w-auto text-base font-bold"> Dashboard</h1>
        <div className="flex flex-col ">
          {/* Search bar container */}
          <div className="sticky items-center py-2 w-80 right-2 -top-0 ">
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
          {/* Dropdown menu for search results */}
          {Open && (
            <ul className="absolute right-4 top-10 px-2 w-80 gap-y-10 py-2  bg-white rounded-md">
              <li className="text-xs text-gray-400">Search Result</li>
              {searchTerm.length >= 2 && (
                <ul className="mt-3 flex flex-col gap-y-1 font-bold">
                  {/* Display filtered titles or no results message */}
                  {filteredTitles.length > 0 ? (
                    filteredTitles.map((title, index) => (
                      <li key={index} className="">
                        {title}
                      </li>
                    ))
                  ) : (
                    <li className="">No results found</li>
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
