import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { ParagraphCard } from "../_modules/widgets";
import Link from "next/link";
import { PricingCard } from "../_modules/widgets";

export default function Main() {
    return <> 
        <Header page={4} />
        <div className='w-full m-auto text-4xl font-bold p-16 text-center text-white background-4 pb-[100%] sm:pb-[25%]'>
        About PointHosting
            <div className='mt-8 text-2xl font-semibold text-b-l'>Reliable Hosting Solutions for Your Online Success</div>
        </div>
        <div className='max-w-7xl m-auto -mt-[10rem] flex'>
            <div className='sm:w-2/3'>
                <div className=''>
                    <ParagraphCard title='Welcome to PointHosting' text="With a passion for delivering exceptional services, we have been serving businesses and individuals for 10+ years. Our mission is to empower our clients with the best hosting experience, allowing them to thrive in the digital world." />
                </div>
                <div className=''>
                    <ParagraphCard text="At PointHosting, we believe in the core values of reliability, performance, and customer satisfaction. Our mission is to provide hosting solutions that exceed expectations and help our clients succeed online. We are dedicated to maintaining the highest standards of technical excellence, security, and reliability to ensure the success of our customers." title='Empowering Your Online Success' />
                </div>
                <div className=''>
                    <ParagraphCard text="With a team of highly skilled professionals, PointHosting has a wealth of experience in the hosting industry. Our experts have a deep understanding of the latest technologies and trends, enabling us to offer innovative solutions tailored to meet the unique needs of our clients. We are committed to staying ahead of the curve and continuously improving our services to deliver the best possible hosting experience." title='Industry-Leading Hosting Solutions' />
                </div>
                <div className=''>
                    <ParagraphCard text="What sets PointHosting apart is our unwavering commitment to customer support and satisfaction. We provide exceptional 24/7 customer support, ensuring that our clients receive the assistance they need whenever they need it. Additionally, our state-of-the-art infrastructure, including cutting-edge servers and advanced security measures, guarantees reliable performance and data protection." title='Setting Us Apart' />
                </div>
            </div>
            <div className='sm:block hidden w-1/3 h-full'>
                <img src='/img/33.png' className='w-1/3 m-auto ml-10 mt-0 rotate-12' />
                <img src='/img/38.png' className='w-1/6 m-auto mr-0 mt-0 rotate-12' />
                <img src='/img/37.png' className='w-2/3 m-auto mr-20 -scale-x-100' />
                <img src='/img/39.png' className='w-1/2 m-auto mt-16 mr-0' />
            </div>
        </div>
        <div className='background-3 w-full py-[50%] sm:py-[10%]'>
            <div className='max-w-4xl m-auto'>
                <div className='w-fit px-4 m-auto font-semibold text-2xl text-b-l'>
                    Check out our offerings
                </div>
                <div className='text-white text-center text-3xl font-semibold p-4'>
                We are here to help you unlock the full potential of your online presence. Contact us today to learn more about our hosting solutions, discuss your specific needs, or get assistance in choosing the right plan for your requirements. We look forward to being your trusted hosting partner on your journey to online success.
                </div>
                <div className='p-3 px-4 w-fit m-auto bg-white rounded-full font-bold h-fit mt-6 mb-0 text-2xl text-b hover:mt-4 hover:mb-2 hover:drop-shadow-lg duration-300'>
                    <Link href='/contact'>See our services</Link>
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
        <Footer />
    </>;
}