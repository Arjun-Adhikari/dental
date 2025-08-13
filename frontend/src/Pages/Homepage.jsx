import Nav from "../components/nav/Nav";
import Body from "../components/body/Body";
import Ourteam from "../components/ourteam/ourteam";
import Customersno from "../components/customersno/Customersno";
import Realworks from "../components/realworks/Realworks";
import Location from "../components/location/Location";
import Footer from "../components/footer/footer";
import Opentime from "../components/belownav/opentime";
import Abovenav from "../components/abovenav/Abovenav";
import Phonelogo from "../components/phonelogo/Phonelogo";

const Homepage = () => {
  return (
    <>
      <Abovenav />
      <Nav />
      <Opentime />
      <Body />
      <Ourteam />
      <Realworks />
      <Customersno />
      <Location />
      <Footer />
      <Phonelogo />
    </>
  );
};

export default Homepage;
