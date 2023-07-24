import Header from "@/modules/header";
import { KeyFeatureCard, Paragraph, WidgetFeatures, WidgetServicesSmall, WidgetTestimonies } from "@/modules/widgets";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={1} />
        <div className='max-w-6xl m-auto p-4 mt-10 flex flex-wrap'>
            <div className='sm:w-3/5'>
                <div className='text-y-d font-semibold text-xl'>{"Your Bridge to the World's Languages"}</div>
                <div className='text-black font-bold text-3xl'>{"Empowering Global Communication"}</div>
                <div className='my-8 text-xl font-semibold'>{"Welcome to Translation International, where global communication knows no bounds. Our passion lies in empowering businesses and individuals to transcend linguistic barriers and reach audiences worldwide."}</div>
                <div className='my-8 text-xl font-semibold'>{"As a leading translation company, Translation International prides itself on delivering accurate and culturally nuanced translations that resonate with diverse audiences. Our team of skilled linguists and language experts work tirelessly to ensure your message remains authentic, no matter the language or culture."}</div>
            </div>
            <div className='sm:w-1/5 w-3/4 m-auto sm:mt-auto mt-16'>
                <div className='text-xl font-semibold sm:text-center'>
                    {"Unlock the Power of Language with Translation International's Comprehensive Services"}
                </div>
                <div className='w-full bg-y-l py-3 mt-8 text-center text-xl font-bold hover:bg-b-l duration-300'>
                    <Link href='/contact'>Reach us today</Link>
                </div>
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
        <WidgetServicesSmall />
        <Paragraph img='/img/3.jpg' title='Our Passion for Languages' text="Languages are the heart and soul of communication, and we are passionate about unlocking the power they hold. With a team of skilled linguists proficient in over 100 languages, we ensure that your message is conveyed accurately and authentically to diverse audiences around the world." />
        <Paragraph img='/img/5.jpg' title='Your Global Success is Our Goal' text="Whether you are a multinational corporation expanding into new markets or an individual seeking to connect with international clients, Translation International is your partner for success. Our comprehensive services, including business localization solutions, multilingual content creation, interpretation and communication, and certified document translation, cater to all your global communication needs." />
        <Paragraph img='/img/2.jpg' title='Experience Seamless Communication' text="With Translation International, you can experience seamless communication at every level. From accurate simultaneous interpretation at conferences and events to swift and reliable certified document translations for legal purposes, our services bridge the gaps and connect you with the world." />
        <div className='max-w-6xl m-auto p-8 my-36'>
            <div className='text-center font-bold text-3xl'>{"Discover Authentic Cross-Cultural Connections"}</div>
            <div className='flex mt-4 flex-wrap'>
                <div className='text-xl font-semibold sm:w-2/3'>
                    {"Break language barriers and foster genuine connections with Translation International's culturally sensitive language solutions. Experience seamless communication and build meaningful relationships across borders."}
                </div>
                <div className='sm:w-1/3 w-full m-auto px-6 sm:my-auto my-8'>
                    <div className='text-xl font-bold py-3 bg-y-l hover:bg-b-l text-center h-fit duration-300'>
                        <Link href='/contact'>Reach out to us now</Link>
                    </div>
                </div>
            </div>
        </div>
        <WidgetFeatures />
        <div className='my-36 text-center max-w-6xl m-auto p-4 text-3xl font-bold'>
            <div>
                {"Have questions or need more information?"}
            </div>
            <div className='underline decoration-y-l decoration-4 hover:decoration-b-l duration-300'>
                <Link href='/contact'>{"Reach out to our friendly team today!"}</Link>
            </div>
        </div>
        <WidgetTestimonies />
        <Footer />
    </>;
}