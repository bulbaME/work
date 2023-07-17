import Header from "../_modules/header";
import Footer from "../_modules/footer";

export default function Main() {
    return <>
        <Header page={0}/>
        <div className='font-extrabold text-5xl m-auto w-fit my-5'>Policy</div>
        <iframe className='w-full h-screen' src='/html/POLICY.html' />
        <Footer />
    </>;
}