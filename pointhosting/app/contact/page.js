'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { services } from "../data.json";

import ContactCard from "../_modules/contact_card";
import Footer from "../_modules/footer";
import Header from "../_modules/header";

import send_mail from "../_modules/send_mail";

export default function Main() {
    const [name, Setname] = useState('');
    const [mail, Setmail] = useState('');
    const [text, Settext] = useState('');
    const [product, Setproduct] = useState('Select service');

    return <>
        <Header page={2} />
        <div className='w-full m-auto text-4xl font-bold p-16 text-center text-white background-4 pb-[100%] sm:pb-[25%]'>
            Our contacting information 
            <div className='mt-8 text-2xl font-semibold text-b-l'>Reach us today</div>
        </div>
        <div className='max-w-4xl m-auto p-4 -mt-32'>
            <div className='flex flex-wrap'>
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            } title='Phone Number' descr='+1 (234) 45 678' />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            } title='E-mail' descr='support@pointhosting.com' />
            </div>
            <div className='w-full m-auto'>
                <div className='m-auto py-10 w-full'>
                    <div className='rounded-3xl mx-4 sm:mx-8 h-fit overflow-hidden border-b border-[0.1rem]'>
                        <iframe className='w-full h-[23rem] rounded-3xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12575.566284921913!2d-91.62640457525701!3d38.00298950910733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dbb30fae04a4a1%3A0x37c709c19d2765cb!2sHutcheson%20Ford%20Sales%2C%20Inc.!5e0!3m2!1sru!2s!4v1688654697225!5m2!1sru!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    } title='Adress' descr='308 N Outer Rd, St James, MO 65559, US' />
            </div>
        </div>
        <div className='max-w-4xl m-auto p-8 mb-24'>
            <a id='contact-us' className='w-full m-auto'>
            <form onSubmit={() => send_mail(name, mail, product, text)} className='w-full p-2 bg-white rounded-3xl border-b border-[0.1rem] text-b-d h-fit'>
                <div className='p-6 font-bold text-4xl m-auto w-fit'>Contact form</div>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-lg sm:text-xl font-semibold text-b'>
                        Your name
                    </div>
                    <input required className='bg-white font-semibold text-b text-base sm:text-lg select-none border-b border-[0.1rem] appearance-none outline-none rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-lg sm:text-xl font-semibold text-b'>
                        Your E-mail
                    </div>
                    <input required className='bg-white  text-base sm:text-lg border-b font-semibold text-b border-[0.1rem] select-none appearance-none outline-none rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 w-1/3 text-lg sm:text-xl font-semibold text-b'>
                        Describe your needs
                    </div>
                    <textarea className='bg-white border-b border-[0.1rem] text-base sm:text-lg font-medium text-b select-none appearance-none outline-none rounded-2xl sm:rounded-3xl p-2 px-4 h-[6rem] mr-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.value)} />
                </label>
                <Listbox value={product} onChange={Setproduct} >
                    <Listbox.Button className='cursor-pointer m-6 mt-2 p-2 px-4 font-semibold text-lg bg-b text-white rounded-full hover:drop-shadow-lg hover:mt-1 hover:mb-7 hover:bg-v-l duration-300'>{product}</Listbox.Button>
                    <Listbox.Options className='absolute m-6 -mt-5 bg-white duration-300 rounded-3x drop-shadow-lg font-medium'>
                        <Listbox.Option className='cursor-pointer p-4 hover:bg-b duration-300 rounded-t-3xl' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-4 hover:bg-b duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-4 hover:bg-b duration-300 rounded-b-3xl' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-3/4 max-w-[15rem] m-auto'>
                    <input type='submit' className='cursor-pointer w-full bg-b text-white text-p-d hover:drop-shadow-lg m-4 mx-auto hover:mb-6 hover:mt-2 p-2 font-bold text-xl rounded-full text-centerrounded-full duration-300' />
                </div>
            </form>
            </a>
        </div>
        <Footer page={2} />
    </>;
}