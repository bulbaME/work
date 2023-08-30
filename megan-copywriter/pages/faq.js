import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='bg-2 pt-12'>
            <div className='max-w-7xl m-auto py-12'>
                {/* <WAppear> */}
                        <div className='relative w-fit m-auto sm:text-5xl text-3xl font-bold'>
                            <div className='absolute z-10'>{"FAQ"}</div>
                            <div className='absolute bottom-0 w-full h-2 bg-b-m' />
                            <div className=''>{"FAQ"}</div>
                        </div>
                {/* </WAppear> */}
            </div>
        </div>
        <div className='flex flex-wrap max-w-7xl m-auto'>
            <div className='md:w-2/5'>
                <div className='top-4 md:gradient-mask-t-90 sticky md:max-h-screen overflow-y-scroll noscroll'>
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