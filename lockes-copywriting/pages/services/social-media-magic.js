import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1, WAppear, WService } from "@/modules/widgets";

import { services } from "@/public/json/data.json";
import Link from "next/link";

const I = 2;
const s = services[0 + I];

export default function X() {
    return <>
        <Header page={5 + I} />
        <div className='bg-gradient-to-bl from-r to-o'><WAppear className='max-w-4xl m-auto'>
            <div className='sm:text-4xl text-center text-2xl font-bold text-white'>
                {s.title}
            </div>
        </WAppear></div>
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='my-24'>
                <div className='sm:text-4xl text-2xl font-bold text-white'>
                    {'Our ' + s.title}
                </div>
                <div className='sm:text-lg font-bold text-o'>
                    {s.text_short}
                </div>
                <div className='sm:text-lg font text-white mt-8'>
                    {s.text_long}
                </div>
            </div>
        </WAppear></div>
        <WService s={s} theme={I} i={I} />
        <div className='max-w-4xl m-auto text-white py-12'><WAppear className=''>
            <div className='sm:text-lg'>
                <div className='text sm:text-xl text-lg font-bold mb-4 text-o'>
                    {"Crafting Legacies, One Word at a Time"}
                </div>
                {"Step into the world of Lockes Copywriting. Learn about our journey, our passion for words, and the impact we create. Join hands with us in shaping narratives that resonate, inspire, and leave a mark. Let's write the next chapter together."}
            </div>
            <div className='m-auto mt-12 p-1'>
                <div className='w-fit p-3 px-5 my-0 hover:my-1 hover:p-2 hover:px-3 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br from-r-o to-o-y text-white'>
                    <Link href='/about'>Join Our Story</Link>
                </div>
            </div>
        </WAppear></div>
        <div className='py-8' />
        <P1 text={<div>
            {"Have questions or ready to collaborate? Reach out to us today. Whether you're envisioning a project or simply want to discuss possibilities, we're here to listen and bring your ideas to life. Start the conversation with Lockes Copywriting."}
            <div className='mt-2 font-bold underline decoration-2 decoration-o'><Link href='/contact#contact-us'>Reach out about anything!</Link></div>
            </div>} slogan="From Ideas to Conversations: Let's Begin" img={`/img/${7+I}.jpg`} title="Let's Connect" />
        <Footer />
    </>;
}