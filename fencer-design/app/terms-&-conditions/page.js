import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header />
        <div className='w-fit m-auto text-4xl font-semibold my-12'>Terms & Conditions</div>
        <iframe className='w-full h-screen my-12' src='/html/Terms & Conditions.html' />
        <Footer />
    </>;
}