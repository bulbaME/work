import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header page={0}/>
        <div className='font-extrabold text-5xl text-white m-auto w-fit my-5'>Terms & Conditions</div>
        <iframe className='w-full bg-white h-screen' src='/html/Terms & Conditions.html' />
        <Footer />
    </>;
}