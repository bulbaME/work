import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='py-16 m-auto text-center bg-2 pb-[16rem] -mb-[12rem]'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                Frequently Asked Questions
            </div>
            <div className='sm:text-3xl text-xl font-bold text-o-d my-4 p-4'>
                {"Your Copywriting Queries, Answered"}
            </div>
        </div>
        <WFaqSmall />
        <WFaq />
        <Footer />
    </>;
}