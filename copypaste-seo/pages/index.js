import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, WAppear, WForm, WProcess, WServicesSmall } from "@/modules/widgets";

import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen relative'>
            <div className='absolute min-h-full min-w-full bg-black -z-10'>
                <Image src='/img/1.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='min-h-full min-w-full' />
            </div>
            <div className='max-w-7xl m-auto pt-20'><WAppear className=''>
                <div className='w-full m-auto mt-0'>
                    <div className='sm:text-5xl text-2xl font-black text-center text-white w-fit m-auto p-3 underline decoration-g-m decoration-[6px]'>
                        {"Elevate Your Online Presence with Copypaste SEO!"}
                    </div>
                </div>
                <div className='w-full mt-12 flex flex-wrap'>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl text-xl w-full font-bold text-center m-auto mt-0'>
                                {"Mastering the Art of SEO"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"Amplify your website's visibility, drive laser-focused traffic, and conquer search engine rankings."}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl w-full text-xl font-bold text-center m-auto mt-0'>
                                {"Data-Driven Strategies"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"At Copypaste SEO, we craft custom strategies backed by data insights for measurable and impactful results."}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl text-xl font-bold text-center w-full m-auto mt-0'>
                                {"Unleash Your Brand's Potential"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"From startups to corporations, we empower brands to stand out in the digital landscape."}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl text-xl w-full font-bold text-center m-auto mt-0'>
                                {"Connect, Convert, Captivate"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"Turn clicks into dedicated patrons with our proven methods for elevated conversion rates."}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl w-full text-xl font-bold text-center m-auto mt-0'>
                                {"Experience Tangible Growth"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"Join our roster of success stories who've witnessed remarkable expansion in their online reach."}
                            </div>
                        </div>
                    </div>
                    <div className='p-4 md:w-1/3 mx-auto flex'>
                        <div className='bg-2 p-6 text-white flex flex-wrap'>
                            <div className='sm:text-2xl text-xl font-bold text-center w-full m-auto mt-0'>
                                {"Ready to Climb the Rankings Together?"}
                            </div>
                            <div className='py-6 m-auto w-fit'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                            </div>
                            <div className='text-center sm:text-lg font-medium w-full m-auto mb-0'>
                                {"Initiate your journey towards SEO excellence with a consultation today!"}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:text-3xl text-xl font-bold text-white w-fit m-auto pt-8'><Link href='/contact' className='flex underline decoration-[6px] decoration-transparent hover:decoration-g-m duration-300'>
                    Get Started
                    <div className='my-auto ml-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </Link></div>
            </WAppear></div>
        </div>
        <P1L img='/img/2.jpg' title='Welcome to Copypaste SEO' slogan='Unleash Your Digital Potential' text="At Copypaste SEO, we're more than just an SEO agency – we're your partners in navigating the dynamic world of digital marketing. With a passion for innovation and a team of dedicated experts, we're here to elevate your online presence and drive measurable results." />
        <P1L img='/img/3.jpg' title='Our Approach' slogan='Data-Driven Excellence' text="Our approach is grounded in data-driven strategies that deliver concrete outcomes. We dive deep into your unique business goals and industry landscape to create customized solutions that amplify your brand's visibility and set you apart from the competition." />
        <WProcess />
        <WServicesSmall />
        <WForm />
        <Footer />
    </>;
}