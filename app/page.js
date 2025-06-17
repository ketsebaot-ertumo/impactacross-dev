import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeComponent from "./components/HomeComponent";
import HomeSectorialAreas from "./components/OurServices";
import OurExpertise from "./components/OurExpertise";
import OurTeam from "./components/OurTeam";
import ProjectsAndPartners from "./components/Projects";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import Partners from "./components/Partner";


export default function Home() {
  return (
    <>
      <Header/>
      <div>
        <HomeComponent />
        <WhoWeAre/>
        <WhatWeDo/>
        <WhyChooseUs/>
        <HomeSectorialAreas/>
        <OurExpertise/>
        <OurTeam/>
        <ProjectsAndPartners/>
        <Partners/>
      </div>
      <Footer/>
    </>
  );
}
