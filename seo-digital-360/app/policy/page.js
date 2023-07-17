import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header page={0}/>
        <div className='font-extrabold text-5xl m-auto w-fit text-white my-5'>Policy</div>
        <iframe className='w-full h-screen bg-white' src='/html/POLICY.html' />
        <Footer />
    </>;
}