import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { B1, WAppear, WProcess, WForm, WQuote, WServicesSmall } from "@/modules/widgets";
import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='relative -mb-8'>
            <div className='absolute min-h-full min-w-full -z-10 bg-1'>
                {/* <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='bottom' /> */}
            </div>
            <div className='max-w-6xl m-auto min-h-full lg:pt-28 pt-20 pb-[14%]'><WAppear className=''>
                <div className='sm:text-6xl text-4xl font-extrabold text-white text-center'>
                    {"Unlocking Worlds Through Words"}
                </div>
                <div className='sm:text-4xl text-2xl font-light text-white text-center my-4'>
                    {"Your Trusted Translation Partner"}
                </div>
                <div className='lg:mt-36 mt-24'>
                    <div className='md:pr-4'>
                        <div className='sm:text-3xl text-xl font-extrabold text-white'>
                            {"Hello Translaters"}
                        </div>
                        <div className='sm:text-xl text-lg font-extrabold text-m mt-2 mb-6'>
                            {"Where Words Open Worlds"}
                        </div>
                        <div className='sm:text-lg font-medium text-white'>
                            {"Step into a World of Words with Hello Translaters! Your Gateway to Flawless Communication Across Languages. Unlock new horizons as we transform languages into bridges, connecting cultures and ideas seamlessly. Our team of dedicated linguists is poised to elevate your global reach with precise, nuanced translations that transcend mere words. Join us in shaping stronger connections through language."}
                        </div>
                    </div>
                    <div className='md:w-full flex flex-wrap py-8'>
                        <B1 text='Explore Our Services' link='/services' />
                        <B1 text='Request a Free Quote' link='/#quote' />
                        <B1 text='Learn More About Us' link='/about' />
                    </div>
                </div>
            </WAppear></div>
        </div>
        <WProcess />
        <WServicesSmall />
        <WQuote />
        <Footer />
    </>;
}