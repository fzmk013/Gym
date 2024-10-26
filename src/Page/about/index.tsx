import { SelectedPage } from '@/utils/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import AboutPageGraphic from "@/assets/AboutPageGraphic.png";
import Header from '@/utils/Header';



type Props = {
  setSelectedPage : (Value : SelectedPage) => void;
}

function About({setSelectedPage}: Props) {

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`

  const {
    register,
    trigger, //validate our form if needed
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault(); //make sure it won't go to a new page
    }
  }

  return (
   <section id='about' className='mx-auto w-5/6 pt-24 pb-32'>
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
      {/* HEADER  */}
      <motion.div
      className="md:w-3/5"
      initial="hidden" //initial value
        whileInView="visible" //final valu
        viewport={{once : true , amount: 0.5 }}
        transition={{duration : 1}}
        variants={{
        hidden : {opacity : 0, x:-50},//initial condition
        visible : {opacity : 1 , x:0},//final condition
        }}
      >
        <Header>
          <span className='text-primary-500'>JOIN NOW</span> STAY INFORMED & GET FIT
        </Header>
        <p className='my-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Tempore quaerat quisquam quis dolores molestiae minus veritatis eligendi, 
           consequuntur harum vero molestias quae temporibus deleniti, eveniet animi 
           deserunt. Molestiae, repudiandae asperiores?
          </p>
      </motion.div>

      {/* FORM AND IMAGE */}
      <div className='mt-10 justify-between gap-8 md:flex'>
        <motion.div
        className='mt-10 basis-3/5 md:mt-0'
        initial="hidden" //initial value
        whileInView="visible" //final valu
        viewport={{once : true , amount: 0.5 }}
        transition={{duration : 1}}
        variants={{
        hidden : {opacity : 0, y :-50},//initial condition
        visible : {opacity : 1 , y:0},//final condition
        }}
        >

          <form
          target='_blank'
          onSubmit={onSubmit}
          method='POST'
          action='https://formsubmit.co/fzmk013@gmail.com'
          >
              <input
              className={inputStyles}
              type='text'
              placeholder='NAME'
              {...register("name", {
                required : true,
                maxLength: 100,
              } )}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500'>
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLenght" && "Max lenght is 100 char."}
                </p>
              )}


              <input
              className={inputStyles}
              type='text'
              placeholder='EMAIL'
              {...register("email", {
                required : true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              } )}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}


              <textarea
              className={inputStyles} 
              rows={4} 
              cols={50}
              placeholder='MESSAGE'
              {...register("message", {
                required : true,
                maxLength: 2000,
              } )}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLenght" && "Max lenght is 2000 char."}
                </p>
              )}


              <button
              type='submit'
              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
              >
                  SUBMIT
              </button>


          </form>

        </motion.div>

        <motion.div
        className='relative mt-16 basis-2/5 md:mt-0'
        initial="hidden" //initial value
        whileInView="visible" //final valu
        viewport={{once : true , amount: 0.5 }}
        transition={{delay: 0.2 ,duration : 1}}
        variants={{
        hidden : {opacity : 0, x:-50},//initial condition
        visible : {opacity : 1 , x:0},//final condition
        }}
        >

          <div className=' w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]'>
            <img  
            className='w-full'
            alt='contact-us-page-graphic'
            src={AboutPageGraphic}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
   </section>
  )
}

export default About