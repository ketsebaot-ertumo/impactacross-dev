import Footer from "../components/Footer";
import Header from "../components/Header";
import OurSectorialFocus from "../components/OurSectorialFocus";
import ServicesComponent from "../components/ServiceComponent";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
        <Header/>
        <div>
          <Services/>
          <ServicesComponent/>
          <OurSectorialFocus/>
        </div>
        <Footer/>
    </>
    
  );
}
