import { FaTachometerAlt, FaFileAlt, FaClock, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

const Reviewersidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Review Portal</h2>
      <ul className="space-y-4">
        <li className="font-semibold text-blue-600 flex items-center">
          <FaTachometerAlt className="mr-2" /> Dashboard
        </li>
        <li className="flex items-center"><FaFileAlt className="mr-2" /> Assigned Papers</li>
        <li className="flex items-center"><FaClock className="mr-2" /> Review History</li>
        <li className="flex items-center"><FaCalendarAlt className="mr-2" /> Deadlines</li>
        <li className="flex items-center"><FaChartBar className="mr-2" /> Analytics</li>
      </ul>
    </div>
  );
};

export default Reviewersidebar;
