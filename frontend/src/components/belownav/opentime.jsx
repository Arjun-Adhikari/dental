import { FaRegClock, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Opentime = () => {
  const navigate = useNavigate();
  const handleAppointment = () => {
    navigate("/appointment");
  };
  return (
    <div className="flex justify-around bg-[#F5F5F5] flex-wrap border-2 border-[#F5F5F5] gap-3 mb-4 md:mb-0">
      <div className="Time-Scheduling flex justify-start gap-4">
        <FaRegClock size={30} color="blue" className="mt-1" />
        <div className="flex flex-col items-start">
          <span>Open Hours</span>
          <span className="text-sm font-light"> Everday[7AM-7PM]</span>
          <span className="text-sm font-light ">Emergency[24/7]</span>
        </div>
      </div>

      <div
        className="flex  items-center gap-2 text-white bg-[#642AB6] px-5 hover:cursor-pointer"
        onClick={handleAppointment}
      >
        <FaCalendarAlt color="white" size={25} className="mt-1" />
        <span>Make an appointement</span>
      </div>
    </div>
  );
};
export default Opentime;
