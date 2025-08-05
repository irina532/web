// AssignedPapersPage.jsx
import { Link } from 'react-router-dom';
import { FaBars, FaDownload, FaEye, FaPen } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

const papers = [
  { id: 'RP-2025-001', title: 'Machine Learning Applications in Climate Change Prediction Models', due: 'March 15, 2025' },
  { id: 'RP-2025-002', title: 'Quantum Computing Algorithms for Cryptographic Security Enhancement', due: 'March 20, 2025' },
  { id: 'RP-2025-003', title: 'Biomedical Data Analysis Using Deep Learning Neural Networks', due: 'March 25, 2025' },
  { id: 'RP-2025-004', title: 'Sustainable Energy Systems: A Comprehensive Review of Solar Panel Efficiency', due: 'March 30, 2025' },
  { id: 'RP-2025-005', title: 'Artificial Intelligence in Healthcare: Diagnostic Accuracy and Patient Outcomes', due: 'April 5, 2025' },
  { id: 'RP-2025-006', title: 'Blockchain Technology Applications in Supply Chain Management Systems', due: 'April 10, 2025' }
];

const AssignedProposalsPage = () => {
  const { toggleSidebar } = useOutletContext(); // ✅ Access sidebar toggle from context

  return (
    <div className="flex flex-col">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={toggleSidebar} className="text-gray-600 text-2xl">
          <FaBars />
        </button>
        <h2 className="text-2xl font-semibold">Assigned Proposals</h2>
        <div></div> {/* Spacer for layout balance */}
      </div>

      <p className="text-gray-600 mb-6">Review and manage your assigned research papers</p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map((paper) => (
          <div key={paper.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow">
            <div className="text-sm text-gray-500 mb-1">Paper ID: {paper.id}</div>
            <h3 className="text-lg font-semibold mb-4">{paper.title}</h3>

            {/* Buttons */}
            <div className="space-y-2">
              {/* View + Download side by side */}
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
                  <FaEye /> View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100">
                  <FaDownload /> Download
                </button>
              </div>

              {/* Review button below */}
              <Link to={`/reviewer/review/${paper.id}`}>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100 mt-2">
                  <FaPen /> Review
                </button>
              </Link>
            </div>

            {/* Due Date */}
            <div className="text-xs text-gray-500 mt-4 text-right">
              📅 Due: {paper.due}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignedProposalsPage;
