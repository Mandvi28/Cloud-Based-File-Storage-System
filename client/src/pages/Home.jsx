import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100">

        <section className="text-center py-24 px-6">

          <h1 className="text-5xl font-bold text-blue-700">
            Cloud-Based File Storage System
          </h1>

          <p className="text-gray-600 mt-6 text-xl max-w-2xl mx-auto">
            Securely upload, manage, search and download files
            using Microsoft Azure Blob Storage.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              to="/register"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white"
            >
              Login
            </Link>

          </div>
        </section>

        <section className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              🔒 Secure Login
            </h2>

            <p className="mt-3 text-gray-600">
              JWT authentication with encrypted passwords.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              ☁ Azure Storage
            </h2>

            <p className="mt-3 text-gray-600">
              Store files securely using Azure Blob Storage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              📂 File Management
            </h2>

            <p className="mt-3 text-gray-600">
              Upload, download, search and delete files.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold text-xl">
              ⚡ Fast Performance
            </h2>

            <p className="mt-3 text-gray-600">
              Built with React, Express and Azure Cloud.
            </p>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;