import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, ServicesCard, WidgetWhyChooseUs } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

export default function X() {
    return <>
        <Header page={3} />
        <div className='w-full background-services flex'>
            <div className='max-w-7xl m-auto w-full'>
                <div className='m-auto mt-[10rem] text-center p-8 sm:max-w-[58rem]'>
                    <div className='text-white font-extrabold text-3xl sm:text-5xl decoration-g-l decoration-8'>
                        {"Our Comprehensive Language Solutions"}
                    </div>
                    <div className='text-white font-semibold text-xl sm:text-3xl my-16'>
                        {"Unlock a world of language services tailored to your needs. At Target Translation, we offer a comprehensive range of language solutions, including professional translation, certified document services, multilingual content creation, website localization, and cultural consulting. Our experienced team is here to support your global communication requirements and help you reach diverse audiences with precision and impact."}
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-5xl p-8 m-auto mb-32'>
            <ServicesCard title={services[0].title} text={services[0].text} link={services[0].link} img='/img/16.png' />
            <ServicesCard title={services[1].title} text={services[1].text} link={services[1].link} img='/img/17.png' />
            <ServicesCard title={services[2].title} text={services[2].text} link={services[2].link} img='/img/18.png' />
        </div>
        <WidgetWhyChooseUs />
        <Cta route='/contact' text='Contact Us Today' />
        <Footer />
    </>;
}