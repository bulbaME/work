import Header from "@/modules/header";
import Footer from "@/modules/footer";

import { services } from "@/public/json/data.json";
import { WProcess, WService } from "@/modules/widgets";

const s = services[3];

export default function X() {
    return <>
        <Header page={8} />
        <div className='py-16 m-auto text-center bg-b-m'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                {s.title}
            </div>
            <div className='sm:text-3xl max-w-4xl m-auto text-xl font-bold text-b-l my-4'>
                {s.text_short}
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8'>
            <WService s={s.services} />
        </div>
        <div className='w-full bg-b-m py-16 text-white text-center'>
            <div className='p-4 max-w-5xl m-auto font-medium sm:text-3xl text-xl'>
                {s.text_long}
            </div>
        </div>
        <div className='max-w-7xl m-auto p-8'>
            <WProcess />
        </div>
        <Footer />
    </>;
}