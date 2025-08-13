import Nav from "../nav/Nav";
import Belownav from "../belownav/opentime";
import Abovenav from "../abovenav/Abovenav";

const Gallery = () => {
  const handlesmile_img = () => {};
  const handleint_img = () => {};
  const handlext_img = () => {};

  return (
    <div>
      <Abovenav />
      <Nav className="" />
      <Belownav />
      <div className="text-xs font-bold flex flex-col items-start px-10 md:px-49 gap-5 bg-[#2B4859] text-white py-5">
        <span className="font-light text-xs">
          SWARGADWARI DENTAL CARE &gt; PHOTO GALLERY
        </span>
        <span className="text-3xl font-medium">Photo Gallery</span>
      </div>

      <ul className="flex px-10 md:px-49 gap-6 text-xs font-medium py-5">
        <li className="hover-underline-animation" onClick={handlesmile_img}>
          Smile Gallery
        </li>
        <li className="hover-underline-animation" onClick={handleint_img}>
          Interior
        </li>
        <li className="hover-underline-animation" onClick={handlext_img}>
          Exterior
        </li>
      </ul>
    </div>
  );
};
export default Gallery;
