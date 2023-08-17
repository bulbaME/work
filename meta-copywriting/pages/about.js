import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P2L, WFaqSmall, WFeature, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={5} />
        <div className='py-16 m-auto text-center bg-2 pb-[16rem] -mb-[12rem]'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                Our Story
            </div>
            <div className='sm:text-3xl text-xl font-bold text-o-d my-4 p-4'>
                {"Crafting Words, Creating Connections"}
            </div>
        </div>
        <div className='flex max-w-7xl m-auto my-12 flex-wrap'>
            <div className='m-auto underline decoration-o-m sm:text-2xl text-lg font-bold px-4 hover:pl-6 hover:pr-2 duration-300 my-4'>
                <Link href='/about#story'>
                    #Story
                </Link>
            </div>
            <div className='m-auto underline decoration-o-m sm:text-2xl text-lg font-bold px-4 hover:pl-6 hover:pr-2 duration-300'>
                <Link href='/about#mission'>
                    #Mission
                </Link>
            </div>
            <div className='m-auto underline decoration-o-m sm:text-2xl text-lg font-bold px-4 hover:pl-6 hover:pr-2 duration-300'>
                <Link href='/about#team'>
                    #Expert Team
                </Link>
            </div>
            <div className='m-auto underline decoration-o-m sm:text-2xl text-lg font-bold px-4 hover:pl-6 hover:pr-2 duration-300'>
                <Link href='/about#approach'>
                    #Approach
                </Link>
            </div>
        </div>
        <div className='p-6 text-center font-bold sm:text-5xl text-3xl text-o-m mt-20 -mb-16'>
            You should choose us
        </div>
        <a id='story'>
            <P2L img='/img/7.png' slogan='Crafting Words, Creating Connections' title='Our Story' text={<>{"Welcome to MetaCopywriting, where words come alive, and brands find their voice. Our journey began with a passion for the art of communication and a vision to empower businesses with persuasive storytelling. Since our inception, we've been dedicated to unlocking the true potential of brands through compelling copy."} <div className='py-4' />
                {"Our founders, Jane and Michael, recognized the transformative power of words in shaping perceptions, influencing decisions, and forging lasting connections. With backgrounds in marketing and creative writing, they combined their expertise to establish MetaCopywriting. From the very beginning, our focus has been on creating content that not only engages but also drives results for our clients."} <div className='py-4' />
                {"Over the years, our unwavering commitment to excellence has earned us the trust of numerous businesses seeking to make a mark in the digital landscape. Our success stories are not only a testament to the impact of our work but also a testament to the strong relationships we build with our clients. Together, we have weathered challenges, celebrated milestones, and written success stories that continue to inspire us."}</>} />
        </a>
        <a id='mission'>
            <P2L img='/img/8.png' slogan='Empowering Your Success, One Word at a Time' title='Our Mission' text={<>{"At MetaCopywriting, our mission is crystal clear: to propel your business towards success through the power of words. We believe that every brand has a unique story to tell, and we are here to bring that narrative to life. With our strategic approach, creative flair, and results-driven mindset, we aim to drive your business forward, one word at a time."} <div className='py-4' />
                {"Our team is passionate about delivering content that resonates with your target audience, drives engagement, and ultimately converts leads into loyal customers. Whether it's crafting compelling website copy, developing engaging social media campaigns, or creating captivating product descriptions, our mission is to empower your brand to achieve its full potential."}</>} />
        </a>
        <a id='team'>
            <P2L img='/img/9.png' slogan='Uniting Creativity and Expertise' title='Our Expert Team' text={<>{"Behind MetaCopywriting stands a team of talented wordsmiths who share a passion for storytelling and a commitment to excellence. Our diverse team of seasoned copywriters brings together creativity, industry knowledge, and marketing expertise. We collaborate to deliver content that not only resonates with your audience but also elevates your brand's image in the competitive landscape."} <div className='py-4' />
                {"Each member of our team brings a unique set of skills and experiences to the table, ensuring that we can cater to a wide range of industries and niches. From crafting engaging blog posts to developing comprehensive content strategies, our team is dedicated to helping your brand stand out and make a lasting impact."}</>} />
        </a>
        <a id='approach'>
            <P2L img='/img/10.png' slogan='Crafting Personalized Solutions' title='Our Approach' text={<>{"When it comes to copywriting, one size does not fit all. We understand that each brand is unique, with its distinct voice and goals. Our approach is rooted in personalization. We take the time to understand your brand's identity, target audience, and aspirations. Armed with this knowledge, we craft tailor-made solutions that leave a lasting impact."} <div className='py-4' />
                {"Our process starts with a comprehensive discovery phase, where we dive deep into understanding your business, industry landscape, and competitive advantages. We then collaborate closely with you, seeking your input and feedback at every stage. This collaborative approach ensures that the content we create truly reflects your brand's personality and resonates with your audience."}</>} />
        </a>
        <Cta cta="Request a Free Consultation" route='/contact' text="Take the first step towards exceptional copywriting by requesting a free consultation to discuss your unique needs." />
        <WServicesSmall />
        <Footer />
    </>;
}