'use client';

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { contacts, services } from "@/public/json/data.json";

import ContactCard from "@/modules/contact_card";
import Footer from "@/modules/footer";
import Header from "@/modules/header";

import send_form from "@/modules/send_form";
import { Paragraph } from "@/modules/widgets";

export default function Main() {
    const [name, Setname] = useState('');
    const [mail, Setmail] = useState('');
    const [text, Settext] = useState('');
    const [product, Setproduct] = useState('Select service');

    return <>
        <Header page={2} />
        <div className='max-w-7xl m-auto background-2 py-16 p-4'>
            <div className='w-fit m-auto text-4xl text-center sm:text-6xl font-bold text-white'>
                {"Let's Create Remarkable Copy"}
            </div>
            <div className='font-bold w-fit m-auto text-xl sm:text-4xl my-4 text-y-d text-center'>
                {"Unleash Your Ideas, Contact Us Today"}
            </div>
        </div>
        <Paragraph title="Let's Bring Your Vision to Life" slogan='Turning Ideas into Impactful Words' text="We are eager to hear from you and excited to bring your vision to life through impactful words. Whether you have a project in mind, need a quote, or simply want to learn more about our copywriting services, we're here to assist you. Our team is dedicated to understanding your unique needs and collaborating closely with you to deliver exceptional results. Don't hesitate to reach out and let's start creating powerful copy that elevates your brand and captivates your audience." />
        <div className='max-w-4xl m-auto p-4'>
            <div className='flex flex-wrap'>
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
            } title='Phone Number' descr={contacts.phone} />
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            } title='E-mail' descr={contacts.mail} />
            </div>
            <div className='m-auto p-5 w-full'>
                <div className='rounded-3xl h-fit overflow-hidden drop-shadow-lg border-y border-[0.1rem]'>
                    <iframe className='w-full h-[23rem]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12493.884054920807!2d-100.9127336!3d38.4767721!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x870a6b522b9da18f%3A0x318dfd19f0bb34b0!2sPrairie%20Storm%20Outfitting!5e0!3m2!1sen!2s!4v1689665410965!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <ContactCard img={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                } title='Adress' descr={contacts.adress} />
        </div>
        <div className='max-w-4xl m-auto p-4 mt-10 mb-24'>
            <a id='contact-us' className='w-full m-auto'>
            <form onSubmit={() => send_form(name, mail, product, text)} className='w-full p-1 bg-white sm:p-8 bg-p-m rounded-3xl sm:rounded-[5rem] drop-shadow-lg text-black h-fit'>
                <div className='p-6 font-semibold text-4xl'>Contact form</div>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-xl'>
                        Your name: 
                    </div>
                    <input required className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.target.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 text-xl'>
                        Your E-mail:
                    </div>
                    <input required type='email' className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-full p-2 px-4 mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.target.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 w-1/3 text-xl'>
                        Describe your needs:
                    </div>
                    <textarea className='bg-stone-100 select-none appearance-none outline-none text-p-d rounded-2xl sm:rounded-3xl p-2 px-4 h-[6rem] mr-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.target.value)} />
                </label>
                <Listbox value={product} onChange={Setproduct} >
                    <Listbox.Button className='cursor-pointer m-6 mt-2 p-2 px-4 font-semibold text-lg bg-y-l pb-1 text-p-d rounded-full hover:drop-shadow-lg hover:mt-1 hover:mb-7 hover:bg-v-l duration-300'>{product}</Listbox.Button>
                    <Listbox.Options className='absolute m-6 p-3 bg-white -mt-5 duration-300 rounded-3xl text-p-d drop-shadow-lg'>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-y duration-300 rounded-t-2xl' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-y duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:underline decoration-y duration-300 rounded-b-2xl' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-3/4 max-w-[15rem] m-auto'>
                    <input type='submit' className='cursor-pointer w-full bg-y-l text-p-d hover:drop-shadow-lg m-4 mx-auto hover:mb-6 hover:mt-2 p-2 pb-1 font-bold text-xl rounded-full text-centerrounded-full duration-300' />
                </div>
            </form>
            </a>
        </div>
        <Footer page={2} />
    </>;
}