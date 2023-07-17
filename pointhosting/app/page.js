import Link from "next/link";
import Header from "./_modules/header";
import { FeatureCard, PricingCard, TestimonyCard } from "./_modules/widgets";
import Footer from "./_modules/footer";

export default function Main() {
    return <>
        <Header page={1} />
        <div className='w-full background-home pb-[50%] sm:pb-[20%]'>
            <div className='max-w-7xl m-auto sm:p-8 p-4 flex flex-wrap'>
                <div className='sm:w-1/2 text-white mt-6'>
                    <div className='text-b-l font-semibold text-xl'>Welcome to PointHosting</div>
                    <div className='font-bold text-4xl my-3'>Powerful Web Hosting Solutions for Your Online Success</div>
                    <div className='font-medium text-lg'>We are leading provider of reliable and high-performance web hosting services. We specialize in delivering top-notch hosting solutions that ensure your online presence is fast, secure, and always available.</div>
                    <div className='flex m-auto w-fit pt-8'>
                        <div className='p-3 px-4 bg-white rounded-full font-bold h-fit m-auto mx-2 mt-2 mb-0 text-2xl text-b hover:mt-0 hover:mb-2 hover:drop-shadow-lg duration-300'>
                            <Link href='/contact'>Contact</Link>
                        </div>
                        <div className='p-2.5 px-3 border-4 mx-2 border-white rounded-full font-bold mt-2 mb-0 text-2xl text-white hover:mt-0 hover:mb-2 hover:drop-shadow-lg duration-300'>
                            <Link href='/services'>See our services</Link>
                        </div>
                    </div>
                </div>
                <div className='sm:flex hidden sm:w-1/2'>
                    <div className='w-1/3 m-auto mb-0'>
                        <img src='/img/6.png' />
                    </div>
                    <div className='w-1/4 m-auto mr-0'>
                        <img src='/img/23.png' />
                    </div>
                </div>
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
        <div className='text-4xl w-fit m-auto font-bold text-b-d'>Our plans</div>
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
        <div className='background-2 w-full py-[45%] sm:py-[10%]'>
            <div className='max-w-4xl m-auto'>
                <div className='w-fit px-4 m-auto font-semibold text-2xl text-b-l'>
                    Contact us
                </div>
                <div className='text-white text-center text-3xl font-semibold p-4'>
                    Have questions or need assistance in choosing the right hosting package for your needs? Contact our sales team for personalized guidance.
                </div>
                <div className='p-3 px-4 w-fit m-auto bg-white rounded-full font-bold h-fit mt-6 mb-0 text-2xl text-b hover:mt-4 hover:mb-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>Contact us today</Link>
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto my-36'>
            <div className='text-4xl w-fit m-auto font-bold text-b-d'>Service Highlights</div>
            <div className='flex flex-wrap'>
                <div className='m-auto max-w-xs my-12'>
                    <div className='p-12'>
                        <img src='/img/26.png' className='saturate-b' />
                    </div>
                    <div className='w-fit m-auto font-bold text-b-d my-4 text-2xl'>
                        Advanced Technology
                    </div>
                    <div className='text-b text-xl text-center font-medium'>
                        Our hosting utilizes cutting-edge technologies, including SSD storage for faster data retrieval and content delivery networks (CDNs) to ensure your website loads quickly for visitors worldwide.
                    </div>
                </div>
                <div className='m-auto max-w-xs my-12'>
                    <div className='p-12'>
                        <img src='/img/24.png' className='saturate-c' />
                    </div>
                    <div className='w-fit m-auto font-bold text-b-d my-4 text-2xl'>
                        Additional Services
                    </div>
                    <div className='text-b text-xl text-center font-medium'>
                        Enhance your online presence with our range of additional services, including domain registration to secure a unique online identity, website migration assistance for a seamless transition, and website builders that enable you to create stunning websites without any coding knowledge.
                    </div>
                </div>
                <div className='m-auto max-w-xs my-12'>
                    <div className='p-12'>
                        <img src='/img/25.png' className='saturate-b' />
                    </div>
                    <div className='w-fit m-auto font-bold text-b-d my-4 text-2xl text-center'>
                        Seamless Website Management
                    </div>
                    <div className='text-b text-xl text-center font-medium'>
                    With our intuitive and user-friendly control panel, you can easily manage your hosting account, set up email accounts, install applications like WordPress with a single click, and monitor your website's performance.
                    </div>
                </div>
            </div>
        </div>
        <div className='background-3 w-full py-[50%] sm:py-[10%]'>
            <div className='max-w-4xl m-auto'>
                <div className='w-fit px-4 m-auto font-semibold text-2xl text-b-l'>
                    Check out our offerings
                </div>
                <div className='text-white text-center text-3xl font-semibold p-4'>
                    Ready to take your website to new heights? Explore our hosting packages and choose the one that best suits your needs. Experience top-notch performance, unmatched reliability, and dedicated support.
                </div>
                <div className='p-3 px-4 w-fit m-auto bg-white rounded-full font-bold h-fit mt-6 mb-0 text-2xl text-b hover:mt-4 hover:mb-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>See our services</Link>
                </div>
            </div>
        </div>
        <div className='my-36 max-w-7xl m-auto text-left p-4 flex'>
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
        <div className='flex flex-wrap max-w-3xl m-auto mb-24'>
            <div className='w-fit m-auto text-b-d font-bold text-3xl text-center p-4'>Hear what our satisfied customers have to say about our services</div>
            <TestimonyCard img='/img/21.jpg' title='Mark Andersen, CEO' text="Switching to PointHosting was the best decision for my business. Their hosting service has significantly improved my website's speed, resulting in better user experience and increased sales." />
            <TestimonyCard img='/img/20.jpg' title='Jane Smith, Blogger' text="I can't recommend PointHosting enough. Their support team is incredibly responsive and knowledgeable. Anytime I have a question or need assistance, they are there to help." />
        </div>
        <Footer />
    </>;
}