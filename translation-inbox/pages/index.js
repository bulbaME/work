import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature, WForm, WProcess, WServicesSmall } from "@/modules/widgets";

import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen relative bg-black'>
            <Image src='/img/banner.jpg' layout='fill' objectFit='cover' objectPosition='center' className='min-h-full opacity-70' />
            <div className='min-w-full min-h-screen bg-1 py-36 sm:pt-36 pt-8 flex flex-wrap'>
                <div className='max-w-5xl m-auto mt-0 w-full'><WAppear>
                    <div className='w-full my-auto sm:text-6xl text-4xl font-extrabold text-white text-center'>
                        {"Welcome to TranslationInbox"}
                    </div>
                    <div className='w-full my-auto sm:text-3xl text-xl font-bold text-white text-center mt-8'>
                        {"Unlocking Boundless Communication Across Languages"}
                    </div>
                </WAppear></div>
                <div className='flex flex-wrap max-w-5xl m-auto'>
                    <div className='m-auto mt-0 md:w-1/2 md:py-0 pt-16'><WAppear>
                        <div className='text-m font-bold sm:text-3xl text-xl mb-8'>
                            {"Transcend Barriers, Connect Hearts"}
                        </div>
                        <div className='text-white font-medium sm:text-lg'>
                            {"At TranslationInbox, we believe that language should never be a barrier to meaningful connections. Our mission is to bridge the linguistic gaps that separate us and facilitate seamless communication on a global scale. Step into a world where words know no limits – welcome to TranslationInbox."}
                        </div>
                    </WAppear></div>
                    <div className='m-auto mt-0 md:w-1/2'><WAppear>
                        <div className='p-1 my-auto'>
                            <div className='bg-white p-2 px-5 my-8 sm:text-2xl text-center text-xl font-bold w-fit m-auto rounded-full border-[2px] hover:border-m hover:mt-6 hover:mb-10 hover:drop-shadow-lg duration-300 ease-in-out'>
                                <Link href='/#quote'>Request a Free Quote</Link>
                            </div>
                        </div>
                        <div className='p-1 my-auto'>
                            <div className='bg-white p-2 px-5 my-8 sm:text-2xl text-center text-xl font-bold w-fit m-auto rounded-full border-[2px] hover:border-m hover:mt-6 hover:mb-10 hover:drop-shadow-lg duration-300 ease-in-out'>
                                <Link href='/services'>Explore Our Services</Link>
                            </div>
                        </div>
                    </WAppear></div>
                </div>
            </div>
        </div>
        <WProcess />
        <div className='max-w-4xl m-auto flex my-16'><WAppear>
            <div className='font-medium sm:text-lg text-center'>
                {"Delve into the heart of TranslationInbox and discover our compelling journey. Our About page is where our story unfolds – from our humble beginnings to becoming a trusted global communication partner. Learn about the passion that drives us, the expertise that defines us, and the values that guide us. Explore how we're reshaping language barriers into bridges, one translation at a time. Join us on this inspiring narrative of connecting people, cultures, and ideas through the power of words."}
            </div>
            <div>
                <div className='bg-white p-2 px-5 my-8 sm:text-2xl text-center text-xl font-bold w-fit m-auto rounded-full border-[2px] hover:border-m hover:mt-6 hover:mb-10 hover:drop-shadow-lg duration-300 ease-in-out'>
                    <Link href='/about'>Explore Our Story</Link>
                </div>
            </div>
        </WAppear></div>
        <WFeature />
        <WServicesSmall />
        <WForm />
        <Footer />
    </>;
}