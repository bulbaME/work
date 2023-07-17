import Footer from "../_modules/footer";
import Header from "../_modules/header";

export default function Main() {
    return <>
        <Header page={0} />
        <div className='my-3 text-3xl font-bold w-fit m-auto'>Policy</div>
        <iframe className='w-full h-screen' src='/html/POLICY.html' />
        <Footer />
    </>;
}