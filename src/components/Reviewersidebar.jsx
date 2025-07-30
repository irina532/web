import { FaTachometerAlt, FaFileAlt, FaClock, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

const Reviewersidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Review Portal</h2>
      <ul className="space-y-4">
        
         <li><a href="#" className="flex items-center  text-gray-800 hover:text-blue-600 ">
                  <FaTachometerAlt /> <span>Dashboard</span> </a></li>
        <li><a href="#" className="flex items-center  text-gray-800 hover:text-blue-600 ">
                  <FaFileAlt /> <span>Assigned Papers</span> </a></li>
        <li><a href="#" className="flex items-center  text-gray-800 hover:text-blue-600 ">
                  <FaClock /> <span> Review History</span> </a></li>
        
        <li><a href="#" className="flex items-center  text-gray-800 hover:text-blue-600 ">
                  <FaCalendarAlt /> <span>Deadlines</span> </a></li>
        
        <li><a href="#" className="flex items-center  text-gray-800 hover:text-blue-600 ">
                  <FaChartBar /> <span>Analytics</span> </a></li>
        
        
      </ul>
    </div>
  );
};

export default Reviewersidebar;
