"use client";

import OurTeamDetail from "../../components/OurTeamDetail";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "next/navigation";


export default function Home() {
   const { id } = useParams();
  return (
    <>
        <Header/>
        <div>
          <OurTeamDetail id={id}/>
        </div>
        <Footer/>
    </>
    
  );
}
