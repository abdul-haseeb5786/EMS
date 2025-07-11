import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 scrollbar-thin scrollbar-thumb-gray-600"
    >
      {data.tasks.map((task, idx) => {
        if (task.active) return <AcceptTask key={idx} data={task} />
        if (task.newTask) return <NewTask key={idx} data={task} />
        if (task.completed) return <CompleteTask key={idx} data={task} />
        if (task.failed) return <FailedTask key={idx} data={task} />
        return null
      })}
    </div>
  )
}

export default TaskList
