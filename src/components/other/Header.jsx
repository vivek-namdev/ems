const Header = () => {
  return (
    <div className="flex items-end justify-between px-4 py-2 bg-gray-800 text-white">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold text-green-400">Vivek 👋</span>
      </h1>
      <button className="bg-red-600 hover:bg-red-700 transition text-lg font-medium text-white px-6 py-2 rounded-md shadow-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;
