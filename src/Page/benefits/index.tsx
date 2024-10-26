import { BenefitType, SelectedPage } from "@/utils/types"
import { HomeModernIcon , UserGroupIcon , AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefits";
import Button from "@/utils/Button";
import BenefitsPageGraph from "@/assets/BenefitsPageGraphic.png"
import Header from "@/utils/Header";




const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon  className="h-6 w-6"/>,
    title : "State of the Art Facilities",
    description :
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa error facere, expedita maiores libero ad autem blanditiis labore perferendis debitis officiis omnis alias, magnam eius quas.",  
  },

  {
    icon: <UserGroupIcon  className="h-6 w-6"/>,
    title : "100's of Diverse Classes",
    description :
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum numquam, quia eos fuga tenetur temporibus atque placeat porro possimus tempore sunt officia!",  
  },

  {
    icon: <AcademicCapIcon  className="h-6 w-6"/>,
    title : "Experience",
    description :
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ab sit accusamus quidem dolore labore nulla velit sunt fuga facilis porro eaque inventore quod et.",  
  },
]


const container = {
  hidden: {},
  visible : {
    transition : {staggerChildren : 0.2}
  }
}



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20"
    >
    <motion.div
     onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
    >
            {/* HEADER */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden" //initial value
            whileInView="visible" //final value
            viewport={{once : true , amount: 0.5 }}
            transition={{ duration: 0.5}}
            variants={{
            hidden : {opacity : 0, x:-50},//initial condition
            visible : {opacity : 1 , x:0},//final condition
           }}
            >
              <Header> WHY GYM PRO? </Header>  

              <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.</p>
            </motion.div>

        {/* BENEFITS */}
        <motion.div 
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true , amount: 0.5}}
        variants={container}
        >
          {benefits.map((benefit: BenefitType) => (

            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage} 
              />
            
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-gaphic"
            src={BenefitsPageGraph}
          />

          {/* DESCRIPTION */}
          <div>
              {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                initial="hidden" //initial value
                whileInView="visible" //final value
                viewport={{once : true , amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                hidden : {opacity : 0, x:50},//initial condition
                visible : {opacity : 1 , x:0},//final condition
               }}
               >
                  <Header>
                    <p className="text-primary-500">
                    A SERIOUS GYM FOR SERIOUS WORKOUTS
                    </p>
                
                  </Header>
                </motion.div>
              </div>

            </div>

              {/* DESCRIPT */}
              <motion.div
              initial="hidden" //initial value
              whileInView="visible" //final value
              viewport={{once : true , amount: 0.5 }}
              transition={{delay:0.2 , duration: 0.5}}
              variants={{
              hidden : {opacity : 0, x:-50},//initial condition
              visible : {opacity : 1 , x:0},//final condition
             }}
              >
                <p className="my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing 
                  elit. Dolores quas pariatur explicabo ipsa perferendis 
                  ad libero praesentium quaerat possimus eum,
                  a ab voluptatibus veniam magni vero necessitatibus omnis aliquid? Quod.
                </p>
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Odit commodi officia aut facilis aliquam minus sed minima architecto ducimus quasi.
                  Provident dolorum vel eum necessitatibus nesciunt reiciendis distinctio fugiat ratione.
                </p>
              </motion.div>

              {/*   BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">

                  <Button setSelectedPage={setSelectedPage}>
                    Join now
                  </Button>

                </div>
              </div>

          </div>
        </div>
    </motion.div>
    </section>
  )
}

export default Benefits