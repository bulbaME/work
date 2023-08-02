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

    const [map, setMap] = useState(false);

    return <>
        <Header page={2} />
        <div className='bg1 w-full'>
            <div className='max-w-7xl m-auto p-6 text-center py-12'>
                <div className='sm:text-3xl text-xl text-white font-extrabold'>
                    {"Contact Us - Let's Connect for SEO Excellence!"}
                </div>
                <div className='sm:text-xl text-white opacity-70 font-bold mt-4'>
                    {"Reach out to SeoMeteor and unlock the power of strategic SEO solutions!"}
                </div>
            </div>
        </div>
        <div className='m-auto max-w-5xl p-2 flex flex-wrap my-12'>
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            } title='Phone Number' text={contacts.phone} />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            } title='E-mail' text={contacts.mail} />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
            } title='Adress' text={contacts.adress} />
        </div>
        <div className='p-6 max-w-5xl m-auto my-12'>
            <div className='mb-4 flex'>
                <div className={'duration-300 p-3 rounded-2xl mr-4 cursor-pointer border-[1px] ' + (map ? '':'bg-white text-b text-o-m border-neutral-300 drop-shadow-lg')} onClick={() => setMap(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                </div>
                <div className={'duration-300 p-3 rounded-2xl mr-4 cursor-pointer border-[1px] ' + (!map ? '':'bg-white text-b text-o-m border-neutral-300 drop-shadow-lg')} onClick={() => setMap(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                </div>
            </div>
            <iframe className={'w-full hover:drop-shadow-lg h-[30rem] duration-300 rounded-2xl border-[1px] border-neutral-300 ' + (map ? '':'hidden')} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.5535780841406!2d-118.44923738853248!3d34.310918872948236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c28fd175d3f3c7%3A0xfe8ad2679dfabbcf!2s14375%20Polk%20St%2C%20Sylmar%2C%20CA%2091342%2C%20USA!5e0!3m2!1sen!2s!4v1690793179558!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <a id='contact-us' className='w-full'>
            <form onSubmit={() => send_form(name, mail, product, text)} className={'text-b-m bg-white rounded-2xl border-[1px] border-neutral-300 duration-300 hover:drop-shadow-lg p-4 ' + (map ? 'hidden':'')}>
                <div className='my-8 text-center font-extrabold sm:text-3xl text-xl text-b'>Reach out to us</div>
                <label className='m-4 sm:flex'>
                    <div className='p-2 mr-0 sm:text-xl font-bold'>
                        Your name
                    </div>
                    <input required placeholder='John Doe' className='rounded-2xl border-[1px] duration-300 focus:drop-shadow-lg border-neutral-300 select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-2/3 w-full m-auto' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className='m-4 sm:flex'>
                    <div className='p-2 mr-0 sm:text-xl font-bold'>
                        Your E-mail
                    </div>
                    <input required placeholder='johndoe@example.com' type='email' className='rounded-2xl border-[1px] duration-300 focus:drop-shadow-lg border-neutral-300 select-none appearance-none outline-none text-p-d p-2 px-4 mr-2 sm:w-2/3 w-full m-auto' value={mail} onChange={(e) => setMail(e.target.value)} />
                </label>
                <label className='m-4 sm:flex'>
                    <div className='p-2 mr-0 sm:text-xl font-bold'>
                        Describe your needs
                    </div>
                    <textarea placeholder='Type here...' className='select-none rounded-2xl border-[1px] duration-300 focus:drop-shadow-lg border-neutral-300 appearance-none outline-none text-p-d p-2 px-4 h-[6rem] mr-2 sm:w-2/3 w-full m-auto resize-none' value={text} onChange={(e) => setText(e.target.value)} />
                </label>
                <Listbox value={product} onChange={setProduct} >
                    <Listbox.Button className='duration-300'>{<div className='cursor-pointer sm:ml-3 ml-0 font-bold text-xl bg-white hover:drop-shadow-lg rounded-2xl border-[1px] border-neutral-300 p-3 py-2 duration-300'>{product}</div>}</Listbox.Button>
                    <Listbox.Options className='absolute z-50 m-3 duration-300 mt-2 bg-white drop-shadow-lg sm:text-lg  rounded-2xl border-[1px] border-neutral-300'>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={4} value={services[3].title} >
                            {services[3].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={5} value={services[4].title} >
                            {services[4].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer font-semibold p-3 text-o-m hover:opacity-100 opacity-70 duration-300' key={6} value={services[5].title} >
                            {services[5].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-fit m-auto'>
                    <input type='submit' className='rounded-full cursor-pointer w-fit text-white bg-b p-3 px-4 my-4 sm:text-2xl text-lg font-extrabold duration-300 hover:drop-shadow-lg hover:mb-6 hover:mt-2' />
                </div>
            </form>
            </a>
        </div>
        <Footer />
    </>;
}