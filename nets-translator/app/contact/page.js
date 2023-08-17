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
        <div className='background-4 max-w-3xl m-auto text-center p-5 my-10 text-5xl sm:text-5xl font-semibold'> Reach to us today</div>
        <div className='max-w-3xl p-5 my-10 m-auto font-medium text-3xl'>{"Contacting us is the first step towards seamless communication across languages. Our experienced professionals are ready to listen to your needs, provide personalized solutions, and guide you through the translation process."}</div>
        <div className='flex flex-wrap max-w-5xl m-auto align-middle'>
            <ContactCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
            } title='Phone Number' descr='+33 (695) 325-343' />
            <ContactCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            } title='E-mail' descr='support@netstranslator.com' />
            <ContactCard img={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            } title='Adress' descr='14 Imp. Guston, Nantes, France, 44100' />
        </div>
        <div className='max-w-4xl m-auto flex flex-wrap-reverse my-10'>
            <form onSubmit={() => send_mail(name, mail, product, text)} className='w-96 bg-white m-auto drop-shadow-xl rounded-3xl h-fit'>
                <div className='p-6 font-semibold text-2xl underline decoration-v-l'>Contact us</div>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0'>
                        Your name: 
                    </div>
                    <input required className='bg-slate-100 p-2 rounded-md mr-2 w-3/5 m-auto' value={name} onChange={(e) => Setname(e.target.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0'>
                        Your E-mail:
                    </div>
                    <input required className='bg-slate-100 p-2 rounded-md mr-2 w-3/5 m-auto' value={mail} onChange={(e) => Setmail(e.target.value)} />
                </label>
                <label className='m-4 flex'>
                    <div className='m-2 mr-0 w-1/3'>
                        Describe your needs:
                    </div>
                    <textarea className='bg-slate-100 rounded-md max-h-36 mr-2 p-2 w-3/5 m-auto resize-none' value={text} onChange={(e) => Settext(e.target.value)} />
                </label>
                <Listbox value={product} onChange={Setproduct} >
                    <Listbox.Button className='cursor-pointer m-6 mt-2 p-2 bg-slate-100 rounded-xl hover:drop-shadow-xl hover:mt-1 hover:mb-7 hover:bg-v-l duration-300'>{product}</Listbox.Button>
                    <Listbox.Options className='absolute m-6 bg-slate-100 -mt-5 duration-300 rounded-xl'>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-v-l rounded-t-xl duration-300' key={1} value={services[0].title} >
                            {services[0].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-v-l duration-300' key={2} value={services[1].title} >
                            {services[1].title}
                        </Listbox.Option>
                        <Listbox.Option className='cursor-pointer p-2 hover:bg-v-l rounded-b-xl duration-300' key={3} value={services[2].title} >
                            {services[2].title}
                        </Listbox.Option>
                    </Listbox.Options>
                </Listbox>
                <div className='w-3/4 m-auto'>
                    <input type='submit' className='cursor-pointer w-full mx-auto mb-6 mt-2 p-2 font-bold text-xl text-center bg-slate-100 rounded-full hover:drop-shadow-md hover:mt-1 hover:mb-7 hover:bg-g-l duration-300' />
                </div>
            </form>
            <iframe className='m-auto my-10 rounded-3xl drop-shadow-xl w-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.96489906330294!2d-1.5845413418580834!3d47.22764382751301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ec40d56d43ff%3A0x99af038ebe12dd65!2s14%20Imp.%20Guston%2C%2044100%20Nantes%2C%20France!5e0!3m2!1sen!2s!4v1692258271714!5m2!1sen!2s" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer />
    </>;
}