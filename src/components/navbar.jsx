import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* navigation bar with a widget searchbar */}
      <nav className="bg-white border-b p-4 h-10 w-auto flex justify-between items-center">
        <h1 className="text-gray-800 w-auto text-base font-bold"> Dashboard</h1>

        <div className="flex relative items-center py-2 w-80 ">
          <FaSearch className="absolute h-3 w-3 left-2 text-gray-400" />
          <input
            type="text"
            placeholder="Search widget"
            className="px-6 py-[.11rem] w-full bg-color rounded-md border text-sm "
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
