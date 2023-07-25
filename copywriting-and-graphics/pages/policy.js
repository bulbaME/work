import Header from "@/modules/header";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-3xl text-white font-bold pt-28 pb-6'>
            Policy
        </div>
        <iframe src='/html/POLICY.html' className='w-full h-c-1 bg-white' />
        <Footer />
    </>;
}