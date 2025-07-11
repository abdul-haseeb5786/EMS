import React, { useEffect, useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    setUsers(employees);
    setAdmins(admin);
  }, [showModal]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 relative">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-gray-900 border border-gray-700">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Welcome Back</h2>
        <form onSubmit={submitHandler} className="flex flex-col space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Email Address"
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none transition"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Password"
            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none transition"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg transition"
          >
            Log In
          </button>
        </form>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 text-sm text-emerald-400 hover:underline w-full text-center"
        >
          View Test Credentials
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 p-6 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-4">Test Login Credentials</h3>

            {/* Admins */}
            <div className="mb-4">
              <h4 className="text-white text-md font-semibold mb-1">🛡 Admin</h4>
              {admins.map((admin, index) => (
                <div key={index} className="text-sm text-gray-300 mb-2">
                  <p>Email: <code className="text-emerald-400">{admin.email}</code></p>
                  <p>Password: <code className="text-emerald-400">{admin.password}</code></p>
                </div>
              ))}
            </div>

            {/* Employees */}
            <div>
              <h4 className="text-white text-md font-semibold mb-1">👤 Employees</h4>
              {users.map((user) => (
                <div key={user.id} className="text-sm text-gray-300 mb-4 border-b border-gray-700 pb-2">
                  <p>Name: <span className="text-white">{user.firstName}</span></p>
                  <p>Email: <code className="text-emerald-400">{user.email}</code></p>
                  <p>Password: <code className="text-emerald-400">{user.password}</code></p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
