import logo from '../assets/images/img-asset/logo.png';

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-10 py-5 ">
    
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      
      <div className="flex flex-row gap-4 text-sm font-medium text-gray-700">
        <p>Home</p>
        <p>Fixture</p>
        <p>Teams</p>
        <p>Schedules</p>
        <button className="px-4 py-1 text-black border rounded">0 coin</button>
      </div>
    </div>
  );
}

export default Navbar;
