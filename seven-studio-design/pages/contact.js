import ContactCard from "@/modules/contact_card";
import { contacts } from "@/modules/data";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WForm, WServicesSmall } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={2} />
        <div className='bg-2 w-full'>
            <div className='max-w-7xl m-auto p-14 py-8'>
                <div className='sm:text-center text-grad sm:text-4xl text-2xl font-light text-center'>
                    <span className='font-bold'>R</span>each <span className='font-bold'>O</span>ut to <span className='font-bold'>U</span>s
                </div>
                <div className='text-center sm:text-2xl text-xl mt-4 font-bold text-p'>
                    {"Let's Connect and Create"}
                </div>
            </div>
        </div>
        <div className='max-w-7xl m-auto -mb-12'><WAppear className='md:flex lg:flex-nowrap flex-wrap'>
            <div className='m-auto whitespace-nowrap'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                } title='Phone Number' text={contacts.phone} />
            </div>
            <div className='m-auto whitespace-nowrap'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>
                } title='E-mail' text={contacts.mail} />
            </div>
            <div className='m-auto'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                } title='Adress' text={contacts.adress} />
            </div>
        </WAppear></div>
        <WForm />
        <WServicesSmall />
        <Footer />
    </>;
}