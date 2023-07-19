import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function page() {
    return <>
        <Header />
        <div className='text-center p-4 text-3xl font-bold'>
            Terms & Conditions
        </div>
        <iframe className='w-full h-c-1' src='/html/Terms & Conditions.html' />
        <Footer />
    </>;
}