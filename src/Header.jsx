// Header.jsx
import React from 'react';

const Header = ({ user, onLogin, onLogout }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">Student Data App</h1>
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.displayName} ({user.email})</span>
          <button onClick={onLogout} className="px-4 py-2 bg-red-500 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={onLogin} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
