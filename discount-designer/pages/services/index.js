import Header from "@/modules/header";
import Footer from "@/modules/footer";
import { Cta, WidgetServices, WidgetWhyUs } from "@/modules/widgets";

export default function x() {
    return <>
        <Header page={3} />
        <div className='background-2 m-auto max-w-7xl'>
            <div className='max-w-7xl m-auto background-2 p-4 sm:p-[4.5rem] text-white'>
                <div className='text-lg sm:text-3xl font-bold'>{"Unlocking Creativity, Elevating Brands"}</div>
                <div className='text-3xl sm:text-6xl font-bold mt-4 mb-12'>{"Our services"}</div>
                <div className='text-xl sm:text-4xl font-medium'>{"Discover our range of expert services, meticulously crafted to empower your brand's success. From captivating web design to memorable branding solutions, our diverse offerings cater to all your design needs. Explore our portfolio and let's embark on a creative journey together."}</div>
            </div>
        </div>
        <WidgetServices />
        <Cta route='/contact' text='Get Started on Your Design Journey – Contact Our Team' />
        <WidgetWhyUs />
        <Footer />
    </>;
}