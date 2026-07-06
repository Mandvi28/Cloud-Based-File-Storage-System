

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token) {
      navigate("/login");
      return;
    }

    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-center mb-8">

            <div>
              <h1 className="text-4xl font-bold text-blue-700">
                Dashboard
              </h1>

              <p className="text-gray-600 mt-2">
                Welcome, <span className="font-semibold">{user?.name}</span>
              </p>

              <p className="text-gray-500">
                {user?.email}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

          <p className="text-gray-600 mb-8">
            Manage your files securely using Azure Blob Storage.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">

            {/* Upload Card */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-semibold mb-4">
                Upload File
              </h2>

              <input
                type="file"
                className="w-full border rounded-lg p-2"
                disabled
              />

              <button
                disabled
                className="mt-4 w-full bg-blue-700 text-white py-3 rounded-lg opacity-60 cursor-not-allowed"
              >
                Upload (Coming on Day 3)
              </button>

            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-semibold mb-4">
                Statistics
              </h2>

              <p>Total Files: 0</p>

              <p className="mt-2">
                Storage Used: 0 MB
              </p>

            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-semibold mb-4">
                Recent Files
              </h2>

              <p className="text-gray-500">
                No files uploaded yet.
              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Dashboard;