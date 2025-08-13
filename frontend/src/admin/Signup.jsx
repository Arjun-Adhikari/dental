import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    gmail: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignupForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        gmail: formData.gmail,
        username: formData.username,
        password: formData.password,
      });

      console.log("Signup successful:", response.data);
      setMessage("Signup successfull Welcome.");
      setFormData({ gmail: "", username: "", password: "" });
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response) {
        setError(
          `Signup failed: ${err.response.data.message || "Please try again."}`
        );
      } else if (err.request) {
        setError(
          "Signup failed: No response from server. Please check your network connection."
        );
      } else {
        setError("Signup failed: An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
    setFormData({
      username: "",
      gmail: "",
      password: "",
    });
  };

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Signup
        </h2>
        <form onSubmit={handleSignupForm} className="space-y-4">
          <div>
            <label
              htmlFor="gmail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gmail:
            </label>
            <input
              type="email"
              placeholder="Enter your gmail"
              id="gmail"
              name="gmail"
              value={formData.gmail}
              onChange={handleForm}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              id="username"
              value={formData.username}
              onChange={handleForm}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleForm}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {loading && (
            <p className="text-center text-indigo-600">Signing up...</p>
          )}
          {message && <p className="text-center text-green-600">{message}</p>}
          {error && <p className="text-center text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>
        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 hover:cursor-pointer mt-2"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
