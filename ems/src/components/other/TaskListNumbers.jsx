import React from 'react'
import { FaTasks, FaCheckCircle, FaBolt, FaTimesCircle } from 'react-icons/fa'

const TaskListNumbers = ({ data }) => {
  const cards = [
    {
      label: 'New Task',
      count: data.taskCounts.newTask,
      color: 'bg-blue-500',
      icon: <FaTasks size={28} />,
    },
    {
      label: 'Completed',
      count: data.taskCounts.completed,
      color: 'bg-green-500',
      icon: <FaCheckCircle size={28} />,
    },
    {
      label: 'Active',
      count: data.taskCounts.active,
      color: 'bg-yellow-400 text-black',
      icon: <FaBolt size={28} />,
    },
    {
      label: 'Failed',
      count: data.taskCounts.failed,
      color: 'bg-red-500',
      icon: <FaTimesCircle size={28} />,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`rounded-2xl py-6 px-6 ${card.color} shadow-lg transition-all hover:scale-[1.02]`}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-4xl font-bold">{card.count}</h2>
            {card.icon}
          </div>
          <p className="text-xl mt-1 font-medium">{card.label}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers
