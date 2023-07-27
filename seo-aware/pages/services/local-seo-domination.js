import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { CFeature, CService } from "@/modules/widgets";

import { services } from "@/public/json/data.json";
import Link from "next/link";

const s = services[1];

export default function X() {
    return <>
        <Header page={6} />
        <div className='max-w-7xl m-auto py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {s.title}
            </div>
            <div className='sm:text-2xl text-lg max-w-5xl m-auto text-center font-bold text-g-m my-8'>
                {s.text_short}
            </div>
            <div className='sm:text-xl text-center max-w-5xl m-auto font-medium mt-16 text-white'>
                {s.text_long}
            </div>
        </div>
        <div className='flex flex-wrap max-w-7xl m-auto sm:my-24 p-4'>
            <div className='lg:w-1/3 m-auto'>
                <CService title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
            </div>
            <div className='lg:w-1/3 m-auto'>
                <CService title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
            </div>
            <div className='lg:w-1/3 m-auto'>
                <CService title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
            </div>
        </div>
        <div className='p-4 text-center font-bold sm:text-5xl text-3xl text-white'>
            We are the <a className='underline decoration-g-m decoration-[0.4rem]'>best!</a>
        </div>
        <div className='max-w-7xl m-auto flex flex-wrap'>
            <CFeature title='Tailored SEO Strategies' text="We craft personalized SEO strategies based on your business's unique goals, target audience, and industry, ensuring optimal results for your website." />
            <CFeature title='Increased Website Traffic' text="Our expert SEO techniques drive organic traffic to your website, helping you reach a broader audience and attract potential customers." />
            <CFeature title='Improved Search Engine Rankings' text="We employ proven tactics to boost your website's search engine rankings, giving you a competitive edge and higher visibility online." />
            <CFeature title='Quality Backlink Building' text="Our backlink strategies strengthen your website's authority, earning valuable links from reputable sources and enhancing your credibility in the eyes of search engines." />
            <CFeature title='Keyword Dominance' text="Through comprehensive keyword research and implementation, we ensure your website ranks for relevant and high-converting keywords, maximizing your online reach." />
            <CFeature title='Content Optimization' text="We optimize your website's content to make it search engine friendly and user-centric, leading to better engagement and increased conversion rates." />
            <CFeature title='Transparent Reporting' text="With regular and detailed reports, we keep you informed about your website's performance, the progress of SEO efforts, and the achieved results." />
            <CFeature title='Responsive Support' text="Our dedicated team is always available to address your queries, provide guidance, and offer continuous support to help your business thrive." />
        </div>
        <div className='max-w-7xl m-auto p-4 flex flex-wrap my-16'>
            <div className='md:w-1/2 text-white font-bold sm:text-5xl text-3xl m-auto'>
                {"Ready to Elevate Your Online Presence? Let's Get Started!"}
            </div>
            <div className='md:w-1/2 m-auto py-8 hover:pt-4 hover:pb-12 duration-300'>
                <div className='text-white font-bold text-2xl w-fit p-3 px-4 bg-g-m rounded-full m-auto'>
                    <Link href='/contact'>{"Contact us"}</Link>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}