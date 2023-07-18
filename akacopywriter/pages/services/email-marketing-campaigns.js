import Footer from "@/modules/footer";
import Header from "@/modules/header";

import { services } from "@/public/json/data.json";

const s = services[2];

export default function page() {
    return <>
        <Header page={7} />
        <div className='max-w-7xl m-auto py-16 p-4'>
            <div className='w-fit m-auto text-4xl text-center sm:text-6xl font-bold'>
                {s.title}
            </div>
            <div className='font-bold w-fit m-auto text-lg sm:text-2xl max-w-4xl text-center my-4 text-y'>
                {s.text}
            </div>
        </div>
        <Footer />
    </>;
}