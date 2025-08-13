import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const Abovenav = () => {
  return (
    <div className="flex justify-around items-start py-2 bg-[#F5F5F5]">
      <div className="font-sans font-md">Dental in Surkhet</div>
      <div className="flex gap-5 md:gap-20">
        <a href="https://facebook.com" target="_black">
          <BsFacebook color="blue" size={25} className="hover:cursor-pointer" />
        </a>
        <a href="https://instagram.com" target="_black">
          <FaInstagramSquare
            color="red"
            size={25}
            className="hover:cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};
export default Abovenav;
