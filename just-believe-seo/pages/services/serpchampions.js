import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P2L, WService, WServicesSmall, WTestimonials } from "@/modules/widgets";

import { services } from "@/public/json/data.json";
import Link from "next/link";

const s = services[1];

export default function X() {
    return <>
        <Header page={6} />
        <div className='bg2 w-full'>
            <div className='max-w-7xl m-auto p-6 text-center py-12'>
                <div className='sm:text-3xl text-xl text-white font-extrabold'>
                    {s.title}
                </div>
                <div className='sm:text-xl text-white opacity-70 font-bold mt-4'>
                    {s.text_short}
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto p-6 sm:text-xl my-12 font-bold'>
            {s.text_long}
        </div>
        <WService s={s.services} />
        <div className='max-w-7xl m-auto p-6 my-16 flex flex-wrap'>
            <div className='text-center font-semibold sm:text-xl pb-4 md:w-2/3'>
                {"Discover how our SEO services can revolutionize your digital growth. Request a free consultation with our team of experts today. Let's discuss your goals, challenges, and the tailored solutions we have for your business."}
            </div>
            <div className='md:w-1/3 h-fit m-auto px-4 text-center'>
                <div className='w-fit m-auto px-4 py-3 font-extrabold my-3 sm:text-xl bg-white rounded-full text-p hover:mb-5 hover:mt-1 hover:drop-shadow-lg duration-300 border-[1px] border-neutral-300'>
                    <Link href='/contact#contact-us'>Request a Free SEO Consultation!</Link>
                </div>
            </div>
        </div>
        <WTestimonials />
        <Footer />
    </>;
}