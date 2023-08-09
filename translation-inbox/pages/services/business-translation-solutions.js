import Footer from "@/modules/footer";
import Header from "@/modules/header";
import Link from "next/link";
import { WAppear, WProcess, WService } from "@/modules/widgets";

import { services } from "@/public/json/data.json";
const s = services[0];

export default function X() {
    return <>
        <Header page={6} />
        <div className='w-full bg-2'>
            <WAppear>
                <div className='text-center font-extrabold sm:text-5xl text-3xl text-p mb-8'>
                    {s.title}
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {s.text_short}
                </div>
            </WAppear>
        </div>
        <div className='max-w-4xl m-auto text-center sm:text-xl text-lg font-medium'><WAppear>
            {s.text_long}
        </WAppear></div>
        <WService s={s} i={0} />
        <WProcess />
        <div className='max-w-4xl m-auto flex my-16'><WAppear>
            <div className='font-medium sm:text-lg text-center'>
                {"Delve into the heart of TranslationInbox and discover our compelling journey. Our About page is where our story unfolds – from our humble beginnings to becoming a trusted global communication partner. Learn about the passion that drives us, the expertise that defines us, and the values that guide us. Explore how we're reshaping language barriers into bridges, one translation at a time. Join us on this inspiring narrative of connecting people, cultures, and ideas through the power of words."}
            </div>
            <div>
                <div className='bg-white p-2 px-5 my-8 sm:text-2xl text-center text-xl font-bold w-fit m-auto rounded-full border-[2px] hover:border-m hover:mt-6 hover:mb-10 hover:drop-shadow-lg duration-300 ease-in-out'>
                    <Link href='/about'>Explore Our Story</Link>
                </div>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}