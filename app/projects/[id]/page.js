"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from "next/navigation";
import ProjectsDetail from "../../components/projectDetail";


export default function Home() {
   const { id } = useParams();
  return (
    <>
        <Header/>
        <div>
          <ProjectsDetail id={id}/>
        </div>
        <Footer/>
    </>
    
  );
}
