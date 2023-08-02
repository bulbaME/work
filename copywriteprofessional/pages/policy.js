import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function page() {
    return <>
        <Header />
        <div className='text-center p-4 text-3xl font-bold'>
            Poilcy
        </div>
        <iframe className='w-full h-c-1' src='/html/POLICY.html' />
        <Footer />
    </>;
}