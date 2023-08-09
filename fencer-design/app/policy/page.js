import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header />
        <div className='w-fit m-auto text-4xl font-semibold my-12'>Policy</div>
        <iframe className='w-full h-screen my-12' src='/html/POLICY.html' />
        <Footer />
    </>;
}