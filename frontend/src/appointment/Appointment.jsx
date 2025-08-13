import { CiUser } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import Abovenav from "../components/abovenav/Abovenav";
import Nav from "../components/nav/Nav";
const Appointment = () => {
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setMessage("");
      setError("");

      const response = await axios.post("http://localhost:8080/appointment", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });
      if (response.status === 200 || response.status === 201) {
        setMessage("Appointment submitted successfully!");
        setformData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setError(
          `Appointment submission failed with status ${response.status}.`
        );
      }
    } catch (err) {
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

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Abovenav />
      <Nav />
      <h1 className="text-3xl font-bold opacity-70 flex justify-center pt-5">
        Appointment Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col items-center gap-3 px-5 py-5"
      >
        <div className="border-b-2">
          <label htmlFor="name">
            <CiUser className="inline" color="purple" />
          </label>
          <input
            required
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="px-4 py-2 outline-0 min-w-fit w-[60vw]"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="border-b-2">
          <label htmlFor="phone">
            <FaPhoneAlt className="inline" color="#642AB6 " />
          </label>
          <input
            required
            type="tel"
            placeholder="Phone"
            id="phone"
            name="phone"
            className="px-4 py-2 outline-0 w-[60vw]"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div className="border-b-2">
          <label htmlFor="email">
            <MdOutlineEmail className="inline" color="#642AB6 " />
          </label>
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="px-4 py-2 outline-0 w-[60vw]"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="border-1">
          <textarea
            required
            name="message"
            id="message"
            placeholder="Message"
            className="px-4 py-2 outline-0 h-[30vh] w-[60vw]"
            onChange={handleChange}
            value={formData.message}
          />
        </div>

        {loading && (
          <p className="text-center text-indigo-600">Logging in...</p>
        )}
        {message && <p className="text-center text-green-600">{message}</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-[#6310d7] hover:cursor-pointer  text-sm font-semibold text-white px-8 py-4"
        >
          {loading ? "Saving Appointment" : " Make an Appointment"}
        </button>
      </form>
    </>
  );
};
export default Appointment;
