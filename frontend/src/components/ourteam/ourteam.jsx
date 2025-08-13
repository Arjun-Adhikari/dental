import Eachmember from "./Eachmember";
import { Element } from "react-scroll";
export default function Ourteam() {
  return (
    <Element name="Our-Services" className="section">
      <div>
        <h1 className="font-bold text-3xl py-6">Our Team Members</h1>
        <Eachmember
          speciality="Senior Dental Surgeon"
          name="Dr Arun Basnet BDS(KU)"
          tag="Nmc no: 27555"
          img="backgroundimg.jpg"
        />
        <Eachmember
          speciality="Senior Dental Surgeon"
          name="Dr Suraj Rawat"
          tag="Nmc no: "
          img="backgroundimg.jpg"
        />
        <Eachmember
          speciality="Senior Dental Surgeon"
          name="Dr Sudip Basnet"
          tag="Nmc no: "
          img="backgroundimg.jpg"
        />
      </div>
    </Element>
  );
}
