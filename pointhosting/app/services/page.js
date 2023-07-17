import Link from "next/link";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { ParagraphCard, PricingCard, ServicesCard } from "../_modules/widgets";
import { services } from "@/app/data.json"
import { FeatureCard } from "../_modules/widgets";

export default function Main() {
    return <>
        <Header page={3} />
        <div className='w-full m-auto text-4xl font-bold p-16 text-center text-white background-4 pb-[100%] sm:pb-[25%]'>
        Our Hosting Services
            <div className='mt-8 text-2xl font-semibold text-b-l'>Reliable Solutions to Power Your Online Presence</div>
        </div>
        <div className='max-w-5xl m-auto -mt-[10rem]'>
            <ParagraphCard title='Empowering Your Online Success with Reliable Hosting Solutions' text="At PointHosting, we offer a comprehensive range of hosting services designed to meet the diverse needs of businesses and individuals alike. Whether you're a small business owner, a blogger, or an agency, we have the perfect hosting solution to power your online presence. Our hosting services are built on a foundation of reliability, performance, and security. With state-of-the-art infrastructure, advanced technologies, and a customer-centric approach, we ensure that your website is fast, secure, and always accessible. From shared hosting to dedicated servers, our services are tailored to provide you with the flexibility, scalability, and peace of mind you need to focus on what matters most – growing your online business. Discover our hosting services today and experience the difference of a reliable hosting solution that powers your success." />
        </div>
        <div className='text-4xl w-fit m-auto font-bold text-b-d mt-24'>Our plans</div>
        <div className='flex flex-wrap max-w-6xl m-auto p-4'>
            <PricingCard title='Basic Plan' price='$10' text={<div>
                - 10 GB of storage <br />
                - Unlimited bandwidth <br />
                - 5 email accounts <br />
                - 24/7 customer support
            </div>} />
            <PricingCard title=' Premium Plan' price='$30' text={<div>
                - 50 GB of storage <br />
                - Unlimited bandwidth <br />
                - 20 email accounts <br />
                - Free domain registration <br />
                - Advanced security measures <br />
                - Priority customer support <br />
                - Dedicated server hosting <br />
                - Staging environments
            </div>} />
            <PricingCard title='Pro Plan' price='$20' text={<div>
                - 25 GB of storage <br />
                - Unlimited bandwidth <br />
                - 10 email accounts <br />
                - Free domain registration <br />
                - Priority customer support <br />
                - E-commerce platform <br /> support
            </div>} />
        </div>
        <div className='background-1 w-full py-[50%] sm:py-[10%]'>
            <div className='max-w-4xl m-auto'>
                <div className='w-fit px-4 m-auto font-semibold text-2xl text-b-l'>
                    Power up your online presence
                </div>
                <div className='text-white text-center text-3xl font-semibold p-4'>
                    Take the first step towards a powerful online presence. Sign up now to experience the difference of our reliable hosting solutions. Get started today!
                </div>
                <div className='p-3 px-4 w-fit m-auto bg-white rounded-full font-bold h-fit mt-6 mb-0 text-2xl text-b hover:mt-4 hover:mb-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>Reach out to us</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap max-w-6xl m-auto p-4'>
            <div className='text-4xl m-auto w-fit text-b-d font-bold'>Our services</div>
            <div className='max-w-7xl flex flex-wrap mb-24 m-auto'>
                <ServicesCard img='/img/41.png' title={services[0].title} link={services[0].link} text={services[0].text} />
                <ServicesCard img='/img/40.png' title={services[1].title} link={services[1].link} text={services[1].text} />
                <ServicesCard img='/img/42.png' title={services[2].title} link={services[2].link} text={services[2].text} />
            </div>
        </div>
        <div className='flex max-w-7xl sm:p-8 p-4 m-auto'>
            <div className='sm:w-2/3'>
                <div className='text-4xl w-fit m-auto font-bold text-b-d'>Key features</div>
                <div className='max-w-[35rem] m-auto'>
                    <FeatureCard img='/img/1.png' title='Lightning-fast loading speeds' text="Our state-of-the-art infrastructure and advanced caching technologies guarantee optimal website performance, reducing bounce rates and improving user experience." />
                    <FeatureCard img='/img/2.png' title='Robust security measures' text="We prioritize the security of your website by implementing advanced firewalls, regular malware scans, and SSL certificates to keep your data and visitors safe." />
                    <FeatureCard img='/img/3.png' title='Scalable resources' text="Whether you're running a personal blog or a thriving e-commerce store, our hosting packages offer flexible resource allocations to accommodate your growing needs." />
                    <FeatureCard img='/img/4.png' title='24/7 expert support' text="Our dedicated support team is available round the clock to assist you with any technical issues or questions you may have." />
                    <FeatureCard img='/img/5.png' title='Easy-to-use control panel' text="Manage your hosting account effortlessly with our intuitive control panel, giving you full control over your website's settings and features." />
                </div>
            </div>
            <div className='w-1/3 sm:flex flex-wrap hidden saturate-a'>
                <div className='m-auto rotate-12 w-2/3 mr-0'>
                    <img src='/img/17.png' />
                </div>
                <div className='m-auto w-1/2 mr-0 mt-0'>
                    <img src='/img/18.png' />
                </div>
                <div className='m-auto w-1/2 mb-0 mr-0'>
                    <img src='/img/19.png' />
                </div>
                <div className='m-auto mr-0 mb-10 w-2/3'>
                    <img src='/img/12.png' />
                </div>
            </div>
        </div>
        <Footer />
    </>;
}