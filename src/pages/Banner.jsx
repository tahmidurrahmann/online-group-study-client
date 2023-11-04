import banner from '../assets/istockphoto-1458453396-640_adpp_is.mp4'

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <video className='w-full' autoPlay loop muted src={banner}></video>
                <div className='absolute top-0 bg-gradient-to-r from-[#15151500] to-[#151515] w-full h-full'>
                    <div className='absolute space-y-2 md:space-y-5 right-2 md:right-0 top-10 md:top-1/3 w-1/2'>
                        <h1 className='text-white text-xl md:text-3xl lg:text-6xl font-bold lg:w-1/2'>Meet, chat, and study with students from all over the world </h1>
                        <p className='text-xs md:text-xl lg:text-3xl text-white font-medium w-3/4'>Join the largest global student community online and say  goodbye to lack of motivation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;