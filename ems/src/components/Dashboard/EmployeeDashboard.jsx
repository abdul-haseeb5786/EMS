import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111111] via-[#1a1a1a] to-[#1f1f1f] text-white px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
