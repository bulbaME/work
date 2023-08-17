import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, WService, WStats, WTestimonials } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[2];

export default function X() {
    return <>
        <Header page={8} />
        <div className='py-16 m-auto text-center bg-2 pb-[16rem] -mb-[12rem]'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                {s.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-o-d my-4 p-4'>
                {s.text_short}
            </div>
        </div>
        <WService services={s.services} />
        <div className='my-12 mt-20 text-center p-6 font-bold sm:text-5xl text-3xl text-o-m'>
            You should choose us
        </div>
        <WStats />
        <WTestimonials />
        <Cta cta="Drive Conversions Now" route='/contact' text="Accelerate your conversions with our conversion-focused copy that drives results and boosts your business growth." />
        <Footer />
    </>;
}