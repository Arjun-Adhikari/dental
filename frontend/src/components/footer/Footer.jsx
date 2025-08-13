import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleterms = () => {
    navigate("/terms");
  };
  return (
    <div className="flex justify-around z-100 border-1 text-white border-[#000080] bg-[#000080] py-5 rounded px-2 ">
      <div className="flex flex-col ">
        <span>Copyright &copy; Swargadwari Dental Care Home</span>
        <span>Website Developed By Arjun Adhikari</span>
      </div>
      <div>
        <button
          className="hover:cursor-pointer hover:underline"
          onClick={handleterms}
        >
          Terms and privacy
        </button>
      </div>
    </div>
  );
}
