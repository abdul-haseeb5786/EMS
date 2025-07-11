import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[300px] bg-red-500 p-5 rounded-2xl shadow-lg hover:scale-[1.02] transition-all">
      <div className="flex justify-between items-center text-white">
        <span className="bg-red-700 px-3 py-1 rounded text-xs">{data.category}</span>
        <span className="text-xs">{data.taskDate}</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="mt-2 text-sm text-white/90">{data.taskDescription}</p>
      <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md text-sm font-medium">
        Failed
      </button>
    </div>
  )
}

export default FailedTask
