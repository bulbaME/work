import Image from "next/image";
import Link from "next/link";

import { services } from "@/public/json/data.json";

export function Img(props) {
    return <div className='m-auto'>
        <Image src={props.src} width={1000} height={1000} alt='Loading...' className='drop-shadow-xl rounded-[2rem] sm:rounded-[4rem]' />
    </div>;
}

export function PLL(props) {
    const key_w = props.keys.map((v, i) => {
        return <div className='w-fit sm:ml-auto ml-0 flex m-auto p-4' key={i}>
            <div className='text-r-l m-auto mx-4 ml-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='font-semibold sm:text-lg text-white m-auto'>
                {v}
            </div>
        </div>;
    });

    return <div className='max-w-7xl p-4 m-auto py-8'>
        <div className='sm:text-2xl text-lg font-bold text-r-l'>
            {props.slogan}
        </div>
        <div className='my-4 sm:text-5xl text-3xl font-bold text-white'>
            {props.title}
        </div>
        <div className='flex flex-wrap-reverse my-8'>
            <div className='sm:w-3/5 w-full sm:pr-8 m-auto text-white sm:text-3xl sm:mt-auto mt-8'>
                {props.text}
            </div>
            <div className='sm:w-2/5 w-full sm:pl-2 m-auto'>
                <Img src={props.img} />
            </div>
        </div>
        <div className='flex flex-wrap w-full'>
            {...key_w}
        </div>
    </div>;
}

export function PLD(props) {
    const key_w = props.keys.map((v) => {
        return <div className='w-fit sm:ml-auto ml-0 flex m-auto p-4'>
            <div className='text-r-1 m-auto mx-4 ml-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='font-semibold sm:text-lg text-white m-auto'>
                {v}
            </div>
        </div>;
    });

    return <div className='max-w-7xl p-4 m-auto py-16'>
        <div className='sm:text-2xl text-lg font-bold text-r-1'>
            {props.slogan}
        </div>
        <div className='my-4 sm:text-5xl text-3xl font-bold text-white'>
            {props.title}
        </div>
        <div className='flex flex-wrap-reverse my-8'>
            <div className='sm:w-3/5 w-full sm:pr-8 m-auto text-white sm:text-3xl sm:mt-auto mt-8'>
                {props.text}
            </div>
            <div className='sm:w-2/5 w-full sm:pl-2 m-auto'>
                <Img src={props.img} />
            </div>
        </div>
        <div className='flex flex-wrap w-full'>
            {...key_w}
        </div>
    </div>;
}

export function PRD(props) {
    const key_w = props.keys.map((v) => {
        return <div className='w-fit sm:ml-auto ml-0 flex m-auto p-4'>
            <div className='text-r-1 m-auto mx-4 ml-0'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='font-semibold sm:text-lg text-white m-auto'>
                {v}
            </div>
        </div>;
    });

    return <div className='max-w-7xl p-4 m-auto py-16'>
        <div className='sm:text-2xl text-lg font-bold text-r-1'>
            {props.slogan}
        </div>
        <div className='my-4 sm:text-5xl text-3xl font-bold text-white'>
            {props.title}
        </div>
        <div className='flex flex-wrap my-8'>
            <div className='sm:w-2/5 w-full sm:pl-2 m-auto'>
                <Img src={props.img} />
            </div>
            <div className='sm:w-3/5 w-full sm:pl-8 m-auto text-white sm:text-3xl sm:mt-auto mt-8'>
                {props.text}
            </div>
        </div>
        <div className='flex flex-wrap w-full'>
            {...key_w}
        </div>
    </div>;
}

export function Cta(props) {
    return <div className='max-w-2xl py-8 p-4 text-center sm:text-4xl text-2xl m-auto'>
        <div className='font-bold text-white'>
            {props.text}
        </div>
        <div className='p-4 mt-10 mb-0 hover:mt-6 hover:mb-4 duration-300 px-7 w-fit m-auto rounded-full text-white font-bold bg-r-1'>
            <Link className='drop-shadow-lg' href={props.cta_route}>{props.cta}</Link>
        </div>
    </div>;
}

