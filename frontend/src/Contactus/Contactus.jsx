import Nav from "../components/nav/Nav";
import Abovenav from "../components/abovenav/Abovenav";
import Belownav from "../components/belownav/opentime";
import Location from "../components/location/Location";
import Footer from "../components/footer/Footer";
const Contactus = () => {
  return (
    <>
      <Abovenav />
      <Nav />
      <Belownav />
      <div className="text-xs font-bold flex flex-col items-start px-10 md:px-49 gap-5 bg-[#2B4859] text-white py-5">
        <span className="font-light text-xs">
          SWARGADWARI DENTAL CARE &gt; Contact Us
        </span>
        <span className="text-3xl font-medium">Contact Us</span>
      </div>

      <h1 className="text-2xl opacity-80">Contact Us</h1>

      <div className="flex flex-wrap md:justify-around justify-center">
        <div className="border-4 box-border border-[#642AB6] p-6 flex flex-col gap-5 max-w-[285px]">
          <div className="flex flex-col items-start">
            <h1 className="text-shadow-md">Office</h1>
            <span className="text-sm">Near Maya Nursing Home</span>
            <span className="text-sm">Birendranagar,Surkhet</span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-shadow-md">Email</h1>
            <span className="text-sm">swargadwari@gmail.com</span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-shadow-md">Phone</h1>
            <span className="text-sm">9843230047</span>
            <span className="text-sm"></span>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-shadow-md">Opening Hours</h1>
            <span className="text-sm">Everyday (7 AM - 7 PM)</span>
            <span className="text-sm">Emergency Case (24/7)</span>
          </div>
        </div>
        <Location />
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
