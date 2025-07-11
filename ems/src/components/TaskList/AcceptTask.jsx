import React from 'react'

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-yellow-400 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
      <div className="flex justify-between items-center text-black">
        <span className="bg-yellow-600 px-3 py-1 rounded text-xs text-white">{data.category}</span>
        <span className="text-xs">{data.taskDate}</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-black">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-black/90">{data.taskDescription}</p>
      <div className="flex justify-between gap-2 mt-6">
        <button className="bg-green-600 hover:bg-green-700 text-white text-sm py-2 px-3 rounded-md font-medium w-1/2">
          Mark Completed
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-3 rounded-md font-medium w-1/2">
          Mark Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
