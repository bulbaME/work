import Header from "@/modules/header";
import Footer from "@/modules/footer";
import { WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-p-b text-3xl font-black py-6'>
            Policy
        </div>
        <WAppear><iframe src='/html/POLICY.html' className='w-full h-c-1 max-w-7xl m-auto px-6' /></WAppear>
        <Footer />
    </>;
}