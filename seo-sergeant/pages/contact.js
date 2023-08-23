import ContactCard from "@/modules/contact_card";
import { contacts } from "@/modules/data";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WFaqSmall, WForm, WFormD, WQuote, WServicesSmallD } from "@/modules/widgets";
import Link from "next/link";

export default function X() {
    return <>
        <Header page={2} />
        <div className='bg-1'>
            <div className='max-w-7xl m-auto'><WAppear>
                <div className='sm:text-5xl text-3xl font-extrabold text-white header-title'>
                    {"Reach Out to Us"}
                </div>
                <div className='sm:text-3xl text-xl text-white mt-4'>
                    {"Navigating Digital Success Together"}
                </div>
            </WAppear></div>
        </div>
        <div className='max-w-7xl m-auto'><WAppear className='flex flex-wrap'>
            <div className='sm:w-auto m-auto lg:ml-0 w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                } title='Phone Number' text={contacts.phone} />
            </div>
            <div className='sm:w-auto m-auto w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                } title='E-mail' text={contacts.mail} />
            </div>
            <div className='sm:w-auto m-auto lg:mr-0 w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                } title='Adress' text={contacts.adress} />
            </div>
        </WAppear></div>
        <WFormD />
        <WServicesSmallD />
        <WQuote />
        <div className='max-w-4xl m-auto'><WAppear className=''>
            <div className='sm:text-3xl text-xl font-extrabold mb-4'>
                Have any questions?
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full h-[20rem] relative overflow-y-scroll overflow-x-hidden bg-white rounded-md drop-shadow-lg'>
                    <div className='absolute -ml-6 -mr-6'>
                        <WFaqSmall />
                    </div>
                </div>
            </div>
            <div className='sm:text-xl text-lg underline decoration-4 font-bold decoration-b-m my-6 flex'>
                <Link href='/faq'>Visit FAQ page</Link>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </WAppear></div>
        <Footer />
    </>;
}