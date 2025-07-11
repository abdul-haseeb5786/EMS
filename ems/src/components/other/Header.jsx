import React from 'react'

const Header = ({ changeUser, data }) => {
  const username = data?.firstName || 'User'

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="flex items-center justify-between bg-[#1e1e1e] p-4 rounded-xl shadow-md">
      <div>
        <h1 className="text-base text-gray-400">Hello 👋</h1>
        <h2 className="text-3xl font-semibold text-white">{username}</h2>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 transition duration-200 text-white px-6 py-2.5 rounded-lg font-medium"
        aria-label="Log out"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
