import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forget_password = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForget = async (event) => {
    console.log("handle forever works yrr");
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.get(
        "http://localhost:8080/forget_password",
        {
          username: formData.username,
        }
      );
      console.log("forget password request submitted!!");
      if (response.data == 200) {
        setMessage("Forget password request sucessful");
        navigate("/otp_check");
        setFormData({ username: "" });
      } else {
        setMessage("Something is wrong,Please try again later!!!");
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response) {
        setError(
          `Login failed: ${
            err.response.data.message ||
            "Invalid credentials. Please try again."
          }`
        );
      } else if (err.request) {
        setError("Login failed: No response from server. Check your network.");
      } else {
        setError("Login failed: An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forget your password
        </h2>
        <form onSubmit={handleForget} className="space-y-4">
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
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {loading && (
            <p className="text-center text-indigo-600">In a process...</p>
          )}
          {message && <p className="text-center text-green-600">{message}</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
        </form>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-2 hover:cursor-pointer"
        >
          Forget Password
        </button>
      </div>
    </div>
  );
};

export default Forget_password;
