'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { contacts, services } from "@/public/json/data.json";

import ContactCard from "@/modules/contact_card";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

import send_form from "@/modules/send_form";
import { WServicesSmall } from "@/modules/widgets";

export default function X() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [text, setText] = useState('');
    const [product, setProduct] = useState('Select service');


    return <>
        <Header page={2} />
        <div className='w-full bg-1 py-8 p-4'>
            <div className='sm:text-4xl text-2xl text-center font-extrabold text-white'>
                {"Get in Touch - Let's Create Together"}
            </div>
            <div className='sm:text-2xl text-lg text-center text-c font-bold mt-4'>
                {"Connecting Creativity, Building Relationships, and Crafting Success"}
            </div>
        </div>
        <div className='max-w-7xl m-auto flex lg:flex-nowrap flex-wrap bg-4 py-16'>
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
        <div className='max-w-7xl p-4 my-8 w-full m-auto'>
            <div className='flex flex-wrap-reverse rounded-[2rem] bg-white drop-shadow-lg w-full'>
                <a id='contact-us' className='lg:w-1/2 w-full'>
                <form onSubmit={() => send_form(name, mail, product, text)} className='text-black h-fit p-4'>
                    <div className='text-center py-4 font-bold sm:text-5xl text-3xl'>Reach out to us</div>
                    <label className='m-4 sm:flex text-b'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your name
                        </div>
                        <input required className='bg-stone-100 rounded-2xl select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={name} onChange={(e) => setName(e.value)} />
                    </label>
                    <label className='m-4 sm:flex text-b'>
                        <div className='m-2 mr-0 sm:text-xl font-semibold'>
                            Your E-mail
                        </div>
                        <input required type='email' className='bg-stone-100 rounded-2xl select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-3/5 w-full m-auto' value={mail} onChange={(e) => setMail(e.value)} />
                    </label>
                    <label className='m-4 sm:flex text-b'>
                        <div className='m-2 mr-0 sm:w-1/3 sm:text-xl font-semibold'>
                            Describe your needs
                        </div>
                        <textarea className='bg-stone-100 select-none rounded-2xl appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-3/5 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.value)} />
                    </label>
                    <Listbox value={product} onChange={setProduct} >
                        <Listbox.Button className='py-6 hover:pt-2 hover:pb-10 duration-300'>{<div className='cursor-pointer sm:ml-3 ml-0 font-bold text-xl text-white bg-b drop-shadow-lg p-3 rounded-full duration-300'>{product}</div>}</Listbox.Button>
                        <Listbox.Options className='absolute z-50 m-3 p-3 -mt-5 duration-300 bg-white drop-shadow-xl text-r-1 rounded-3xl text-lg sm:text-xl'>
                            <Listbox.Option className='cursor-pointer font-semibold p-2 text-b hover:opacity-100 opacity-70 duration-300 rounded-t-2xl' key={1} value={services[0].title} >
                                {services[0].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-2 text-b hover:opacity-100 opacity-70 duration-300' key={2} value={services[1].title} >
                                {services[1].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-2 text-b hover:opacity-100 opacity-70 duration-300' key={3} value={services[2].title} >
                                {services[2].title}
                            </Listbox.Option>
                            <Listbox.Option className='cursor-pointer font-semibold p-2 text-b hover:opacity-100 opacity-70 duration-300 rounded-b-2xl' key={4} value={services[3].title} >
                                {services[3].title}
                            </Listbox.Option>
                        </Listbox.Options>
                    </Listbox>
                    <div className='w-3/4 max-w-[15rem] m-auto flex p-6 hover:pt-2 hover:pb-10 duration-300'>
                        <input type='submit' className='cursor-pointer w-fit text-white p-3 px-4 bg-b rounded-full drop-shadow-lg my-6 m-auto text-3xl font-bold duration-300' />
                    </div>
                </form>
                </a>
                <div className='lg:w-1/2 p-4 w-full'>
                    <iframe className='w-full drop-shadow-lg lg:h-full h-[16rem] rounded-[1.5rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.32227599957!2d-115.11907128856537!3d36.183043302130216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c33d94322a5d%3A0xa4079984b7742cb7!2s2463-2401%20E%20Theresa%20Ave%2C%20Las%20Vegas%2C%20NV%2089101%2C%20USA!5e0!3m2!1sen!2s!4v1690373931070!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <WServicesSmall />
        <Footer />
    </>;
}