export function CtaL(props) {
    return <div className='max-w-2xl py-8 p-4 text-center sm:text-4xl text-2xl m-auto'>
        <div className='font-bold text-white'>
            {props.text}
        </div>
        <div className='p-4 mt-10 mb-0 hover:mt-6 hover:mb-4 duration-300 px-7 w-fit m-auto rounded-full text-r-1 font-bold bg-white'>
            <Link className='drop-shadow-lg' href={props.cta_route}>{props.cta}</Link>
        </div>
    </div>;
}

function FC(props) {
    return <div className='flex my-16'>
        <div className='sm:h-[1rem] sm:w-[1rem] h-[0.5rem] w-[0.5rem] bg-white rounded-3xl m-3 mx-5' />
        <div className='w-5/6'>
            <div className='sm:text-4xl text-2xl font-bold text-white mb-4'>
                {props.title}
            </div>
            <div className='sm:text-xl text-white font-medium'>
                {props.text}
            </div>
        </div>
    </div>
}

export function FeatureW(props) {
    return <div className='flex flex-wrap my-16'>
        <div className='w-full text-center text-white font-bold mb-16 text-3xl sm:text-5xl'>Our key features</div>
        <div className='m-auto p-4 pb-4 sm:w-1/2'>
            <Img src='/img/2.jpg' />
        </div>
        <div className='m-auto sm:w-1/2'>
            <FC title='Expert Copywriting Services' text="Our team of skilled and experienced copywriters crafts content that stands out, engages your audience, and drives results. We are experts in delivering persuasive messaging tailored to your brand's unique voice." />
            <FC title='Compelling Sales Copy' text="Transform your leads into customers with our compelling sales copy. Our copywriters specialize in creating persuasive content that drives conversions and maximizes your sales potential." />
            <FC title='Storytelling that Inspires' text="Unlock the power of storytelling with our expert writers. We craft narratives that captivate your audience, connect with their emotions, and leave a lasting impression." />
            <FC title='Tailored Brand Messaging' text="Your brand's voice matters, and we ensure that every word we write aligns with your brand's personality and values. Our tailored messaging creates a consistent and impactful brand identity." />
        </div>
    </div>
}

function TC(props) {
    return <div className='p-8 py-8 m-auto'>
        <div className='text-center sm:text-4xl text-2xl text-white font-bold py-4'>{props.name}</div>
        <div className='sm:rounded-[4rem] rounded-[2rem] p-8 text-center border-[0.13rem] border-white text-white sm:text-3xl'>
            {props.text}
        </div>
        <div className='text-center sm:text-5xl text-3xl text-white font-bold py-4'>{props.rating}</div>
    </div>;
}

export function TestimonyW() {
    return <div className='max-w-7xl m-auto flex flex-wrap py-16'>
        <div className='w-full text-center p-4 text-white font-bold mb-8 text-3xl sm:text-5xl'>Testimonies from our clients</div>
        <div className='sm:w-1/2 m-auto'>
            <TC name='John Smith, CEO' rating='10/10' text="Copywriting and Graphics has been a game-changer for our business! Their expert copywriters have transformed our website content, and the results were astounding. Not only did our website traffic increase, but our conversions also saw a significant boost. Their persuasive messaging and compelling calls-to-action have truly made a difference. We are impressed with their professionalism, and they have become our go-to partner for all our copywriting needs." />
        </div>
        <div className='sm:w-1/2 m-auto'>
            <TC name='Sarah Johnson, Marketing Manager' rating='9/10' text="The team at Copywriting and Graphics is simply fantastic! Their creativity and storytelling skills are unparalleled. They have helped us craft engaging blog posts and social media content that have increased our brand's visibility and engagement. Our followers love the content, and we've seen a substantial rise in our social media following. Their tailored brand messaging has also reinforced our brand identity. Thank you for the outstanding work!" />
        </div>
        <div className='sm:w-1/2 m-auto'>
            <TC name='Michael Brown, Founder' rating='9/10' text="I highly recommend Copywriting and Graphics to anyone looking for top-notch copywriting services. Their persuasive email campaigns have been a game-changer for our business. The emails are thoughtfully written, engaging, and have significantly increased our email open rates and click-throughs. The team's attention to detail and dedication to understanding our brand's voice have exceeded our expectations. They truly understand how to connect with our audience and drive results." />
        </div>
        <div className='sm:w-1/2 m-auto'>
            <TC name='Emily Roberts, Startup Entrepreneur' rating='10/10' text="As a startup entrepreneur, I needed captivating content that could convey my brand's message effectively. Copywriting and Graphics provided me with exactly what I was looking for. Their tailored brand messaging and compelling website copy brought my vision to life. Their team was easy to work with, and they went the extra mile to ensure my content was engaging and SEO-optimized. I'm grateful for their support in establishing my brand's identity and highly recommend their services to fellow entrepreneurs." />
        </div>
    </div>;
}

