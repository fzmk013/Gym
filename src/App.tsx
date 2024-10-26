import  Navbar from "@/Page/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/utils/types";
import Benefits from "./Page/benefits";
import Home from "./Page/home";
import Classes from "./Page/Classes";
import About from "./Page/about";
import Footer from "./Page/footer";


function App() {

  const [selectedPage , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage , setIsTopOfPage] = useState<boolean>(true);


    useEffect (() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {  //check if we are at the top of the page
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        } 

        if (window.scrollY !== 0) setIsTopOfPage(false);
      }

      window.addEventListener("scroll" , handleScroll );
      return () => window.removeEventListener("scroll" , handleScroll) //remove when leave the page
    } , [])


  return (
    <div className='app'>
    
    
    <Navbar
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />


    <Home setSelectedPage={setSelectedPage} />
    <Benefits setSelectedPage={setSelectedPage} />
    <Classes setSelectedPage={setSelectedPage} />
    <About setSelectedPage={setSelectedPage} />
    <Footer/>

    </div>
  )
}

export default App
