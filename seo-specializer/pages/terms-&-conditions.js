import Header from "@/modules/header";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-white text-3xl font-black py-6'>
            Terms & Conditions
        </div>
        <iframe src='/html/Terms & Conditions.html' className='bg-white w-full h-c-1 max-w-7xl m-auto px-6' />
        <Footer />
    </>;
}