const stats = [
  { label: 'Pending Reviews', value: 3 },
  { label: 'Completed', value: 12 },
  { label: 'Due This Week', value: 1 },
  { label: 'Average Score', value: 7.8 },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-4 rounded-lg shadow text-center">
          <p className="text-gray-500 text-sm">{stat.label}</p>
          <p className="text-xl font-semibold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
