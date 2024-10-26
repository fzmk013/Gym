import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import youtube from "@/assets/youtube.png";
import linkedin from "@/assets/linkedin.png";
import instagram from "@/assets/instagram.png";
import facebook from "@/assets/Facebook.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import Button from '@/utils/Button';



type Props = {
  setSelectedPage : (value : SelectedPage) => void;
}

function Home({setSelectedPage}: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
    id='home'
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    > 
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
       className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
       onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
       >

        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS   */}
          <motion.div
           className='md:-mt-20'
           initial="hidden" //initial value
           whileInView="visible" //final value
           viewport={{once : true , amount: 0.5 }}
           transition={{duration : 1}}
           variants={{
            hidden : {opacity : 0, x:-50},//initial condition
            visible : {opacity : 1 , x:0},//final condition
           }}
           >
            <div className='relative'>text
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                <img alt='home-pagre-text' src={HomePageText}/>
              </div>
            </div>
 
            <p className='mt-8 text-2xl md:text-start text-gray-500 bold font-bold uppercase'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.</p>
          </motion.div>

          {/*  ACTIONS */}
          <motion.div 
          className='mt-8 flex items-center gap-8'
          initial="hidden" //initial value
          whileInView="visible" //final value
          viewport={{once : true , amount: 0.5 }}
          transition={{delay : 0.2 , duration: 0.5}}
          variants={{
          hidden : {opacity : 0, x:-50},//initial condition
          visible : {opacity : 1 , x:0},//final condition
           }}
          >
            <Button setSelectedPage={setSelectedPage}>
              Join now
            </Button>
            
            <AnchorLink
            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500 '
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>

            </AnchorLink>
            

          </motion.div>
        </div>

        {/* IMAGE */}
        <div 
        className='flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end'
              >
              <img alt='home-pageGraphic' src={HomePageGraphic} />
        </div>

      </motion.div>




       {/* MEDIA */}
       {isAboveMediumScreen && (
       
         <div className='h-[150px] w-full  bg-primary-100 py-10 ftr-so fit ui-repeater mt-10  md:flex'>
          <div className='mx-auto w-5/6 items-center justify-between md:flex'>
             <div className='flex w-3/5 items-center  gap-8'>
            <a href='https://www.youtube.com/'>
            <img alt='youtube' src={youtube}/>
            </a>

            <a href='https://www.linkedin.com/'>
            <img alt='linkdIn' src={linkedin}/>
            </a>

            <a href='https://www.instagram.com/'>
            <img alt='instagram' src={instagram}/> 
            </a>

            <a href='https://www.facebook.com/'>
            <img alt='facebook' src={facebook}/> 
            </a>
              
             
             
              

            </div>

            <div>
              <span>If you’re serious about achieving a goal- no matter what that is- then we are your gym.
                 From the best equipment, technology and programs to the best fitness professionals around, 
                 we are serious about getting you results.</span>
            </div>
        </div>
       </div>


       )}

    </section>
  )
}

export default Home;