import { useState } from "react";
import { Bars3Icon , XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/utils/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/utils/Button"; 
//import { BlobOptions } from "buffer";

type Props = {
  isTopOfPage : boolean;
  selectedPage : SelectedPage;
  setSelectedPage: (value : SelectedPage) => void;
}

const Navbar = ( {isTopOfPage ,selectedPage , setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery ("(min-width: 1060px)");
    const [ isMenuToggled , setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage? "" : "bg-primary-100 drop-shadow";
    
  return (
    <nav>
    {/* parent div || Outter div*/}
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* inner div */}
        <div className={`${flexBetween}  mx-auto w-5/6`}>
             {/* LEFT SIDE */}
             <div className={`${flexBetween}  w-full gap-16`}>
                <img alt="logo" src={Logo} />
             
              {/* RIGHT SIDE */}
            {isAboveMediumScreen ? (
            <div className={`${flexBetween} w-full`}>
                {/* inner left side */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page= "Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 

                  <Link  
                    page= "Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 

                  <Link 
                    page= "Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                   />

                  <Link 
                    page= "About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                   />
                </div>

                 {/* inner right side */}
                 <div className={`${flexBetween} gap-8`}>
                    <p>Sign in</p>
                    <ActionButton setSelectedPage={setSelectedPage}>Sign Up</ActionButton>
                 </div>
              </div>
            ) : ( 
            <button 
            className="rounded-full bg-secondary-500 p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
                <Bars3Icon className="h-6 w-6 text-white" />

            </button>
            )}
          </div>
        </div>
    </div>

{/* ********************************************************************** */}


    {/* MOBILE MENU MODEL */}
    {!isAboveMediumScreen && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon className="h-6 w-6 trxt-gray-400" /> 
        </button>
        </div>

        {/* MENU ITEMS */}
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                  <Link
                    page= "Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 

                  <Link  
                    page= "Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> 

                  <Link 
                    page= "Our classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                   />

                  <Link 
                    page= "Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                   />
                </div>


      </div>
    )}
  </nav>
  )
}

export default Navbar