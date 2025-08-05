import { Link } from 'react-router-dom';
import { FaFileAlt, FaClock } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Reviewersidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white border-r z-50 shadow transform transition-transform duration-300 ease-in-out`}>
        <div className="px-6 py-8 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-xl font-bold">Review Portal</div>
            <button onClick={onClose}>
              <IoMdClose className="text-gray-600 text-2xl" />
            </button>
          </div>

          {/* User Info */}
          <div className="flex items-center mb-6">
            <img
              src="https://i.ibb.co/3CrmQd9/user-icon.png"
              alt="User"
              className="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <div className="font-semibold">John Smith</div>
              <div className="text-sm text-gray-500">Reviewer</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">
            <Link
              to="/reviewer"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
            >
              <FaFileAlt />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/reviewer/assigned-papers"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
            >
              <FaFileAlt />
              <span>Assigned Papers</span>
            </Link>

            <Link
              to="/reviewer/assigned-proposals"
              className="flex items-center space-x-3 text-gray-600 hover:text-blue-600"
            >
              <FaFileAlt />
              <span>Assigned Proposals</span>
            </Link>

            <a href="#" className="flex items-center space-x-3 text-gray-600 hover:text-blue-600">
              <FaClock />
              <span>Review History</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Reviewersidebar;
