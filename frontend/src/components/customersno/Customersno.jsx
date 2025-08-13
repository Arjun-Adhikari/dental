// import CountUp from "react-countup";
// import { Element } from "react-scroll";

// export default function Customersno() {
//   return (
//     <Element name="Our-Works" className="section">
//       <div className="mb-5">
//         <h1 className="font-bold text-3xl">Our Satisfied Customers</h1>
//         <div className="text-4xl font-bold text-blue-600 p-4">
//           <CountUp start={1} end={3000} duration={6} separator="," />+
//           <span className=" font-bold ml-2 text-gray-700">Clients</span>
//         </div>
//       </div>
//     </Element>
//   );
// }

import  { useState, useEffect } from "react";
import CountUp from "react-countup";
// import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function Customersno() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div ref={ref}>
        <div className="mb-5">
          <h1 className="font-bold text-3xl">Our Satisfied Customers</h1>
          <div className="text-4xl font-bold text-blue-600 p-4">
            {hasAnimated ? (
              <CountUp start={1} end={3000} duration={6} separator="," />
            ) : (
              <span>3,000</span>
            )}
            +<span className="font-bold ml-2 text-gray-700">Clients</span>
          </div>
        </div>
    </div>
  );
}
