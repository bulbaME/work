import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature, WForm, WServicesSmall } from "@/modules/widgets";

import Image from "next/image";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='min-h-screen relative'>
            <div className='absolute min-h-full min-w-full bg-black -z-10'>
                <Image src='/img/banner.jpg' layout='fill' objectFit='cover' alt='' objectPosition='center' className='min-h-full min-w-full opacity-[.4]' />
            </div>
            <div className='max-w-4xl m-auto py-36'><WAppear>
                <div className='sm:text-lg font-bold text-o'>
                    {"Unlocking the Power of Words"}
                </div>
                <div className='sm:text-5xl text-3xl font-bold text-white'>
                    {"Elevate Your Message with Lockes Copywriting"}
                </div>

                <div className='my-32'>
                    <div className='sm:text-2xl text-lg text-white text-center'>
                        {"Welcome to Lockes Copywriting – Where Words Transform Worlds"}
                    </div>
                    <div className='sm:text-2xl text-lg text-white my-4 flex w-[90%] m-auto'>
                        <div className='my-auto px-4 text-o'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                        </div>
                        {"Are you ready to captivate, persuade, and inspire? We craft more than sentences; we shape stories that resonate."}
                    </div>
                </div>
                <div className='w-fit m-auto text-center'>
                    <div className='sm:text-3xl text-xl font-bold text-white'>
                        {"Discover the Power of Words"}
                    </div>
                    <div className='font-bold sm:text-xl text-white underline decoration-o decoration-4 mt-4 mx-4 hover:ml-8 hover:mr-0 duration-300'>
                        <Link href='/services'>Exlore our services</Link>
                    </div>
                </div>
            </WAppear></div>
        </div>
        <div className='max-w-7xl m-auto sm:my-12'><WAppear>
            <div className='my-24'>
                <div className='sm:text-lg font-bold text-o'>
                    {"Welcome to Lockes Copywriting"}
                </div>
                <div className='sm:text-4xl text-2xl font-bold text-white'>
                    {"Crafting Impactful Narratives"}
                </div>
                <div className='sm:text-lg font text-white mt-8'>
                    {"At Lockes Copywriting, we understand the power of words. Our mission is to transform your ideas into impactful narratives that resonate, inspire, and drive action. With a team of seasoned wordsmiths, we blend creativity with strategy to create content that goes beyond mere communication – it makes a lasting impression. Whether you're looking to enhance your brand story, boost your online presence, or forge connections on social media, our services are designed to elevate your message and help you stand out in a competitive landscape."}
                </div>
            </div>
            <div className='my-24'>
                <div className='sm:text-lg font-bold text-o'>
                    {"Our Services"}
                </div>
                <div className='sm:text-4xl text-2xl font-bold text-white'>
                    {"Ignite Possibilities with Every Word"}
                </div>
                <div className='sm:text-lg font text-white mt-8'>
                    {"Our range of services is tailored to meet your unique needs and goals. From crafting compelling brand stories that leave an indelible mark to optimizing your content for search engines, we offer solutions that amplify your impact. Dive into the art of Brand Storytelling, boost your online presence with SEO-Optimized Content, or harness the power of Social Media Magic to engage and enchant your audience. Each service is meticulously crafted to deliver results that exceed expectations and leave a mark that lingers long after the read."}
                </div>
            </div>
        </WAppear></div>
        <WServicesSmall />
        <WFeature />
        <div className='max-w-7xl m-auto sm:my-12'><WAppear>
            <div className='my-24'>
                <div className='sm:text-lg font-bold text-o'>
                    {"Let's Begin"}
                </div>
                <div className='sm:text-4xl text-2xl font-bold text-white'>
                    {"Your Story Starts Here"}
                </div>
                <div className='sm:text-lg font text-white mt-8'>
                    {"Your brand's story is waiting to be told, and we're here to help you tell it in a way that leaves a mark. Whether you're a startup seeking to establish a unique identity or an established business looking to reinvent your online presence, Lockes Copywriting is your partner in crafting narratives that matter. Reach out to us today, and let's embark on a journey where words transcend boundaries, ideas turn into impact, and possibilities are woven into every sentence. Your story starts here – let's write it together."}
                </div>
            </div>
        </WAppear></div>
        <WForm />
        <Footer />
    </>;
}