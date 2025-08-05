import React from 'react';
import {
  FaFileAlt,
  FaClock,
  FaUserCheck,
  FaHourglassHalf,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
  FaUserTie,
  FaUserPlus,
  FaCogs,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r px-6 py-8 overflow-y-auto">
      <div className="text-xl font-bold mb-6">Conference Portal</div>
      <div className="flex items-center mb-6">
        <img src="https://i.ibb.co/3CrmQd9/user-icon.png" alt="User" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <div className="font-semibold">John Smith</div>
          <div className="text-sm text-gray-500">Admin/Chairman</div>
        </div>
      </div>

      {/* Dashboard Section */}
      <nav className="space-y-2 mb-6">
        <div className="text-gray-700 font-semibold flex items-center space-x-3">
          <FaFileAlt /> <span>Dashboard</span>
        </div>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaFileAlt /> <span>All Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaClock /> <span>Pending Review</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaUserCheck /> <span>Assigned Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaHourglassHalf /> <span>Waiting Assignment</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaCheckCircle /> <span>Accepted Papers</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaTimesCircle /> <span>Rejected Papers</span>
        </a>
      </nav>

      {/* Teams Section */}
      <nav className="space-y-2 mb-6">
        <div className="text-gray-700 font-semibold flex items-center space-x-3">
          <FaUsers /> <span>Teams</span>
        </div>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaUserTie /> <span>Review Committee</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaUserTie /> <span>Program Committee</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaUserPlus /> <span>Add Members</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 ml-6">
          <FaCogs /> <span>Team Settings</span>
        </a>
      </nav>

      <hr className="my-4 border-gray-300" />

      {/* Conference Schedule & Analytics */}
      <nav className="space-y-4 mb-6">
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaCalendarAlt /> <span>Conference Schedule</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaChartBar /> <span>Analytics</span>
        </a>
      </nav>

      {/* Settings */}
      <nav>
        <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
          <FaCog /> <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
