import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WQuote, WService } from "@/modules/widgets";

import { services } from "@/modules/data";
const I = 2;

const s = services[I];

export default function X() {
    return <>
        <Header page={6 + I} />
        <div className='w-full bg-2'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                    {s.title}
                </div>
                <div className='sm:text-2xl text-xl font-bold text-center text-p mt-4'>
                    {s.text_short}
                </div>
            </WAppear></div>
        </div>
        <WService s={s} i={I} />
        <div className='sm:text-xl text-lg font-bold max-w-7xl m-auto -mb-8'><WAppear>
            {s.text_long}
        </WAppear></div>
        <WQuote />
        <Footer />
    </>;
}