import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-12">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

          <h1 className="text-3xl font-bold text-center text-blue-700">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Login to your Cloud Storage account
          </p>

          <form className="mt-8 space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-700 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Login;