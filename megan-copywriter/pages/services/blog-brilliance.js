import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall, WFeature, WService } from "@/modules/widgets";

import { services } from "@/modules/data";

const I = 2;

const s = services[I];

export default function X() {
    return <>
        <Header page={6 + I} />
        <div className='bg-2 pt-12'>
            <div className='max-w-7xl m-auto py-12'>
                {/* <WAppear> */}
                        <div className='relative w-fit m-auto sm:text-5xl text-3xl font-bold'>
                            <div className='absolute z-10'>{s.title}</div>
                            <div className='absolute bottom-0 w-full h-2 bg-b-m' />
                            <div className=''>{s.title}</div>
                        </div>
                {/* </WAppear> */}
            </div>
        </div>
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='text-center sm:text-2xl text-xl font-bold mb-4'>
                {s.text_short}
            </div>
            <div className='sm:text-lg text-center'>
                {s.text_long}
            </div>
        </WAppear></div>
        <WService i={I} s={s} />
        <WFeature />
        <Footer />
    </>;
}