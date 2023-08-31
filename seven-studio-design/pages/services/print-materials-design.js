import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { services } from "@/modules/data";
import { P1L, P1R, WQuote, WService } from "@/modules/widgets";

const I = 2;

const s = services[I];

export default function X() {
    return <>
        <Header page={6 + I} />
        <div className='bg-2 w-full'>
            <div className='max-w-7xl m-auto p-14 py-8'>
                <div className='sm:text-center text-p sm:text-4xl text-2xl font-bold text-center'>
                    {s.title}
                </div>
                <div className='text-center sm:text-2xl text-xl mt-4 font-light text-m'>
                    {s.text_short}
                </div>
            </div>
        </div>
        <P1R 
            text={s.text_long}
            kt={[]}
            img={`/img/${6 + I}.jpg`}
        />
        <WService s={s} i={I} />
        <WQuote />
        <Footer />
    </>;
}