import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { services } from "@/modules/data";
import { WAppear, WQuote, WService } from "@/modules/widgets";

const I = 2;

const s = services[I];

export default function X() {
    return <>
        <Header page={5 + I} />
        <div className='bg-2'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='text-center sm:text-5xl text-3xl font-black text-b-d'>
                        {s.title}
                    </div>
                    <div className='sm:text-3xl text-xl font-semibold text-b-m mt-4 text-center'>
                        {s.text_short}
                    </div>
                </WAppear>
            </div>
        </div>
        <div className='sm:text-lg font-light text-b-d max-w-7xl m-auto'><WAppear>
            {s.text_long}
        </WAppear></div>
        <WService i={I} s={s} />
        <WQuote />
        <Footer />
    </>;
}