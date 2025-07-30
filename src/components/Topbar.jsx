const Topbar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Reviewer Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Dr. Sarah W</span>
        <img src="https://ui-avatars.com/api/?name=Sarah+W" alt="avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Topbar;
