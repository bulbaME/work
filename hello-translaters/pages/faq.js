import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='w-full bg-2'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-4xl text-2xl font-extrabold text-center'>
                    {"Frequently Asked Questions"}
                </div>
                <div className='sm:text-2xl text-xl font-bold text-center text-p mt-4'>
                    {"Unlocking Clarity, One Question at a Time"}
                </div>
            </WAppear></div>
        </div>
        <WFaqSmall />
        <WFaq />
        <Footer />
    </>;
}