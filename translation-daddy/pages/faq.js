import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='max-w-7xl m-auto p-6 py-10 text-center'>
            <div className='sm:text-3xl text-xl font-bold text-b-m'>
                {"Frequently Asked Questions"}
            </div>
            <div className='sm:text-xl text-lg text-b-d font-bold my-4'>
                {"Empowering Clarity, Easing Communication - Your Queries Answered!"}
            </div>
        </div>
        <WFaqSmall />
        <WFaq />
        <Footer />
    </>;
}