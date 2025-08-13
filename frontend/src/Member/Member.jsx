import { useState } from "react";
import axios from "axios";

const Member = () => {
  const [formData, setFormData] = useState({
    speciality: "",
    name: "",
    tag: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await axios.post("https://dental-nu-jade.vercel.app/api/addmember", {
        speciality: formData.speciality,
        name: formData.name,
        tag: formData.tag,
      });
      console.log("Members added successfully");
      setMessage("Member data added successfully!");
      setFormData({ speciality: "", name: "", tag: "" });
    } catch (err) {
      console.error("Error during adding members", err);
      if (err.response) {
        setError(
          `Member adding failed: ${
            err.response.data.message || "Invalid data. Please try again."
          }`
        );
      } else if (err.request) {
        setError("No response from server. Check your network connection.");
      } else {
        setError("Member adding failed: An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-center text-4xl font-extrabold text-indigo-700 mb-8">
          Add New Member
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="speciality"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Speciality:
            </label>
            <input
              type="text"
              placeholder="e.g., Physical Surgeon"
              id="speciality"
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              placeholder="e.g., Jane Doe"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tag:
            </label>
            <input
              type="text"
              placeholder="e.g., NMC-2020 KMC"
              id="tag"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          {loading && (
            <p className="text-center text-indigo-600 font-semibold">
              Adding member...
            </p>
          )}
          {message && (
            <p className="text-center text-green-600 font-medium">{message}</p>
          )}
          {error && (
            <p className="text-center text-red-600 font-medium">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150 ease-in-out"
          >
            {loading ? "Adding Member..." : "Add Member"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Member;
