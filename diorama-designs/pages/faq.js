import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl text-center font-bold text-white'>
                {"Frequently Asked Questions"}
                <span className='text-g-m'>.</span>
            </div>
            <div className='sm:text-2xl text-xl text-center text-g-l font-light mt-8'>
                {"Get Answers to Common Queries"}
            </div>
        </WAppear></div>
        <div className='flex flex-wrap max-w-7xl m-auto'>
            <div className='md:w-2/5'>
                <div className='top-[5.5rem] md:gradient-mask-t-90 sticky md:max-h-[90vh] overflow-y-scroll noscroll'>
                    <WFaqSmall />
                </div>
            </div>
            <div className='md:w-3/5'>
                <WFaq />
            </div>
        </div>
        <Footer />
    </>;
}