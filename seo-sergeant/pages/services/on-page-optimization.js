import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, P1L, WAppear, WFaq, WFaqSmall, WQuote, WService } from "@/modules/widgets";

import { services } from "@/modules/data";

const I = 0;

const s = services[I];

export default function X() {
    return <>
        <Header page={6 + I} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-white header-title'>
                    {s.title}
                </div>
                <div className='sm:text-3xl text-xl text-white mt-4'>
                    {s.text_short}
                </div>
            </WAppear></div>
        </div>
        <WService s={s} i={I} />
        <WQuote />
        <div className='max-w-7xl m-auto'><WAppear className=''>
            <div className='sm:text-3xl text-xl font-extrabold mb-4'>
                Have any questions?
            </div>
            <div className='flex flex-wrap -mt-12'>
                <div className='md:w-1/2 mt-20 w-full h-[20rem] relative overflow-y-scroll overflow-x-hidden bg-white rounded-md drop-shadow-lg'>
                    <div className='absolute -ml-6 -mr-6'>
                        <WFaqSmall />
                    </div>
                </div>
                <P1 text={s.text_long} />
            </div>
        </WAppear></div>
        <Footer />
    </>;
}