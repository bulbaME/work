import Header from "@/modules/header";
import Footer from "@/modules/footer";

export default function X() {
    return <>
        <Header page={-1} />
        <div className='text-center text-b-m text-3xl text-b-c font-bold py-5'>
            Terms & Conditions
        </div>
        <iframe src='/html/Terms & Conditions.html' className='h-c-1 max-w-7xl m-auto' />
        <Footer />
    </>;
}