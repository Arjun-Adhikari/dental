import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
export default function Nav() {
  const [ishamtrue, setIshamtrue] = useState(false);
  const navigate = useNavigate();
  const handlehamburger = (ishamtrue) => {
    setIshamtrue(!ishamtrue);
  };

  const handleLinks = () => {
    setIshamtrue(false);
  };
  const handlegallery = () => {
    navigate("/gallery");
  };
  const handleservices = () => {
    navigate("/services");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleAdmin = () => {
    navigate("/signup");
  };
  const handleContactus = () => {
    navigate("/contactus");
  };
  return (
    <div className=" sticky top-0 z-50">
      <nav className="flex justify-around md:justify-evenly bg-[#FFCF01] p-2 h-15 md:gap-0 gap-20">
        <div className="logo">
          <img
            className="hover:cursor-pointer w-11 h-11 rounded-full"
            src="logo.webp"
            alt="logo"
          />
        </div>
        <FaUser
          className="flex justify-center mt-2 hover:cursor-pointer"
          size={24}
          onClick={handleAdmin}
        />
        <div className="text-[#1B4243]  gap-10 hidden sm:flex md:visible pt-2 ">
          <button
            className="hover:text-[#642AB6] hover:underline hover:cursor-pointer"
            onClick={handleHome}
          >
            Home
          </button>
          <button
            className="hover:text-[#642AB6] hover:underline hover:cursor-pointer"
            onClick={handleservices}
          >
            Our Services
          </button>
          <button
            className="hover:text-[#642AB6] hover:underline hover:cursor-pointer"
            onClick={handlegallery}
          >
            Our Gallery
          </button>
          <button
            className="hover:text-[#642AB6] hover:underline hover:cursor-pointer"
            onClick={handleContactus}
          >
            ContactUs
          </button>
        </div>

        <div className="visible sm:block md:hidden flex">
          <img
            className="w-8 h-8 hover:cursor-pointer md:hidden"
            src="hamburger.svg"
            alt="hamburger"
            onClick={() => handlehamburger(ishamtrue)}
          />
        </div>
      </nav>
      <div className="md:hidden">
        {ishamtrue ? (
          <ul className=" flex justify-center items-center flex-col gap-2.5 text-[#F5F5F5] bg-[#4DA8DA] min-h-40 text-md md:text-xl">
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleHome}
            >
              Home
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleservices}
            >
              Our Services
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handlegallery}
            >
              Gallery
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={handleContactus}
            >
              ContactUs
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
