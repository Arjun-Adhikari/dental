import { FaPhoneSquareAlt } from "react-icons/fa";
const Phonelogo = () => {
  return (
    <a href="tel:9843230047">
      <FaPhoneSquareAlt
        size={50}
        className="rounded-[5000px] fixed bottom-5 right-4 z-50 hover:cursor-pointer"
        color="green"
      />
    </a>
  );
};
export default Phonelogo;
