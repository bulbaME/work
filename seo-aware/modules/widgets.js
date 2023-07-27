import { services } from "@/public/json/data.json";
import Link from "next/link";
import Image from "next/image";

export function CFeature(props) {
    return <div className='md:w-1/2 w-full p-4 flex my-10'>
        <div className='text-g-m px-4 pt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-8 sm:h-8 w-6 h-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </div>
        <div className='w-5/6 text-white'>
            <div className='sm:text-4xl text-3xl font-bold'>
                {props.title}
            </div>
            <div className='font-semibold sm:text-xl text-lg mt-8'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function P1(props) {
    return <div className='max-w-7xl m-auto p-4 sm:my-24 my-16'>
        <div className='flex'>
            <div className='text-g-m w-fit'>
                {props.img}
            </div>
            <div className='text-white font-bold sm:text-5xl w-fit text-3xl m-auto sm:ml-8 ml-4'>
                {props.title}
            </div>
        </div>
        <div className='text-white mt-8 sm:text-2xl text-lg font-medium'>
            {props.text}
        </div>
    </div>;
}

function CServicesSmall(props) {
    return <div className='p-4'>
        <div className='border-[0.2rem] p-8 border-white'>
            <div className='text-center font-bold sm:text-4xl text-2xl text-white'>
                {props.title}
            </div>
            <div className='text-white text-center sm:text-2xl text-lg font-medium my-8'>
                {props.text}
            </div>
            <div className='text-center font-bold text-g-m text-3xl underline'>
                <Link href={props.link}>See more</Link>
            </div>
        </div>
    </div>;
}

export function WServicesSmall() {
    const s = services.map((v, i) => {
        return <div className='md:w-1/3 m-auto'><CServicesSmall title={v.title} text={v.text_short} link={v.link} key={i} /></div>
    });

    return <div className='max-w-7xl m-auto p-4 my-24'>
        <div className='font-bold sm:text-5xl text-3xl text-center text-white'>
            Discover our services
        </div>
        <div className='flex flex-wrap my-8'>
            {...s}
        </div>
    </div>;
}

function CTestimony(props) {
    return <div className='my-20'>
        <div className='text-white font-medium sm:text-2xl text-lg'>
            {props.text}
        </div>
        <div className='sm:text-4xl text-2xl font-bold text-white my-4'>
            - {props.name}
        </div>
    </div>;
}

export function WTestimony() {
    return <div className='max-w-7xl m-auto p-4 sm:my-24 my-16'>
        <div className='font-bold sm:text-5xl w-fit m-auto flex text-3xl text-center text-white'>
            <div className='px-4 text-g-m'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" />
                </svg>
            </div>
            <div className='m-auto'>
                Feedback from our clients
            </div>
        </div>
        <div className='my-8'>
            <CTestimony name="Emily Johnson, CEO" text="I can't thank SEO Aware enough for their outstanding services! Before partnering with them, my website was buried deep in search engine results, making it almost invisible to potential customers. But after their magic touch, my website's traffic skyrocketed, and my sales have never been better. Their team is not only incredibly skilled in SEO but also genuinely caring and responsive to my business needs. I highly recommend SEO Aware to anyone looking to boost their online presence and take their business to new heights." />
            <CTestimony name="John Anderson, Owner of Bakery" text="I was hesitant about investing in SEO for my small local business, but SEO Aware convinced me otherwise, and I'm so glad I trusted them! Their local SEO strategies worked like magic, bringing in a steady stream of customers from my area. My business now dominates local search results, and I've seen a significant increase in foot traffic to my store. The team at SEO Aware is professional, transparent, and full of fresh ideas. I'm incredibly grateful for their expertise and the impact they've had on my business's success." />
            <CTestimony name="Sarah Mitchell, Founder" text="I was struggling to compete with bigger players in my industry until I found SEO Aware. Their e-commerce SEO services transformed my online store's performance. With improved product page optimization and site speed, my website's rankings soared, leading to a substantial boost in sales. The team was proactive, constantly analyzing data, and refining their strategies to keep my business on top. I'm thrilled with the results, and SEO Aware has become an invaluable partner in my business journey." />
        </div>
    </div>;
}

export function P2L(props) {
    return <div className='max-w-7xl m-auto p-4 flex flex-wrap-reverse sm:my-32 my-24'>
        <div className='md:w-1/2 m-auto md:mt-auto mt-8'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                {props.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-4 mb-8'>
                {props.slogan}
            </div>
            <div className='sm:text-xl font-medium text-white'>
                {props.text}
            </div>
        </div>
        <div className='md:w-1/2 m-auto md:pl-8'>
            <Image src={props.img} width={1000} height={500} alt='SEO Image' />
        </div>
    </div>;
}

export function P2R(props) {
    return <div className='max-w-7xl m-auto p-4 flex flex-wrap sm:my-32 my-24'>
        <div className='md:w-1/2 m-auto md:pr-8'>
            <Image src={props.img} width={1000} height={500} alt='SEO Image' />
        </div>
        <div className='md:w-1/2 m-auto md:mt-auto mt-8'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                {props.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-4 mb-8'>
                {props.slogan}
            </div>
            <div className='sm:text-xl font-medium text-white'>
                {props.text}
            </div>
        </div>
    </div>;
}

function CServices(props) {
    return <div className='m-auto text-center text-white sm:my-24 my-16'>
        <div className='font-bold sm:text-5xl text-3xl my-4'>
            {props.title}
        </div>
        <div className='w-fit m-auto my-8 bg-g-m p-1 font-bold sm:text-2xl text-lg'>
            3 services
        </div>
        <div className='my-8 sm:text-2xl text-lg font-medium'>
            {props.text}
        </div>
        <div className='flex w-fit m-auto'>
            <div className='my-8 font-bold mx-4 px-4 p-3 bg-g-m rounded-full hover:mt-4 hover:mb-12 text-2xl duration-300'>
                <Link href={props.link}>More</Link>
            </div>
            <div className='my-8 font-bold mx-4 px-4 p-3 rounded-full hover:mt-4 hover:mb-12 text-2xl duration-300'>
                <Link href='/contact#contact-us'>Select</Link>
            </div>
        </div>
    </div>;
}

export function WServices() {
    const s = services.map((v, i) => {
        return <div>
            <CServices title={v.title} text={v.text_long} link={v.link} key={i} />
            {i < 2 ? <div className='h-px w-2/3 m-auto my-8 bg-white' />:''}
        </div>
    });
    
    return <div className='max-w-4xl m-auto p-4 sm:my-36'>
        {...s}
    </div>;
}

export function CService(props) {
    return <div className='p-9 m-auto relative'>
        <div className='bg-black p-6 text-white text-center'>
            <div className='sm:text-4xl text-2xl font-bold'>{props.title}</div>
            <div className='mt-8 sm:text-xl font-medium'>{props.text}</div>
            <div className='my-8 sm:text-xl font-bold'>
                <div>{props.price} / {props.per}</div>
            </div>
            <div className='w-fit m-auto bg-g-m p-3 px-5 font-bold text-2xl rounded-full mt-12 mb-0 hover:mt-8 hover:mb-4 duration-300'>
                <Link href='/contact#contact-us'>Select</Link>
            </div>
        </div>
        <div className='absolute bg-g-m rounded-full text-center font-bold text-2xl w-[5rem] h-[5rem] top-0 right-0 flex'>
            <div className='m-auto text-white'>{props.price}</div>
        </div>
    </div>;
}