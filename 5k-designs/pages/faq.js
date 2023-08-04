import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='max-w-5xl m-auto text-center sm:p-14 p-6'>
            <div className='sm:text-4xl text-2xl font-bold'>
                {"Have Questions?"}
            </div>
            <div className='sm:text-3xl text-xl font-bold text-g-m mt-4'>
                {"We Have Answers."}
            </div>
        </div>
        <WFaqSmall />
        <WFaq />
        <Footer />
    </>;
}