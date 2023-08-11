import Header from "@/modules/header";
import Footer from "@/modules/footer";
import { WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-white text-3xl font-black py-6'>
            Policy
        </div>
        <WAppear><iframe src='/html/POLICY.html' className='w-full bg-white h-c-1 max-w-7xl m-auto px-6 rounded-2xl' /></WAppear>
        <Footer />
    </>;
}