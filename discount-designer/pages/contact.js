'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { contacts, services } from "@/public/json/data.json";

import ContactCard from "@/modules/contact_card";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

import send_form from "@/modules/send_form";

export default function x() {
    const [name, Setname] = useState('');
    const [mail, Setmail] = useState('');
    const [text, Settext] = useState('');
    const [product, Setproduct] = useState('Select service');

    return <>
        <Header page={2} />
        <div className='background-2 m-auto max-w-7xl'>
            <div className='max-w-7xl m-auto background-2 p-4 sm:p-[4.5rem] text-white'>
                <div className='text-lg sm:text-3xl font-bold'>{"Connecting Dreams, Empowering Growth"}</div>
                <div className='text-3xl sm:text-6xl font-bold mt-4 mb-12'>{"Reach out to us"}</div>
                <div className='text-xl sm:text-4xl font-medium'>{"At DiscountDesigner, we value meaningful connections. Our contact page is your gateway to explore limitless possibilities for your brand. Whether you're starting a new project or seeking design expertise, our team is here to listen, collaborate, and empower your brand's growth. Reach out to us today, and let's embark on a creative journey together. Welcome to DiscountDesigner."}</div>
            </div>
        </div>
        <div className='max-w-5xl m-auto'>
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            } title='Phone Number' descr={contacts.phone} />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            } title='E-mail' descr={contacts.mail} />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            } title='Adress' descr={contacts.adress} />
            <div className='m-auto p-5 w-full'>
                <div className='rounded-3xl h-fit overflow-hidden drop-shadow-lg border-v1-m border-8'>
                    <iframe className='w-full h-[25rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5745.519990356069!2d-92.48089135000001!3d43.943640499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f758428fe06443%3A0x982b3548561115d8!2sSouthern%20Hills%2C%20Rochester%2C%20MN%2055902%2C%20USA!5e0!3m2!1sen!2s!4v1689839187144!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div className='max-w-5xl p-5 mt-10 mb-24 m-auto'>
            <a id='contact-us' className='w-full m-auto'>
            <form onSubmit={() => send_form(name, mail, product, text)} className='w-full p-1 bg-white sm:p-8 bg-p-m rounded-3xl drop-shadow-lg border-8 border-v1-l text-black h-fit'>
                <div className='p-6 font-semibold text-4xl text-v1-l'>Contact form</div>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-lg sm:text-2xl font-medium'>
                        Your name: 
                    </div>
                    <input required className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-lg sm:text-2xl font-medium'>
                        Your E-mail:
                    </div>
                    <input required type='email' className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 w-1/3 text-lg sm:text-2xl font-medium'>
                        Describe your needs:
                    </div>
                    <textarea className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-2xl sm:rounded-3xl p-2 px-4 h-[6rem] mr-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.value)} />
                </label>
                <Listbox value={product} onChange={Setproduct} >
                    <Listbox.Button className='cursor-pointer m-6 mt-2 p-2 px-4 font-semibold text-lg sm:text-2xl bg-v1-l text-white rounded-full hover:drop-shadow-xl hover:mt-1 hover:mb-7 hover:bg-v-l duration-300'>{product}</Listbox.Button>
                    <Listbox.Options className='absolute m-6 p-3  -mt-5 duration-300 rounded-3xl bg-white drop-shadow-lg text-lg sm:text-xl'>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-v1-l duration-300 rounded-t-2xl' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-v1-l duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-v1-l duration-300 rounded-b-2xl' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-3/4 max-w-[15rem] m-auto'>
                    <input type='submit' className='cursor-pointer w-full bg-v1-l text-white hover:drop-shadow-xl m-4 mx-auto hover:mb-6 hover:mt-2 p-2 font-bold text-lg sm:text-2xl rounded-full text-centerrounded-full duration-300' />
                </div>
            </form>
            </a>
        </div>
        <Footer page={2} />
    </>;
}