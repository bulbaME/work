'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { contacts, services } from "@/public/json/data.json";

import ContactCard from "@/modules/contact_card";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

import send_form from "@/modules/send_form";

export default function X() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState('Select service');

    const [map, setMap] = useState(false);

    return <>
        <Header page={4} />
        <div className='py-16 m-auto text-center bg-b-m'>
            <div className='sm:text-5xl text-3xl font-bold text-white'>
            Contact Us
            </div>
            <div className='sm:text-3xl text-xl font-bold text-b-l my-4'>
            {"Let's Connect and Communicate"}
            </div>
        </div>
        <div className='max-w-7xl m-auto flex lg:flex-nowrap flex-wrap bg-4 py-16'>
            <div className='my-auto'>
            <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-16 sm:h-16 h-12 w-12">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    } title='Phone Number' text={contacts.phone} />
                </div>
                <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-16 sm:h-16 h-12 w-12">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    } title='E-mail' text={contacts.mail} />
                </div>
                <div className='sm:w-auto m-auto w-full'>
                    <ContactCard img={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="sm:w-16 sm:h-16 h-12 w-12">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                    } title='Adress' text={contacts.adress} />
                </div>
            </div>
            <div className='lg:w-1/2 p-4 w-full h-full'>
                <div className='my-4 flex'>
                    <div className={'duration-300 p-3 rounded-lg mr-4 cursor-pointer ' + (map ? 'text-b-m':'bg-b-m text-white drop-shadow-lg')} onClick={() => setMap(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                        </svg>
                    </div>
                    <div className={'duration-300 p-3 rounded-lg mr-4 cursor-pointer ' + (!map ? 'text-b-m':'bg-b-m text-white drop-shadow-lg')} onClick={() => setMap(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                    </div>
                </div>
                <iframe className={'w-full drop-shadow-lg h-[38rem] ' + (map ? '':'hidden')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.8178367561477!2d-118.55962925366337!3d34.216089305677706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29b94517cbea7%3A0xfa828c2376f6b0fa!2s19550%20Lorne%20St%2C%20Reseda%2C%20CA%2091335%2C%20USA!5e0!3m2!1sen!2s!4v1690535139905!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <a id='contact-us' className='w-full'>
                <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white drop-shadow-lg h-fit p-8 ' + (map ? 'hidden':'')}>
                    <div className='m-4 py-4 font-bold sm:text-5xl text-3xl'>Contact form</div>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your name
                        </div>
                        <input required className='bg-stone-100 text-b-d  rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your E-mail
                        </div>
                        <input required type='email' className='bg-stone-100 text-b-d rounded-lg select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.value)} />
                    </label>
                    <label className='m-4 sm:flex'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-xl font-semibold'>
                            Describe your needs
                        </div>
                        <textarea className='bg-stone-100 text-b-d select-none rounded-lg appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.value)} />
                    </label>
                    <Listbox value={product} onChange={setProduct} >
                        <Listbox.Button className='py-6 hover:pt-4 hover:pb-8 duration-300'>{<div className='cursor-pointer sm:ml-3 ml-0 font-bold text-xl text-white bg-b-m p-3 rounded-lg hover:drop-shadow-lg duration-300'>{product}</div>}</Listbox.Button>
                        <Listbox.Options className='absolute z-50 m-3 -mt-2 duration-300 bg-b-m drop-shadow-xl sm:text-lg'>
                            <Listbox.Option className='cursor-pointer font-semibold p-3 text-white hover:opacity-100 opacity-70 duration-300' key={1} value={services[0].title} >
                                {services[0].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-3 text-white hover:opacity-100 opacity-70 duration-300' key={1} value={services[0].title} >
                                {services[1].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-3 text-white hover:opacity-100 opacity-70 duration-300' key={1} value={services[0].title} >
                                {services[2].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-3 text-white hover:opacity-100 opacity-70 duration-300' key={1} value={services[0].title} >
                                {services[3].title}
                            </Listbox.Option>
                        </Listbox.Options>
                    </Listbox>
                    <div className='w-3/4 max-w-[15rem] m-auto flex p-6 pb-0 hover:pt-4 hover:pb-2 duration-300'>
                        <input type='submit' className='cursor-pointer w-fit text-white p-3 px-4 hover:drop-shadow-lg bg-b-m rounded-lg my-2 m-auto text-3xl font-bold duration-300' />
                    </div>
                </form>
                </a>
            </div>
        </div>
        <Footer/>
    </>;
} 