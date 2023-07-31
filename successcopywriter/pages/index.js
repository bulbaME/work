import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P1L, WFeature, WServicesSmall, WStats, WTestimonials } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='bg-1 pb-[40rem] sm:-mb-[28rem] -mb-[36rem]'>
            <div className='max-w-7xl m-auto p-6 pt-12'>
                <div className='flex flex-wrap py-6 pt-0'>
                    <div className='md:w-2/3'>
                        <div className='sm:text-2xl text-xl font-bold text-o-d my-2'>
                            {"Unlock Success with Words"}
                        </div>
                        <div className='sm:text-5xl text-3xl font-bold text-white'>
                            {"Your Partner in Copywriting Excellence SuccessCopywriting"}
                        </div>
                        <div className='sm:text-2xl text-lg font-medium text-white mt-12'>
                            {"Welcome to SuccessCopywriting, where we believe in the transformative power of words. As a premier copywriting company, we specialize in crafting captivating and influential content that drives results and leads you towards unparalleled success."}
                        </div>
                    </div>
                    <div className='md:w-1/3 flex px-4 w-full my-auto md:mt-auto mt-12'>
                        <div className='m-auto w-fit'>
                            <div className='sm:text-3xl text-xl font-bold text-white'>
                                {"Get Started Today!"}
                            </div>
                            <div className=''>
                            <div className='sm:text-2xl text-lg font-bold text-white text-center duration-300 hover:drop-shadow-lg bg-b-d rounded-lg border-neutral-400 border-[1px] py-4 mt-16'>
                                <Link href='/contact'>{"Get a Free Quote!"}</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WStats />
        <WFeature />
        <WServicesSmall />
        <P1L slogan='Crafting Words that Captivate and Convert' title='Your Partner in Powerful Messaging' img='/img/4.jpg' text="At SuccessCopywriting, we understand the art of communication. Our team of seasoned copywriters is skilled in the craft of turning ideas into powerful messages. Whether it's engaging website copy, attention-grabbing marketing campaigns, or impactful social media posts, we tailor our approach to fit your unique needs, delivering content that captivates your audience and drives conversions." />
        <P1L slogan='Unleash the Potential of Your Narrative' title='Elevate Your Brand Story' img='/img/6.jpg' text="Your brand has a story to tell, and we're here to bring it to life. With our expert storytelling, we'll take your audience on a captivating journey that resonates with their hearts and minds. Let your brand narrative shine, build emotional connections, and leave a lasting impression with our compelling storytelling expertise." />
        <P1L slogan='Empowering Your Success, One Word at a Time' title='Results That Speak for Themselves' img='/img/3.jpg' text="At SuccessCopywriting, we measure our success by your success. Our results-driven approach ensures that every word we craft has a purpose: to achieve your business goals. Experience a transformation in your conversion rates, brand engagement, and customer loyalty as our persuasive copy drives your business forward." />
        <P1L slogan='Your Vision, Our Expertise, A Winning Combination' title='Collaboration for Excellence' img='/img/2.jpg' text="Collaboration lies at the heart of our process. We take the time to understand your vision, goals, and brand personality to create content that represents your unique identity. With open communication and a passion for excellence, we ensure that your voice shines through in every word we write." />
        <Cta route='/contact' cta='Unlock Your Potential' text="Unlock the true potential of your brand's message with our persuasive copywriting solutions that elevate your success." />
        <WTestimonials />
        <Footer />
    </>;
}