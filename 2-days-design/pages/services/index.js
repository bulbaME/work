import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFeature, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'>
                <WAppear>
                    <div className='sm:text-5xl text-3xl font-extrabold'>
                        {"Our Services"}
                    </div>
                    <div className='sm:text-3xl text-xl'>
                        {"Empowering Your Brand with Design Solutions that Speak Volumes"}
                    </div>
                </WAppear>
            </div>
        </div>
        <WServices />
        <WFeature />
        <Footer />
    </>;
}