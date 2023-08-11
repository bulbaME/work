import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WForm, WServices, WServicesSmall } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-gradient-to-br from-r to-y bg-opacity-0'><WAppear>
            <div className='sm:text-4xl text-center text-2xl font-bold text-white'>
                {"Our Offerings"}
            </div>
            <div className='sm:text-2xl text-center text-lg font-bold text-white mt-4'>
                {"Elevate Your Message with Our Expertise"}
            </div>
        </WAppear></div>
        <WServices />
        <div className='max-w-7xl m-auto sm:my-12'><WAppear>
            <div className='my-24'>
                <div className='sm:text-lg font-bold text-o'>
                    {"Let's Begin"}
                </div>
                <div className='sm:text-4xl text-2xl font-bold text-white'>
                    {"Your Story Starts Here"}
                </div>
                <div className='sm:text-lg font text-white mt-8'>
                    {"Your brand's story is waiting to be told, and we're here to help you tell it in a way that leaves a mark. Whether you're a startup seeking to establish a unique identity or an established business looking to reinvent your online presence, Lockes Copywriting is your partner in crafting narratives that matter. Reach out to us today, and let's embark on a journey where words transcend boundaries, ideas turn into impact, and possibilities are woven into every sentence. Your story starts here – let's write it together."}
                </div>
                <div className='p-1 mt-8'>
                    <div className='w-fit p-3 px-5 my-0 hover:p-2 hover:px-3 hover:my-1 hover:drop-shadow-lg duration-300 ease-in-out m-auto sm:text-xl font-bold rounded-tl-2xl rounded-br-2xl transition-all bg-gradient-to-br from-r-o to-o-y text-white'>
                        <Link href='/contact'>Contact us</Link>
                    </div>
                </div>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}