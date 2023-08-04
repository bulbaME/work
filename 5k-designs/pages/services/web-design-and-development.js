import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WCta, WService } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[0];

export default function X() {
    return <>
        <Header page={6} />
        <div className='max-w-5xl m-auto text-center sm:p-14 p-6'>
            <div className='sm:text-4xl text-2xl font-bold'>
                {s.title}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-4'>
                {s.text_short}
            </div>
        </div>
        <WService s={s.services} />
        <div className='max-w-7xl m-auto sm:p-14 p-6 sm:text-lg font-semibold'>
            <div className='border-[1px] p-4 border-black'>
                {s.text_long}
            </div>
        </div>
        <WCta title='Get Started with 5K Designs' cta="Let's Get Started" route='/contact#contact-us' text="Ready to embark on a design journey that celebrates creativity and drives results? Get started today, and together, we'll craft something extraordinary for your brand, bringing your vision to life. Our collaborative approach ensures that your ideas blend seamlessly with our expertise, resulting in designs that exceed your expectations. Let's create a lasting impact together and set your brand on a path of success that will leave a legacy for years to come." />
        <Footer />
    </>;
}