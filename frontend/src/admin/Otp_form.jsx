import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Otp_form = () => {
  const [Otp, setOtp] = useState("");
  // const [isttrue, setIstrue] = useState(false);
  const navigate = useNavigate();
  const handleotp = async () => {
    const response = await axios.post("http://localhost:8080/otp/generate");
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:8080/otp/otpcheck", {
      Otp,
    });
    if (response.data == 200) {
      console.log("your otp has been succeed and then you can enter your new");
      navigate("/signup");
      setOtp("");
    } else {
      console.log("Try again later");
    }
  };
  return (
    <>
      <h1 className="font-bold text-2xl pt-10">Otp confirmation</h1>
      <button
        className="bg-green-500 text-white text-md p-2 rounded hover:cursor-pointer"
        onClick={handleotp}
      >
        Send OTP
      </button>

      <form className="flex justify-center gap-1" onClick={handleSubmit}>
        <input type="password" maxLength={6} className="border-2 p-1" />
        <button
          className="bg-green-500 px-2 py-1 rounded text-white"
          value={Otp}
          onChange={handleChange}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Otp_form;
