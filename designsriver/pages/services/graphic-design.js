import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, P3L, PL, PR, WService, WWhyUs } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[3];

export default function X() {
    return <>
        <Header page={8} />
        <div className='w-full bg-2 py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {s.title}
            </div>
            <div className='sm:text-2xl text-lg text-center text-white font-bold mt-4'>
                {s.text_short}
            </div>
        </div>
        <div className='max-w-7xl m-auto p-4'>
            <PL cta_link='/contact' cta={`Get a quote about ${s.title.toLowerCase()} today!`} img='/img/18.jpg' text={s.text_long} />
        </div>
        <WService services={s.services} />
        <Cta route='/contact' cta='Contact us today' title='Unleash the Power of Design' text="Transform Your Brand Experience - Start Your Design Journey Now!" />
        <Footer />
    </>;
}