import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { ServicesCard, WidgetTestimonies, KeyFeatureCard } from "@/modules/widgets";
import Image from "next/image";

import { services } from "@/public/json/data.json";

export default function X() {
    return <>
        <Header page={3} />
        <div className='max-w-6xl m-auto p-4 mt-10 flex-wrap'>
            <div className='text-y-d font-semibold text-xl'>{"Empowering Global Communication - Our Services"}</div>
            <div className='text-black font-bold text-3xl'>{"Comprehensive Language Solutions for Your Success"}</div>
            <div className='my-8 text-xl font-semibold'>{"Welcome to Translation International's services hub, where we empower global communication one word at a time. Our comprehensive range of language solutions is designed to meet your diverse needs, from business localization and content creation to interpretation and certified document translation. Unlock new possibilities and connect with the world through our expert services. Explore how we can help you expand your horizons and reach new heights in the global marketplace."}</div>
        </div>
        <div className='max-w-6xl m-auto p-4 mb-24'>
            <div>
                <ServicesCard title={services[0].title} text={services[0].text_long} link={services[0].link} />
                <ServicesCard title={services[1].title} text={services[1].text_long} link={services[1].link} />
                <ServicesCard title={services[2].title} text={services[2].text_long} link={services[2].link} />
                <ServicesCard title={services[3].title} text={services[3].text_long} link={services[3].link} />
            </div>
        </div>
        <div className='flex max-w-6xl m-auto p-4 flex-wrap mt-24'>
            <div className='sm:w-1/3 m-auto my-12 p-8'>
                <Image src='/img/1.jpg' className='shadow-1' width={1000} height={1000} />
            </div>
            <div className='sm:w-2/3 m-auto'>
                <KeyFeatureCard title='Extensive language expertise' text='A team of skilled linguists proficient in over 100 languages.' />
                <KeyFeatureCard title='Cultural sensitivity' text='Delivering accurate translations that resonate with diverse global audiences.' />
                <KeyFeatureCard title='Comprehensive services' text='From document translation to interpretation, offering a full suite of language solutions.' />
            </div>
        </div>
        <div className='flex max-w-6xl m-auto p-4 flex-wrap-reverse mb-24'>
            <div className='sm:w-2/3 m-auto'>
                <KeyFeatureCard title='Swift turnaround' text='Efficient and on-time delivery, even for urgent projects.' />
                <KeyFeatureCard title='Client-centered approach' text='Tailoring services to meet your unique needs and requirements.' />
                <KeyFeatureCard title='Empowering global communication' text='Breaking language barriers for seamless international interactions.' />
            </div>
            <div className='sm:w-1/3 m-auto my-12 p-8'>
                <Image src='/img/7.jpg' className='shadow-1' width={1000} height={1000} />
            </div>
        </div>
        <WidgetTestimonies />
        <Footer />
    </>;
}