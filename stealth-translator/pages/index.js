import Header from "@/modules/header";
import Image from "next/image";
import { WAppear, WProcess, WQuote, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={1} />
        <div className='relative -mb-8 flex min-h-screen'>
            <div className='absolute min-h-full min-w-full -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-40' />
            </div>
            <div className='max-w-5xl mx-auto flex sm:py-24 py-28'><div className='my-auto'><WAppear className='h-fit w-full'>
                <div className='sm:text-5xl text-3xl font-bold text-center text-white'>
                    {"Unlocking Boundless Communication"}
                </div>
                <div className='sm:text-4xl text-2xl font-light text-center text-m-m mt-2'>
                    {"Welcome to StealthTranslator!"}
                </div>
                <div className='flex flex-wrap mt-36'>
                    <div className='md:w-2/3'>
                        <div className='sm:text-xl text-lg font-bold text-white'>
                            {"Where Languages Unite, Connections Ignite"}
                        </div>
                        <div className='sm:text-lg font-light text-white mt-4'>
                            {"At StealthTranslator, we believe in the power of language to connect and inspire. Our mission is to break down language barriers, enabling businesses and individuals to communicate effortlessly across the world. With a team of dedicated linguists and advanced technology, we deliver translations that are not only accurate but also capture the true essence of your message. Experience the thrill of borderless communication with StealthTranslator today."}
                        </div>
                    </div>
                    <div className='md:w-1/3 flex flex-wrap w-full md:pt-0 pt-8'>
                        <div className='sm:text-xl text-lg font-light px-4 p-3 rounded-full border-[1px] border-white text-white m-auto w-fit duration-300 hover:bg-black hover:border-m-m'>
                            <Link href='/contact'>Get Started</Link>
                        </div>
                        <div className='sm:text-xl text-lg font-light px-4 p-3 rounded-full border-[1px] border-white text-white m-auto w-fit duration-300 hover:bg-black hover:border-m-m'>
                            <Link href='/services'>Explore Services</Link>
                        </div>
                    </div>
                </div>
            </WAppear></div></div>
        </div>
        <WQuote />
        <WProcess />
        <div className='max-w-7xl m-auto py-8'><WAppear>
            <div>
                <div className='sm:text-3xl text-xl font-bold text-white'>{"Ready to Transform Communication?"}</div>
                <div className='flex flex-wrap mt-8'>
                    <div className='sm:text-lg font-light text-white md:w-2/3 md:pb-0 pb-8'>
                        {"Experience the power of breaking language barriers and connecting with audiences worldwide. Explore our services, request a quote, or reach out to our dedicated team for personalized assistance. Your global journey begins here with StealthTranslator."}
                    </div>
                    <div className='sm:text-xl text-lg font-light px-4 p-3 rounded-full border-[1px] border-white text-white m-auto w-fit duration-300 hover:bg-black hover:border-m-m'>
                        <Link href='/contact'>Reach out today</Link>
                    </div>
                </div>
            </div>
        </WAppear></div>
        <WServicesSmall />
        <Footer />
    </>;
}