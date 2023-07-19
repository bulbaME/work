import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { services } from "@/public/json/data.json";

function Tick() {
    return <div className='w-fit text-v1-l'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
        </svg>
    </div>;
}

export function WidgetFeaturesSmall() {
    return <div className='flex-wrap max-w-7xl m-auto p-4 flex my-36'>
        <div className='md:w-1/2 p-4 m-auto mt-8'>
            <Image src='/img/2.jpg' className='rounded-3xl' width='1000' height='1000' />
        </div>
        <div className='md:w-1/2 text-white p-4 m-auto'>
            <div className='text-lg sm:text-2xl mb-8 underline decoration-v1-l font-semibold'><Link href='/contact'>Contact us</Link></div>
            <div className='font-bold text-3xl sm:text-5xl mb-6'>{"Transform Your Brand with Creative Designs and Exceptional Support"}</div>
            <div className='font-medium text-lg sm:text-2xl'>{"At our design company, we offer creative and innovative designs that set your brand apart. With a customized approach, we tailor our designs to align with your unique vision and goals. Our commitment to timely delivery and attention to detail ensures that your projects are completed on schedule with impeccable quality. We prioritize excellent communication and support, keeping you informed every step of the way and providing reliable assistance even after project completion. Experience the difference of our creative solutions, personalized service, and unwavering commitment to your satisfaction."}</div>
        </div>
        <div className='sm:flex my-4 mx-8 flex-wrap text-white'>
                <div className='flex my-2 sm:w-1/2'><Tick /><div className='m-auto text-xl mx-2 font-semibold'>Creative & Innovative Designs</div></div>
                <div className='flex my-2 sm:w-1/2'><Tick /><div className='m-auto text-xl mx-2 font-semibold'>Customized Approach</div></div>
                <div className='flex my-2 sm:w-1/2'><Tick /><div className='m-auto text-xl mx-2 font-semibold'>Timely Delivery & Attention to Detail</div></div>
                <div className='flex my-2 sm:w-1/2'><Tick /><div className='m-auto text-xl mx-2 font-semibold'>Excellent Communication & Support</div></div>
        </div>
    </div>
}

function WhyUsCard(props) {
    return <div className={'flex-wrap flex p-4 my-36' + (props.c % 2 ? '':' flex-row-reverse')}>
        <div className='sm:w-1/3 m-auto'>
            <div className='w-[10rem] h-[10rem] flex bg-v1-m m-auto rounded-full'>
                <div className='w-fit m-auto text-white text-8xl font-bold'>{props.c}</div>
            </div>
        </div>
        <div className='sm:w-2/3 text-white sm:m-auto my-8'>
            <div className='text-3xl sm:text-4xl font-semibold mb-4'>
                {props.title}
            </div>
            <div className='text-lg sm:text-xl font-medium'>
                {props.text}
            </div>
        </div>
    </div>
}

export function WidgetWhyUs() {
    return <div className='max-w-7xl m-auto my-36'>
        <div className='w-fit m-auto text-5xl text-white font-semibold text-center'>Trust us. We are professionals</div>
        <WhyUsCard c={1} title='Creative Expertise' text='Our design team consists of highly skilled and imaginative professionals who excel in creating captivating designs. With our creative expertise, we can bring your brand to life with visually stunning and innovative solutions that leave a lasting impact on your audience.' />
        <WhyUsCard c={2} title='Tailored Approach' text='We understand that every client is unique, and we take a customized approach to meet your specific needs. We collaborate closely with you to understand your brand identity, target audience, and goals. By tailoring our designs to align with your vision, we ensure that the end result is a perfect reflection of your brand and resonates with your audience.' />
        <WhyUsCard c={3} title='Exceptional Quality' text='We take pride in delivering designs of the highest quality. From pixel-perfect details to meticulous craftsmanship, we pay attention to every aspect to ensure that our designs meet the highest standards. With our dedication to excellence, you can trust that your brand will be represented in a visually compelling and professional manner.' />
        <WhyUsCard c={4} title='Client-Centric Focus' text='Our clients are at the heart of everything we do. We prioritize effective communication, actively listening to your ideas, and collaborating with you throughout the design process. We value your input and feedback, making sure that you are involved and satisfied every step of the way. Our goal is to not only meet but exceed your expectations, building a long-lasting partnership based on trust and mutual success.' />
    </div>;
}


export function Cta(props) {
    const [hover, setHover] = useState(false);

    return <div className='max-w-7xl m-auto p-4 my-36'>
        <Link href={props.route} className='m-auto'>
            <div className='bg-v1-m rounded-full p-2 px-5 flex w-fit m-auto text-white' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <div className='w-fit text-lg sm:text-4xl font-semibold'>
                    {props.text}
                </div>
                <div className={'overflow-hidden transition-width duration-300 sm:h-auto h-0' + (hover ? ' sm:w-[4rem]':' w-0')}>
                    <div className='ml-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12">
                        <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    </div>;
}

export function Paragraph(props) {
    return <div className='max-w-7xl m-auto p-4 text-white my-36'>
        <div className='underline decoration-v1-l font-bold text-lg sm:text-2xl w-full px-4'><Link href={props.route}>{props.route_text}</Link></div>
        <div className='text-3xl sm:text-5xl font-bold my-2 mb-4 w-full px-4'>{props.title}</div>  
        <div className='flex flex-wrap-reverse'>
            <div className='sm:w-1/2 p-4'>
                <div className='text-lg sm:text-2xl font-medium'>{props.text}</div>
            </div>
            <div className='sm:w-1/2 m-auto p-4'>
                <img src={props.img} className='rounded-3xl' />
            </div>
        </div>
    </div>;
} 

function ServiceCard(props) {
    return <div className='p-4 flex'>
        <Link href={props.link} className='m-auto hover:ml-[10%] ml-0 duration-300'>
        <div>
            <div className='p-2 sm:p-8 px-10 text-black bg-white w-fit text-center text-lg sm:text-5xl font-bold m-auto rounded-full border-v1-m border-8'>
                {props.text}
            </div>
        </div>
        </Link>
        <div className='w-1/6 min-w-[8rem] m-auto px-2'>
            <div className='bg-white p-4 sm:p-8 rounded-full border-v1-m border-8'>
                <img src={props.img} />
            </div>
        </div>
    </div>;
}

export function WidgetServices() {
    return <div className='max-w-7xl m-auto p-4'>
        <div className='w-fit m-auto text-center p-4 text-6xl font-bold text-white'>Our services</div>
        <ServiceCard text={services[0].title} img='/img/5.png' link={services[0].link} />
        <ServiceCard text={services[1].title} img='/img/6.png' link={services[1].link} />
        <ServiceCard text={services[2].title} img='/img/7.png' link={services[2].link} />
    </div>;
}