import { ClassType, SelectedPage } from '@/utils/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import Class from './Class';
import Header from '@/utils/Header';



const classes : Array<ClassType> = [

    {
        name: "Strenght Training",
        description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image1,

    },

    {
        name: "Yoga Classes",
         description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image2,

    },

    {
        name: "cycling classes",
        description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image3,

    },

    {
        name: "Zumba",
        description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image4,

    },

    {
        name: "Fitness Classes",
        description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image5,

    },

    {
        name: "Ab Core",
        description :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugit repellendus debitis aperiam rem exercitationem accusamus quia quisquam beatae! A harum provident velit dolores cumque eos? Consectetur id esse vel.",
        image: image6,

    },

]



type Props = {
    setSelectedPage : (value : SelectedPage) => void;
};

function Classes({setSelectedPage}: Props) {
  return (
   <section
    id="classes"
    className="w-full bg-primary-100 py-40"   
   >
        
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}
    >
        <motion.div
        className='mx-auto w-5/6'
        initial="hidden" //initial value
        whileInView="visible" //final valu
        viewport={{once : true , amount: 0.5 }}
        transition={{duration : 1}}
        variants={{
        hidden : {opacity : 0, x:-50},//initial condition
        visible : {opacity : 1 , x:0},//final condition
        }}
        >

            <div className='md:w-3/5'>
                <Header>CLASSES</Header>
                <p className='py-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere quibusdam iure reiciendis ea sit itaque a provident officia,
                    minus sunt id quasi atque vero! Officiis facere sint quas quisquam praesentium!
                 </p>
            </div>
        </motion.div>
        
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>

                <ul className='w-[3000px] whitspace-nowrap'>
                    {classes.map((item:ClassType , index) => (

                        <Class 
                        key={`${item.name}-${index}`} //unique value
                        name={item.name}
                        description ={item.description}
                        image={item.image}
                        />
                    ))}
                </ul>

            </div>
         
 
    </motion.div>
   </section>
  )
}

export default Classes