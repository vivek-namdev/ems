const TaskList = () => {
  return (
    <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
      <div className=" flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded mt-2 ml-3'>High</h3>
        <h4 className="text-sm mr-2">20 Nov 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio!</p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className="text-sm">20 Nov 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio!</p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className="text-sm">20 Nov 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio!</p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
        <h4 className="text-sm">20 Nov 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, optio!</p>
      </div>
    </div>
  )
}

export default TaskList
