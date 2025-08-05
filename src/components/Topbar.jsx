import { FaBars, FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Topbar = ({ onMenuClick }) => {
  const handleLogout = () => {
    // TODO: Add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className="flex items-center justify-between bg-white shadow p-4 mb-6">
      {/* Menu button */}
      <button className="text-gray-600 text-xl" onClick={onMenuClick}>
        <FaBars />
      </button>

      {/* Title */}
      <div className="text-lg font-semibold">Reviewer Dashboard</div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Notification bell */}
        <div className="relative">
          <FaBell className="text-gray-600 text-xl cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* User icon */}
        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />

        {/* Logout icon */}
        <button onClick={handleLogout}>
          <FaSignOutAlt className="text-xl text-gray-600 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Topbar;
