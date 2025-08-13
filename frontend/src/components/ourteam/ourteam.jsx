import Eachmember from "./Eachmember";
import { Element } from "react-scroll";
export default function Ourteam() {
  return (
    <Element name="Our-Services" className="section">
      <div>
        <h1 className="font-bold text-3xl py-6">Our Team Members</h1>
        <Eachmember
          speciality="Physical Surgeon"
          name="Dr Arun Basnet"
          tag="Nmc 1334 200"
          img="backgroundimg.jpg"
        />
      </div>
    </Element>
  );
}
