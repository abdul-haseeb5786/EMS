import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAsignTo('');
    setCategory('');
  };

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg mt-8">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap gap-8 justify-between"
      >
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="text-sm text-gray-300 block mb-1">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="e.g., Design Dashboard"
              className="w-full rounded-md bg-[#121212] text-white border border-gray-600 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 block mb-1">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full rounded-md bg-[#121212] text-white border border-gray-600 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
  <label className="text-sm text-gray-300 block mb-1">Assign&nbsp;To</label>
  <select
    value={asignTo}
    onChange={(e) => setAsignTo(e.target.value)}
    className="w-full rounded-md bg-[#121212] text-white border border-gray-600 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
    required
  >
    <option value="" disabled>Select employee</option>
    {userData.map((emp) => (
      <option key={emp.id} value={emp.firstName}>
        {emp.firstName}
      </option>
    ))}
  </select>
</div>


          <div>
            <label className="text-sm text-gray-300 block mb-1">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc"
              className="w-full rounded-md bg-[#121212] text-white border border-gray-600 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col space-y-4">
          <label className="text-sm text-gray-300 block mb-1">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Task details..."
            className="w-full min-h-[180px] rounded-md bg-[#121212] text-white border border-gray-600 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded w-full transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
