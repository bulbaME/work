import ContactCard from "@/modules/contact_card";
import { contacts } from "@/modules/data";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import { WAppear, WForm } from "@/modules/widgets";

export default function X() {
    return <>
        <Header page={3} />
        <div className='bg-1 w-full h-[10rem] -mb-[4rem]' />
        <div className='max-w-7xl m-auto'><WAppear>
            <div className='sm:text-5xl text-3xl font-bold text-white text-center underline decoration-8 decoration-m-m'>
                Get in Touch.
            </div>
        </WAppear></div>
        <div className='max-w-7xl m-auto py-4 -mb-12'><WAppear className='flex flex-wrap'>
            <div className='lg:w-1/2'>
                <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-10 sm:h-10 h-6 w-6">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    } title='Phone Number' text={contacts.phone} />
                </div>
                <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-10 sm:h-10 h-6 w-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    } title='E-mail' text={contacts.mail} />
                </div>
                <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-10 sm:h-10 h-6 w-6">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    } title='Adress' text={contacts.adress} />
                </div>
            </div>
            <div className='lg:w-1/2 lg:pl-4 lg:pt-0 pt-4 w-full'>
                <iframe className='w-full rounded-lg lg:h-full h-[24rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.0000966714215!2d24.79017251141986!3d42.15028474820929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd144b43311eb%3A0x71bfb9ca7a7472a3!2sul.%20%22Zlatorog%22%2022%2C%2023%2C%204006%20Izgrev%2C%20Plovdiv%2C%20Bulgaria!5e0!3m2!1sen!2s!4v1692282513603!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </WAppear></div>
        <WForm />
        <Footer />
    </>;
}