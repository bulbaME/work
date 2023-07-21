import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function X() {
    return <>
        <Header page={0} />
        <div className='text-black text-5xl font-bold p-8 text-center'>
            Policy
        </div>
        <iframe className='w-full h-c-1' src='/html/POLICY.html' />
        <Footer />
    </>;
}