'use client';

import Header from "../_modules/header";
import Footer from "../_modules/footer";
import ContactCard from "../_modules/contact_card";
import { useState } from "react";
import { Listbox } from '@headlessui/react';

import send_mail from "../_modules/send_mail";

import { services } from "../data.json";

export default function Main() {
    const [name, Setname] = useState('');
    const [mail, Setmail] = useState('');
    const [text, Settext] = useState('');
    const [product, Setproduct] = useState('Select service');

    return <>
        <Header page={3} />
        <div className='background-4 my-6 text-5xl font-extrabold text-center text-slate-800 px-3 py-10 m-2'>
            Reach us.
        </div>
        <div className='flex flex-wrap p-10 w-full'>
            <ContactCard svg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
            } title='Phone Number' descr='+42 52242 1212' />
                <ContactCard svg={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
            } title='E-Mail' descr='support@fusioncopywriting.com' />
            <ContactCard svg={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            } title='Adress' descr='7 Rue Max Hymans, 36000 Châteauroux' />
        </div>
        <div className='w-full flex flex-wrap'>
            <form onSubmit={() => send_mail(name, mail, product, text)} className='w-96 bg-white m-auto md:mt-0 mb-10 drop-shadow-xl rounded-3xl h-fit'>
                <div className='p-6 font-semibold text-2xl'>Contact us</div>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0'>
                        Your name: 
                    </div>
                    <input required className='bg-slate-100 p-2 rounded-md mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0'>
                        Your E-mail:
                    </div>
                    <input required className='bg-slate-100 p-2 rounded-md mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 w-1/3'>
                        Describe your needs:
                    </div>
                    <textarea className='bg-slate-100 rounded-md max-h-36 mr-2 p-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.value)} />
                </label>
                <Listbox value={product} onChange={Setproduct} >
                    <Listbox.Button className='cursor-pointer m-6 mt-2 p-2 bg-slate-100 rounded-xl hover:drop-shadow-md hover:mt-1 hover:mb-7 hover:bg-cspink duration-300'>{product}</Listbox.Button>
                    <Listbox.Options className='absolute m-6 bg-slate-100 -mt-5 duration-300 rounded-xl'>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-csblue-l rounded-t-xl duration-300' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-csblue-l duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-csblue-l rounded-b-xl duration-300' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-3/4 m-auto'>
                    <input type='submit' className='cursor-pointer w-full mx-auto mb-6 mt-2 p-2 font-bold text-xl text-center bg-slate-100 rounded-full hover:drop-shadow-md hover:mt-1 hover:mb-7 hover:bg-csblue-l duration-300' />
                </div>
            </form>
            <iframe className='m-auto rounded-3xl drop-shadow-xl w-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10924.872538653668!2d1.6572891653724957!3d46.80000885914843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fba09acc311ecb%3A0xc2c6a32689746db7!2sMiddle%20School%20Beaulieu!5e0!3m2!1sru!2s!4v1688477338673!5m2!1sru!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer />
    </>;
}

