import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, WAppear, WQuote, WService } from "@/modules/widgets";

import { services } from "@/modules/data";

const I = 1;

const s = services[I];

export default function X() {
    return <>
        <Header page={5 + I} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='sm:text-5xl text-3xl font-extrabold'>
                        {s.title}
                    </div>
                    <div className='sm:text-3xl text-xl'>
                        {s.text_short}
                    </div>
                </WAppear>
            </div>
        </div>
        <WService s={s} i={I} />
        <WQuote />
        <Cta title={"Ready to Turn Your Ideas into Visual Masterpieces?"} text={s.text_long} cta={"Get Started"} route={`/contact?theme=${I+1}#contact-us`} />
        <Footer />
    </>;
}