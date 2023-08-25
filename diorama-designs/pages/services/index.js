import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WProcess, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl text-center font-bold text-white'>
                {"Our Design Services"}
                <span className='text-g-m'>.</span>
            </div>
            <div className='sm:text-2xl text-xl text-center text-g-l font-light mt-8'>
                {"Elevate Your Brand with Our Creative Offerings"}
            </div>
        </WAppear></div>
        <WServices />
        <WProcess />
        <Footer />
    </>;
}