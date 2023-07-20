import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function X() {
    return <>
        <Header />
        <div className='text-4xl font-bold text-center py-8 text-white'>Terms & Conditions</div>
        <iframe src='/html/Terms & Conditions.html' className='w-full bg-white h-c-1' />
        <Footer />
    </>
}