import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WProcess, WServicesSmall } from "@/modules/widgets";
import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen h-fit relative'>
            <div className='absolute min-h-full min-w-full bg-black -z-10'>
                <Image src='/img/banner.png' layout='fill' objectFit='cover' alt='' objectPosition='center' />
            </div>
            <div className='max-w-6xl m-auto sm:py-16 min-h-full'><WAppear className=''>
                <div className='text-white text-center m-auto lg:text-6xl md:text-5xl text-3xl font-bold w-full my-32'>
                    <span className='bg-g-l px-2 -mx-2'>Affordable</span> Design Excellence <div className='lg:mb-[13px] md:mb-[10px] mb-[1px]' /> for <span className='bg-m-l px-2 -mx-2'>Every</span> Vision
                </div>
                <div className='w-fit m-auto text-white sm:text-3xl text-xl font-bold my-32 border-4 border-white px-5 p-3 rounded-full hover:bg-white hover:drop-shadow-md hover:text-black duration-300'>
                    <Link href='/contact'>{"Get Started Now!"}</Link>
                </div>
                <div>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        {"About us"}
                    </div>
                    <div className='sm:text-xl font-medium text-white mt-4'>
                        {"At Design 4 My Budget, we're more than just a design company – we're your partners in turning dreams into visually captivating realities. 🚀 Our mission is simple: to provide exceptional design solutions without the hefty price tag. "}
                        <Link href='/about' className='font-bold underline decoration-g-l decoration-2'>Learn more...</Link>
                    </div>
                </div>
            </WAppear></div>
        </div>
        <WProcess />
        <WServicesSmall />
        <div className='max-w-5xl m-auto my-24'><WAppear>
            <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                Get In Touch
            </div>
            <div className='mt-4 text-center sm:text-xl font-medium'>
                {"Ready to take the next step towards turning your ideas into stunning designs? We're excited to hear from you! Reach out to us today to discuss your project and explore the possibilities."}
            </div>
            <div className='w-fit sm:text-xl text-lg mt-10 m-auto p-3 px-4 font-bold border-[1px] bg-white rounded-full hover:drop-shadow-lg duration-300 hover:border-m-l'>
                <Link href='/contact'>Contact us</Link>
            </div>
        </WAppear></div>
        <Footer />    
    </>;
}