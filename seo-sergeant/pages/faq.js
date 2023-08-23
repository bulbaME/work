import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { P1L, WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-white header-title'>
                    {"Answers to Your Questions"}
                </div>
                <div className='sm:text-3xl text-xl text-white mt-4'>
                    {"Navigating the SEO Landscape Confidently"}
                </div>
            </WAppear></div>
        </div>
        <div className='flex flex-wrap max-w-7xl m-auto'>
            <div className='md:w-1/2'>
                <div className='top-[6rem] sticky md:max-h-[90vh] overflow-y-scroll noscroll'>
                    <WFaqSmall />
                </div>
            </div>
            <div className='md:w-1/2'>
                <WFaq />
            </div>
        </div>
        <Footer />
    </>;
}