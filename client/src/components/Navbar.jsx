import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Cloud Storage
        </Link>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>

          <Link to="/register" className="hover:text-gray-200">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;