import Footer from "@/modules/footer";
import Header from "@/modules/header";
import Image from "next/image";
import { Cta, P2R, PL, PR, WServicesSmall, WWhyUs } from "@/modules/widgets";

import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg-b bg-1 py-16'>
            <div className='max-w-7xl p-4 m-auto'>
                <div className='w-fit m-auto'>
                    <div className='sm:text-6xl text-4xl text-white font-extrabold mb-12 text-center'>Unleash Your Creative Potential</div>
                    <div className='flex text-c my-4'>
                        <div className='px-4 my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="sm:w-10 sm:h-10 w-5 h-5">
                            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                            </svg>
                        </div>
                        <div className='sm:text-4xl text-2xl font-bold'>
                            <Link href='/#transforming-visions-into-visual-masterpieces'>Transforming Visions into Visual Masterpieces</Link>
                        </div>
                    </div>
                    <div className='flex text-c my-4'>
                        <div className='px-4 my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="sm:w-10 sm:h-10 w-5 h-5">
                            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                            </svg>
                        </div>
                        <div className='sm:text-4xl text-2xl font-bold'>
                            <Link href='/#discover-the-designsriver-difference'>Discover the DesignsRiver Difference</Link>
                        </div>
                    </div>
                    <div className='flex text-c my-4'>
                        <div className='px-4 my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="sm:w-10 sm:h-10 w-5 h-5">
                            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                            </svg>
                        </div>
                        <div className='sm:text-4xl text-2xl font-bold'>
                            <Link href='/#lets-build-your-brand-legacy'>{"Let's Build Your Brand Legacy"}</Link>
                        </div>
                    </div>
                    <div className='flex text-c my-4'>
                        <div className='px-4 my-auto'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="sm:w-10 sm:h-10 w-5 h-5">
                            <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                            </svg>
                        </div>
                        <div className='sm:text-4xl text-2xl font-bold'>
                            <Link href='/#your-journey-starts-here'>Your Journey Starts Here</Link>
                        </div>
                    </div>
                    <div className='mt-16 p-4 px-5 sm:text-4xl text-2xl bg-white font-bold text-center rounded-full w-fit m-auto drop-shadow-lg hover:mt-12 hover:mb-4 mb-0 duration-300'>
                        <Link href='/contact'>Transform Your Brand Today</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto p-4'>
            <PL cta_link='/contact' cta='Contact us' img='/img/1.jpg' title='Elevate Your Brand with Exceptional Design Services' text="Welcome to DesignsRiver, your gateway to exceptional design solutions that leave a lasting impact. Our passion for creativity and commitment to excellence drive us to create visually captivating designs tailored to your unique needs. Elevate your brand and stand out in a crowded marketplace with DesignsRiver's top-notch design services." />
        </div>
        <WServicesSmall />
        <div className='max-w-7xl m-auto p-4'>
            <a id='transforming-visions-into-visual-masterpieces'>
                <P2R img='/img/3.jpg' title='Transforming Visions into Visual Masterpieces' slogan='Transform Your Brand Today!' text="Our mission is to be your partner in transforming your vision into an awe-inspiring reality. Whether you're a startup looking to establish a compelling identity or an established brand seeking a refreshing makeover, DesignsRiver is here to breathe life into your ideas." />
            </a>
            <a id='discover-the-designsriver-difference'>
                <div className='m-auto my-16 p-8'>
                    <div className='mb-2 sm:text-2xl text-lg font-bold text-g'>
                        Crafting Designs, Shaping Brands.
                    </div>
                    <div className='mb-4 sm:text-4xl text-2xl font-bold'>
                        Discover the DesignsRiver Difference
                    </div>
                    <div className='flex flex-wrap mt-8'>
                        <div className='sm:w-1/3 sm:pr-4'>
                            <Image src='/img/4.jpg' width={1000} height={500} alt='Loading...' className='rounded-[3rem] drop-shadow-lg' />
                        </div>
                        <div className='sm:w-2/3 sm:pl-4 m-auto w-full'>
                            <div className='flex sm:mt-0 mt-8'>
                                <div className='m-3 sm:mx-5 bg-g sm:w-[1rem] w-[0.5rem] sm:h-[1rem] h-[0.5rem] rounded-full drop-shadow-sm' />
                                <div className='w-5/6'>
                                    <div className='sm:text-3xl text-xl font-bold mb-4'>
                                        Tailored Creativity
                                    </div>
                                    <div className='sm:text-2xl text-lg font-medium'>
                                        {"No two brands are alike, and neither should their designs be. Our approach is personalized, reflecting the essence of your brand and setting you apart from the competition."}
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-8'>
                                <div className='m-3 sm:mx-5 bg-g sm:w-[1rem] w-[0.5rem] sm:h-[1rem] h-[0.5rem] rounded-full drop-shadow-sm' />
                                <div className='w-5/6'>
                                    <div className='sm:text-3xl text-xl font-bold mb-4'>
                                        Expertise that Matters
                                    </div>
                                    <div className='sm:text-2xl text-lg font-medium'>
                                        {"Our team consists of seasoned designers who combine creativity with technical expertise. We immerse ourselves in your industry to deliver designs that resonate with your target audience."}
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-8'>
                                <div className='m-3 sm:mx-5 bg-g sm:w-[1rem] w-[0.5rem] sm:h-[1rem] h-[0.5rem] rounded-full drop-shadow-sm' />
                                <div className='w-5/6'>
                                    <div className='sm:text-3xl text-xl font-bold mb-4'>
                                        Passion for Perfection
                                    </div>
                                    <div className='sm:text-2xl text-lg font-medium '>
                                        {"Our love for design drives us to obsess over every detail. From color palettes to typography, we leave no stone unturned to ensure a flawless end result."}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            <a id='lets-build-your-brand-legacy'>
                <P2R slogan='Designs that Speak, Brands that Listen.' img='/img/7.jpg' title="Let's Build Your Brand Legacy" text="Your brand's identity is the heart of your business. Let's work together to create a visual legacy that leaves a lasting impression. Whether it's a captivating logo, an intuitive website, or impactful marketing collateral, DesignsRiver has you covered." />
            </a>
            <a id='your-journey-starts-here'>
                <P2R slogan='Your Journey to Distinctive Branding.' img='/img/6.jpg' title="Your Journey Starts Here" text="Are you ready to embark on a transformative design journey? Let's collaborate, innovate, and elevate your brand to new heights. Join us at DesignsRiver, and together, we'll unveil the true potential of your brand through extraordinary design." />
            </a>
        </div>
        <Cta title='Request a Quote' text="Ready to take your brand to the next level? Request a personalized quote to kickstart your design journey with DesignsRiver." cta="Get a Free Quote" route='/contact' />
        <WWhyUs />
        <div className='max-w-7xl p-4 m-auto'>
            <PR cta_link='/contact' cta="Let's transform your brand, one design at a time!" title='Transform Your Brand with DesignsRiver' text="Welcome to DesignsRiver, where creative magic shapes extraordinary brands. Our passionate team of experts crafts unique and impactful solutions, from captivating logos to user-friendly websites and cohesive visual identities. Beyond aesthetics, our designs strategically drive real results, elevating your brand to new heights." img='/img/9.jpg' />
        </div>
        <Footer />
    </>;
}