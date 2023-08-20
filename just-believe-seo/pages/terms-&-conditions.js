import Header from "@/modules/header";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-b-m text-3xl font-black py-3'>
            Terms & Conditions
        </div>
        <iframe src='/html/Terms & Conditions.html' className='w-full h-c-1 max-w-7xl m-auto px-6' />
        <Footer />
    </>;
}