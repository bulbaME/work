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


    return <>
        <Header page={2} />
        <div className='w-full bg-h bg-3 py-[6rem]'>
            <div className='max-w-7xl m-auto w-full p-4'>
                <div className='text-center text-r-l font-bold sm:text-3xl text-xl my-4'>
                    {"Connecting with You is Our Priority!"}
                </div>
                <div className='text-center text-white font-bold sm:text-5xl text-3xl'>
                    Get in Touch with Us
                </div>
            </div>
        </div>
        <div className='max-w-6xl m-auto flex flex-wrap bg-4 bg-b py-16'>
            <div className='sm:w-auto m-auto w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                } title='Phone Number' descr={contacts.phone} />
            </div>
            <div className='sm:w-2/5 m-auto w-full sm:min-w-[28rem]'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                } title='E-mail' descr={contacts.mail} />
            </div>
            <div className='sm:w-auto m-auto w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                } title='Adress' descr={contacts.adress} />
            </div>
            <div className='m-auto p-8 w-full'>
                <div className='h-fit overflow-hidden drop-shadow-xl'>
                </div>
            </div>
            <div className='max-w-7xl p-4 my-8 w-full'>
                <div className='flex flex-wrap-reverse rounded-[2rem] bg-2 w-full'>
                    <a id='contact-us' className='sm:w-1/2'>
                    <form onSubmit={() => send_form(name, mail, product, text)} className='text-white h-fit p-4 rounded-[2rem] border[0.13rem]'>
                        <div className='text-center pb-4 font-bold sm:text-5xl text-3xl'>Reach us</div>
                        <label className='m-4 sm:flex'>
                            <div className='m-2 mr-0 sm:text-xl font-semibold'>
                                Your name
                            </div>
                            <input required className='bg-white text-black rounded-2xl select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label className='m-4 sm:flex'>
                            <div className='m-2 mr-0 sm:text-xl font-semibold'>
                                Your E-mail
                            </div>
                            <input required type='email' className='bg-white text-black rounded-2xl select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                        </label>
                        <label className='m-4 sm:flex'>
                            <div className='m-2 mr-0 sm:w-1/3 sm:text-xl font-semibold'>
                                Describe your needs
                            </div>
                            <textarea className='bg-white text-black select-none rounded-2xl appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                        </label>
                        <Listbox value={product} onChange={setProduct} >
                            <Listbox.Button className='cursor-pointer m-6 sm:ml-3 ml-0 font-bold text-xl bg-v1-l text-white hover:bg-white hover:text-r-1 hover:drop-shadow-lg p-3 rounded-full duration-300'>{product}</Listbox.Button>
                            <Listbox.Options className='absolute m-3 p-3 -mt-5 duration-300 bg-white drop-shadow-xl text-r-1 rounded-3xl text-lg sm:text-xl'>
                                <Listbox.Option className='cursor-pointer font-semibold p-2 hover:opacity-100 opacity-70 duration-300 rounded-t-2xl' key={1} value={services[0].title} >
                                    {services[0].title}
                                </Listbox.Option>
                                <Listbox.Option className='cursor-pointer font-semibold p-2 hover:opacity-100 opacity-70 duration-300' key={2} value={services[1].title} >
                                    {services[1].title}
                                </Listbox.Option>
                                <Listbox.Option className='cursor-pointer font-semibold p-2 hover:opacity-100 opacity-70 duration-300 rounded-b-2xl' key={3} value={services[2].title} >
                                    {services[2].title}
                                </Listbox.Option>
                            </Listbox.Options>
                        </Listbox>
                        <div className='w-3/4 max-w-[15rem] m-auto flex'>
                            <input type='submit' className='cursor-pointer w-fit text-white p-3 px-4 hover:bg-white rounded-full hover:text-r-1 m-auto text-3xl font-bold duration-300' />
                        </div>
                    </form>
                    </a>
                    <div className='sm:w-1/2 p-4 w-full'>
                        <iframe className='w-full sm:h-full h-[16rem] rounded-[1.5rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.0590119991834!2d-112.07840072422847!3d33.47381434805135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1243149fbebb%3A0x650c12b61e2db0d3!2sWillo%2C%20Phoenix%2C%20AZ%2085003%2C%20USA!5e0!3m2!1sen!2s!4v1690286027741!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}