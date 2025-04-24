import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MissionVisionObjective from "../components/MissionVisionObjectives";
import OurTeam from "../components/OurTeam";
import WhoWeAre from "../components/WhoWeAre";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
        <Header/>
        <About/>
        <WhoWeAre/>
        <div>
            <div className="text-4xl font-semibold text-gray-700 text-center pt-4 px-8">Strategic Framework</div>
            <div className="text-sm font-semibold text-gray-700 text-center py-2">Mission, Vission and Core Values</div>
            <MissionVisionObjective/>
        </div>
        <WhyChooseUs/>
        <OurTeam/>
        <Footer/>
    </>
    
  );
}
