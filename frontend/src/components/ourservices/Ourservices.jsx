import Abovenav from "../abovenav/Abovenav";
import Nav from "../nav/Nav";
import Belownav from "../belownav/opentime";
import Footer from "../footer/Footer";
export default function Ourservices() {
  return (
    <>
      <Abovenav />
      <Nav />
      <Belownav />
      <div className="text-xs font-bold flex flex-col items-start px-10 md:px-49 gap-5 bg-[#2B4859] text-white py-5">
        <span className="font-light text-xs">
          SWARGADWARI DENTAL CARE &gt; Our Services
        </span>
        <span className="text-3xl font-medium">Our Services</span>
      </div>
      <div className="rounded mt-10 mb-10">
        <h1 className="text-3xl font-bold opacity-70">
          Dental Services in SURKHET, NEPAL
        </h1>
        <ol className="list-disc md:text-xl text-md flex flex-col items-start text-[#000080] bg-[#F6F6F6] px-7  py-2 ">
          <li>Orthodontics/ Braces</li>
          <li>Crowns and Bridge</li>
          <li>Endodontics</li>
          <li>Oral and Maxillofacial Surgery</li>
          <li>Pediatric / Kids Dentistry</li>
          <li>Gum treatment</li>
          <li>Oral Appliances (Bleaching Trais,Retainers)</li>
        </ol>
      </div>
      <Footer/>
    </>
  );
}
