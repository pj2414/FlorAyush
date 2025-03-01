
import Herosection from "../components/LandingPage/Herosection";
import HowitWorks from "../components/LandingPage/HowitWorks";
import Impact from "../components/LandingPage/Impact";
import MarqueeComponet from "../components/LandingPage/MarqueeComponent"
const Home = () => {
  return <div className="">
    <div>
     <Herosection/>
     <MarqueeComponet/>
     <HowitWorks/>
     <Impact/>
    </div>
  </div>;
};

export default Home;
