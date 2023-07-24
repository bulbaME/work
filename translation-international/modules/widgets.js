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

function FeaturesCard(props) {
    return <div className='p-4 m-auto max-w-md py-8'>
        <div className='bg-y-l p-4'>
            <div className='flex w-fit my-auto'>
                <div className='my-auto w-1/5 flex'>
                    <div className='m-auto'>
                    {props.img}
                    </div>
                </div>
                <div className='text-3xl font-bold w-4/5 ml-2'>
                    {props.title}
                </div>
            </div>
            <div className='text-xl font-semibold text-y-d text-left mt-4'>
                {props.text}
            </div>
        </div>
    </div>
}

export function WidgetFeatures() {
    return <div className='max-w-6xl m-auto my-36'>
        <div className='text-center text-3xl font-bold mb-16'>
            You should choose us
        </div>
        <div className='flex flex-wrap'>
            <FeaturesCard title='Cultural Sensitivity' text="We understand the importance of cultural nuances and ensure that your message is accurately conveyed with respect to local customs and traditions." img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clipRule="evenodd" />
                </svg>
            } />
            <FeaturesCard title='Precision and Accuracy' text="Our team of expert linguists delivers accurate translations that maintain the original intent and meaning of your content." img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                </svg>              
            } />
            <FeaturesCard title='Customer-Centric Approach' text="We prioritize our clients' needs, offering personalized solutions and exceptional customer service." img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
            } />
            <FeaturesCard title='Timely Delivery' text="We value your time and ensure prompt delivery of all language solutions, even for urgent projects." img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                </svg>
            }/>
        </div>
    </div>
}

export function ServicesCard(props) {
    return <div className='my-24 border-2 border-y-l p-4'>
        <div className='text-3xl font-bold '>
            {props.title}
        </div>
        <div className='text-xl font-semibold mt-4'>
            {props.text}
        </div>
        <div className='m-auto p-3 w-fit text-2xl font-bold mt-8 bg-y-l hover:bg-b-l duration-300'>
            <Link href={props.link}>See more</Link>
        </div>
    </div>
}

export function ServiceCard(props) {
    return <div className='p-4 max-w-[24rem] m-auto'>
        <div className='bg-y-l p-4'>
            <div className='text-3xl font-bold text-center'>
                {props.title}
            </div>
            <div className='flex w-fit m-auto my-4 relative'>
                <div className='text-2xl font-bold m-auto'>
                    {props.price}
                </div>
                <div className='mx-2 m-auto'>/</div>
                <div className='text-xl font-semibold m-auto'>
                    {props.per}
                </div>
                <div className='bg-b-l w-full h-[0.1rem] mt-8 absolute'/>
            </div>
            <div className='text-xl font-serif text-y-d text-center'>
                {props.text}
            </div>
            <div className='mt-8 p-3 w-fit m-auto hover:bg-b-l duration-300 text-2xl font-bold'>
                <Link href='/contact'>Select</Link>
            </div>
        </div>
    </div>;
}