import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";
import { ServiceCard } from "@/app/_modules/widgets";
import { services } from "@/app/data.json";
import Link from "next/link";


const service = services[0];

export default function Main() {
    return <>
        <Header page={5} />
        <div className='w-full m-auto text-4xl font-bold p-16 text-center text-white background-4 pb-[150%] sm:pb-[25%]'>
        {service.title}
            <div className='mt-8 text-2xl font-semibold text-b-l max-w-4xl m-auto'>{service.text}</div>
        </div>
        <div className='flex flex-wrap max-w-7xl m-auto -mt-[25rem] sm:-mt-[15rem] mb-24'>
            <ServiceCard title={service.services[0].title} text={service.services[0].text} price={service.services[0].price} per={service.services[0].per} />
            <ServiceCard title={service.services[1].title} text={service.services[1].text} price={service.services[1].price} per={service.services[1].per} />
            <ServiceCard title={service.services[2].title} text={service.services[2].text} price={service.services[2].price} per={service.services[2].per} />
        </div>
        <div className='background-2 w-full py-[55%] sm:py-[10%] p-10'>
            <div className='max-w-4xl m-auto'>
                <div className='w-fit px-4 m-auto font-semibold text-2xl text-b-l'>
                    Contact us
                </div>
                <div className='text-white text-center text-3xl font-semibold p-4'>
                    Ready to experience reliable hosting solutions that power your online success? Contact us today to discuss your hosting needs, get personalized recommendations, or start your journey with us. We're here to help you thrive in the digital world.
                </div>
                <div className='p-3 px-4 w-fit m-auto bg-white rounded-full font-bold h-fit mt-6 mb-0 text-2xl text-b hover:mt-4 hover:mb-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>Contact us today</Link>
                </div>
            </div>
        </div>
        <div className='my-36 mt-12 max-w-7xl m-auto text-left p-4 flex'>
            <div className='sm:w-2/3'>
                <div className='my-12'>
                    <div className='m-auto font-bold text-b-d my-4 text-2xl'>The Perfect Hosting Solution for Your Needs</div>
                    <div className='text-b text-xl font-medium'>At PointHosting, we are passionate about providing exceptional web hosting services tailored to meet your specific needs. Whether you're a small business owner, blogger, or agency, we offer reliable, secure, and high-performance hosting solutions that power your online presence. With years of industry expertise, advanced infrastructure, and a customer-centric approach, we are your trusted partner in the digital world.</div>
                </div>
                <div className='my-12'>
                    <div className='m-auto font-bold text-b-d my-4 text-2xl'>Experience the Difference with Our Hosting Services</div>
                    <div className='text-b text-xl font-medium'>Unlock the true potential of your website with our cutting-edge hosting solutions. We combine state-of-the-art technology, robust security measures, and exceptional customer support to deliver a hosting experience that exceeds your expectations. Enjoy lightning-fast loading speeds, reliable uptime, and scalable resources that adapt to your growing needs. Our intuitive control panel puts you in full control, allowing you to easily manage your website and streamline your online operations.</div>
                </div>
                <div className='my-12'>
                    <div className='m-auto font-bold text-b-d my-4 text-2xl'>Unparalleled Support for Your Success</div>
                    <div className='text-b text-xl font-medium'>At PointHosting, we understand that reliable support is vital for your online success. That's why our team of friendly experts is available around the clock to assist you with any technical queries or challenges you may encounter. From setup and migration to troubleshooting and optimization, we go the extra mile to ensure your hosting journey is smooth and hassle-free. We are committed to building long-term relationships with our clients, providing personalized support that helps you thrive in the digital landscape.</div>
                </div>
            </div>
            <div className='w-1/3 sm:block hidden'>
                <div className='w-3/5 m-auto mr-10 my-16'>
                    <img src='/img/27.png' />
                </div>
                <div className='w-3/5 m-auto mr-10 my-16'>
                    <img src='/img/28.png' />
                </div>
                <div className='w-3/5 m-auto mr-10 my-16 -rotate-12'>
                    <img src='/img/29.png' />
                </div>
                <div className='w-1/5 m-auto mr-10 my-16 rotate-90'>
                    <img src='/img/30.png' />
                </div>
            </div>
        </div>
        <Footer />
    </>;
}