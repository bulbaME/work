import Link from "next/link";
import Image from "next/image";
import { services } from "@/public/json/data.json";

export function KeyFeatureCard(props) {
    return <div className='p-4 flex'>
        <div className='text-b-l p-1 px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
        </div>
        <div className=''>
            <div className='text-3xl font-bold text-black'>
                {props.title}
            </div>
            <div className='text-2xl font-semibold text-y-d'>
                {props.text}
            </div>
        </div>
    </div>;
}

function ServicesSmallCard(props) {
    return <div className='max-w-xl p-8 m-auto py-12'>
        <div className='text-3xl font-bold text-center mb-4'>{props.title}</div>
        <div className='flex'>
            <div className='text-2xl font-semibold w-3/4 text-y-d'>
                {props.text}
            </div>
            <div className='ml-2 w-1/4 bg-y-l text-center h-fit m-auto py-3 font-bold text-xl text-black hover:bg-b-l duration-300'>
                <Link href={props.route}>See more</Link>
            </div>
        </div>
    </div>;
}

export function WidgetServicesSmall() {
    return <div className='max-w-6xl m-auto my-48'> 
        <div className='w-fit text-center m-auto mb-24'>
            <div className='text-xl font-bold text-y-d'>{"Unlock the World's Languages"}</div>
            <div className='text-3xl font-bold text-black'>{"Services we provide"}</div>
        </div>
        <div className='flex flex-wrap'>
            <ServicesSmallCard title={services[0].title} text={services[0].text_short} route={services[0].link} />
            <ServicesSmallCard title={services[1].title} text={services[1].text_short} route={services[1].link} />
            <ServicesSmallCard title={services[2].title} text={services[2].text_short} route={services[2].link} />
            <ServicesSmallCard title={services[3].title} text={services[3].text_short} route={services[3].link} />
        </div>
    </div>;
}

export function Paragraph(props) {
    return <div className='max-w-6xl m-auto p-4 flex my-36 flex-wrap'>
        <div className='w-full'>
            <div className='w-fit m-auto text-3xl font-bold text-center'>
                {props.title}
            </div>
        </div>
        <div className='sm:w-1/3 p-8 m-auto'>
            <Image src={props.img} width={1000} height={1000} className='shadow-1' />
        </div>
        <div className='sm:w-2/3 m-auto p-4'>
            <div className='text-xl font-semibold text-black'>
                {props.text}
            </div>
        </div>
    </div>;
}

export function WidgetTestimonies() {
    return <div className='max-w-6xl m-auto p-8 my-36'>
        <div className='m-12 text-3xl font-bold text-center'>{"Feedback from our clients"}</div>
        <div className='max-w-xl m-auto my-12'>
            <div className='bg-y-l p-4 text-xl font-semibold'>
                {"Translation International made it possible for us to connect with international clients seamlessly. Their translations were spot on, and their team was responsive and professional."}
            </div>
            <div className='text-right text-3xl font-bold mt-4'>
                {"John Smith, CEO"}
            </div>
        </div>
        <div className='max-w-xl m-auto my-12'>
            <div className='bg-y-l p-4 text-xl font-semibold'>
                {"We highly recommend Translation International for their top-notch localization services. Our website traffic from international markets has significantly increased since working with them."}
            </div>
            <div className='text-right text-3xl font-bold mt-4'>
                {"Emily Chen, Marketing Manager"}
            </div>
        </div>
    </div>;
}