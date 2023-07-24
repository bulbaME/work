'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { contacts, services } from "@/public/json/data.json";

import ContactCard from "@/modules/contact_card";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

import send_form from "@/modules/send_form";

export default function X() {
    const [name, Setname] = useState('');
    const [mail, Setmail] = useState('');
    const [text, Settext] = useState('');
    const [product, Setproduct] = useState('Select service');


    return <>
        <Header page={2} />
        <div className='max-w-6xl m-auto p-4 mt-10 flex-wrap'>
            <div className='text-y-d font-semibold text-xl'>{"Get in Touch - Let's Connect!"}</div>
            <div className='text-black font-bold text-3xl'>{"Contact Us for All Your Language Needs"}</div>
            <div className='my-8 text-xl font-semibold'>{"We're excited to hear from you! Whether you have questions about our language services, need a personalized quote, or simply want to explore how Translation International can help your global communication, we're here to assist you. Our friendly team is ready to provide prompt and reliable support. Reach out today and let's connect the world through effective communication!"}</div>
        </div>
        <div className='max-w-6xl m-auto flex flex-wrap'>
            <div className='sm:w-1/3 w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                } title='Phone Number' descr={contacts.phone} />
            </div>
            <div className='sm:w-1/3 w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                } title='E-mail' descr={contacts.mail} />
            </div>
            <div className='sm:w-1/3 w-full'>
                <ContactCard img={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                } title='Adress' descr={contacts.adress} />
            </div>
            <div className='m-auto p-4 w-full'>
            </div>
        </div>
        <div className='max-w-6xl p-4 mt-10 mb-24 m-auto'>
            <div className='flex flex-wrap-reverse bg-y-l'>
                <a id='contact-us' className='sm:w-1/2'>
                <form onSubmit={() => send_form(name, mail, product, text)} className='text-black h-fit p-4'>
                    <div className='p-6 font-bold text-3xl text-black'>Contact form</div>
                    <label className='m-4 flex'>
                        <div className='m-2 mr-0 text-xl font-semibold'>
                            Your name
                        </div>
                        <input required className='bg-y-m select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.value)} />
                    </label>
                    <label className='m-4 flex'>
                        <div className='m-2 mr-0 text-lg sm:text-xl font-semibold'>
                            Your E-mail
                        </div>
                        <input required type='email' className='bg-y-m select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.value)} />
                    </label>
                    <label className='m-4 flex'>
                        <div className='m-2 mr-0 w-1/3 text-xl font-semibold'>
                            Describe your needs
                        </div>
                        <textarea className='bg-y-m select-none appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.value)} />
                    </label>
                    <Listbox value={product} onChange={Setproduct} >
                        <Listbox.Button className='cursor-pointer m-6 mt-2 font-bold text-xl bg-v1-l text-black hover:underline decoration-b-l duration-300'>{product}</Listbox.Button>
                        <Listbox.Options className='absolute m-6 p-3  -mt-6 duration-300 bg-amber-50 drop-shadow-xl text-lg sm:text-xl'>
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
                        <input type='submit' className='cursor-pointer w-fit text-black hover:underline decoration-b-l p-2 m-auto text-3xl font-bold duration-300' />
                    </div>
                </form>
                </a>
                <div className='sm:w-1/2 p-4 w-full'>
                    <iframe className='w-full h-full min-h-[15rem]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3020.2271851375313!2d-96.7019047!3d40.8010012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796be55cd1a2485%3A0xfe835eced7007c1d!2s1321%20D%20St%2C%20Lincoln%2C%20NE%2068502%2C%20USA!5e0!3m2!1sen!2s!4v1690189678563!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <Footer />
    </>;
}