import Header from "../_modules/header";
import Footer from "../_modules/footer";

export default function Main() {
    return <>
        <Header />
        <div className='w-fit m-auto p-4 text-4xl font-bold my-5 text-b-d'>Policy</div>
        <iframe src='/html/POLICY.html' className='w-full h-screen' />
        <Footer />
    </>;
}