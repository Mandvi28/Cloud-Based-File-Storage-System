
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fileInputRef = useRef(null);

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

    fetchFiles();
  }, [navigate]);

  const fetchFiles = async () => {
    try {
      setLoading(true);

      const response = await API.get("/files");

      setFiles(response.data.files || []);
    } catch (error) {
      console.error("Failed to fetch files:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await API.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message);

      setSelectedFile(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      fetchFiles();

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "File upload failed."
      );

    } finally {

      setUploading(false);

    }
  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this file?"
    );

    if (!confirmDelete) return;

    try {

      const response = await API.delete(`/files/${id}`);

      alert(response.data.message);

      fetchFiles();

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to delete file."
      );

    }

  };

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged out successfully");

    navigate("/login");
  };

  const totalStorage = (
    files.reduce((sum, file) => sum + file.fileSize, 0) /
    (1024 * 1024)
  ).toFixed(2);
  const filteredFiles = files.filter((file) =>
  file.originalName.toLowerCase().includes(searchTerm.toLowerCase())
);
const formatFileSize = (bytes) => {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }

  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
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
                ref={fileInputRef}
                type="file"
                className="w-full border rounded-lg p-2"
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />

              <button
                onClick={handleUpload}
                disabled={uploading}
                className={`mt-4 w-full text-white py-3 rounded-lg ${
                  uploading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-blue-700 hover:bg-blue-800"
                }`}
              >
                {uploading ? "Uploading..." : "Upload File"}
              </button>

            </div>

            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-semibold mb-4">
                Statistics
              </h2>

              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <p>Total Files: {files.length}</p>

                  <p className="mt-2">
                    Storage Used: {totalStorage} MB
                  </p>
                </>
              )}

            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-xl shadow-md p-6">

              <h2 className="text-xl font-semibold mb-4">
                Recent Files
              </h2>
              <input
               type="text"
               placeholder="Search files..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full border rounded-lg p-2 mb-4"
             />

              {loading ? (
                <p className="text-gray-500">
                  Loading...
                </p>
              
              ) : filteredFiles.length === 0 ? (
              <p className="text-gray-500">
              {searchTerm
               ? "No matching files found."
              : "No files uploaded yet."}
              </p>
              ) : (
                
                  
                
              
                <div className="space-y-3 max-h-72 overflow-y-auto">


                  {filteredFiles.map((file) => (

                    <div
                      key={file._id}
                      className="border rounded-lg p-3"
                    >

                      <p className="font-medium break-words">
                        {file.originalName}
                      </p>


                       <p className="text-sm text-gray-500 mt-1">
                     {formatFileSize(file.fileSize)}
                      </p>
                     
                     

                    <p className="text-xs text-gray-400 mt-1">
                  Uploaded:
               {" "}
                   {new Date(file.createdAt).toLocaleString()}
                  </p>






                      

                      <div className="flex gap-2 mt-3">

                        <a
                          href={file.fileUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                        >
                          View
                        </a>

                        <button
                          onClick={() => handleDelete(file._id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

      </main>

      <Footer />

    </>
  );
}

export default Dashboard;