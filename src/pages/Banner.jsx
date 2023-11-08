import banner from '../assets/istockphoto-1458453396-640_adpp_is.mp4'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <video className='w-full' autoPlay loop muted src={banner}></video>
                <div className='absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full'>
                    <motion.div initial={{ y: -150 }} animate={{ y: 0 }} transition={{ duration: "2", delay: "1" }} className='absolute space-y-2 md:space-y-5 right-2 md:right-0 top-5 md:top-1/3 w-1/2'>
                        <h1 className='text-white text-xl md:text-4xl lg:text-6xl font-bold lg:w-1/2'>Meet, chat, and study with students from all over the world </h1>
                        <p className='text-xs md:text-xl lg:text-2xl text-white font-medium w-3/4'>Join the largest global student community online and say  goodbye to lack of motivation.</p>
                        </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;