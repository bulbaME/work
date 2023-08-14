import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature, WForm, WService } from "@/modules/widgets";

import { services } from "@/public/json/data";

const I = 1;
const s = services[I];

export default function X() {
    return <>
        <Header page={6} />
        <div className='relative bg-1'>
            <div className='max-w-5xl m-auto pb-[7rem]'><WAppear>
                <div className='text-center sm:text-5xl text-3xl font-extrabold text-white'>
                    {s.title}
                </div>
                <div className='sm:text-base text-sm text-center mt-8 font-bold text-white'>
                    {s.text_long}
                </div>
            </WAppear></div>
        </div>
        <WService s={s.services} i={I} />
        <WForm />
        <WFeature />
        <Footer />
    </>;
}