import Footer from "@/modules/footer";
import Header from "@/modules/header";

export default function X() {
    return <> 
        <Header />
        <div className='text-center text-2xl font-bold p-4'>Terms & Conditions</div>
        <iframe className='w-full h-c-1 ' src='/html/Terms & Conditions.html' />
        <Footer />
    </>;
}