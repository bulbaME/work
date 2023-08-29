import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-2'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='text-center sm:text-5xl text-3xl font-black text-b-d'>
                        {"What We Offer"}
                    </div>
                </WAppear>
            </div>
        </div>
        <WServices />
        <Footer />
    </>;
}