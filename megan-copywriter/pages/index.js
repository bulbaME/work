import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaqSmall, WFeature, WQuote, WServicesSmall, WTestimonials } from "@/modules/widgets";
import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen h-fit relative'>
            <div className='absolute min-h-full min-w-full overflow-hidden bg-black -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-60 blur-[2px]' />
            </div>
            <div className='max-w-6xl m-auto sm:pt-52 pt-16 sm:pb-16 pb-10 min-h-full'><WAppear className=''>
                <div className='sm:text-center font-bold sm:text-5xl text-center text-3xl text-white'>
                    Welcome to Megan Copywriter!
                </div>
                <div className='sm:text-center font-light text-center mt-4 sm:text-3xl text-xl text-b-m'>
                    Unlocking the Power of Words
                </div>
                <div className='mt-36 mb-16'>
                    <div className='sm:text-lg text-center font-light text-white'>
                        {"At Megan Copywriter, we understand that words are more than just a collection of letters; they have the power to inform, persuade, and captivate. Our passion lies in harnessing the art of copywriting to craft compelling narratives that resonate with your audience and drive meaningful engagement. Whether you're a startup, a well-established business, or an individual looking to make an impact, we're here to transform your ideas into impactful words."}
                    </div>
                </div>
                <div className='w-full flex flex-wrap'>
                    <div className='m-auto w-fit'>
                        <div className='rounded-full border-[2px] hover:border-b-m p-4 py-2 sm:text-xl w-fit m-auto text-lg font-bold text-b-m my-4 hover:mb-6 hover:mt-2 duration-300'>
                            <Link href='/contact'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='m-auto w-fit'>
                        <div className='rounded-full border-[2px] hover:border-b-m p-4 py-2 sm:text-xl w-fit m-auto text-lg font-bold text-b-m my-4 hover:mb-6 hover:mt-2 duration-300'>
                            <Link href='/#quote'>Request a Quote</Link>
                        </div>
                    </div>
                    <div className='m-auto w-fit'>
                        <div className='rounded-full border-[2px] hover:border-b-m p-4 py-2 sm:text-xl w-fit m-auto text-lg font-bold text-b-m my-4 hover:mb-6 hover:mt-2 duration-300'>
                            <Link href='/about'>Learn About Us</Link>
                        </div>
                    </div>
                </div>
            </WAppear></div>
        </div>
        <WFeature />
        <WQuote />
        <WServicesSmall />
        <WTestimonials />
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <div className='md:w-1/2 md:mt-20'><WAppear>
                <div className='sm:text-4xl text-2xl font-bold text-center'>
                    {"Explore Your Questions"}
                </div>
                <div className='sm:text-lg font-light mt-6 text-center'>
                    {"Curious about how our copywriting services can benefit you? Dive into the frequently asked questions below to discover more about our approach, expertise, and commitment to helping you harness the power of words. If you don't find the answers you're looking for, feel free to reach out to us directly. We're here to provide you with all the information you need to make informed decisions for your brand's success."}
                </div>
            </WAppear></div>
            <div className='md:w-1/2'><WAppear>
                <div className='border-[2px] max-h-[30rem] overflow-y-scroll rounded-lg'>
                    <WFaqSmall />
                </div>
            </WAppear></div>
        </div>
        <Footer />
    </>;
}