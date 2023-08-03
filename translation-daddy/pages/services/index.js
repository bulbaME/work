import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WFeatures, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='max-w-7xl m-auto p-6 py-10 text-center'>
            <div className='sm:text-3xl text-xl font-bold text-b-m'>
                {"Our Multilingual Services"}
            </div>
            <div className='sm:text-xl text-lg text-b-d font-bold my-4'>
                {"Unlocking Global Communication - Your Gateway to Multilingual Success"}
            </div>
        </div>
        <WServices />
        <div className='p-6 sm:text-3xl text-xl font-extrabold text-b-m mt-16 text-center -mb-10'>
            You Should Choose Us
        </div>
        <WFeatures />
        <Footer />
    </>;
}