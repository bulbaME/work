import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function X() {
    return <>
        <Header />
        <div className='text-4xl font-bold text-center py-8 text-white'>Policy</div>
        <iframe src='/html/POLICY.html' className='w-full bg-white h-c-1' />
        <Footer />
    </>
}