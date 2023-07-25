import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, PLD, PRD, ServiceC } from "@/modules/widgets";

import { services } from "@/public/json/data.json";

const s = services[1];

export default function X() {
    return <>
        <Header page={6} />
        <div className='w-full bg-h bg-3 py-[6rem]'>
            <div className='max-w-7xl m-auto w-full p-4'>
                <div className='text-center text-r-l font-bold sm:text-3xl text-xl my-4'>
                    {s.text_short}
                </div>
                <div className='text-center text-white font-bold sm:text-5xl text-3xl'>
                    {s.title}
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto bg-b bg-4 py-16'>
            <div className='lg:flex'>
                <ServiceC title={s.services[0].title} text={s.services[0].text} price={s.services[0].price} per={s.services[0].per} />
                <ServiceC title={s.services[1].title} text={s.services[1].text} price={s.services[1].price} per={s.services[1].per} />
                <ServiceC title={s.services[2].title} text={s.services[2].text} price={s.services[2].price} per={s.services[2].per} />
            </div>
            <PRD img='/img/15.jpg' text={s.text_long} keys={[s.services[0].title, s.services[1].title, s.services[2].title]} />
            <div className='my-16 mt-8 w-fit m-auto'>
                <Cta text="Drive conversions and increase sales with our conversion-focused copywriting. Let's take your business to the next level." cta="Boost Your Sales Now!" cta_route='/contact' />
            </div>
        </div>
        <Footer />
    </>;
}