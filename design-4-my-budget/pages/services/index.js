import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature, WProcess, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='relative bg-1'>
            <div className='max-w-7xl m-auto pb-[5%]'><WAppear>
                <div className='text-center sm:text-5xl text-3xl font-extrabold text-white'>
                    Our Services
                </div>
            </WAppear></div>
        </div>
        <WServices />
        <WProcess />
        <Footer />
    </>;
}