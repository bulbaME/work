import Footer from "@/modules/footer";
import Header from "@/modules/header";

import { services } from "@/modules/data";
import { P1, WAppear, WQuote, WService } from "@/modules/widgets";

const I = 1;

const s = services[I];

export default function X() {
    return <>
        <Header page={6 + I} />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl text-center font-bold text-white'>
                {s.title}
                <span className='text-r-l'>.</span>
            </div>
            <div className='sm:text-2xl text-xl text-center text-r-l font-light mt-8'>
                {s.text_short}
            </div>
        </WAppear></div>
        <WService i={I} s={s} />
        <div className='max-w-7xl m-auto'>
            <P1 text={s.text_long} />
        </div>
        <WQuote />
        <Footer />
    </>;
}