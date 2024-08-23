const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-md border-0"
          />
          <button className="bg-blue-800 text-white px-4 py-2 rounded-r-md">
            Search
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
