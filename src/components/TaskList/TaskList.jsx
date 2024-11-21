const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center gap-5 flex-nowrap w-full py-5 mt-10"
    >

<div className="flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-4 shadow-lg flex flex-col justify-center items-center text-center">
  <div className="flex justify-between items-center w-full">
    <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">High</h3>
    <h4 className="text-sm text-gray-700">20 Nov 2024</h4>
  </div>
  <h2 className="mt-5 text-2xl font-semibold text-gray-800">
    Make a YouTube video
  </h2>
  <p className="text-sm mt-2 text-gray-600">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio!
  </p>
</div>


      <div className="flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">High</h3>
          <h4 className="text-sm text-gray-700">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-800">
          Make a YouTube video
        </h2>
        <p className="text-sm mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          optio!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">High</h3>
          <h4 className="text-sm text-gray-700">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-800">
          Make a YouTube video
        </h2>
        <p className="text-sm mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          optio!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">High</h3>
          <h4 className="text-sm text-gray-700">20 Nov 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-gray-800">
          Make a YouTube video
        </h2>
        <p className="text-sm mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          optio!
        </p>
      </div>
    </div>
  );
};

export default TaskList;