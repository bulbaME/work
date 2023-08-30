import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WServices, WTestimonials } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={4} />
        <div className='bg-2 pt-12'>
            <div className='max-w-7xl m-auto py-12'>
                {/* <WAppear> */}
                        <div className='relative w-fit m-auto sm:text-5xl text-3xl font-bold'>
                            {"Our Services"}
                            <div className='absolute bottom-0 w-full h-2 bg-b-m' />
                        </div>
                {/* </WAppear> */}
            </div>
        </div>
        <WServices />
        <WTestimonials />
        <Footer />
    </>;
}