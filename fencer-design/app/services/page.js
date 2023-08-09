import { Banner } from "../_modules/banner";
import Footer from "../_modules/footer";
import Header from "../_modules/header";
import { FeaturesWidget, ServiceCard, Testimonials } from "../_modules/widgets";
import { services } from "@/app/data.json";
import { ButtonL } from "../_modules/buttons";

export default function Main() {
    return <>
        <Header page={3} />
        <Banner title='Our services' text="Design Excellence, Tailored for Your Success!" />
        <div className='max-w-7xl m-auto'>
            <ServiceCard img='/img/10.jpg' link={services[0].link} title={services[0].title} text={services[0].text} />
            <ServiceCard img='/img/11.jpg' link={services[1].link} title={services[1].title} text={services[1].text} />
            <ServiceCard img='/img/12.jpg' link={services[2].link} title={services[2].title} text={services[2].text} />
        </div>
        <div className='max-w-7xl m-auto my-36'>
            <FeaturesWidget />
        </div>
        <div className='background-2 py-32 pb-28'>
            <div className='text-center m-auto w-fit text-white font-bold text-4xl'>
                Let&apos;s Connect and Create Something Amazing
                <div className='my-4' /> 
                <ButtonL route='/contact' text="Get in touch with us!" />
            </div>
        </div>
        <Testimonials />
        <Footer />
    </>;
}