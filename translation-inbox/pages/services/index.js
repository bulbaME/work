import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaq, WFaqSmall, WFeature, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='w-full bg-2'>
            <WAppear>
                <div className='text-center font-extrabold sm:text-5xl text-3xl text-p mb-8'>
                    Services
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Unlocking Communication"}
                </div>
                <div className='sm:text-xl text-lg font-bold text-p-b text-center'>
                    {"Your Words, Translated Globall"}
                </div>
            </WAppear>
        </div>
        <WServices />
        <div className='py-4' />
        <WFeature />
        <Footer />
    </>;
}