function ServicesSmallC(props) {
    return <div className='p-4 m-auto py-[3rem] pb-[1rem] hover:pt-[0.2rem] hover:pb-[3.8rem] duration-300 relative my-16'>
        <a href={props.link}>
            <div className='rounded-[2rem] bg-white p-4 drop-shadow-xl cursor-pointer text-r-1'>
                <div className='sm:text-4xl text-2xl font-bold text-center drop-shadow-lg'>
                    {props.title}
                </div>
                <div className='sm:text-2xl text-lg text-center mt-6 drop-shadow-lg'>
                    {props.text}
                </div>
            </div>
            <div className='absolute bottom-[0.7rem] left-1/2 -translate-x-1/2 sm:text-4xl text-2xl font-bold text-r-d-1 -z-10'>
                See more
            </div>
        </a>
    </div>;
}

export function ServicesSmallW() {
    return <div className='max-w-7xl m-auto py-8'>
        <div className='text-white sm:text-5xl text-3xl font-bold p-4 text-center'>Discover our services</div>
        <div className='flex flex-wrap'>
            <div className='sm:w-1/3 m-auto'>
                <ServicesSmallC title={services[0].title} text={services[0].text_short} link={services[0].link} />
            </div>
            <div className='sm:w-1/3 m-auto'>
                <ServicesSmallC title={services[1].title} text={services[1].text_short} link={services[1].link} />
            </div>
            <div className='sm:w-1/3 m-auto'>
                <ServicesSmallC title={services[2].title} text={services[2].text_short} link={services[2].link} />
            </div>
        </div>
    </div>;
}

export function ServicesC(props) {
    return <div className='flex p-4 py-16 flex-wrap'>
        <div className='font-bold mb-4 w-full text-center text-white sm:text-5xl text-3xl'>
                {props.title}
        </div>
        <div className='sm:w-1/3 m-auto py-4'><Img src={props.img} /></div>
        <div className='sm:w-2/3 sm:p-4 sm:pl-8 m-auto'>
            <div className='text sm:text-lg font-medium text-white'>
                {props.text}
            </div>
            <div className='w-fit m-auto mt-8 mb-0 p-3 px-4 bg-r-1 text-white text-2xl font-bold rounded-full hover:mt-4 hover:mb-4 duration-300'>
                <Link href={props.link} className='drop-shadow-xl'>See more</Link>
            </div>
        </div>
    </div>;
}

export function ServiceC(props) {
    return <div className='p-4 m-auto'>
        <div className='p-4 bg-2 rounded-[2rem]'>
            <div className='text-center text-white font-bold sm:text-4xl text-2xl'>
                {props.title}
            </div>
            <div className='flex w-fit m-auto my-4'>
                <div className='sm:text-3xl text-xl font-bold text-white m-auto'>{props.price}</div>
                <div className='sm:text-lg font-bold text-white mx-2 m-auto'>/</div>
                <div className='sm:text-lg font-semibold text-white m-auto'>{props.per}</div>
            </div>
            <div className='w-3/5 bg-white h-px m-auto mb-4' />
            <div className='text-center text-white sm:text-lg font-medium '>
                {props.text}
            </div>
            <div className=''>
                <div className='w-fit m-auto bg-white mt-12 mb-4 p-3 px-4 rounded-full text-r-1 font-bold text-xl hover:mt-8 hover:mb-8 duration-300 drop-shadow-xl'>
                    <Link href='/contact#contact-us'>Select</Link>
                </div>
            </div>
        </div>
    </div>;
}