import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WQuote, WService } from "@/modules/widgets";

import { services } from "@/modules/data";

const I = 1;
const s = services[I];


export default function X() {
    return <>
        <Header page={5+I} />
        <div className='bg-1 w-full h-[10rem] -mb-[4rem]' />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl font-bold text-white text-center underline decoration-8 decoration-m-m'>
                {s.title}.
            </div>
        </WAppear></div>
        <div className='sm:text-lg font-light text-white max-w-7xl m-auto'><WAppear>
            <div className='mb-4 sm:text-xl text-lg font-light text-m-m'>
                {s.text_short}
            </div>
            {s.text_long}
        </WAppear></div>
        <WService s={s} i={I} />
        <WQuote />
        <Footer />
    </>;
}