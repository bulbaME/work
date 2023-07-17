import Footer from "@/app/_modules/footer";
import Header from "@/app/_modules/header";

export default function Main() {
    return <>
        <Header page={0} />
        <div className='text-p-d w-fit m-auto text-5xl font-bold p-8'>Policy</div>
        <iframe className='w-full h-screen' src='/html/POLICY.html' />
        <Footer />
    </>;
}