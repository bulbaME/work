import Header from "@/modules/header";
import Footer from "@/modules/footer";

import Image from "next/image";
import { B1L, WAppear, WFeature, WForm, WQuote, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";
import icons from "@/modules/icons";

export default function X() {
    return <>
        <Header page={1} />
        <div className='relative -mb-8 flex min-h-screen'>
            <div className='absolute min-h-full min-w-full -z-10 bg-black'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='opacity-60' />
            </div>
            <div className='max-w-6xl mx-auto flex md:py-24 py-40 sm:py-32 sm:pb-16 pb-8'><div className='my-auto'><WAppear className='h-fit w-full'>
                <div className='sm:text-4xl text-2xl font-bold text-white text-center'>
                    {"Where Imagination Meets Innovation on Your Timeline."}
                </div>
                <Link href='/#f1'><div className='flex w-fit my-8 sm:px-8 sm:hover:pl-16 sm:hover:pr-0 duration-300 ease-in-out'>
                    <div className='text-gm w-fit sm:px-8 px-4 my-auto'>
                        {icons[1]}
                    </div>
                    <div className='w-5/6'>
                        <div className='sm:text-xl text-lg font-bold text-gm'>
                            {"Rapid Creative Mastery"}
                        </div>
                        <div className='sm:text-lg text-white mt-2'>
                            {"Experience the magic of captivating designs crafted with precision and flair, all within an astonishing 48-hour turnaround."}
                        </div>
                    </div>
                </div></Link>
                <Link href='/#f2'><div className='flex m-auto w-fit my-8 sm:px-8 sm:hover:pl-16 sm:hover:pr-0 duration-300 ease-in-out'>
                    <div className='my-auto text-gm w-fit sm:px-8 px-4'>
                        {icons[2]}
                    </div>
                    <div className='w-5/6'>
                        <div className='sm:text-xl text-lg font-bold text-gm'>
                            {"Bespoke Design Express"}
                        </div>
                        <div className='sm:text-lg text-white mt-2'>
                            {"Unlock personalized design excellence tailored to your unique brand identity, leaving a lasting impact on your audience."}
                        </div>
                    </div>
                </div></Link>
                <Link href='/#f3'><div className='flex m-auto w-fit my-8 sm:px-8 sm:hover:pl-16 sm:hover:pr-0 duration-300 ease-in-out'>
                    <div className='my-auto text-gm w-fit sm:px-8 px-4'>
                        {icons[3]}
                    </div>
                    <div className='w-5/6'>
                        <div className='sm:text-xl text-lg font-bold text-gm'>
                            {"Seamless Collaboration"}
                        </div>
                        <div className='sm:text-lg text-white mt-2'>
                            {"Engage in a collaborative journey where your ideas and feedback fuel our design process, resulting in a masterpiece that mirrors your vision."}
                        </div>
                    </div>
                </div></Link>
                <Link href='/#f4'><div className='flex m-auto w-fit my-8 sm:px-8 sm:hover:pl-16 sm:hover:pr-0 duration-300 ease-in-out'>
                    <div className='my-auto text-gm w-fit sm:px-8 px-4'>
                        {icons[4]}
                    </div>
                    <div className='w-5/6'>
                        <div className='sm:text-xl text-lg font-bold text-gm'>
                            {"Innovative Design Impact"}
                        </div>
                        <div className='sm:text-lg text-white mt-2'>
                            {"Elevate your brand with designs that go beyond aesthetics, delivering strategic impact and solidifying your position in a competitive landscape."}
                        </div>
                    </div>
                </div></Link>
                <div className='w-fit m-auto mt-16'>
                    <B1L link='/contact' text='Get Started Today' />
                </div>
            </WAppear></div></div>
        </div>
        <WQuote />
        <WFeature />
        <WServicesSmall />
        <WForm />
        <Footer />
    </>;
}