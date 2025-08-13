import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";
export default function Body() {
  return (
    <Element name="Home" className="section">
      <div className="bg-blue-500 opacity-100 relative -z-10">
        <img className="-z-10" src="backgroundimg.jpg" alt="backgroundimg" />
        <h1 className="absolute top-25 md:top-60 md:left-25 px-5 text-2xl z-10 md:text-4xl">
          Swargadwari Dental Care Home{" "}
          <span className="text-[#000080] font-bold z-10">
            <Typewriter
              words={[
                "Birendranagar 6, Surkhet",
                "Opposite side of Maya Nursing Home",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </Element>
  );
}
