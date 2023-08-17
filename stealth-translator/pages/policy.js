import Header from "@/modules/header";
import Footer from "@/modules/footer";
import { WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-3xl font-light text-white py-6'>
            Policy
        </div>
        <WAppear><iframe src='/html/POLICY.html' className='w-full  h-c-1 max-w-7xl bg-white m-auto px-6' /></WAppear>
        <Footer />
    </>;
}