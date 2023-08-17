import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { Cta, WFeature, WServices } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='py-16 m-auto text-center bg-2 pb-[16rem] -mb-[12rem]'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
                Our Expertise
            </div>
            <div className='sm:text-3xl text-xl font-bold text-o-d my-4 p-4'>
                {"Empowering Your Success with Compelling Copy"}
            </div>
        </div>
        <WServices />
        <WFeature />
        <Cta route='/contact' cta='Get Started Today' text="Begin your journey to powerful communication by clicking here to get started with our expert copywriting services." />
        <Footer />
    </>;
}