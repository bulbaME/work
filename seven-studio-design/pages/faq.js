import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='bg-2 w-full'>
            <div className='max-w-7xl m-auto p-14 py-8'>
                <div className='sm:text-center text-grad sm:text-4xl text-2xl font-light text-center'>
                    <span className='font-bold'>F</span>requently <span className='font-bold'>A</span>sked <span className='font-bold'>Q</span>uestions
                </div>
                <div className='text-center sm:text-2xl text-xl mt-4 font-bold text-p'>
                    {"Clearing the Path to Understanding"}
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
            <div className='md:w-2/5 bg-white rounded-2xl drop-shadow-lg md:sticky md:max-h-[80vh] overflow-y-scroll noscroll top-[8rem] '>
                <div className='p-6 text-center sm:text-3xl text-xl font-bold'>
                    Questions
                </div>
                <div className='md:gradient-mask-t-90'>
                    <WFaqSmall />
                </div>
            </div>
            <div className='md:w-3/5'>
                <WFaq />
            </div>
        </WAppear></div>
        <Footer />
    </>;
}