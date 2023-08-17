import Header from "@/modules/header";
import Footer from "@/modules/footer";
import { WAppear } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-p text-3xl text-white font-light py-6'>
            Terms & Conditions
        </div>
        <WAppear><iframe src='/html/Terms & Conditions.html' className='w-full bg-white h-c-1 max-w-7xl m-auto px-6' /></WAppear>
        <Footer />
    </>;
}