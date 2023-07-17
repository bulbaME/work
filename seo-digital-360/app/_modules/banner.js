import { Button, ButtonBlue, ButtonDark } from "./button";

export function BannerHome() {
    return <div>
        <div className='absolute overflow-y-clip h-fit w-fit sm:max-h-screen justify-end overflow-clip'>
            <div className='bg-black opacity-70 absolute w-full h-full z-10' />
            <div className='absolute w-full z-10 h-full'>
                <div className='text-2xl text-center mt-6 sm:mt-12 xl:mt-24 sm:text-5xl lg:text-6xl font-bold w-fit m-auto text-white'>
                    Boost Visibility, Boost Results <br /> Choose SEO Excellence!
                </div>
                <div className='flex max-w-7xl m-auto px-2 sm:px-10 sm:my-10 lg:my-20'>
                    <div className='sm:w-1/3 m-auto'>
                        <div className='text-xs sm:text-lg lg:text-2xl text-white p-3'>
                            {"Unlock unparalleled success in the digital realm by choosing SEO excellence - witness the exponential growth in visibility and achieve outstanding results."}
                        </div>
                        <div className='m-auto text-black sm:mt-5 lg:mt-10'>
                            <Button route='/services' text='See our services' />
                        </div>
                    </div>
                    <div className='sm:w-1/3 m-auto'>
                        <div className='text-xs sm:text-lg lg:text-2xl text-white p-3'>
                            {"Are you ready to take your online visibility to new heights and achieve remarkable results? Don't wait any longer, get in touch with us today and let's supercharge your SEO strategy!"}
                        </div>
                        <div className='m-auto text-black sm:mt-5 lg:mt-10'>
                            <Button route='/contact' text='Contact us now' />
                        </div>
                    </div>
                    
                </div>
            </div>
        <img src='/img/1.jpg' className='w-full' />
        </div>
        <img src='/img/1.jpg' className='w-full sm:max-h-screen' />
    </div>;
}


export function Banner(props) {
    return <div>
        <div className='absolute overflow-y-clip h-fit w-fit max-h-[10rem] md:max-h-[20rem] lg:max-h-[25rem] justify-end overflow-clip'>
            <div className='bg-black opacity-70 absolute w-full h-full z-10' />
            <div className='absolute w-full z-10 h-full'>
                <div className='text-white w-fit px-6 text-center m-auto 2xl:mt-24 sm:mt-16 mt-4 text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
                    {props.title}
                </div>
                <div className='m-auto text-black 2xl:mt-24 lg:mt-12 md:mt-10 sm:mt-8 mt-8'>
                    <ButtonBlue route={props.cta_route} text={props.cta} />
                </div>
            </div>
        <img src={props.img} className='w-full' />
        </div>
        <img src={props.img} className='w-full max-h-[10rem] md:max-h-[20rem] lg:max-h-[25rem]' />
    </div>;
}

export function BannerTop(props) {
    return <div>
        <div className='absolute overflow-y-clip h-fit w-fit max-h-[5rem] sm:max-h-[15rem] justify-end overflow-clip'>
            <div className='bg-black opacity-70 absolute w-full h-full z-10' />
            <div className='absolute w-full z-10 h-full'>
                <div className='text-white w-fit text-center m-auto mt-5 sm:mt-24 text-3xl sm:text-5xl font-semibold'>
                    {props.title}
                </div>
            </div>
        <img src={props.img} className='w-full' />
        </div>
        <img src={props.img} className='w-full max-h-[5rem] sm:max-h-[15rem]' />
    </div>;
}