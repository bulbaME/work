import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header />
        <iframe className='w-full h-screen' src='/html/POLICY.html' />
        <Footer />
    </>;
}