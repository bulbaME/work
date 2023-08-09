import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={5} />
        <div className='w-full bg-2'>
            <WAppear>
                <div className='text-center font-extrabold sm:text-5xl text-3xl text-p mb-8'>
                    FAQ
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Your Questions, Our Answers"}
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Navigating the Translation Journey"}
                </div>
            </WAppear>
        </div>
        <WFaqSmall />
        <WFaq />
        <Footer />
    </>;
}