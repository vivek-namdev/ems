const CreateTask = () => {
  return (
       <div className="flex items-center justify-center mt-10">
       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
         <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {/* Task Title */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Task Title
             </label>
             <input
               type="text"
               placeholder="Make a UI design"
               className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
             />
           </div>

           {/* Description */}
           <div className="sm:col-span-2">
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Description
             </label>
             <textarea
               placeholder="Description"
               className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
               rows="4"
             ></textarea>
           </div>

           {/* Date */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Date
             </label>
             <input
               type="date"
               className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
             />
           </div>

           {/* Assign To */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Assign to
             </label>
             <input
               type="text"
               placeholder="Employee name"
               className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
             />
           </div>

           {/* Category */}
           <div>
             <label className="block text-sm font-medium text-gray-700 mb-2">
               Category
             </label>
             <input
               type="text"
               placeholder="design, dev, etc"
               className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
             />
           </div>

           {/* Submit Button */}
           <div className="sm:col-span-2 flex justify-end">
             <button
               type="submit"
               className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-300"
             >
               Create Task
             </button>
           </div>
         </form>
       </div>
     </div>
  )
}

export default CreateTask
