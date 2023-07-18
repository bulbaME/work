import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WidgetContacts, WidgetCta, WidgetFeatures, WidgetTestimonies } from "@/modules/widgets";
import Link from "next/link";

export default function page() {
    return <>
        <Header page={1} />
        <div className='max-w-7xl m-auto background-home py-12 p-4'>
            <div className='w-fit m-auto text-4xl text-center sm:text-6xl font-bold text-white'>
                Welcome to AkaCopywriter
            </div>
            <div className='font-bold w-fit m-auto text-xl sm:text-4xl my-4 text-y-d'>
                Unlocking the Power of Words
            </div>
            <div className='flex flex-wrap pt-8'>
                <div className='text-y-d text-center font-semibold text-lg sm:text-2xl sm:w-1/3 m-auto sm:mr-0 min-w-[20rem] mb-4'>
                    {"We are a leading copywriting agency dedicated to unleashing the power of words. From captivating website content to engaging social media campaigns, our expert copywriters craft compelling narratives that drive results. Elevate your brand's voice and connect with your audience on a deeper level."}
                </div>
                <div className='m-auto sm:w-1/4 sm:ml-0 cursor-pointer mt-12'>
                    <div className='font-bold text-3xl p-3 px-4 pb-1 bg-white rounded-full w-fit m-auto mt-2 mb-0 hover:mt-0 hover:mb-2 hover:drop-shadow-lg duration-300'>
                        Reach out
                    </div>
                </div>
            </div>
        </div>
        <div className='my-36 max-w-7xl m-auto p-4 flex flex-wrap'>
            <div className='sm:w-2/3 pr-4'>
                <div className='text-lg sm:text-2xl font-bold text-y'>
                    {"Captivate, Persuade, Succeed"}
                </div>
                <div className='text-4xl sm:text-6xl font-bold my-4'>
                    {"Ignite Your Brand's Potential with Our Expert Copywriting Services"}
                </div>
                <div className='sm:text-2xl text-lg font-semibold text-y'>
                    {"At AkaCopywriter, we specialize in the power of words to captivate, persuade, and drive success. Our team of experienced copywriters knows how to craft compelling content that engages your target audience and elevates your brand. Whether you need website copy, social media campaigns, or email marketing, we're here to help you convey your message with impact and achieve your goals. Experience the transformative power of words with our expert copywriting services."}
                </div>
            </div>
            <div className='sm:w-1/3 m-auto min-w-[15rem] p-8'>
                <img src='/img/6.png' />
            </div>
        </div>
        <div className='max-h-[36rem] w-fit my-8 m-auto p-4'>
            <img src='/img/5.png' className='background-1 p-20 drop-shadow-lg' />
        </div>
        <div className='my-36 max-w-7xl m-auto p-4 flex flex-wrap'>
            <div className='sm:w-2/3 pr-4'>
                <div className='text-lg sm:text-2xl font-bold text-y'>
                    {"Meet Our Team of Copywriting Maestros"}
                </div>
                <div className='text-4xl sm:text-6xl font-bold my-4'>
                    {"Crafting Compelling Narratives to Elevate Your Brand"}
                </div>
                <div className='sm:text-2xl text-lg font-semibold text-y'>
                    {"At AkaCopywriter, we are a team of passionate storytellers and wordsmiths. With a deep understanding of effective communication and branding, we bring your ideas to life through captivating copy. Our dedicated copywriters blend creativity with strategic thinking to deliver engaging content that resonates with your audience and drives meaningful results. We pride ourselves on our commitment to excellence, attention to detail, and a collaborative approach. Trust us to tell your brand's unique story and take it to new heights with our exceptional copywriting expertise."}
                </div>
                <div className='text-3xl font-bold w-fit m-auto bg-white pb-1 px-4 py-3 mt-6 mb-0 rounded-full text-center hover:mt-2 hover:mb-4 hover:drop-shadow-lg duration-300'>
                    <Link href='/about'>Learn more about us</Link>
                </div>
            </div>
            <div className='sm:w-1/3 m-auto min-w-[15rem] p-8'>
                <img src='/img/7.png' />
            </div>
        </div>
        <WidgetContacts />
        <WidgetFeatures />
        <WidgetCta title='Transform Your Message, Ignite Your Success' text="Unlock the Power of Compelling Copywriting Today" cta='Contact us' route='/contact' />
        <WidgetTestimonies />
        <Footer />
    </>;
}