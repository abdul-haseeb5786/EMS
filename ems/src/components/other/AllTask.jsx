import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg mt-8">
      <div className="bg-emerald-600/80 mb-4 py-3 px-6 flex justify-between rounded-lg">
        <h2 className="text-sm font-semibold w-1/5 text-white">Employee Name</h2>
        <h3 className="text-sm font-semibold w-1/5 text-white">New Task</h3>
        <h5 className="text-sm font-semibold w-1/5 text-white">Active</h5>
        <h5 className="text-sm font-semibold w-1/5 text-white">Completed</h5>
        <h5 className="text-sm font-semibold w-1/5 text-white">Failed</h5>
      </div>

      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="bg-[#121212] border border-emerald-500/70 py-3 px-6 flex justify-between items-center rounded-lg transition hover:scale-[1.01] hover:shadow-md"
          >
            <h2 className="w-1/5 text-sm font-medium text-white">{elem.firstName}</h2>
            <h3 className="w-1/5 text-sm font-medium text-blue-400">{elem.taskCounts.newTask}</h3>
            <h5 className="w-1/5 text-sm font-medium text-yellow-400">{elem.taskCounts.active}</h5>
            <h5 className="w-1/5 text-sm font-medium text-green-400">{elem.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-sm font-medium text-red-500">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
