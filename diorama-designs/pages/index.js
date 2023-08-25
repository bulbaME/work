import Header from "@/modules/header";
import { WAppear, WProcess, WQuote, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/modules/footer";

function BannerTitle() {
    'use client';

    const [hover, setHover] = useState(false);


    return <div className='sm:text-5xl text-3xl font-bold text-white flex flex-wrap w-fit m-auto'>
        <div className='whitespace-nowrap m-auto px-2'>Welcome to</div> 
        <div className='relative whitespace-nowrap w-fit m-auto' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className=''>
                <div className={'duration-300 ease-in-out overflow-hidden transition-all sm:w-[26.5rem] w-[16.5rem] ' + (hover ? 'h-0':'sm:h-[4rem] h-[3rem] py-2')}>
                    Diorama Designs
                </div>
                <div className={'duration-300 ease-in-out overflow-hidden transition-all sm:w-[19rem] w-[12rem] ' + (!hover ? 'h-0':'sm:h-[4rem] h-[3rem] py-2')}>
                    Our Website
                </div>
            </div>
            <div className={'sm:h-4 h-2 duration-300 ease-in-out absolute bottom-0 -z-10 sm:-mb-2 ' + (hover ? 'bg-r-l sm:w-[19rem] w-[12rem]':'bg-g-m sm:w-[26.5rem] w-[16.5rem]')} />
        </div>
    </div>;
}

export default function X() {

    return <>
        <Header page={1} />
        <div className='min-h-screen h-fit relative'>
            <div className='absolute min-h-full min-w-full overflow-hidden bg-black -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-50 blur-[2px]' />
            </div>
            <div className='max-w-6xl m-auto pt-52 sm:pb-24 pb-16 min-h-full'><WAppear className=''>
                <BannerTitle />
                <div className='sm:text-3xl text-xl font-light text-center text-white my-8'>
                    {"Where Creativity Takes Shape"}
                </div>
                <div className='flex flex-wrap mt-28'>
                    <div className='md:w-1/2 md:pr-4 text-white'>
                        <div className='sm:text-xl text-lg font-bold'>
                            {"Who We Are"}
                        </div>
                        <div className='mt-2 sm:text-lg font-light'>
                            {"Diorama Designs is a visionary design company dedicated to breathing life into spaces and creating environments that transcend the ordinary. With a unique blend of talents and skills, our team transforms your aspirations into tangible, experiential realities. We thrive on challenges and take pride in converting your dreams into remarkable spaces."}
                            <Link className='font-semibold decoration-4 underline decoration-r-l ml-2' href='/about'>Learn more...</Link>
                        </div>
                    </div>
                    <div className='md:w-1/2 w-full md:mt-auto mt-12 md:pl-4 flex flex-wrap'>
                        <div className='w-full my-auto py-4'>
                            <div className='sm:text-2xl text-xl font-light px-4 p-3 hover:border-g-m hover:bg-g-m hover:drop-shadow-lg duration-300 ease-in-out rounded-full border-[1px] border-white text-white w-fit m-auto'>
                                <Link href='/contact'>Get Started</Link>
                            </div>
                        </div>
                        <div className='w-full my-auto py-4'>
                            <div className='sm:text-2xl text-xl font-light px-4 p-3 hover:border-g-m hover:bg-g-m hover:drop-shadow-lg duration-300 ease-in-out rounded-full border-[1px] border-white text-white w-fit m-auto'>
                                <Link href='/#quote'>Get a Quote</Link>
                            </div>
                        </div>
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