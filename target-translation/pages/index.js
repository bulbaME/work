import Header from "@/modules/header";
import { Cta, Paragraph, WidgetShortAbout, WidgetTestimonies, WidgetWhyChooseUs } from "@/modules/widgets";

import Link from "next/link";

export default function X() {
    return <>
        <Header page={1} />
        <div className='w-full background-banner flex'>
            <div className='max-w-7xl m-auto w-full'>
                <div className='m-auto mt-[10rem] sm:ml-[2rem] p-8 sm:max-w-[58rem]'>
                    <div className='text-white font-extrabold text-3xl sm:text-5xl underline decoration-g-l decoration-8'>
                        {"Your Gateway to Global Communication"}
                    </div>
                    <div className='text-white font-semibold text-xl sm:text-3xl mt-16'>
                        {"At Target Translation, we break down language barriers and open doors to endless possibilities. As a leading translation company, we specialize in providing accurate, reliable, and culturally-sensitive language solutions to businesses and individuals around the world. Our dedicated team of professional translators and linguists is committed to delivering top-notch services that exceed your expectations."}
                    </div>
                    <div className='w-fit bg-white m-auto p-3 text-2xl sm:text-4xl font-extrabold my-16 hover:bg-g-l hover:mt-[3.75rem] hover:mb-[4.25rem] hover:drop-shadow-xl duration-300'>
                        <Link href='/contact'>Reach out today</Link>
                    </div>
                </div>
            </div>
        </div>
        <WidgetWhyChooseUs />
        <Cta route='/contact' text='Start Your Global Journey' />
        <Paragraph img='/img/7.jpg' slogan="Unlock Your Global Potential" title="Your Global Reach Starts Here" text="Whether you're a multinational corporation looking to expand your global presence or a small business venturing into new international markets, our comprehensive suite of language services is designed to help you succeed. From website localization and multilingual social media management to certified document translation and captivating content creation, we have the expertise to deliver solutions that resonate with diverse audiences worldwide." />
        <Paragraph img='/img/9.jpg' slogan="Precision Beyond Borders" title="Excellence in Every Word" text="At Global Language Solutions, we understand the power of language in conveying your message accurately and effectively. Our team of native-speaking translators and language specialists ensures that your content is not only linguistically precise but also culturally nuanced, making it relatable and impactful to your target audience. We are committed to maintaining the integrity of your message while adapting it seamlessly to different linguistic and cultural contexts." />
        <WidgetShortAbout />
        <WidgetTestimonies />
    </>;
}